#!/bin/bash 

PATH=$(npm bin):$PATH
export NODE_ENV=development

function start_back_end() {
  printf "\n> iniciando o bacn-end \n"
  (
    cd ./back-end
    npm start
  )
}

function start_front_end() {
  printf "\n> iniciando o front-end \n"
  (
    cd ./front-end
    npm start
  )
}

start_back_end & start_front_end
