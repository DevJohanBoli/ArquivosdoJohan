function MinhaFunçao(){
    //Criar um elemento LI
    let li = document.createElement("li");
    //criar um Texto
    let texto = document.createTextNode(nome.value);

    //adicionar um texto no Elemento
    li.appendChild(texto)
    //adicionar o li na MinhaLista
    document.getElementById("MinhaLista").appendChild(li)
}