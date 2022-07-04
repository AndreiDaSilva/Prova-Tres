class Pessoa {

    constructor(id, nome, departamento, endereco, email) {
        this.id = id;
        this.nome = nome;
        this.departamento = departamento;
        this.endereco = endereco;
        this.email = email;
    }
    
    getNome() {
        return this.nome;
    }
    
    getEMail() {
        return this.email;
    }
}