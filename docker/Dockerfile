FROM ubuntu:noble

LABEL maintainer="phith0n <root@leavesongs.com>"

RUN set -ex \
    && apt-get update \
    && apt-get install -y --no-install-recommends wget curl ca-certificates wait-for-it \
    && curl -sSf https://atlasgo.sh | sh \
    && mkdir -p /opt/conote2/migrations

ARG TARGETARCH
ARG VERSION
COPY ./conote2_${VERSION}_linux_${TARGETARCH} /opt/conote2/conote2
COPY ./repo/providers/db/migrations/* /opt/conote2/migrations/
COPY ./repo/default-config.yaml /opt/conote2/default-config.yaml
COPY ./repo/docker-entrypoint.sh /opt/conote2/docker-entrypoint.sh

RUN set -ex && chmod +x /opt/conote2/conote2

WORKDIR /opt/conote2
VOLUME /opt/conote2/data
ENTRYPOINT ["bash", "/opt/conote2/docker-entrypoint.sh"]
CMD ["/opt/conote2/conote2", "-c", "config.yaml", "runserver"]
