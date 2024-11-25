## Настройка SSH

### настройка файервола

![fire](./part1.firewall.png)

### настройка соединения

```
net start sshd
```

### проверка

![chech](./part3.check.png)

### сервер ssh

![ssh server](./part4.ssh-server.png)

## Настройка SSL

### генерация ключей

> ключи можно сгенерировать следующими командами

```
# чтобы правильно отображать пути
MSYS_NO_PATHCONV=1

# генерируем основной ключ
openssl req -new -text -passout pass:12345678 -subj /C=Russia/CN=localhost -keyout privkey.pem -out server.req

# генерируем сертификат
openssl rsa -in privkey.pem -passin pass:12345678 -out server.key
openssl req -x509 -in server.req -text -key server.key -out server.crt
```

### ключи в папке

![keys](./part5.server-keys.png)

### настройка внешних соединений в pg_hba

![outs](./part.5.pg_hba.png)

![outs2](./part5.ssl.png)

### проверяем работу psql с сервера в защищенном режиме

![check](./part6.ssl-server-check.png)

### настройка клиента

> генерация клиентских ключей происходит подобным образом, только подписывается имя пользователя

```
# чтобы правильно отображать пути
MSYS_NO_PATHCONV=1

# генерируем основной ключ
openssl req -new -text -passout pass:12345678 -subj /C=Russia/CN=superuser -keyout superuser.pem -out superuser.req

# генерируем сертификат
openssl rsa -in privkey.pem -passin pass:12345678 -out superuser.key
openssl req -x509 -in superuser.req -text -key superuser.key -out superuser.crt
```

### проерка клиента

![alt text](./part7.clients.png)

### подтверждение через ssh

![alt text](./part6.ssl-server-check.png)
