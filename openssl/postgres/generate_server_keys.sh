#!/bin/bash

KEY_SECRET=2123wdqwid2e98qdh3iud3
openssl req -new -text -passout pass:$KEY_SECRET -subj /CN=localhost -keyout privkey.pem -out server.req
openssl rsa -in privkey.pem -passin pass:$KEY_SECRET -out server.key
openssl req -x509 -in server.req -text -key server.key -out server.crt