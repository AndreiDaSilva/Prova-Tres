const url = "https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/";

//GET Dado
async function consultarCodigo(id) {
    const response = await fetch(url + id, { method: "GET" });
    const data = await response.json();
    mostrarDados(data);
    
}


function getNome(data) {
    const nome = data.nome;
    document.getElementById('nome').value = nome;
}

function getEmail(data) {
    const email = data.email;
    document.getElementById('email').value = email;
}

function mostrarDados(data) {
    getNome(data);
    getEmail(data);
}

async function deleteDado(id){
    const response = await fetch(url + id, {method: "DELETE"});
    const data = await response.json();
    msgAlerta(data);
}

async function inserirDado() {
    const response = await fetch(url, {method: "PUT"});
}

function msgAlerta(data){
    if (data.status === "Ok") {
        alert(data.mensagem)
    } else {
        alert(data.mensagem)
    }
}

