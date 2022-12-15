FROM node:19.2.0-alpine3.16 AS build-node

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci 
COPY . .
RUN npm run build && npm prune --production

FROM node:19.2.0-alpine3.16 AS deploy-node
USER node:node
WORKDIR /app
COPY --from=build-node --chown=node:node /app/node_modules ./node_modules
COPY --from=build-node --chown=node:node /app/build ./build
COPY --from=build-node --chown=node:node /app/package.json ./package.json
ENV PORT 3000
EXPOSE 3000
CMD [ "node", "build" ]
