//unidimensionais
//podemos criar vetores assim: 
const num1 = new Array(30,-1,5,3,121)

//ou podemos fazer:
const num2 = [-2,40,16,111,33,64]

console.log(num1)
console.log(num2)

//acessando elemento diverso dos arrays

console.log(`primeiro elemento do num1: ${num1[0]}`)
console.log(num2[0])

//acesse o terceiro elemento()

console.log(num1[2])

//acesse o quinto elemento de num2

console.log(num2[4])

//somando
console.log(num1[0] + num1[1])

//arrays Bidimensionais
console.clear();

const matrix = [
    ['banana', 'maçã', 'pêra'],
    ['laranja', true, 1],
    [null, "uva", -350],
];

console.log(matrix)

console.log(matrix[0])
console.log(matrix[0][1])
console.clear();

//alterar um valor de array
let moedas = ['real', 'dolar', 'coroa', 'peso'];

console.log(moedas);
moedas[1] = 'yen';
console.log(moedas);

let matrix2 = [
    [1,2,3],
    [4,5,6],
]

console.log(matrix2)

matrix2[0][1]=10
console.log(matrix2)

//tamanho de arrays
let vetor = [0,1,2,3,4];
console.log(vetor.length);
console.clear();
//remover ou inserir elementos
//pop() <--remover o ultimo elementos
const frutas= ["laranja", "banana", "mangas"];
let x= frutas.pop("mangas")
console.log(frutas)
console.log(x)

//shift <- Remover o primeiro
let y = frutas.shift()
console.log(frutas);

//delete <-remove qualquer um
const veiculos = ["carro", "barco", "moto"]
delete veiculos[0];
console.log(veiculos);

let z= veiculos.push("aviao")
console.log(veiculos)