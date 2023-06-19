//Importação do arquivo "db.js" no arquivo .js principal do projeto, afim de interagir com métodos e funções do banco de dados.

const database = require('db.js');

//Variáveis:

const nomeAluno = document.querySelector("#nome");
const tipoCurso = document.querySelector("#tipoCurso");
const cursoRealizado = document.querySelector("#curso");
const matricula = document.querySelector("#matricula");
let dadosFormulario;

//Funções:

function salvaForm(dadosFormulario) {

    console.log("Função 'salvaForm' executada.");

    const query = 'INSERT INTO alunos (nome, matricula) VALUES (?,?)';
    const values = [dadosFormulario.nome, dadosFormulario.matricula];

    connection.query(query, values, (error, results) => {

        if(!error) {

            console.log("Formulário enviado com sucesso!");

        }

        else {

            console.log("Erro ao enviar formulário.", error);


        }

        connection.end(); // Encerra a conexão com o banco de dados

    });

}

//Eventos:

document.addEventListener("submit", (event) => {

    dadosFormulario = {

        nome: form.elements.nome.value,
        tipoCurso: form.elements.tipoCurso.value,
        curso: form.elements.curso.value,
        matricula: form.elements.matricula.value
    
    };

    
    salvaForm();

});
