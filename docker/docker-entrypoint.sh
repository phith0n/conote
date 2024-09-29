#!/bin/bash 
set -e

# 等待数据库准备就绪  
wait-for-it "${POSTGRES_HOST}:${POSTGRES_PORT}" -t 60

pg_isready() {
    PGPASSWORD="${POSTGRES_PASSWORD}" psql -h "${POSTGRES_HOST}" -U "${POSTGRES_USER}" -d "${POSTGRES_DB}" -c "SELECT 1" > /dev/null 2>&1
}

generate_urandom() {
    local length=$1
    tr -dc 'a-zA-Z0-9' < /dev/urandom | head -c "$length"
    echo
}

retry_count=0
max_retries=5
until pg_isready; do
    retry_count=$((retry_count+1))
    if [ $retry_count -ge $max_retries ]; then
        echo "PostgreSQL not ready, max retries reached"
        exit 1
    fi
    echo "PostgreSQL not ready, waiting 5 seconds"
    sleep 5
done

echo "try to use Atlas to run the migrations"
atlas migrate apply --dir file://migrations --url "postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?sslmode=disable"
echo "migrate done"

if [ ! -f "config.yaml" ]; then
    cp default-config.yaml config.yaml
    sed -i "s/DEFAULT_SECRET_KEY/$(generate_urandom 32)/g" config.yaml
    sed -i "s/DEFAULT_SHORTENER_SALT/$(generate_urandom 32)/g" config.yaml
fi

if [ "$#" -eq 0 ]; then
    set -- ./conote2 -c config.yaml runserver
elif [ "${1#-}" != "$1" ]; then
    set -- ./conote2 "$@"
fi

exec "$@"
