CREATE TABLE stock (
id SERIAL not null,
quantity INT not null,
price DECIMAL(4,2) not null,
citrus_id INT not null
);

INSERT INTO stock (quantity, price, citrus_id) VALUES (33, 25, 1);
INSERT INTO stock (quantity, price, citrus_id) VALUES (50, 15, 2);
INSERT INTO stock (quantity, price, citrus_id) VALUES (10, 35, 3);
INSERT INTO stock (quantity, price, citrus_id) VALUES (0, 20, 4);

select * from citrus left outer join stock on citrus.id = stock.citrus_id;

CCCCCCCCCCCCCC
test19=# select * from citrus inner join stock on citrus.id = stock.citrus_id;

test19=# begin;
BEGIN
test19=# update stock set quantity = quantity + 20 where citrus_id = 1;
UPDATE 1
test19=# update stock set quantity = quantity + 40 where citrus_id = 2;
UPDATE 1
test19=# update stock set quantity = quantity - 20 where citrus_id = 2;
UPDATE 1
test19=# update stock set quantity = quantity + 40 where citrus_id = 4;
UPDATE 1
test19=# update stock set quantity = quantity - 30 where citrus_id = 1;
UPDATE 1
test19=# update stock set quantity = quantity - 20 where citrus_id = 4;
UPDATE 1
test19=# update stock set quantity = quantity + 40 where citrus_id = 3;
UPDATE 1
test19=# update stock set quantity = quantity - 20 where citrus_id = 3;
UPDATE 1
test19=# commit;
COMMIT