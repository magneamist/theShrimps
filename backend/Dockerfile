FROM node


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

# CMD ["npm", "start"]

# ATTENTION!!! DANGER!!! THIS WILL RESET XREATE DATABASE. Use it only if you know what you are doing.
ENTRYPOINT [ "npm", "run", "db:reset-and-start" ]

# This is the normal use Entry point. Comment this line for the installation, and afterwards uncomment it forever.
# ENTRYPOINT [ "npm", "run", "db:migrate-and-start" ]