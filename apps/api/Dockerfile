FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system api && \
          adduser --system -G api api

COPY . api
RUN chown -R api:api .

CMD [ "node", "api/main.js" ]
