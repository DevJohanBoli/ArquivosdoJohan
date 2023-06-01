let VidaHeroi;
let AtaqueDoHeroi;
let XPHeroi;
let NivelHeroi;
let ClassesDosHerois = ["Mago","Ninja","Viking"];
let NomeDoHeroi;
let mensagemDoNome;

NomeDoHeroi = document.getElementById("NomeDoPersonagem");
mensagemDoNome = document.getElementById("Mensagem")

function Enviar()
{
    if(NomeDoHeroi.value != "")
    {
        mensagemDoNome.innerHTML = "Olá, " + NomeDoHeroi.value + ". Seja bem vindo ao jogo!"
    }
    else
    {
        mensagemDoNome.innerHTML = "Digite o seu nome para iniciarmos o jogo!"
    }
}


