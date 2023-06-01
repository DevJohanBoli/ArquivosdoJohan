//Eventos

/*No javascript, eventos são ações ou ocorrencias que acontecem na pagina web que estamos implementando. Esses eventos geralmente invocam funçoes que irão execuatr as operações desejadas. Exemplo de eventos são: o usuário clica em um botão na pagina.*/

/*Exemplos de eventos:
- Clicar no mouse
- Quando a pagina é carregada
- Quando uma imagem foi carregada
- Quando o mouse passa sobre o elemento
- Quando um formulario HTML e enviado.*/

let nome = document.getElementById('ABC')
function mudar(){
    nome.innerHTML = "São os alunos de Santo Amaro S2";
}

let dataDeHoje = document.getElementById('demo')
function Data(){
    dataDeHoje.innerHTML = Date()
}

function carregarAviso(){
    alert('Voce acesou a página')
}


let = document.getElementById('obj')
function MudarDeFrase(){
    obj.innerHTML = 'obrigado'
}
function VoltaAFrase(){
    obj.innerHTML = 'Passe o Mouse aqui'
}