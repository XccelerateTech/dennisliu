/AAAAAAA/

test19=# CREATE TABLE stock (
test19(# id SERIAL primary key,
test19(# name VARCHAR(255) not null,
test19(# text VARCHAR(255),
test19(# quantity INT,
test19(# price INT);

/BBBBBBB/

test19=# DROP TABLE stock;
test19=# INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Steven', 'King', 10000, 3);
test19=# INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Neena', 'Kochhar', 8000, 2);
test19=# INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('David', 'Austin', 12000, 2);
test19=# INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Nancy', 'Greenberg', 3000, 1);

/CCCCCCC/

test19=# SELECT * FROM employee WHERE salary > 5000 AND salary < 11000
test19=# SELECT * FROM employee WHERE contract_length < 2;
test19=# INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Dennis', 'Liu', 30000, 3);
test19=# INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Den', 'Liu', 30000, 3);
test19=# UPDATE employee SET  salary = 8000 WHERE salary = 3000;
test19=# UPDATE employee SET contract_length = 1 WHERE contract_length = 2;      
test19=# SELECT * FROM employee ORDER BY salary DESC;

/DDDDDDD/

var pg = require('pg');

var config = {
    user: 'den',
    database: 'citrus',
    password: '123456', //whatever your password is, the default is postgres or password, try both
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);

client.connect();

client.query('SELECT * FROM citrus WHERE color = 'orange'', function(err, results) {
    if(err) {
        console.log(err);
    }
    console.log(results.rows);
})