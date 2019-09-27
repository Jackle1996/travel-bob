FROM node:alpine

WORKDIR /opt/

COPY ./blog-posts /opt/blog-posts/
COPY ./package.json /opt/
COPY ./api/ /opt/api/

# install dependencies used by blog-service and api
RUN npm i

# install blog-service specific dependencies
WORKDIR /opt/blog-posts/
RUN npm i

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
