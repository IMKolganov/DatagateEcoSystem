FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .

ARG VITE_URL_MAIN=https://datagateapp.com
ARG VITE_URL_DASH=https://dash.datagateapp.com
ARG VITE_URL_API=https://api.datagateapp.com
ARG VITE_URL_TELEGRAM=https://tg.datagateapp.com
ARG VITE_URL_STATUS=https://status.datagateapp.com
ARG VITE_URL_WAZUH=https://monitor.datagateapp.com
ARG VITE_URL_GRAFANA=https://metrics.datagateapp.com
ARG VITE_URL_GITHUB=https://github.com/IMKolganov
ARG VITE_URL_DOCKERHUB=https://hub.docker.com/u/imkolganov
ARG VITE_URL_NUGET=https://www.nuget.org/packages/DataGateMonitor.SharedModels

ENV VITE_URL_MAIN=$VITE_URL_MAIN \
    VITE_URL_DASH=$VITE_URL_DASH \
    VITE_URL_API=$VITE_URL_API \
    VITE_URL_TELEGRAM=$VITE_URL_TELEGRAM \
    VITE_URL_STATUS=$VITE_URL_STATUS \
    VITE_URL_WAZUH=$VITE_URL_WAZUH \
    VITE_URL_GRAFANA=$VITE_URL_GRAFANA \
    VITE_URL_GITHUB=$VITE_URL_GITHUB \
    VITE_URL_DOCKERHUB=$VITE_URL_DOCKERHUB \
    VITE_URL_NUGET=$VITE_URL_NUGET

RUN npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
