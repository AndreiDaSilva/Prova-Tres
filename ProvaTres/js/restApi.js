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

async function deleteDado(id) {
    const response = await fetch(url + id, { method: "DELETE" });
    const data = await response.json();
    msgAlerta(data);
}

async function inserirDado() {
    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({
            id: parseInt(document.getElementById("id").value),
            nome: document.getElementById("nome").value,
            departamento: document.getElementById("departamento").value,
            endereco: document.getElementById("endereco").value,
            email: document.getElementById("email").value
        }),
        headers:{
            'Contet-type': 'aplication/json; charset=UTF-8'
        }
    })
    .then(dadosBrutos => dadosBrutos.json())
    .then(dadosJSON => mostraResultadoSalvar(dadosJSON));
    
    const data = await response.json();
    msgAlerta(data);

}

function msgAlerta(data) {
    const divMsg = document.getElementById("msgAlerta");
    const msg = data.mensagem;
    if (data.status === "Ok") {
        divMsg.classList.remove("alert-danger");
        divMsg.classList.add("alert-success");
        
        divMsg.innerHTML = msg;
    } else {
        divMsg.classList.remove("alert-success");
        divMsg.classList.add("alert-danger");
        divMsg.innerHTML = msg;
    }
}
