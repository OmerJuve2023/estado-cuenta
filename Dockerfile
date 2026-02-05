FROM node:25.6.0-bookworm
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

ENTRYPOINT ["node", "app.js"]