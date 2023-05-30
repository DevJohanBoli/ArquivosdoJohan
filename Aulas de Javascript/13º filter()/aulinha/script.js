//filter() cria um vetor/array com o resultado do filtro aplicado pelo método, ou seja, os elementos que "passaram" ma condição configurada no filtro.

let idade = [20,19,17,26,27]

let mostrar = document.getElementById("desmotracao")
mostrar.innerHTML = idade.filter(MaiordeIdade);

function MaiordeIdade(idade){
    return idade >=17;
}

