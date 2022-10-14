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

db_migrate 