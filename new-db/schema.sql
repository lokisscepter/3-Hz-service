DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

\c products;

CREATE USER student WITH PASSWORD 'student';

-- ---
-- Table 'product'
--
-- ---

DROP TABLE IF EXISTS product;

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  avg_rating INTEGER,
  num_reviews INTEGER,
  price INTEGER
);

-- ---
-- Table 'photo'
--
-- ---

DROP TABLE IF EXISTS photo;

CREATE TABLE photo (
  id SERIAL PRIMARY KEY,
  small VARCHAR,
  medium VARCHAR ,
  large VARCHAR,
  product_id INTEGER REFERENCES product(id)
);

-- ---
-- Table 'sizes'
--
-- ---

DROP TABLE IF EXISTS sizes;

CREATE TABLE sizes (
  id SERIAL PRIMARY KEY,
  size INTEGER
);

-- ---
-- Table 'size_join_table'
--
-- ---

DROP TABLE IF EXISTS size_join_table;

CREATE TABLE size_join_table (
  product_id INTEGER REFERENCES product(id),
  size_id INTEGER REFERENCES sizes(id)
);

-- ---
-- Table 'colors'
--
-- ---

DROP TABLE IF EXISTS colors;

CREATE TABLE colors (
  id SERIAL PRIMARY KEY,
  color VARCHAR,
  price_diff INTEGER
);

-- ---
-- Table 'color_join_table'
--
-- ---

DROP TABLE IF EXISTS color_join_table;

CREATE TABLE color_join_table (
  prod_id INTEGER REFERENCES product (id),
  color_id INTEGER REFERENCES colors (id)
);
