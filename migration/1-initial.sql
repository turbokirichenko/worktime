-- Создание таблиц
-- без отношений
CREATE TABLE IF NOT EXISTS Warehouse (
	id SERIAL PRIMARY KEY,
	name VARCHAR(128) NOT NULL,
	address VARCHAR(128) NOT NULL,
	phone VARCHAR(128) NOT NULL
);
CREATE TABLE IF NOT EXISTS Company (
	id SERIAL PRIMARY KEY,
	name VARCHAR(128) NOT NULL,
	address VARCHAR(128) NOT NULL,
	phone VARCHAR(128) NOT NULL
);
CREATE TABLE IF NOT EXISTS Vendors (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(128) NOT NULL,
	address VARCHAR(128) NOT NULL,
	phone VARCHAR(128) NOT NULL
);
-- с отношением 1:N
CREATE TABLE IF NOT EXISTS Products (
	id BIGSERIAL PRIMARY KEY,
	company_id BIGINT REFERENCES Company(id),
	name VARCHAR(128) NOT NULL,
	description VARCHAR(128),
	cost DOUBLE PRECISION NOT NULL,
	currency VARCHAR(12) NOT NULL
);
CREATE TYPE fact_enum AS ENUM('arrived', 'departured');
CREATE TABLE IF NOT EXISTS Acts (
	id BIGSERIAL PRIMARY KEY,
	vendor_id BIGINT REFERENCES Vendors(id),
	name VARCHAR(128) NOT NULL,
	fact fact_enum NOT NULL,
	created_at Date NOT NULL
);
CREATE TYPE article_enum AS ENUM ('box', 'bottle');
CREATE TABLE IF NOT EXISTS Articles (
	id BIGSERIAL PRIMARY KEY,
	barcode INT NOT NULL,
	article_type article_enum NOT NULL,
	dimensions INT[3] NOT NULL,
	weight INT NOT NULL,
	product_id INT REFERENCES Products(id),
	expired_at Date NOT NULL,
	size INT NOT NULL
);
CREATE TABLE IF NOT EXISTS Article_Statuses (
	id BIGSERIAL PRIMARY KEY,
	article_id BIGINT REFERENCES Articles(id),
	status_name VARCHAR(64) NOT NULL,
	status_created Date NOT NULL
);
CREATE TABLE IF NOT EXISTS Positions (
	id BIGSERIAL PRIMARY KEY,
	place_name char(32) UNIQUE NOT NULL,
	article_id BIGINT REFERENCES Articles(id) DEFAULT NULL,
	warehouse_id INT REFERENCES Warehouse(id)
);
CREATE TABLE IF NOT EXISTS Attachments (
	id BIGSERIAL PRIMARY KEY,
	article_id BIGINT REFERENCES Articles(id),
	size INT NOT NULL,
	act_id BIGINT REFERENCES Acts(id)
);