-- выбрать все товары ушедшие со склада
SELECT * FROM Articles a
LEFT JOIN Article_Statuses s ON s.article_id = a.id 
WHERE s.status_name = 'DEPARTURED'
ORDER BY a.id DESC;

-- выбрать все товары на складе от определенной компании
SELECT a.id as article_id, p.name as product_name 
FROM (SELECT * FROM Products p WHERE p.company_id = 1) as p
LEFT JOIN Articles a ON a.product_id = p.id
ORDER BY a.id DESC;

-- посчитать количество товаров на складе для определенной компании
SELECT COUNT(a.id) as article_counts, p.name as product_name 
FROM (SELECT * FROM Products p WHERE p.company_id = 1) as p
LEFT JOIN Articles a ON a.product_id = p.id
GROUP BY p.name
ORDER BY p.name DESC;

-- вывести информацию о товарах для определенного акта приема c обратным порядком срока истечения годности
SELECT ats.id as act_id, a.*
FROM (SELECT * FROM Acts ats WHERE ats.id = 1) as ats
LEFT JOIN Attachments ach ON ach.act_id = ats.id
LEFT JOIN Articles a ON a.id = ach.article_id
ORDER BY a.expired_at DESC;

-- вывести информацию о поставщиках работающих со складом за определенный период
SELECT v.* FROM Acts ats
LEFT JOIN Vendors v ON v.id = ats.vendor_id
WHERE ats.created_at BETWEEN '2024-01-01' AND '2025-01-01'
GROUP BY v.id
ORDER BY v.id DESC;

-- вывести информацию о свободных местах на складе
SELECT * FROM Positions ps
WHERE ps.article_id IS NULL;

-- вывести информацию о занятых местах на складе
SELECT * FROM Positions ps
WHERE ps.article_id IS NULL;