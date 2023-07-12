// EXEMPLO 1
var nome = 'Fulano'
var nome = 'Juliano'

// Funciona normalmente
console.log(nome)


// EXEMPLO 2
var z = 'Maria'
z = 15
console.log(z) // 15

// EXEMPLO 3
if(true) {
    var idade = 15
}

// Funciona normalmente
console.log(idade);


if(true) {
    let idade = 15
}

console.log(idade)

// EXEMPLO 4
let nota1 = 10.0
//let nota1 = 8.2 // Gera um erro


let nota2 = 10.0
nota2 = 8.2 // Funciona normalmente

// EXEMPLO 5
const PI = 3.14
PI = 3.2

console.log(PI);