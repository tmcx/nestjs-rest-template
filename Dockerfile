FROM node:18-alpine as build
WORKDIR /usr/local/app
COPY ./package.json /usr/local/app/package.json
RUN npm i
COPY . .
RUN ./node_modules/.bin/nest build
RUN npm prune --production

FROM  node:18-alpine as runner
WORKDIR /usr/local/app
COPY ./package.json .
COPY --from=build /usr/local/app/dist .
COPY --from=build /usr/local/app/node_modules ./node_modules

CMD ["npm", "run", "start:prod"]