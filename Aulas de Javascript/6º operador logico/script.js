let idade = document.getElementById("idade");
let titulo = document.getElementById("titulo");
let resultado = document.getElementById("resultado");

function Apertar(){
    if(idade.value >=16 && titulo.value == "Sim")
    {
    alert("você podera votar")
    }
    else
    {
     alert("Não podera votar")
    }
}