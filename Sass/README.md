## Capitulo 04 - Sass
[serfrontend](https://youtu.be/V95cpQ0cgII)

**O primeiro passo do projeto é iniciar o projeto do node para instalar as dependências:**
`npm init -y`

## Node Sass

O projeto node-sass deve ser listado nas depedências de desenvolvimento
`npm i node-sass --save-dev`
ou
`npm i node-sass -D`

## Principais concorrentes do Sass
- [Less](https://lesscss.org/)
- [Stylus](https://stylus-lang.com/)

## Como descobrir a versão do Sass
1. No arquivo package.json acrescente o scripts `"css": "node-sass"`
2. Execute o comando `npm run css -- --version` para passar o parâmetro --version, através do npm scripts.

## Para copilar Sass manualmente

Utilize o comando `npx node-sass src/sass/main.scss dist/css/main.css` para transformar um arquivo único .scss em um arquivo único .css

Também é possível 

Utilize o comando `npx node-sass src/sass/ -o dist/css/`

#### Você pode colocar no script no package.json
No arquivo package.json você pode acrescentar o scripts `"css": "node-sass src/sass/ -o dist/css/"` e depois pode executar através do comando `npm run css`

## Para automatizar a copilação Sass

- Para automatizar basta acrescentar `-w`. 
No arquivo package.json você pode acrescentar o scripts `"css": "node-sass src/sass/ -o dist/css/ -w"` e depois pode executar através do comando `npm run css`



## Capitulo 05 - Sass
[serfrontend](https://youtu.be/__Uwj8JP7NM)
