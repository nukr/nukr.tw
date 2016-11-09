FROM mhart/alpine-node:7.1.0
MAINTAINER nukr<nukrs.w@gmail.com>

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir /opt/app && cp -a /tmp/node_modules /opt/app

WORKDIR /opt/app
COPY . /opt/app

CMD ["npm", "start"]
