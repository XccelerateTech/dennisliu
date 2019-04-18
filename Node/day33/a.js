var pg = require('pg');
var fs = require('fs');
var CsvReadableStream = require('csv-reader');

const knex = require('knex') ({
    client: 'postgresql',
    connection: {
        user: 'den',
        database: 'test19',
        password: '123456',
        host: 'localhost',
        port: 5432,
        max: 10, 
        idleTimeoutMillis: 30000
    }
});

var rows = [];

var inputStream = fs.createReadStream('transaction_record.csv', 'utf8');
 
inputStream
    .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        rows.push(row);
    })
    .on('end', async function () {
        knex.transaction(async function(trx) {

            for (let row of rows) {
                let [action, name, quantity] = row;
                if (action === 'BUY') {
                    await trx('stock')
                    .whereIn('citrus_id', function() {
                        return this.select('id')
                            .from('citrus')
                            .where('name', '=', name)
                    })
                    .increment('quantity', quantity);
                    console.log(`buy ${quantity} ${name}`);
                } else if (action === 'SELL') {
                    let result = await trx.select('quantity').from('stock')
                        .innerJoin('citrus','stock.citrus_id', 'citrus.id')
                        .where('citrus.name', name).groupBy('quantity')
                    if (result[0].quantity < quantity) {
                        throw new Error(`not enough ${name} to sell!`)
                    } else {
                        await trx('stock')
                    .whereIn('citrus_id', function() {
                        return this.select('id')
                            .from('citrus')
                            .where('name', '=', name)
                    })
                    .decrement('quantity', quantity);
                    console.log(`sell ${quantity} ${name}`);
                    }
                }
            }

        })
    })