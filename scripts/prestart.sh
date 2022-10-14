#!/bin/bash 

PATH=$(npm bin):$PATH
export NODE_ENV=development

function initialize_back_end () {
  printf "\n> ASYNC: Instalando o back-end e inicializando o banco de dados com o ORM em modo de desenvolvimento\n"
  (
    cd ./back-end
    npm_config_loglevel=silent npm install 
    npx sequelize-cli db:drop
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
  )
}

function initialize_front_end() {
  printf "\n> ASYNC: Instalando o front-end\n"
  (
    cd ./front-end
    npm_config_loglevel=silent npm install 
  )
}

initialize_back_end & initialize_front_end

printf "\n> Script terminado\n\n"