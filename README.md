# Allugator app

Foi desenvolvido um website do zero com finalidade de oferecer ao cliente uma forma de alugar seu iPhone online.

## Stacks utilizadas
Projeto desenvolvido em JavaScript.

No back-end foi utilizado Sequelize ORM para o banco de dados com mysql e Express com Node.js, seguindo o padrao MSC de arquitetura de software.

O front-end foi desenvolvido com React.js e utilizando axios para buscas na API do back-end.

Para acessar a documentação da API online:
- [aqui](https://app.swaggerhub.com/apis-docs/DOUGLASRODRIGUESFW/api-de_manipulacao_de_produtos_e_usuarios/1.0.0)

Ou durante a execução da aplicação você pode testar a API acessando:
- [aqui](http://localhost:3001/api-docs/)

## Como iniciar a aplicação

1. Clone o repositório.
- Crie um repositório no seu computador e entre nele.
- Use o comando: `git clone git@github.com:Douglas-S-Rodrigues/allugator_app.git`.

- Entre na pasta do repositório que você acabou de clonar: `cd allugator-app`

- Agora você deve configurar suas variáveis de ambiente, vá até o documento `.env.example` dentro da pasta back-end e altere o nome do arquivo para `.env`, depois mude a senha de `MYSQL_PASSWORD=12345` colocando a sua senha de usuário mysql.
Ex: `MYSQL_PASSWORD=minhasenha` e salve este arquivo.

2. Instale as dependências e inicie a aplicação.

- Usando o terminal dentro da pasta raiz difite o seguinte comando: `make build` este comando serve para liberar as portas 3000 e 3001, derrubar o banco caso exista, criar o banco, criar migration e executar npm install dentro do back e front-end.

- Ainda dentro da pasta raiz use o seguinte comando `make first-install` esse comando completa a instalção usando outros scripts para popular o banco e iniciar o back-end e front-end, após isso o navegador abrirá com a aplicação rodando.



3. Finalizar o processo da aplicação.

- Para finalizar você pode fechar o terminal na qual está rodando a aplicação, ou abrir outro terminal na pasta raiz e executar o seguinte comando: `make down`  .
## Autores

- [Douglas Rodrigues](https://github.com/Douglas-S-Rodrigues)

