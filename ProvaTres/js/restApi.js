const url = "https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/";


//GET Dado
async function consultarCodigo(id) {
    const response = await fetch(url + id, {method: "GET"});
    const data = await response.json();
    getNome(data);
    getEmail(data);

}

function getNome(data){
    const nome = data.nome;
    console.log(nome);
}

function getEmail(data) {
    const email = data.email;
    console.log(email);
}




