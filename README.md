Sistema de Pedidos
===

Projeto conceitual de um sistema de gestão de pedidos de uma lanchonete utilizando arquitetura limpa e micro serviços no padrão SAGA Coreografado


## 2) Justificativa do Padrão de Micro Serviço

A adoção do padrão SAGA Coreografrado para este projeto justifica-se pelo fato da aplicação estar distribuidas em 3 micro serviços distintos que necessitam de consistência nas transações o que torna mais simples a implementação devido ao fato de que cada serviço pode responder a eventos e tomar decisões de forma autonoma, em comparação com o padrão SAGA Orquestrado, onde a coordenação dos micros serviços é centralizada e que pode tornar-se excessivamente complexa.


## 3) Arquitetura

### a) Micro Serviços
O projeto segue com a seguinte arquitetura de micro serviços.

<img src="./static/images/fase 5 - arquitetura de micro servico.jpg">


### b) Software

![Arquitetura de Software](<static/images/Application Clean Architecture.png>)


## 4) Relatórios de Impactos Pessoais - RIPD

[RIPD](./static/RIPD.pdf)

## 5) Download do projeto

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
|—— ms-orders-service
|    |—— src    
|    |—— Dockerfile
|    |—— ... (other files)
|—— ms-payments-service
|    |—— src    
|    |—— Dockerfile
|    |—— ... (other files)
|—— ms-production-service
|    |—— src    
|    |—— Dockerfile
|    |—— ... (other files)
```


## 6) Rodar aplicação

a) Para rodar a aplicação no Docker for Windows, tenha o Daemon do docker instalado e em executação. 

Execute o comando abaixo na raiz do projeto:
```
docker compose up -d --build
```

b) Endpoints utilizando Api-Gateway local: 

* Ms-Orders-Service: http://localhost:3333/api/v1
* Ms-Payments-Service: http://localhost:3334/api/v1
* Ms-Production-Service: http://localhost:3335/api/v1

c) Collection do Postman

* [Postman](static/postman/thunder-collection_1fiap.json)