FROM node:14
COPY index.js /project/index.js
COPY package.json /project/package.json
COPY yarn.lock /project/yarn.lock
RUN cd /project && yarn install --pure-lockfile && yarn cache clean --production

CMD node /project/index.js
