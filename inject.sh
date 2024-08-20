#!/bin/bash

git clone https://github.com/carter4299/next-js-auth.git

ssl_secret=$(openssl rand -base64 32)
ENV_VARS=$(cat <<EOF
GITHUB_ID=""
GITHUB_SECRET=""
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="$ssl_secret"
EOF
)

cp -r next-js-auth/* .
rm -rf next-js-auth

if [ ! -f .env.local ]; then
  touch .env.local
fi
printf "%s\n" "$ENV_VARS" >> .env.local
