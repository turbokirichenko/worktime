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

CREATE TABLE IF NOT EXISTS Redactors (
	id SERIAL PRIMARY KEY,
	name VARCHAR(150) NOT NULL,
	role VARCHAR(50) NOT NULL
);
CREATE TABLE IF NOT EXISTS Objects (
	id SERIAL PRIMARY KEY,
	object_type VARCHAR(50) NOT NULL,
	address VARCHAR(255) NOT NULL,
	space NUMERIC(10, 2) NOT NULL,
	description TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS Ads (
	id SERIAL PRIMARY KEY,
	ad_type VARCHAR(20) NOT NULL,
	object_type VARCHAR(50) NOT NULL,
	address VARCHAR(255) NOT NULL,
	space NUMERIC(10, 2) NOT NULL,
	floor INTEGER,
	rooms INTEGER,
	cost NUMERIC(12, 2) NOT NULL,
	created_date DATE NOT NULL,
	object_id INT NOT NULL REFERENCES Objects(id),
	user_id INT NOT NULL REFERENCES Users(id),
	redactor_id INT NOT NULL REFERENCES Redactors(id)
);
CREATE TABLE IF NOT EXISTS Favourites (
	id SERIAL PRIMARY KEY,
	ads_id INT NOT NULL REFERENCES Ads(id),
	users_id INT NOT NULL REFERENCES Users(id),
	cathegory VARCHAR(50) NOT NULL,
	description VARCHAR(100),
	created_at Date NOT NULL
);

INSERT INTO Redactors (name, role) VALUES ('first', 'admin'), ('second', 'admin');
INSERT INTO Objects (object_type, address, space, description) VALUES ('дом', 'ул Новая д 12', 44.3, ''),
	('дом', 'ул Новая д 13', 44.3, '1 description'),
	('квартира', 'ул Новая д 14а кв 33', 30, '2 description'),
	('квартира', 'ул Новая д 14а кв 45', 24, '3 description'),
	('квартира', 'ул Новая д 14б кв 10', 36, '4 description');
INSERT INTO Ads (ad_type, object_type, address, space, floor, rooms, cost, created_date, object_id, user_id, redactor_id) VALUES
	('объявление', 'дом', 'ул Новая д 13', 44.3, 2, 4, 40000, '2024-01-01', 1, 5, 1),
	('объявление', 'квартира', 'ул Новая д 14а кв 33', 30, 20, 2, 26000, '2024-02-02', 3, 6, 2),
	('объявление', 'квартира', 'ул Новая д 14а кв 45', 24, 4, 1, 30000, '2024-03-11', 4, 6, 2);
INSERT INTO Favourites (ads_id, users_id, cathegory, description, created_at) VALUES
	(1, 6, 'дом', 'some description one two three four five six', '2024-05-01'),
	(2, 6, 'квартира', 'some description one two three four five six', '2024-10-24'),
	(3, 7, 'квартира', 'some description one two three four five six', '2024-10-02'),
	(1, 7, 'дом', 'some description one two three four five six', '2024-10-15'),
	(1, 8, 'дом', 'some description one two three four five six', '2024-11-11'),
	(3, 8, 'квартира', 'some description one two three four five six', '2024-11-03'),
	(2, 5, 'квартира', 'some description one two three four five six', '2024-12-04');

ALTER TABLE Ads
ALTER COLUMN redactor_id DROP NOT NULL;

ALTER TABLE Ads
ALTER COLUMN redactor_id SET DEFAULT NULL;
