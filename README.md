# Projeto com nodejs

## Utilizando o nodejs
- Utilize `npm install nome-do-pacote` para inserir pacotes
- Utilize `npm uninstall` para remover um pacote
- Para instalar uma versão específica Utilize `npm install nome-do-pacote@4.3.1` para remover um pacote
- Para instalar a versão mais atual utilize `npm install nome-do-pacote@latest`

- `npm update nome-do-pacote` Este comando irá atualizar o pacote expecificado para a versão mais recente, respeitando as restrições semver.

- `npm update` Este comando atualizará todos os pacotes listados para a versão mais recente (especificada pelo tagconfig), respeitando as restrições semver tanto do seu pacote quanto de suas dependências (se eles também exigirem o mesmo pacote).

- `npm update --save`Atualiza todos os pacotes da dependencies.

- `npm update --save-dev`Atualiza todos os pacotes da devDependencies.

- `npm update --save-dev --save`Atualiza todos os pacotes, tanto da dependencies, quanto da devDependencies.


- `npm update -g`Atualiza todos os pacotes globais.



Para conhecer a documentação do npm clique aqui:
[npm Docs](https://docs.npmjs.com/)
## Iniciar um projeto e instalar pacotes (com npm e npx)

### Vantagens do npx


#### Executar um pacote instalado localmente com facilidade
- Se quiser executar um pacote instalado localmente, tudo o que precisa fazer é digitar:

`$ npx seu-pacote`. O npx verificará se o <comando> ou o <pacote> existe no $PATH ou nos arquivos binários do projeto local. Se estiver, eles o executarão.

##### Executar pacotes que não estavam instalados previamente
- É possível utilizar a função comando sem permanecer instalado a dependência. Exemplo: O `npx gitignore node` adiciona o arquivo gitignore e depois exclui a dependência gitignore.
- Esta é uma grande vantagem, pois você tem a capacidade de executar um pacote que não estava instalado previamente. Vamos testar isso executando: `$ npx cowsay wow`

Isso é ótimo porque, algumas vezes, você apenas quer usar algumas ferramentas de CLI, mas não quer instalá-las globalmente somente para fins de teste.

Isso quer dizer que você pode economizar alguns espaço em disco e simplesmente executá-las somente quando precisar delas. Isso também significa que suas variáveis globais ficarão menos poluídas.

#### Testar versões de pacotes diferentes
- O npx torna muito fácil testar versões diferentes de um pacote ou de um módulo do Node.js. `npm v seu-pacote`.

#### Conclusão
O npx nos ajuda a evitar questões de versionamento e dependências, bem como a evitar a instalação de pacotes desnecessários que você queira apenas experimentar.

Ele também fornece um modo claro e fácil de executar pacotes, comandos, módulos e até mesmo gists e repositórios do GitHub.

#### Instale o npx
Caso o **npx** não esteja disponível ao instalar o node.js você pode instalar manualmente utilizando o seguinte comando `npm i npx -g`.

#### 1 - Crie ferramentas executadas diretamente da linha de comando
Com o **NPM** nós podemos criar ferramentas executadas diretamente do terminal inteiramente com JavaScript.

#### 2 - Atalhos para os comandos mais comuns
É sempre bom saber o nome curto de um comando, permitindo escrever menos:

Comando | Atalho
------------- | -------------
install  |	i
list     |	ls
test     |	t
–global  |	-g
–save    |	-S
–save-dev |	-D

#### 3 - Abrir o site do projeto
O comando `home` permite abrir o site de alguma biblioteca ou framework em seu navegador.

O código abaixo irá abrir o site do jQuery em seu navegador: `$ npm home jquery`.

#### 4 - Abrir o repositório do projeto
O comando `repo` permite abrir o site do repositório de alguma biblioteca ou framework em seu navegador.

O código abaixo irá abrir o repositório do lodash em seu navegador: `$ npm repo lodash`.

#### 5 - Procurar por pacotes não declarados no package.json
É um grande problema quando alguém esquece de indicar uma dependência no `package.json`. Mas não tem problema, pois com o seguinte comando você poderá ver quais são os pacotes utilizados no seu projeto que não estão listados: $ `npm prune`

#### 6 - Inicie um pacote rapidamente
O comando `$ npm init` nos permite iniciar um pacote, criando o arquivo `package.json` de acordo com certas respostas que damos às perguntas feitas.

Mas você pode pular as perguntas, fazendo com que o arquivo `package.json` seja criado imediatamente. Basta adicionar `-y` ao comando: `$ npm init -y`

#### 7 - Analisar dependências desatualizadas
Também podemos verificar se há dependências desatualizadas em nosso projeto. Basta executar o comando `$ npm outdated`

#### 8 - Trave a versão de suas dependências
Se quiser travar a versão das dependências do seu projeto, simplemente execute o comando `$ npm shrinkwrap`

Isso irá criar um arquivo `npm-shrinkwrap.json`. Ao instalar as dependências do projeto, as versões definidas neste arquivo que serão levadas em consideração.

#### 9 - Instalação de produção
No `package.json` nós podemos salvar as dependências em `dependencies` e `devDependencies`. Esta última é a lista de dependências usadas apenas durante o desenvolvimento.

Caso você não vá desenvolver nada onde está instalando seu projeto, com o seguinte comando é possível instalar as dependências do projeto, ignorando as dependências de desenvolvimento: `$ npm install --production`

#### 10 - Lista de pacotes instalados
Podemos ver uma lista de pacotes instalados com o comando: `$ npm ls --depth 0`

Esse comando é ainda mais útil quando queremos saber quais módulos globais possuímos instalado em nossa máquina: `$ npm ls -g --depth 0`

#### Conclusão
O **NPM** é uma ferramenta que muitos usam mas poucos sabem usar totalmente o seu poder. Para mais informações, confira nosso Curso de NPM.


## node_modules e gitignore
- O `npx gitignore node` adiciona o arquivo gitignore e depois exclui a dependência gitignore.

## npm-scripts
- A propriedade "scripts" de seu arquivo package.json suporta vários scripts internos e seus eventos de ciclo de vida predefinidos, bem como scripts arbitrários.

## Configurar o npm
`npm set init.author.name "Héber Silvério"`
`npm set init.author.email "hebersilverio@gmail.com"`
`npm set init.author.url "https://hebersilverio.github.io/Curriculo/"`
`npm set init.licence "MIT"`
`npm set init.version "0.0.0"`

Essas informações serão amarzenadas no arquivo que está neste endereço: 
C:\Users\Windows\.npmrc

## Semantic version

Veja a tudo sobre isso neste site: [Semantic version](https://semver.org/lang/pt-BR/)
Major . Minor . Patch
1.0.0
1.0.1 //Correção de bug é acrescentado apenas no Patch
1.0.2 //Correção de bug é acrescentado apenas no Patch
1.1.0 //Uma nova feature já será acrescentado na Minor e com a nova feature zera o Patch
2.0.0 //Mudou a escrita e métodos e irá quebrar códigos antigos.


#### Para configurar o npm apenas no projeto
Adicione na raiz do projeto um arquivo .npmrc

##### Possíveis configurações
Coloque no arquivo .npmrc
`progress = false` //Retirar a barra de progresso ao instalar uma dependência:
`save-prefix = '~'` //Muda a instalação de ^ para ~ no package.json
`save-exact = true` // ao dar um novo npn install vai sempre instalar apenas a versão que está no package.json

O Sinal de **^** permite ao dar um novo npn install seu-pacote atualizar o Minor e também Patch
O Sinal de **~** permite ao dar um novo npn install seu-pacote atualizar apenas o Patch

```
Exercicio:
colocar no package.json
"dependencies": {
   "bootstrap": "~4.0.0",
   "jquery": "^3.0.0",
   "lodash": "4.0.0",
}
E rodar npm install e ver o que acontece
```
"bootstrap": "~4.0.0", // **~** permite atualizar apenas o Patch
"jquery": "^3.0.0", // **^** permite atualizar o Minor e também Patch
"lodash": "4.0.0", // Permite apenas a instalação da versão exata.

## Arquivos comuns em diversos projetos
Arquivo de liçença:
`npx license "MIT" -o "HS Tech" > LICENSE` Gera o arquivo de linçença.

`npx covgen "hebersilverio@gmail.com"` Gera o arquivo de código de conduta

`echo "# Changelog" > CHANGELOG.md` // Gera o arquivo changelog

Utilizar playlist do canal serfrontend
https://youtu.be/iAHqJKWbifo