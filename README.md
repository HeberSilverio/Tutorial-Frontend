# Primeiro projeto nodejs

## Utilizando o nodejs
- Utilize `npm install nome-do-pacote` para inserir pacotes
- Utilize `npm uninstall` para remover um pacote
- Para instalar uma versão específica Utilize `npm install nome-do-pacote@4.3.1` para remover um pacote

## Iniciar um projeto e instalar pacotes (com npm e npx)

#### 1 - Crie ferramentas executadas diretamente da linha de comando
Com o NPM nós podemos criar ferramentas executadas diretamente do terminal inteiramente com JavaScript.

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

5 - Procurar por pacotes não declarados no package.json
É um grande problema quando alguém esquece de indicar uma dependência no package.json. Mas não tem problema, pois com o seguinte comando você poderá ver quais são os pacotes utilizados no seu projeto que não estão listados: $ npm prune

6 - Inicie um pacote rapidamente
O comando $ npm init nos permite iniciar um pacote, criando o arquivo package.json de acordo com certas respostas que damos às perguntas feitas.

Mas você pode pular as perguntas, fazendo com que o arquivo package.json seja criado imediatamente. Basta adicionar -y ao comando: $ npm init -y

7 - Analisar dependências desatualizadas
Também podemos verificar se há dependências desatualizadas em nosso projeto. Basta executar o comando $ npm outdated

8 - Trave a versão de suas dependências
Se quiser travar a versão das dependências do seu projeto, simplemente execute o comando $ npm shrinkwrap

Isso irá criar um arquivo npm-shrinkwrap.json. Ao instalar as dependências do projeto, as versões definidas neste arquivo que serão levadas em consideração.

9 - Instalação de produção
No package.json nós podemos salvar as dependências em dependencies e devDependencies. Esta última é a lista de dependências usadas apenas durante o desenvolvimento.

Caso você não vá desenvolver nada onde está instalando seu projeto, com o seguinte comando é possível instalar as dependências do projeto, ignorando as dependências de desenvolvimento: $ npm install --production

10 - Lista de pacotes instalados
Podemos ver uma lista de pacotes instalados com o comando: $ npm ls --depth 0

Esse comando é ainda mais útil quando queremos saber quais módulos globais possuímos instalado em nossa máquina: $ npm ls -g --depth 0

Conclusão
O NPM é uma ferramenta que muitos usam mas poucos sabem usar totalmente o seu poder. Para mais informações, confira nosso Curso de NPM.


## node_modules e gitignore
## npm-scripts
## Configurar o npm
## Arquivos comuns em diversos projetos
## Semantic Version

Utilizar playlist do canal serfrontend
https://youtu.be/iAHqJKWbifo