# FROM node:latest as build
# WORKDIR /usr/local/app
# COPY ./ /usr/local/app/
# RUN npm install
# RUN npm run build --prod


# FROM nginx:latest
# COPY --from=build /usr/local/app/dist/complaint-redressal-system-app /usr/share/nginx/html
# EXPOSE 80

FROM node:latest as builder
RUN mkdir -p /app


WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod

CMD ["npm","start"]