FROM node:20.14.0-alpine3.19 AS base
WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:20.14.0-alpine3.19 as release
WORKDIR /app

# Install a simple HTTP server to serve the app
RUN npm install -g serve

COPY --from=base /app/dist /app/dist

EXPOSE 5000

CMD ["serve", "-s", "/app/dist", "-l", "5000"]