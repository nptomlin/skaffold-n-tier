FROM node:lts-jessie as build

WORKDIR /app
COPY package.json ./
RUN ["npm", "install"]
# copy everything else and build app
COPY . .
RUN ["npm", "run", "build"]

FROM nginx as run
COPY --from=build /app/dist/main-spa/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/


