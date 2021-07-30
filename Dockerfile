FROM node:14
WORKDIR /project
COPY index.js /project/index.js
COPY package.json /project/package.json
COPY yarn.lock /project/yarn.lock
RUN yarn install --pure-lockfile && yarn cache clean --production

ENTRYPOINT ["node", "index.js"]
