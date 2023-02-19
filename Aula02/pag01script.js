function calcularMedia()
{
    let n1 = document.getElementById("txtN1").value
    let n2 = document.getElementById("txtN2").value
    let n3 = document.getElementById("txtN3").value
    let n4 = document.getElementById("txtN4").value

    let media = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4)) / 4

    document.getElementById("media").innerHTML = "Média: " + media

    //Verificar se a média é maior ou igual à 7 o status deve ser Aprovado
    //Se a média for menor do que 7 o status deve ser Reprovado.

    if(media >= 7)
    {
        document.getElementById("status").innerHTML = "Aprovado"
    }
    else
    {
        document.getElementById("status").innerHTML = "Reprovado"
    }
}

function calcularMedia2()
{
    let n1 = document.getElementById("txtN1").value

    //alert(Number.isInteger(n1) + " " +n1)
    //lert(Number.isNaN(n1) + " " +n1)

    if(n1.trim() == "")
    {
        alert("erro, n1 deve ser informado")
        document.getElementById("txtN1").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    if(n1 < 0 || n1 > 10)
    {
        alert("erro, n1 deve estar 0 a 10")
        document.getElementById("txtN1").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

   /*if(Number.isInteger(n1) == false)
    {
        alert("erro, n1 deve ser numérico")
        document.getElementById("txtN1").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }*/
    
    n1 = parseFloat(n1)
    
    if(Number.isNaN(n1) == true)
    {
        alert("erro, n1 deve ser numérico")
        document.getElementById("txtN1").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }


    let n2 = document.getElementById("txtN2").value
    let n3 = document.getElementById("txtN3").value
    let n4 = document.getElementById("txtN4").value

    let media = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4)) / 4

    document.getElementById("media").innerHTML = "Média: " + media

    //se a média for maior ou igual à 7 o status deve ser Aprovado
    //se a média for menor do que 5 reprovado
    //se a média for entre 5 e 7 exame

    if(media >= 7)
    {
        document.getElementById("status").innerHTML = "Aprovado"
    }
    else if(media < 5)
    {
        document.getElementById("status").innerHTML = "Reprovado"
    }
    else
    {
        document.getElementById("status").innerHTML = "Exame"
    }

}