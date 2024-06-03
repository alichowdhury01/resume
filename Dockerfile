# syntax=docker/dockerfile:1

FROM node:22-alpine
WORKDIR /app
RUN npm update -g
RUN npm install -g 
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
