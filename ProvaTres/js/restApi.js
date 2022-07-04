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

    const json = JSON.stringify({
        id: parseInt(document.getElementById("codigo").value),
        nome: document.getElementById("nome-formulario").value,
        departamento: document.getElementById("departamento").selectedOptions[0].label,
        endereco: document.getElementById("endereco").value,
        email: document.getElementById("email-formulario").value
    });

    const response = await fetch(url, {
        method: "PUT",
        body: json,
        headers:{ 'Content-type': 'application/json; charset=UTF-8' }
    });
    
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
