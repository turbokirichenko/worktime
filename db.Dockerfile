FROM postgres

ARG ssh_user
ARG ssh_password

RUN useradd -ms /bin/bash $ssh_user
RUN echo "$ssh_user:$ssh_password" | chpasswd

RUN apt update && apt -y install openssh-server
RUN mkdir -p /var/run/sshd
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
CMD [ "/usr/sbin/sshd", "-D"]