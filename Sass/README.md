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
- [Sass](https://sass-lang.com/)
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

## Nesting(aninhamento)
![](nesting)

## Variáveis consideram o escopo onde foi criado
![](variaveis-escopo)



## BEM - Block element Modifier (Modificador de elemento de bloco)
Block__Element--modifier

.banner
.banner__btn
.banner__btn--danger
```
- **&** - Vai repetir o seletor da regra acima
.banner {
   display: flex;
   align-items: center;
   justify-content: center;

   &__btn {
      background: $white;

      &--danger {
      font-size: 18px;
      background-color: $zap-verde2;
      }
   }
}
```

## Mixin
Mixins são blocos de código que podem ser reutilizados a qualquer momento no seu CSS. Funcionam mais ou menos como variáveis, porém você pode colocar muito mais dentro de um mixin e ainda passar parâmetros.

Use `@mixin` para criar
E use `@include` para importar
```
@mixin btn {
   background-color: $zap-verde3;
   border: none;
   margin: 15px;
   padding: 15px;
   font-size: 14px;
   border-radius: 5px;
}
   &__btn {
      @include btn;
      color: #fff;
      background: $zap-black;
   }
```
## @extend
Usar o `@extend` permite compartilhar um conjunto de propriedades CSS de um seletor para outro. Isso ajuda a manter seu Sass mais limpo. 

Neste exemplo abaixo eu reutilizei as propriedades css de `botao` também em `banner__btn` e também em `banner__btn--danger` e Após copilado ficará assim: <br>
`.botao, .banner__btn, .banner__btn--danger {`

## placeholder
Parei no início do vídeo 5 [serfrontend](https://youtu.be/__Uwj8JP7NM)