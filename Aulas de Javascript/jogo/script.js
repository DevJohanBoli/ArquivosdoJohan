let VidaHeroi;
let AtaqueHeroi;
let XPHerois;
let NivelHeroi;
let ClassesDosHerois = ["Mago","ninja","viking"];
let NomeDoHeroi;
let mensagemDoNome;

NomeDoHeroi = document.getElementById("NomedoPersonagem");
mensagemDoNome = document.getElementById("Mensagem")

function Enviar(){
    if(NomeDoHeroi.value !=""){
        mensagemDoNome.innerHTML = "Olá, " + NomeDoHeroi.value + ". seja bem Vindo ao Jogo!"
    }
    else{
        mensagemDoNome.innerHTML = "Digite o seu nome para iniciarmos o jogo!"
    }
    
}