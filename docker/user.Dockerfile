FROM node:alpine

WORKDIR /opt/

COPY ./user-service /opt/user-service/
COPY ./package.json /opt/
COPY ./package-lock.json /opt/
COPY ./api/ /opt/api/

# install dependencies used by user-service and api
RUN npm i

# install user-service specific dependencies
WORKDIR /opt/user-service/
RUN npm i
RUN npm run build

ENTRYPOINT [ "node" ]
CMD [ "./build/app.js" ]
