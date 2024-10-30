CREATE TABLE IF NOT EXISTS Employees (
	id SERIAL PRIMARY KEY,
	name VARCHAR(64) NOT NULL,
	email VARCHAR(64) UNIQUE NOT NULL,
	phone VARCHAR(48) NOT NULL,
	password VARCHAR(128) NOT NULL
);
INSERT INTO Employees (name, email, phone, password, warehouse_id) VALUES
	('Andrey Kirichenko', 'turbokirichenko@mail.ru', '+79669808080', 'wsY0Xej44pFjm1tbHbv2BQ==.2mxTparWmb6+E9/gKJvuSnuoZgA='),
	('Kirill Publichenko', 'republichenko@gmail.com', '+79996661499', '/huX0Ea4czTtTrgVhyuwVQ==.8zOa6UIFyhjoZS8v/2uYVo7gpPk=');