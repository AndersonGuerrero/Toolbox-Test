FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app/client 
WORKDIR /usr/src/app/client

# Install app dependencies
COPY package.json /usr/src/app/client
COPY package-lock.json /usr/src/app/client

RUN npm install

# Bundle app source
COPY . /usr/src/app/client

EXPOSE 3000
CMD [ "npm", "start" ]

# sudo docker build --rm -t <username>/react-app .
# sudo docker run -p 8000:3000 -d <username>/react-app
