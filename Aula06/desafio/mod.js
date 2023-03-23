class Aluno {
    constructor(nome,n1,n2,n3,n4){
        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;
        this.n4 = n4;
        this.nome = nome;
    }

    Situacao(){
        let media = (this.n1 + this.n2 + this.n3 + this.n4) / 4;
        let status = "";
        if(media >= 7)
        {
            status = "Aprovado";
        }
        else if(media < 5)
        {
            status = "Reprovado";
        }
        else
        {
            status = "Exame";
        }
        console.log(`O aluno ${this.nome} está ${status}`);
    }
}

exports.Aluno = Aluno;