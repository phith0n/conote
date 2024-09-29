FROM ubuntu:noble

LABEL maintainer="phith0n <root@leavesongs.com>"

RUN set -ex \
    && apt-get update \
    && apt-get install -y --no-install-recommends wget ca-certificates wait-for-it \
    && curl -sSf https://atlasgo.sh | sh \
    && mkdir -p /opt/conote2

ARG TARGETARCH
ARG VERSION
ADD ./conote2_${VERSION}_linux_${TARGETARCH}.tar.gz /opt/conote2/conote2

RUN set -ex && chmod +x /opt/conote2/conote2

WORKDIR /opt/conote2
VOLUME /opt/conote2/data
CMD ["/opt/conote2/conote2", "-c", "config.yaml", "runserver"]
