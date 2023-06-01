let idade =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let mostrar = document.getElementById("mostrar");
let receber = document.getElementById("receber");

function MaiorIdade(idade)
{
    return idade > receber.value
}

function apertar()
{
    mostrar.innerHTML = idade.filter(MaiorIdade)
}