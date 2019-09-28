FROM node:alpine

WORKDIR /opt/

COPY ./blog-service /opt/blog-service/
COPY ./package.json /opt/
COPY ./api/ /opt/api/

# install dependencies used by blog-service and api
RUN npm i

# install blog-service specific dependencies
WORKDIR /opt/blog-service/
RUN npm i

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
