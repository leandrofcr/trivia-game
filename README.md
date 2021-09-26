# Boas vindas ao repositório do projeto de Trivia!



## O que foi desenvolvido

O projeto Trivia Game é  um jogo de perguntas e respostas baseado no jogo **Trivia** _(tipo um show do milhão americano rs)_ utilizando _React e Redux_, desenvolvido em grupo suas funcionalidades de acordo com as demanas definidas em um quadro _Kanban_. A aplicação conta com as seguintes funcionalidades:

  - Logar no jogo e, se o email tiver cadastro no site [Gravatar](https://pt.gravatar.com/), ter sua foto associada ao perfil de usuária.
  - Acessar a página referente ao jogo, onde se deverá escolher uma das respostas disponíveis para cada uma das perguntas apresentadas. A resposta deve ser marcada antes do contador de tempo chegar a zero, caso contrário a resposta deverá ser considerada errada.
  - Ser redirecionada, após 5 perguntas respondidas, para a tela de score, onde o texto mostrado depende do número de acertos.
  - Visualizar a página de ranking, se quiser, ao final de cada jogo.
  - Configurar algumas opções para o jogo em uma tela de configuração acessível a partir do cabeçalho do app.


# Habilidades

Nesse projeto, as seguintes habilidades foram trabalhadas:

  - Criar um store Redux em aplicações React

  - Criar reducers no Redux em aplicações React

  - Criar actions no Redux em aplicações React

  - Criar dispatchers no Redux em aplicações React

  - Conectar Redux aos componentes React

  - Criar actions assíncronas na sua aplicação React que faz uso de Redux.

---


# Instruções para clonar o projeto:

1. Clone o repositório
  * `git clone git@github.com:leandrofcr/trivia-game.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd trivia-game`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com a tela de login do jogo)


### Linter

Para garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento nós utilizamos neste projeto o linter `ESLint` e `StyleLint`. Para rodar o linter localmente no seu projeto, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```

---

### Execução de testes de requisito

Os testes deste projeto foram feitos utilizando o [Cypress](https://www.cypress.io/how-it-works/). É utilizada nos testes a resolução `1366 x 768` (1366 pixels de largura por 768 pixels de altura) para testes de layout.

É possível testar isso localmente rodando `npm run cy`. Esse comando roda a suite de testes do Cypress que valida se o fluxo geral e os requisitos funcionais estão funcionando como deveriam. Você pode também executar o comando `npm run cy:open` para ter um resultado visual dos testes executados.

Esses testes não consideram o layout de maneira geral, mas sim os atributos e informações corretas, então preste atenção nisso! Os testes te darão uma mensagem de erro caso não estejam passando (seja qual for o motivo). 😉

**Atenção:** A aplicação deve estar rodando para o Cypress no terminal poder testar.

---

### API de Trivia

A [API do Trivia](https://opentdb.com/api_config.php) é bem simples. Temos 2 endpoints que precisamos utilizar para esta aplicação.

* **Pegar o token de sessão da pessoa que está jogando**
* **Pegar perguntas e respostas**

Primeiro, é necessário fazer um GET request para:

```
https://opentdb.com/api_token.php?command=request
```

Esse endpoint retornará o token que vai ser utilizado nas requisições seguintes. A resposta dele será:

```
{
   "response_code":0,
   "response_message":"Token Generated Successfully!",
   "token":"f00cb469ce38726ee00a7c6836761b0a4fb808181a125dcde6d50a9f3c9127b6"
}
```

Paga pegar as perguntas, é necessário realizar um GET request para o seguinte endpoint:

```
https://opentdb.com/api.php?amount=${quantidade-de-perguntas-retornadas}&token=${seu-token-aqui}

// Recomendação
https://opentdb.com/api.php?amount=5&token=${seu-token-aqui}
```

```
// Pergunta de múltipla escolha
{
   "response_code":0,
   "results":[
      {
         "category":"Entertainment: Video Games",
         "type":"multiple",
         "difficulty":"easy",
         "question":"What is the first weapon you acquire in Half-Life?",
         "correct_answer":"A crowbar",
         "incorrect_answers":[
            "A pistol",
            "The H.E.V suit",
            "Your fists"
         ]
      }
   ]
}
```

```
// Pergunta de verdadeiro ou falso
{
   "response_code":0,
   "results":[
      {
         "category":"Entertainment: Video Games",
         "type":"boolean",
         "difficulty":"hard",
         "question":"TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy",
         "correct_answer":"False",
         "incorrect_answers":[
            "True"
         ]
      }
   ]
}
```


---

### Gravatar

O Gravatar é um serviço que permite deixar o avatar global a partir do email cadastrado, ele mostra sua foto cadastrada em qualquer site vinculado. Na tela de **Inicio**, a pessoa que joga pode colocar um e-mail que deve fazer uma consulta a API do [Gravatar](https://br.gravatar.com/site/implement/images/).

A Implementação é feita baseada no e-mail. Esse email deve ser transformado em uma hash `MD5` (https://br.gravatar.com/site/implement/hash/). Para gerar tal hash,  utilizamos o [CryptoJs](https://github.com/brix/crypto-js).

Por exemplo:
  - Garantida a instalação do CryptoJS no projeto, importe o MD5:
    `import md5 from 'crypto-js/md5';`

  - Converta o email do usuário:
    `md5(emailDoUsuário).toString();`

**Atenção:** Precisamos utilizar o `toString()` ao final da conversão.

Após a geração da hash, basta adicionar o valor gerado no final da URL:

```
// Formato de URL necessário:
https://www.gravatar.com/avatar/${hash-gerada}

// Exemplo de URL com hash de uma pessoa
https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50

// Exemplo de imagem exibida com a URL
<img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />

```
---


### Observações técnicas

Algumas coisas devem seguir um padrão pré-estabelecido para que os teste funcionem corretamente.

**Player**

No `localStorage` do navegador:
* A chave `state` deve conter a seguinte estrutura:
```
player: {
    name,
    assertions,
    score,
    gravatarEmail
}
```

> `name` é o nome da pessoa que joga
>
> `assertions` é o número de acertos
>
> `score` é a pontuação
>
> `gravatarEmail` é o email da pessoa que joga

* A chave `ranking` deve conter a seguinte estrutura:
```
[
  { name: nome-da-pessoa, score: 10, picture: url-da-foto-no-gravatar }
]
```

* A chave `token` deve conter o valor do token recebido na API do Trivia.

---


Let's goo !!!