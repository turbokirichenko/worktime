INSERT INTO Warehouse (name, address, phone) VALUES ('BASE', 'Hopkins avenue, 43', '+79767652342') ,
INSERT INTO Company  (name, address, phone) VALUES  ('AGRO LTD.', 'street Tolbuchino 13/65, o.113', '+79991234567'),
    ('METROPOLIS LTD.', 'street Tolbuchino 13/65, o.113', '+79991234567'),
    ('FUNTOY LTD.', 'street Tolbuchino 13/65, o.113', '+79991234567'),
    ('BESTX LTD.', 'street Tolbuchino 13/65, o.113', '+79991234567'),
    ('FOREVER LTD.', 'street Tolbuchino 13/65, o.113', '+79991234567') ,
INSERT INTO Vendors (name, address, phone) VALUES ('AOL LTD.', 'street Nikitskaya 15, o.223', '+79991234577'),
    ('SEVER LTD.', 'street Nikitskaya 15, o.223', '+79991234577'),
    ('STOGRAMM LTD.', 'street Nikitskaya 15, o.223', '+79991234577'),
    ('VOLT LTD.', 'street Nikitskaya 15, o.223', '+79991234577'),
    ('AFTERPARTY LTD.', 'street Nikitskaya 15, o.223', '+79991234577'),
    ('MINIMINI LTD.', 'street Nikitskaya 15, o.223', '+79991234577') ,
INSERT INTO Products (company_id, name, description, cost, currency) VALUES (1, 'Cookie', 'some description', 45.78, 'RUB'),
    (1, 'Water', 'some description', 88.56, 'RUB'),
    (2, 'Mars', 'some description', 33.32, 'RUB'),
    (2, 'Chocolate', 'some description', 18.90, 'RUB'),
    (2, 'Yogurt', 'some description', 49.99, 'RUB'),
    (2, 'Milk', 'some description', 98.25, 'RUB'),
    (2, 'Aleksandrov', 'some description', 29.75, 'RUB'),
    (3, 'Apple', 'some description', 12.67, 'RUB'),
    (3, 'Banana', 'some description', 76.98, 'RUB'),
    (3, 'Coconut', 'some description', 118.09, 'RUB') ,
INSERT INTO Acts (vendor_id, name, fact, created_at) VALUES(1, 'FROM Vendor 1', 'arrived', '2024-01-01') ,
INSERT INTO Acts (vendor_id, name, fact, created_at) VALUES(1, 'FROM Vendor 1', 'departured', '2024-02-04') ,
INSERT INTO Articles (barcode, article_type, dimensions, weight, product_id, expired_at, size) VALUES (228121, 'box', '{12, 34, 8}', 234, 1, '2024-09-09', 1),
    (228121, 'box', '{12, 34, 8}', 234, 1, '2024-09-09', 1),
    (228121, 'box', '{12, 34, 8}', 234, 1, '2024-09-09', 1),
    (228121, 'box', '{12, 34, 8}', 234, 1, '2024-09-09', 1),
    (228121, 'box', '{12, 34, 8}', 234, 1, '2024-09-09', 1),
    (228121, 'box', '{12, 34, 8}', 234, 1, '2024-09-09', 1),
    (228121, 'box', '{12, 34, 8}', 234, 1, '2024-09-09', 1),
    (228121, 'bottle', '{30, 30, 80}', 999, 2, '2024-11-07', 2),
    (228121, 'bottle', '{30, 30, 80}', 999, 2, '2024-11-07', 2),
    (228121, 'bottle', '{30, 30, 80}', 999, 2, '2024-11-07', 2),
    (228121, 'bottle', '{30, 30, 80}', 999, 2, '2024-11-07', 2),
    (228121, 'bottle', '{30, 30, 80}', 999, 2, '2024-11-07', 2),
    (228121, 'bottle', '{30, 30, 80}', 999, 2, '2024-11-07', 2),
    (228121, 'bottle', '{30, 30, 80}', 999, 2, '2024-11-07', 2),
    (468121, 'box', '{120, 80, 30}', 344, 3, '2024-11-07', 12),
    (468121, 'box', '{120, 80, 30}', 344, 3, '2024-11-07', 12),
    (468121, 'box', '{120, 80, 30}', 344, 3, '2024-11-07', 12),
    (468121, 'box', '{120, 80, 30}', 344, 3, '2024-11-07', 12),
    (468121, 'box', '{120, 80, 30}', 344, 3, '2024-11-07', 12),
    (468121, 'box', '{120, 80, 30}', 344, 3, '2024-11-07', 12),
    (468121, 'box', '{120, 80, 30}', 344, 3, '2024-11-07', 12),
    (468121, 'box', '{120, 80, 30}', 344, 3, '2024-11-07', 12),
    (468121, 'box', '{120, 80, 30}', 344, 3, '2024-11-07', 12);
INSERT INTO Article_Statuses (article_id, status_name, status_created) VALUES (1, 'ARRIVED', '2024-01-08'),
    (2, 'ARRIVED', '2024-02-27') ,
    (3, 'ARRIVED', '2024-01-16') ,
    (4, 'ARRIVED', '2024-02-12') ,
    (5, 'ARRIVED', '2024-01-09') ,
    (6, 'ARRIVED', '2024-01-08') ,
    (7, 'ARRIVED', '2024-03-08') ,
    (8, 'ARRIVED', '2024-04-08') ,
    (9, 'ARRIVED', '2024-02-08') ,
    (10, 'ARRIVED', '2024-01-08') ,
    (11, 'ARRIVED', '2024-01-08') ,
    (12, 'ARRIVED', '2024-01-08') ,
    (13, 'ARRIVED', '2024-01-08') ,
    (14, 'ARRIVED', '2024-01-08') ,
    (15, 'ARRIVED', '2024-01-08') ,
    (16, 'ARRIVED', '2024-01-08') ,
    (17, 'ARRIVED', '2024-01-08') ,
    (18, 'ARRIVED', '2024-01-08') ,
    (19, 'ARRIVED', '2024-01-08') ,
    (20, 'ARRIVED', '2024-01-08') ,
    (21, 'ARRIVED', '2024-01-08') ,
    (22, 'ARRIVED', '2024-01-08') ,
    (23, 'ARRIVED', '2024-01-08') ,
    (21, 'DEPARTURED', '2024-02-04') ,
    (22, 'DEPARTURED', '2024-02-04') ,
    (23, 'DEPARTURED', '2024-02-04');
INSERT INTO Positions (place_name, article_id, warehouse_id) VALUES ('00000000', 1, 1) ,
    ('00000001', 2, 1) ,
    ('00000002', 3, 1) ,
    ('00000003', 4, 1) ,
    ('00000004', 5, 1) ,
    ('00000005', 6, 1) ,
    ('00000006', 7, 1) ,
    ('00000007', 8, 1) ,
    ('00000008', 9, 1) ,
    ('00000009', 10, 1) ,
    ('00000010', 11, 1) ,
    ('00000011', 12, 1) ,
    ('00000012', 13, 1) ,
    ('00000013', 14, 1) ,
    ('00000014', 15, 1) ,
    ('00000015', 16, 1) ,
    ('00000016', 17, 1) ,
    ('00000017', 18, 1) ,
    ('00000018', 19, 1) ,
    ('00000019', 20, 1);
INSERT INTO Attachments (article_id, size, act_id) VALUES (1,1,1) ,
    (2,1,1) ,
    (3,1,1) ,
    (4,1,1) ,
    (5,1,1) ,
    (6,1,1) ,
    (7,1,1) ,
    (8,1,1) ,
    (9,1,1) ,
    (10,1,1) ,
    (11,1,1) ,
    (12,1,1) ,
    (13,1,1) ,
    (14,1,1) ,
    (15,1,1) ,
    (16,1,1) ,
    (17,1,1) ,
    (18,1,1) ,
    (19,1,1) ,
    (20,1,1) ,
    (21,1,1) ,
    (22,1,1) ,
    (23,1,1) ,
    (21,1,2) ,
    (22,1,2) ,
    (23,1,2);