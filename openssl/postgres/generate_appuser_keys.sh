#!/bin/bash

KEY_SECRET=12345678
USERNAME=app_user
openssl req -new -text -passout pass:$KEY_SECRET -subj /CN=app_user -keyout $USERNAME.pem -out $USERNAME.req
openssl rsa -in $USERNAME.pem -passin pass:$KEY_SECRET -out $USERNAME.key
openssl req -x509 -in $USERNAME.req -text -key $USERNAME.key -out $USERNAME.crt