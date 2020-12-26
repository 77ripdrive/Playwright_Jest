FROM node:12.18-alpine
ENV NODE_ENV=qa
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --qa --silent 
COPY . .
EXPOSE 3000
CMD ["npm", "test"]



