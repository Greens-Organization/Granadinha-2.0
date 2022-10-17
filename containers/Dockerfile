FROM denoland/deno:1.26.1

EXPOSE 2017

WORKDIR /granadinha

USER deno

COPY deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno cache mod.ts

CMD ["run", "-A", "--watch", "--unstable", "--reload", "mod.ts"]
