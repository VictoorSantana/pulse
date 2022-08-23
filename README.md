# Teste prático - Frontend Angular
## Boas vindas
Olá! Que bom te ver aqui no nosso teste prático para Desenvolvedor(a) Frontend Angular. O papo inicial foi bom e gostaríamos de conhecer um pouco mais suas habilidades técnicas.

## O projeto
- Pensamos em uma aplicação fictícia chamada *Pulse Bank* que simula algumas operações bancárias bem simples, tais como: criação de uma conta, transferência entre contas e visualização de extrato simplificado.

- Essa aplicação conta com uma API Rest que está disponível publicamente nesse DNS base: *https://pulse-bank-api-test.herokuapp.com*

- Todos os endpoints estão documentados na especificação [Open API 3](https://swagger.io/specification/) e podem ser visualizados através do [Swagger](https://pulse-bank-api-test.herokuapp.com/api) do projeto.

## Seu objetivo
- Desenvolver uma SPA (Single Page Application) utilizando o [Framework Angular](https://angular.io/docs) na sua versão *stable v13.3.x*, utilizando alguma biblioteca/framework de UI (bootstrap, material ui, etc..), que possa atender às seguintes *user stories*: 

| ID | User Story |
|----|------------|
|  01  | Como usuário correntista do Pulse Bank, devo ter a possibilidade de fazer o credenciamento no 'internet banking' informando meu e-mail e senha cadastrados |
|  02  | Como usuário correntista do Pulse Bank, gostaria de ter a opção de visualizar o extrato simplificado da minha conta onde sejam apresentadas as informações de saldo atual e movimentações realizadas |
|  03  | Como usuário correntista do Pulse Bank, gostaria de realizar uma transferência de valor para uma outra conta do banco |
|  04  | Como usuário correntista do Pulse Bank, devo ter a opção de realizar o *logout* do internet banking |

- Fizemos um pequeno [*WIREFRAME*](https://whimsical.com/pulse-bank-wireflow-BMGgFTL8D5ry6iAYiER2VZ) para exemplificar um modelo de estrutura, mas você pode ficar à vontade para seguí-lo ou não =D

![](./assets/Pulse%20Bank%20-%20Wireflow.png)

- P.s.: aqui nesse repositório tem um diretório com as [marcas](./assets/marcas/) da Pulse e do Grupo Mateus.

## Considerações sobre a API
- Utilize a visualização do [Swagger](https://pulse-bank-api-test.herokuapp.com/api) para validar o *body* e as *responses* possíveis para cada endpoint;
- Alguns endpoints exigem o *header* de autorização para que seja possível validar o solicitante; esses endpoints possuem um **cadeado** na visão do swagger;
- No [Swagger](https://pulse-bank-api-test.herokuapp.com), logo abaixo do título e descrição da API, existe um botão "AUTHORIZE" que apresenta a opção de definir o token de autorização; esse token (json web token) é adiquirido como resposta do [endpoint de login](https://pulse-bank-api-test.herokuapp.com/api/#/authentication/AuthController_login)
- Para cadastrar um novo usuário (e posteriormente realizar o login) você pode enviar uma requisição POST ao [endpoint de usuários](https://pulse-bank-api-test.herokuapp.com/api/#/users/UsersController_store) informando seus dados;
- Após criado o seu usuário será necessário criar uma conta para ele; você pode enviar uma requisição POST ao [endpoint de contas](https://pulse-bank-api-test.herokuapp.com/api/#/accounts/AccountController_store) e informar um saldo fictício (balance) e o número da conta (number); o número deve ser a composição da sua data de nascimento, exemplo: **05102005** (ddMMyyyy);
- É possível visualizar a lista de contas disponíveis no [endpoint de contas](https://pulse-bank-api-test.herokuapp.com/api/#/accounts/AccountController_list) a partir de uma requisição GET;

## O que vamos observar no seu projeto
- Capacidade de entendimento e solução dos problemas propostos;
- Capacidade de organização de código;
- Escrita utilizando TypeScript;
- Nível de entendimento do framework e sua cli;
- Organização de componentes visuais;
- Uso de formulários e validações;
- Estratégias de comunicação com a API Rest;
- Estratégia de armazenamento e gerenciamento do jwt;
- Estratégias de roteamento e proteção de rotas;

## O que pode ser um diferencial no seu projeto
- Aplicação de testes automatizados (unidades e/ou ponta a ponta);
- O produto final rodando em uma imagem docker buildada e disponibilizada no docker hub;
- Formulários reativos;
- Aplicação de temas na UI (modo escuro, modo claro, etc);
- Práticas de *mobile first* e layout responsivo;
- Técnicas visando a experiência do usuário no uso da aplicação;
- Organização do fluxo de trabalho no Git (mensagens dos commits, fluxo de branches, etc)
- Documentações de suporte;

## Como entregar o seu projeto
- Você pode utilizar um repositório no seu Github para subir o projeto;
- Quando concluir, acesse a [aba de issues desse repositório](https://github.com/alissonphp/pt-frontend-angular-01/issues) e cria uma [nova issue](https://github.com/alissonphp/pt-frontend-angular-01/issues/new) informando no título o **seu nome** e no corpo você pode ficar à vontade para falar um pouco sobre o seu projeto e **não esqueça de colar o link para o seu repositório**, essa parte é importante =D
- Marque a issua com a *label* **finished**
- Pronto! Agora vamos dar uma olhadinha aqui no seu projeto e muito em breve a gente se fala novamente ;) 