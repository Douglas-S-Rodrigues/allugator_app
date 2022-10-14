#!/bin/bash 

PATH=$(npm bin):$PATH
export NODE_ENV=development

function app_stop () {
  printf "\n> Fechando o app\n"
  (
    kill -9 $(lsof -t -i:3000) &> /dev/null & kill -9 $(lsof -t -i:3001) &> /dev/null
  )
}

app_stop