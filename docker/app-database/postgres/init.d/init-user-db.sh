#!/bin/bash
set -e
echo 'Criando database jwt_security para usuario' "$POSTGRES_USER";
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE DATABASE jwt_security;
	GRANT ALL PRIVILEGES ON DATABASE jwt_security TO $POSTGRES_USER;
EOSQL