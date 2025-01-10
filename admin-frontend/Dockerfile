# syntax=docker/dockerfile:1.4

FROM --platform=$BUILDPLATFORM node:slim AS development

WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json

RUN npm i --legacy-peer-deps
COPY . /code

ENV CI=true
ENV PORT=5173

FROM development AS dev-envs
RUN apt-get update && apt-get install -y git

RUN useradd -s /bin/bash -m vscode && \
    groupadd docker && \
    usermod -aG docker vscode

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

FROM development AS build
RUN npm run build

FROM nginx:1.13-alpine

COPY --from=build /code/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
