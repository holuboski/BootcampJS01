console.log("Hello World! Olá Mundo!")

{
    let nome = "Pedro Legal"
    //console.log(nome)
}
console.log(nome) //Vai dar erro, o nome so funciona no escopo por ser let

{
    var nome2 = "Pedro Legal"
}
console.log(nome2)

let nome3 = "Pedro Legal"
console.log(nome3)
{
    console.log(nome3)
}

{
    //console.log(nome)
    console.log(nome2)
    console.log(nome3)
}

// Tipos de variáveis
{
    // Number
    let N1 = 16
    let N2 = 7.5

    // String
    let nome4 = "Pedro legal"

    // Booleans
    let v1 = true
    let v2 = false

    // Array Objects
    let carros = ["volks", "fiat", "ford"]

    // Date object
    let date = new Date("2023-02-12")
}

{
    const PI = 3.14
    let largura = 300

    //PI = 3.15
    largura = 400
}

// Concatenar
{
    let nome = "Pedro"
    let sobrenome = "Legal"
    let nomeCompleto

    nomeCompleto = nome + " " + sobrenome

    console.log("Seu nome completo é " + nomeCompleto)
}

// Resto
{
    let N1
    let result
    
    N1 = 19

    result = N1 % 2

    console.log(result)
}

let x = 10
let y = 25
let result

result = x + y
console.log ("Soma: " + result)
result = x - y
console.log ("Subtração: " + result)
result = x * y
console.log ("Multiplicação: " + result)
result = x / y
console.log ("Divisão: " + result)
result = x % y
console.log ("Resto da divisão : " + result)
result = x ** y
console.log ("Exponenciação: " + result)