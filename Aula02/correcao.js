//Montar um sistema que leia 4 valores e imprima a média desses valores

function mediaSimples()
{
    //alert("teste")
    let n1 = document.getElementById("txtN1-01").value
    let n2 = document.getElementById("txtN2-01").value
    let n3 = document.getElementById("txtN3-01").value
    let n4 = document.getElementById("txtN4-01").value

    let media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4

    console.log(media)
    document.getElementById("resultado").innerHTML = media
}

//Montar um sistema que leia 4 valores e imprima a média ponderada desses valores, sendo valor
// 1 e 2 peso 2 e valor 3 e 4 peso 3
function mediaPonderada()
{
    let n1 = document.getElementById("txtN1-02").value
    let n2 = document.getElementById("txtN2-02").value
    let n3 = document.getElementById("txtN3-02").value
    let n4 = document.getElementById("txtN4-02").value

    let media = (parseFloat(n1)*2 + 
                 parseFloat(n2)*2 + 
                 parseFloat(n3)*3 + 
                 parseFloat(n4)*3)/10
                
    document.getElementById("resultado2").innerHTML = media
}

//Montar um sistema que leia nome do produto, qtde comprada e valor unitário, imprimir o nome do produto, total a ser pago, e total a ser pago com desconto de 15%
function compraProduto()
{
    let nome = document.getElementById("txtNomeProduto").value
    let qtde = document.getElementById("txtQtde").value
    let valor = document.getElementById("txtValor").value
    let vDesconto = 0.15

    let totalCompra = qtde * valor
    let totalDesconto = totalCompra * (1-vDesconto)

    document.getElementById("resultado3").innerHTML =
                "Produto comprado: " + nome + 
                "<br>Total da compra: R$" + totalCompra.toFixed(2) + 
                "<br> Total com Desconto: R$" + totalDesconto.toFixed(2)
}