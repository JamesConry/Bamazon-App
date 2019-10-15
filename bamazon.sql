DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
	item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('First', 'Sports', 10, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Second', 'Camping', 20, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Third', 'Apparel', 5, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Fourth', 'Sports', 1, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Fifth', 'Sports', 18, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Sixth', 'Camping', 6, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Seventh', 'Camping', 13, 19);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Eigth', 'Apparel', 9, 43);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Ninth', 'Apparel', 14, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Tenth', 'Sports', 6, 35);