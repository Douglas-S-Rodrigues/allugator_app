#!/bin/bash 

PATH=$(npm bin):$PATH
export NODE_ENV=development

function db_migrate () {
  printf "\n> ASYNC: dropando o bancoe criando as migration\n"
  (
    kill -9 $(lsof -t -i:3000) &> /dev/null & kill -9 $(lsof -t -i:3001) &> /dev/null
    cd ./back-end
    npm_config_loglevel=silent npm install 
    npx sequelize-cli db:drop
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
  )
}

function initialize_front_end () {
  printf "\n> ASYNC: Instalando o front-end\n"
  (
    cd ./front-end
    npm_config_loglevel=silent npm install 
  )
}

db_migrate && initialize_front_end