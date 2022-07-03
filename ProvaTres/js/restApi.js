// Get API RESTFul

function consultarCodigo(id) {
    fetch("https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/" + id, {method:"get"})
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('codigo').value = data.id;
        document.getElementById('nome').value = data.nome;
        document.getElementById('departamento').value = data.departamento;
        document.getElementById('endereco').value = data.endereco;
        document.getElementById('email').value = data.email;
    })
}


