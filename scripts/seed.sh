#!/bin/bash 

PATH=$(npm bin):$PATH
export NODE_ENV=development

function db_seed () {
  printf "\n> ASYNC: Populando o banco\n"
  (
    cd ./back-end
    npx sequelize-cli db:seed:all
  )
}

db_seed