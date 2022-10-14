#!/bin/bash 

PATH=$(npm bin):$PATH
export NODE_ENV=development

function db_migrate () {
  printf "\n> ASYNC: dropando o bancoe criando as migration\n"
  (
    kill -9 $(lsof -t -i:3000) &> /dev/null & kill -9 $(lsof -t -i:3001) &> /dev/null
    cd ./back-end
    npx sequelize-cli db:drop
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
  )
}

function build_env() {
  printf "\n> ASYNC: criando arquivo .env para variaveis de ambiente \n"
  (
    cd ./back-end
    if [ ! -f .env ]; then
    cp .env.example .env
    fi
  )
}



db_migrate && build_env