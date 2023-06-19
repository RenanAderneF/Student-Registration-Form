const mysql = require('mysql2'); //Importando dependência MySQL2 no projeto:

const connection = mysql.createConnection({//Criando conexão com o banco de dados:
    
    host: 'localhost', //Máquina hospedando banco de dados
    user: 'root', //Nome de usuário
    database: 'cadastroalunos' //Nome do banco
});

//Estabelecendo conexão com o banco de dados:

connection.connect(function(error){

    if(!error) {

        console.log("Conexão com o banco de dados realizada com sucesso.");
        return;
    
    }

    else {

        console.log("Erro ao conectar ao banco de dados", error);


    }
    
});

module.exports = connection; //Exportando conexão do banco de dados.

