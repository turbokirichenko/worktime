# Настройка SSL сертификатов

## OpenSSH

### (1) Enable SSH connection via db.Dockerfile

> составляем докерфайл, чтобы при загрузке образа запускалась возможность создавать ssh соединение напрямую с контейнером

![dockerfile](./part1.dockerfile.png)

### (2) Open port in docker compose

> открываем соответствующий порт в контейнере, остальные порты автоматически недоступны по политикам доступа Docker
> создаем специального пользователя для защищенной работы

![docker-compose-22](./part2.ssh-config.png)

### (3) Check ssh connection

> с клиентского окна подключаемся к сети контейнера через ssh

![ssh-check](./part3.ssh-connected.png)

## Настройка SSL

### (4) Создаем pg_hba.conf

![pg hba](./part4.pg_hba.png)

### (5) Создаем sh скрипт для генерации ключей сервера и клента

> генерация ключей сервера

![server key gen](./part5.genservfile-sh.png)

> генерация ключей клиента

![client key gen](./part5.genfile-sh.png)

> [Важно]
> для генерации https соединения можно воспользоваться файлом для сервера

### (6) Генерируем ключи

![generated keys](./part6.generated-keys.png)

### (7) Заполняем конфиги docker-compose

#### (7.1) для сервера

![server](./part7.pg.png)

#### (7.2) для админки

![admin](./part7.pg-admin.png)

### (8) Проверка ssl на сервере

![server ssl](./part8.ssl-server-check.png)

### (9) Админ панель с самоподписным сертификатом

![pgadmin](./part9.pgadmin.png)
