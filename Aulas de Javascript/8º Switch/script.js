let numero = document.getElementById("numero")
let resposta = document.getElementById("resposta")

function apertar(){
    switch(numero.value){
        case "1":
            resposta.innerHTML = "você escolheu, Maçã";break;
        case "2":
            resposta.innerHTML = "você escolheu, 2";break;
        case "3":
            resposta.innerHTML = "você escolheu, 3";break;
        case "4":
            resposta.innerHTML = "você escolheu, 4";break;
        default:
            resposta.innerHTML = "não tem essa parada";break;
    }
}