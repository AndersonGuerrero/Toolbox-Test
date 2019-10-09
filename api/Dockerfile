FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app/api 
WORKDIR /usr/src/app/api

# Install app dependencies
COPY package.json /usr/src/app/api
COPY package-lock.json /usr/src/app/api

RUN npm install

# Bundle app source
COPY . /usr/src/app/api

EXPOSE 3500
CMD [ "node", "src/index.js" ]

# sudo docker build --rm -t <username>/node-web-app .
# sudo docker run -p 8080:3500 -d <username>/node-web-app
