FROM node:5
MAINTAINER Team Wattellina <wattellina@mondora.com>
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install
ENV NODE_ENV production
ENV PORT 80
EXPOSE 80
CMD ["npm", "start"]
