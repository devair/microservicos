Sistema de Pedidos
===

Projeto conceitual de um sistema de gestão de pedidos de uma lanchonete utilizando arquitetura limpa e micro serviços



## 3) Download do projeto

### a) Clonar projeto principal

```
git clone https://github.com/devair/microservicos.git
```

### b) Acessa o diretório do projeto
```
cd microservico
```

### c) Clonar os micro serviços
Clonar os seguintes micro serviços para dentro da pasta principal (microservico)

* ms-orders-service: 
https://github.com/devair/ms-orders-service.git

* ms-payments-service: https://github.com/devair/ms-payments-service.git

* ms-production-service: https://github.com/devair/ms-production-service.git


### d) Hierarquia de diretórios total
 
A estrutura final de pastas deve ficar

```
|—— .gitignore
|—— docker-compose.yaml
|—— README.md
|—— api-gateway
|    |—— src    
|    |—— Dockerfile
|    |—— ... (other files)
```


## 4) Rodar aplicação

a) Para rodar a aplicação no Docker for Windows, tenha o Daemon do docker instalado e em executação. 

Execute o comando abaixo:
```
docker compose up -d --build
```

b) Endpoints utilizando Api-Gateway local: 

* Api-Gateway: http://localhost:3000
* Ms-Orders-Service: http://localhost:3000/orders-service/api/v1
* Ms-Payments-Service: http://localhost:3000/payments-service/api/v1
* Ms-Production-Service: http://localhost:3000/production-service/api/v1

