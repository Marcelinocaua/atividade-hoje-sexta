function registrarUsuario (event) {
    event.preventDefault()

    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
   

    console.log(nome, email)

    var mysql2 = require('mysql2');
    var connection = mysql2.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "atividade-hoje-sexta",
    })

    connection.connect(function(error) {

        if (error) {
            console.log(error.code);
            console.log(error.fatal);
        }
    })

    var query = `INSERT INTO pessoa (nome, email) VALUES ("${nome}", "${email}")`;

    connection.query(query, function(error){
        if(error){
            console.log("Ocorreu um erro ao inserir no banco de dados");
        } else {
            alert("Usuário cadastrado com sucesso!!!");
        }
    }) 
}


//add evento de submit no formulario
var cadastro = document.getElementById('cadastro')
cadastro.addEventListener('submit', registrarUsuario)