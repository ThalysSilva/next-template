## Meu template next

Decidi compartilhar minha experiência que adquiri em vários projetos que eu ja frequentei. Adaptei e montei um template que geralmente utilizo para iniciar um grande projeto.

### Tecnologias utilizadas:
- Next.js v14
- Chakra Ui
- React hook form
- Zod
- Axios
- React query v5
- Tailwind
- Tailwind-merge
- Eslint
- Prettier
- Typescript
- Jest
- Husky

### Definição de arquitetura do projeto
- O projeto foi definido para ser utilizado de acordo com o pattern design sugerido pela docs do próprio next. Todos os arquivos com questões específicas de cada página (customHooks, constantes e componentes) serão armazenados nos respectivos diretório dento da pasta App.
- Já existe uma predefinição de regras de lint e prettier que são ao meu agrado para seguir com um bom clean code.
- O projeto tem a implementação de uma camada de serviço utilizando o axios para gerenciamento de requisição rest e react query para gerenciamento de cache. Dentro das pastas services, há uma pasta de hooks (useCustomQuery e useCustomMutate) contendo abstrações para utilização da implementação de ambos, com intuito de facilitar a criação de novas camadas de serviço.

exemplo de utilização:
```
export function useAddCreditCardServices() {
  const addCreditCardMutation = useCustomMutate<
    AddCreditCardData,
    AddCreditCardDataPayload
  >({
    routeName: 'addCreditCard',
    invalidateQueriesKeys: ['cardList'],
    showSnackbarOnError: false,
  });

  return {addCreditCardMutation};
}
```

- Dentro de cada componente/pagina poderá ter os arquivos index.tsx, const.ts, types.d.ts, (layout.tsx|page.tsx caso seja pagina) Também poderá ter a pasta de hooks, para a inserção da camada lógica, como também da camada de serviço. Também poderá ter a pasta components, caso precisem de algum outro compoente específico para aquele componente ou pagina exemplo:
```
AddCreditCard
│   index.tsx
│   const.ts
|   types.d.ts

└───components
│   └───AddCreditCardFormContent
│       │   index.tsx
│       │   (... estrutura recursiva ...)
│   
└───hooks
|   │   useAddCreditCard.(ts|tsx)
|   │   useAddCreditCardServices.ts
```
  


### Definição de cada pasta dento da src:
- @types: tipagens gerais
- app: pasta padrão para roteamento do Next.js
- components: componentes que podem ser reutilizados em outras oportunidades, geralmente sempre tenho que utilizar nos meus projetos.
- config: local onde crio estruturas para configuração, definição de variaveis de ambientes, link de roteamento centralizados, entre outros.
- contexts: localização dos contextos necessários para a funcionalidade do projeto
- hooks: quando um hook pode ser utilizado em geralmente mais de um componente, ele é armazenado aqui.
- providers: aqui é gerenciado todos os providers que envolvem a aplicação.
- schemas: todos os schemas do zod são armazenados aqui.
- services: aqui é a parte central das camadas de serviço. dentro da services, há o route.ts que serve para alimentar as opções do routerName dentro dos useCustomMutate e useCustomQuery. Também é onde é armazenado camadas de serviço caso sejam utilizados em mais de um lugar. Também pode armazenar as tipagens de cada camada de serviço de um respectivo grupo (usuários, cartões, eventos, etc...)
- styles: local para a configuração e armazenamento das variaveis de estilização do projeto, como o css global que é importado pela aplicação.
- utils: funções e hooks para utilidades gerais um dos exemplos são máscaras de dados e tratamento de datas.


### Falta implementar
- Testes unitários
- Exemplos da utilização da arquitetura de serviço
- Paginas para exemplificação dos componentes genéricos
- Exemplo de formulário utilizando as abstrações do react hook form (componente customForm)
- Criação de um arquivo padrão para configuração do husky
- Ideias sempre são bem vindas !!
