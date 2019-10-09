FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3500
CMD [ "node", "src/index.js" ]

# sudo docker build --rm -t <username>/node-web-app .
# sudo docker run -p 8080:3500 -d <username>/node-web-app
