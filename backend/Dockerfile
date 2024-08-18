FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# Uncomment the line below if you are building your code for production
# RUN npm ci --omit=dev

COPY . .

EXPOSE 5000
CMD ["npm", "start"]
