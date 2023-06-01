let ReceberValor = document.getElementById("recebeValor");
let resultado = document.getElementById("parOuImpar")

function PAR()
{
    if(ReceberValor.value % 2 == 0)
    {
        resultado.innerHTML = "Par"
    }
    else
    {
        resultado.innerHTML = "Impar"
    }
}
