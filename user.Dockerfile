FROM node:alpine

WORKDIR /opt/

COPY ./user-service /opt/user-service/
COPY ./package.json /opt/
COPY ./api/ /opt/api/

# install dependencies used by user-service and api
RUN npm i

# install user-service specific dependencies
WORKDIR /opt/user-service/
RUN npm i

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
