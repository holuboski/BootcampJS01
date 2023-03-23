class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    apresentacao() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`)
    }
}

exports.Pessoa = Pessoa;