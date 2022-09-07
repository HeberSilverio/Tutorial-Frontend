## Principais comandos - Sass

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

### Para automatizar a copilação Sass

- Para automatizar basta acrescentar `-w`. 
No arquivo package.json você pode acrescentar o scripts `"css": "node-sass src/sass/ -o dist/css/ -w"` e depois pode executar através do comando `npm run css`



## Nesting, Escopo, BEM, Mixin, Condicional no Sass

## Nesting(aninhamento)
![](https://github.com/HeberSilverio/Tutorial-Frontend/blob/main/Sass/src/img/nesting.JPG)

## Variáveis consideram o escopo onde foi criado
![](https://github.com/HeberSilverio/Tutorial-Frontend/blob/main/Sass/src/img/variaveis-escopo.JPG)



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
## Mixins com parâmetro

```
@mixin btn($cor: black) {
   background-color: $zap-verde3;
   border: none;
   margin: 15px;
}
// @include btn(darken(red, 15%));

```
`darken()` é uma função dentro do Sass

### Condicional no Sass
Passei o parâmetro small no mixin e fiz uma condicional, e depois passei o parâmetro no include.
```
@mixin btn($cor: black, $size: small) {
   background-color: $black-200;
   border: none;
   margin: 15px;
   padding: 15px;

   @if $size == larger {
      font-size: 24px;
   } @else {
      font-size: 14px;
   }
   
   border-radius: 5px;
}

@include btn(darken(red, 15%), larger);

```
### Loop for no Sass

```
@for $i from 1 through 10 {
   .li-#{$i} {
      z-index: $i * 10;
   }
}
```
Este for gerou no arquivo compilado 10 classes de z-index desta forma:<br>
![](https://github.com/HeberSilverio/Tutorial-Frontend/blob/main/Sass/src/img/for-z-index.JPG)

Veja este outro exemplo: 
```
$base-color: #036;
@for $i from 1 through 10 {
   .li-#{$i} {
      background-color: lighten($base-color, 5% * $i);
   }
}
```
Este for gerou no arquivo compilado 10 classes clareando a cor por causa do lighten:<br>
![](https://github.com/HeberSilverio/Tutorial-Frontend/blob/main/Sass/src/img/for-cores.JPG)


### Loop While no Sass
```
$i: 1;
@while $i <= 10 {
   .li-#{$i} {
      background-color: lighten($base-color, 5% * $i);
   }
   $i: $i + 2;
} 
```
Este **While** gerou no arquivo compilado 4 classes saltando de 3 em 3 e clareando a cor por causa do lighten:<br>
![](https://github.com/HeberSilverio/Tutorial-Frontend/blob/main/Sass/src/img/while-cores.JPG)

### Loop each no Sass
```
$sizes: 40, 50, 60;
@each $size in $sizes {
   .icon-#{$size} {
      font-size: $size + px;
   }
}
```
Este **loop each** gerou no arquivo compilado 3 classes icon alterando o fonte size de acordo a imagem abaixo: <br>
![](https://github.com/HeberSilverio/Tutorial-Frontend/blob/main/Sass/src/img/loop-each.JPG)

É uma maneira parecida com iterar um array no JavaScript.

Podemos fazer também parecido com um objeto no JavaScript, com propriedade e valor, onde para cada valor eu terei uma propriedade apropriada da seguinte forma:<br>

```
$icons: ("tamanho1": "12px", "tamanho2": "14px");
@each $prop, $value in $icons {
   .icon-#{$prop} {
      font-size: $value;
   }
}
```
Este **loop each** gerou no arquivo compilado 2 classes icon-tamanho alterando o fonte size de acordo a imagem abaixo: <br>
![](https://github.com/HeberSilverio/Tutorial-Frontend/blob/main/Sass/src/img/object-while.JPG)

## @extend
Usar o `@extend` permite compartilhar um conjunto de propriedades CSS de um seletor para outro. Isso ajuda a manter seu Sass mais limpo. 

Neste exemplo abaixo eu reutilizei as propriedades css de `botao` também em `banner__btn` e também em `banner__btn--danger` e Após copilado ficará assim: <br>
`.botao, .banner__btn, .banner__btn--danger {`

## placeholder
Sass tem um tipo especial de seletor conhecido como “placeholder”. Parece e age muito como um seletor de classe, mas começa com % e não é incluído na saída CSS. Na verdade, qualquer seletor complexo (aqueles entre as vírgulas) que contém um seletor de espaço reservado não é incluído no CSS, nem qualquer regra de estilo cujos seletores contenham todos os espaços reservados.

Para que serve um seletor que não é emitido? Ainda pode ser prorrogado! Ao contrário dos seletores de classe, os placeholders não sobrecarregam o CSS se não forem estendidos e não exigem que os usuários de uma biblioteca usem nomes de classe específicos para seu HTML.

## Funções Css
Através das funções incluídas no código CSS é possível trabalhar com algumas variáveis e operações lógicas que podem facilitar muito a maneira como o construímos.
[Relação de funções](https://www.ranoya.com/books/public/css/funcoescss.php)

A sintaxe é a seguinte:
```
@function(){
   @return
}
```
Veja um exemplo:
```
@function limitePixel($min: 10px){
   @return $min - 5px;
}

border-radius: limitePixel(12px); // Neste caso está sendo passado 12px parametro - 5px = 7px;
// border-radius: limitePixel(); // Neste caso está sendo passado default 10px - 5px = 5px;
```

Função  | Descrição
----------------- | --------------------------------------------------
attr() | Retorna o valor de um atributo de um elemento selecionado
calc() | Opera cálculos sobre medidas e valores do CSS
hsl() | Permite definir cores através do sistema HSL
hsla() | Permite definir cores através do sistema HSL usando opacidade/transparência
linear-gradient() | Permite definir um gradiente linear de background
radial-gradient() | Permite definir um gradiente radial de background
rgb() | Permite definir cores através do sistema RGB com valores entre 0 e 255
rgba() | Permite definir cores através do sistema RGB com valores entre 0 e 255 e utilizando opacidade/transparência
url() | estabelece o link com um arquivo externo como uma fonte, uma imagem ou qualquer outro tipo de arquivo externo necessário
var() | acessa uma variável contendo um valor
darken(red, 15%) | tipo opacidade, neste caso exibe 15% da cor

A referência deste estudo está nesta playList do canal: [serfrontend](https://youtu.be/__Uwj8JP7NM)