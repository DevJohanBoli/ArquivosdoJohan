let numero = document.getElementById("numero")
let resposta = document.getElementById("resposta")

function apertar(){
    switch(numero.value){
        case "1":
            resposta.innerHTML = "Domingo";break;
        case "2":
            resposta.innerHTML = "Segunda-feira";break;
        case "3":
            resposta.innerHTML = "Terça-feira";break;
        case "4":
            resposta.innerHTML = "Quarta-feira";break;
        case "5":
            resposta.innerHTML = "Quinta-feira";break;
        case "6":
            resposta.innerHTML = "Sexta-feira";break;
        case "7":
            resposta.innerHTML = "Sábado";break;

        default:
            resposta.innerHTML = "não tem essa parada";break;
    }
}