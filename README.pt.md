# Formulário de Registro de Alunos #

Registro de alunos criado com HTML/CSS, com as dependências Mysql2 e Express do Node.Js e MySQL .

Esse projeto foi criado com o intuito de integrar tecnologias front-end com um banco de dados relacional, utilizando HTML para inserção de comandos de entrada e Node.Js para criação de um servidor web e realização de consultas SQL. Nesse projeto, aprendi a:

* Utilizar o gerenciador de pacotes do Node.JS.

* Estabelecer uma conexão com um banco de dados e um servidor Node à partir do Mysql2.

* Manipular solicitações e métodos HTTP para envio de formulários.

* Gerenciar rotas, utilização de middleware para formatação de conteúdo de solicitações HTTP, assim como sua requisição para uso no servidor, e realização de consultas SQL com Express.JS de forma segura.

## Instalação

Instale o Node.JS de acordo com sua máquina e requerimentos:

https://nodejs.org/en/download

Instale o WAMP (ou XAMPP caso não seja um usuário de Windows) para ter acesso ao MYSQL e ao PHPMyAdmin para uma interação mais acessível ao banco de dados:

WAMP: https://www.wampserver.com/en/download-wampserver-64bits/#  

XAMPP: https://www.apachefriends.org/pt_br/download.html

Após instalar o Node, em uma IDE ou diretamente no terminal, execute essas linhas de código para instalar as dependências Mysql2 e Express:

`npm install`

Caso seja utilizado um terminal para a instalação dos pacotes, é necessário que o diretório raiz do projeto seja selecionado, para que o package.json seja lido, e com isso, sejam detectadas e instaladas as dependências necessárias.

## Acessando o projeto ##

Após seguir os passos no tópico de instalação, inicie o **WAMP** ou o **XAMP** para que o servidor MySQL fique ativo. Após isso, crie o banco de dados no terminal ou pelo PhpMyAdmin utilizando o arquivo **cadastroalunos.sql**

Com o banco de dados criado e o MySQL iniciado, é necessário executar o seguinte comando no diretório no terminal/projeto:

`npm start`

Isso fará com que o servidor node inicie-se, preparando para receber solicitações HTTP do formulário.

Feito isso, basta abrir o **index.html** em um navegador, inserir informações nele e pressionar o botão de enviar. Caso todas as etapas tenham sido realizadas corretamente, será exibida a mensagem "registro criado com sucesso", e o banco de dados terá um novo registro com as informações inseridas.










