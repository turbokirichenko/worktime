CREATE TABLE Users (
	id SERIAL PRIMARY KEY,
	email VARCHAR(50) UNIQUE NOT NULL,
	pwd VARCHAR(50) NOT NULL,
	name VARCHAR(150) NOT NULL,
	phone BIGINT NOT NULL,
	registration_date DATE NOT NULL,
	status VARCHAR(10) NOT NULL
);
INSERT INTO Users (email, pwd, name, phone, registration_date, status) VALUES
	('super@mail.ru', '12345678', 'Donald Trump', '+79998887766', '2024-01-01', 'ACTIVE'),
	('andrei@turbokirichenko.site', '12345678', 'Kirill Publichenko', '+79998887766', '2024-01-02', 'ACTIVE'),
	('julia@protonmail.com', '12345678', 'Julia', '+79998887766', '2024-01-03', 'ACTIVE'),
	('maria@gmail.com', '12345678', 'Maria The Beautiful', '+79998887766', '2004-11-02', 'ACTIVE');