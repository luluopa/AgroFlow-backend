# Passos iniciais
1. Clone o projeto
1. `npm install` - instala as dependências
3. Instale as extensões "Prettier e ESLint" no VSCode
4. Crie um arquivo .env de acordo com o .env.example com os dados necessários
5. `npm start` - Inicia o Servidor local
6. `npm test` - Inicia os testes em jest

## Padrão de pastas
* `src/config` - Pasta com os componentes comuns a vários tipos de configuração (Ex: db.config, env config)
* `src/usuario` - Pasta com os componentes do usuario (routes, controllers, etc)
* `routes.tsx` - Arquivo de rotas do projeto (e principal)

## Dicas
* Sempre formate o arquivo com o `alt + shift + F` (Escolha o Prettier como formatador padrão), isso faz com que o projeto fique mais padronizado.