FROM node:lts-alpine

# Create app directory
WORKDIR /app

COPY package.json yarn.lock package-lock*.json ./

# Install app dependencies
RUN yarn install --production=false

# Bundle app source
COPY . .

# Build app
RUN yarn build

ENV NODE_ENV=production

