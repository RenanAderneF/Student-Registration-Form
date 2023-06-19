const express = require('express'); //Importando "dependência" express no projeto.

const db = require('./db.js'); //Importando conteúdo de "db.js" a fim de ter acesso às suas variáveis e funções. Nesse caso, a variável db recebe o valor da conexão estabelecida.

const app = express(); //Cria uma variável "app" que chama a função express(), que seria uma instância do próprio framework, sendo possível, por ele, acessar todas as funcionalidades que possui.

const bodyParser = require('body-parser'); // Importando o body-parse, responsável por converter os dados importados pela requisição HTTP de seu estado formato para o original.

app.use(bodyParser.urlencoded({ extended: false })); //Faz o parsing de dados formatados em application/x-www-form-urlencoded.

const port = 3000; //A porta pela qual o servidor será inicializado.

app.post("/", function(req, res){

  const {matricula, nome, telefone, endereco, tipoEnsino, formacao, situacao, curso} = req.body;

  let codigoCurso;

  switch(curso) {

    case 'Ciência da Computação':

      codigoCurso = '5439';
      break;

    case 'Direito':
      
      codigoCurso = '8429';
      break;

    case 'Nutrição':

      codigoCurso = '2938';
      break;

    case 'Odontologia':

      codigoCurso = '4234';
      break;
  }

  //Query SQL para inserir os dados no banco de dados

  const sql = 'INSERT INTO alunos (codigoCurso, matricula, nome, telefone, endereco, tipoEnsino, formacao, situacao) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(sql, [codigoCurso, matricula, nome, telefone, endereco, tipoEnsino, formacao, situacao], (error, results) => {
  
    if (error) {

      console.error('Erro ao inserir registro:', error);
      res.status(500).send('Erro ao inserir registro no banco de dados');
    } 
  
    else {

      console.log('Novo registro criado:', results.insertId);
      res.send('Registro criado com sucesso');
    }
  });
});


app.listen(port); //O servidor ouvirá solicitações HTTP da porta especificada.

  
