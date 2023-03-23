const nome = "Pedro";
const sobrenome = "Holuboski";

const falaNome = () => {
    console.log(nome, sobrenome, "Pedro Legal");
}

//console.log(module);

// modo completo
    //module.exports.nome = nome
    //console.log(module.exports)

// modo simplificado
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

//console.log(exports);