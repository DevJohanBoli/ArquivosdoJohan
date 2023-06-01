//Crie função para identificar se o número é par ou impar
//ParouImpar(5)
//ParouImpar(4) 

function parOuImpar(a)
{
    if(a % 2 == 0)
    {
        return console.log("Par")
    }
    else
    {
        return console.log("impar")
    }
}

let imPar = (b) => 
{
    if(b % 2 == 0)
    {
        return console.log("Par")
    }
    else
    {
        return console.log("impar")
    }
}

b % 2 == 0? console.log("sim") : console.log("Não"); 