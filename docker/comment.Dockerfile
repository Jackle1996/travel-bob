FROM node:alpine

WORKDIR /opt/

COPY ./comment-service /opt/comment-service/
COPY ./package.json /opt/
COPY ./package-lock.json /opt/
COPY ./api/ /opt/api/

# install dependencies used by comment-service and api
RUN npm i

# install comment-service specific dependencies
WORKDIR /opt/comment-service/
RUN npm i
RUN npm run build

ENTRYPOINT [ "node" ]
CMD [ "./build/app.js" ]
