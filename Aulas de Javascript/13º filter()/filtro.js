let idade = [1,2,3,4    ,5,6,7,8,6,7,8,9,10,12,13,14,15]
let receber = document.getElementById("receber")
let Testando = document.getElementById("Testando")

Testando.innerHTML = idade.filter(MaiordeIdade)

function MaiordeIdade(idade){
    return idade > receber.value
}
function executar(){
    mostrar.innerHTML = idade.filter(MaiordeIdade)
}