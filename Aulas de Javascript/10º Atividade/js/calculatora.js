let numero = document.getElementById("numero1")
let sinal = document.getElementById("sinal")
let numero2 = document.getElementById("numero2")
let resultado = document.getElementById("resultado")

function Aperte()
{
  switch(sinal.value)
  {
    case "+":
    let soma = parseInt(numero.value) + parseInt(numero2.value)
    resultado.innerHTML = soma
    break;

    case "-":
    let substração = parseInt(numero.value) - parseInt(numero2.value)
    resultado.innerHTML = substração
    break;

    case "*":
    let multiplicar = parseInt(numero.value) * parseInt(numero2.value)
    resultado.innerHTML = multiplicar
    break;

    case "/":
    let dividir = parseInt(numero.value) / parseInt(numero2.value)
    resultado.innerHTML = dividir
    break;

    default:
    resultado.innerHTML = ""
    break;
  }
}