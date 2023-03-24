# TrybeSmith

Projeto de um sistema de vendas de objetos de forja artesanal. Projeto é uma API REST com validação via JWT.

### Tecnologias utilizadas

- **TypeScript**
- **Express.js**
- **MySQL**

### Documentação

Acesse a documentação online com casos de uso [aqui](https://documenter.getpostman.com/view/25780292/2s935uFztt)

### Para rodar localmente


Clone o projeto para o seu repositório local.
```
git clone git@github.com:vinicius-shk/Trybesmith.git
```
Acesse a raiz do projeto e rode os comandos para instalar as dependências e subir o Docker

```
cd Trybesmith && npm i && docker-compose up -d
```

Acesse o container trybesmith e inicie o servico de backend com nodemon

```
docker exec trybesmith -it bash && npm run dev
```

Faça as requisições de acordo com a documentação na porta **3000**
