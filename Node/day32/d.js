var pg = require('pg');
var fs = require('fs');
var CsvReadableStream = require('csv-reader');

var config = {
    user: 'den',
    database: 'test19',
    password: '123456', //whatever your password is, the default is postgres or password, try both
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var client = new pg.Client(config);

client.connect();

var rows = [];

var inputStream = fs.createReadStream('transaction_record.csv', 'utf8');
 
inputStream
    .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        rows.push(row);
    })
    .on('end', async function () {
        await client.query('BEGIN');
        try {
            for (let row of rows) {
               let [action, name, quantity] = row;
                if (action === 'BUY') {
                    await client.query(`UPDATE stock SET quantity = quantity + $1 
                        FROM citrus 
                        WHERE stock.citrus_id = citrus.id AND name = $2`, [quantity, name]);
                    console.log(`buy ${quantity} ${name}`);
                } else if (action === 'SELL') {
                    let result = await client.query(`SELECT quantity From stock 
                        INNER JOIN citrus ON stock.citrus_id = citrus.id 
                        WHERE citrus.name = $1`, [name]);
                    if (result.rows[0].quantity < quantity) {
                        throw new Error(`not enough ${name} to sell!`);
                    }  else {
                        await client.query(`UPDATE stock SET quantity = quantity - $1 
                            FROM citrus 
                            WHERE stock.citrus_id = citrus.id AND name = $2`, [quantity, name]);
                        console.log(`sell ${quantity} ${name}`);
                    };
                };
            };
            await client.query('COMMIT');
        } catch (err) {
            await client.query('ROLLBACK')
            console.log(err);
        };
    });
