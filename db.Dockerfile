FROM postgres

ARG ssh_user
ARG ssh_password

RUN useradd -ms /bin/bash $ssh_user
RUN echo "$ssh_user:$ssh_password" | chpasswd

RUN apt update && apt -y install openssh-server
RUN mkdir -p /var/run/sshd
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

COPY ./certs/server/server.key /var/lib/postgresql/server.key
COPY ./certs/server/server.crt /var/lib/postgresql/server.crt

RUN chown 999:999 /var/lib/postgresql/server.key && \
    chmod 600 /var/lib/postgresql/server.key

RUN ssl=on && \ 
    ssl_cert_file=/var/lib/postgresql/server.crt && \ 
    ssl_key_file=/var/lib/postgresql/server.key