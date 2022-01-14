# Teste prático Loog - Lello

projeto desenvolvido com [React](https://github.com/facebook/create-react-app) como teste para o processo seletivo para a função de front-end.

## Requisitos técnicos

O objetivo do desafio é criar uma página web que liste os membros de um dos três grupos do GitHub a seguir:

1. Angular - https://github.com/angular
2. Facebook (React) - https://github.com/facebook
3. vuejs - https://github.com/vuejs

O projeto pode ser feito usando JS e/ou qualquer framework de sua preferência. Não há um limite de tempo para implementar cada tarefa, mas será necessário fazer o monitoramento do tempo de desenvolvimento, considere utilizar alguma ferramenta de time-tracking como Wakatime, Clockify, Toggl, etc.

Requisitos
Você deve criar uma página que tenha os seguintes requisitos:

1. Lista com os atuais membros do grupo que escolheu no GitHub, com login e foto
2. Campo de busca para filtrar os membros (por login)
3. Ao clicar em um membro, exibir as seguintes informações daquele usuário:
   3.1 Nome
   3.2 Quantidade de repositórios
   3.3 Quantidade de seguidores
   3.4 Data em que a pessoa entrou no github

Os membros do grupo escolhido, assim como suas informações, devem ser carregados de modo dinâmico pela API do GitHub:
https://api.github.com/orgs/angular/public_members
https://api.github.com/orgs/facebook/public_members
https://api.github.com/orgs/vuejs/public_members
https://api.github.com/users/{login}

## Instruções para rodar o projeto

Esse projeto foi construído em um ambiente com Node na versão 14.17.6. Assegure-se de usar a mesma versão para evitar conflitos.

Passo a passo para iniciar o projeto:

1. clonar este repositório em uma pasta local
2. na pasta onde o projeto foi copiado, abra o terminal de comando e digite: `npm install` para instalar todas as dependências
3. Depois de instaladas rode o comando `npm start` para iniciar a aplicação.

A aplicação irá executar no endereço http://localhost:3000 em seu navegador.

## Aplicação online

Caso tenha alguma dificuldade nesse processo, a aplicação também está disponível em: https://loog-teste-5ulw1a8vi-marquinhosolis.vercel.app/
