const url = 'http://localhost:3000/users/';

function getAllUsers(){
    axios.get(url)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
}

function getUserById(idUser){
    axios.get(url + idUser)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
}

function createUser() {
    axios.post(url, {
        nome: document.getElementById('inputName').value,
        email: document.getElementById('inputEmail').value,
        senha: document.getElementById('inputSenha').value,
        cpf: document.getElementById('inputCPF').value,
        telefone: document.getElementById('inputTelefone').value,
        uf: document.getElementById('inputEstado').value,
        sexo: document.getElementById('inputSexo').value
    })
    .then(function (response) {
        console.log(response);
        document.getElementById('alert-sucesso').style.display = 'flex';
        setTimeout(() => {
            window.location.reload(true);
        }, 1500);
    })
    .catch(function (error) {
        console.error(error);
        document.getElementById('alert-erro').style.display = 'flex';
    });
    
}