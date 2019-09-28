FROM node:alpine

WORKDIR /opt/

COPY ./frontend /opt/frontend/
COPY ./package.json /opt/
COPY ./api/ /opt/api/

# install dependencies used by frontend and api
RUN npm i

# install frontend specific dependencies
WORKDIR /opt/frontend/
RUN npm i

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
