#!/bin/bash 
set -e

check_required_env() {
    local var_name="$1"
    if [ -z "${!var_name}" ]; then
        echo "error: database environment ${var_name} variable is not set. please check it and run again." >&2
        exit 1
    fi
}

generate_urandom() {
    local length=$1
    tr -dc 'a-zA-Z0-9' < /dev/urandom | head -c "$length"
    echo
}

check_required_env POSTGRES_HOST
check_required_env POSTGRES_DB
check_required_env POSTGRES_USER
check_required_env POSTGRES_PASSWORD
: "${POSTGRES_HOST:=localhost}"
: "${POSTGRES_PORT:=5432}"

wait-for-it "${POSTGRES_HOST}:${POSTGRES_PORT}" -t 60

echo "try to use Atlas to run the migrations"
atlas migrate apply --dir file://migrations --url "postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?sslmode=disable"
echo "migrate done"

if [ ! -f "config.yaml" ]; then
    cp default-config.yaml config.yaml
    sed -i "s/DEFAULT_SECRET_KEY/$(generate_urandom 32)/g" config.yaml
    sed -i "s/DEFAULT_SHORTENER_SALT/$(generate_urandom 12)/g" config.yaml
fi

if [ "$#" -eq 0 ]; then
    set -- ./conote2 -c config.yaml runserver
elif [ "${1#-}" != "$1" ]; then
    set -- ./conote2 "$@"
fi

exec "$@"
