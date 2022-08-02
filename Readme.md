# Front do Gestão Financeira Sa

## Sumário


[Tecnologias Utilizadas](#tecnologias-utilizadas)

[Experiências com essas Tecnologias](#experiencias-com-essas-tecnologias)

[Como foi fazer esse projeto](#como-foi-fazer-esse-projeto)

[Como rodar](#como-rodar)


## Tecnologias Utilizadas
- [Typescript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/en/docs/)
- [Express](https://github.com/expressjs/express)
- [Mongoose](https://github.com/Automattic/mongoose)
- [MongoDB with Atlas](https://www.mongodb.com/atlas/databasen)

## Experiências com essas Tecnologias

#### Typescript
Já tinha um conhecimento utilizando o Ts no back, isso falicitou para a criação das estruturas e ajudou muito na organização
### Node
Os modulos nativos do node também auxiliam muito na criaçãoda aplicação, podendo com facilidade acessar variáveis de ambiente entre outras coisas.
### Express
Montar toda a estrutura do servidor com express é muito tranquilo, um framework que auxilia e facilita muito na crição da aplicação
### Mongoose
Nunca tinha utilizado o mongoose e o MongoDb, isso foi um dois motivos por escolher eles, e o mongoose trás muita facilidade, desde criações de Schema até as requisições para o banco de dados
### MongoDb with Atlas
Primeira vez utilizando o Mongo, e gostei muito da experiência e o Atlas facilitou demais para que eu conseguisse fazer o deploy da aplicação, pois ele instanciou meu banco em um cluster na nuvem, isso sem precisar pagar nada.
## Como foi fazer esse Projeto
A parte do back me fez pensar muito sobre como organizar a arquitetura do meu projeto, inicialmente iria fazer um monorepo MVC, porém tive dificuldades em utilizar o ejs para montar os templates e manipular o DOM, por isso decidir utilizar o React para e meu back funciona como uma API Rest.
### Como rodar
Depois de baixar o repo do front, você vai dar yarn nos dois repositórios e depois rodar yarn dev nos dois. Além disso, você precisa abrir uma conta no atlas ou instanciar o Mongo na sua máquina e subtituit no objeto App a url de conexão com database.

