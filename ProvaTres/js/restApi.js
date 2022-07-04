const url = "https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/";

//GET Dado
async function consultarCodigo(id) {
    const response = await fetch(url + id, { method: "GET" });
    const data = await response.json();
    const pessoa = new Pessoa(data.id, data.nome, data.departamento, data.endereco, data.email);
    mostrarDados(pessoa);
}

function mostrarDados(pessoa) {
    document.getElementById('nome').value = pessoa.getNome();
    document.getElementById('email').value = pessoa.getEMail();
}

async function deleteDado(id) {
    const response = await fetch(url + id, { method: "DELETE" });
    const data = await response.json();
    msgAlerta(data, "msgAlerta");
}

async function inserirDado() {

    const json = JSON.stringify(new Pessoa(parseInt(document.getElementById("codigo").value),
                                            document.getElementById("nome-formulario").value,
                                            document.getElementById("departamento").selectedOptions[0].label,
                                            document.getElementById("endereco").value,
                                            document.getElementById("email-formulario").value
    ));

    const response = await fetch(url, {
        method: "PUT",
        body: json,
        headers:{ 'Content-type': 'application/json; charset=UTF-8' }
    });
    
    const data = await response.json();
    msgAlerta(data, "msgAlert-2");

}

function msgAlerta(data, elementId) {
    const divMsg = document.getElementById(elementId);
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
