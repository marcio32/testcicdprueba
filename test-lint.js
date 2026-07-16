// test-lint.js

const variableInutil = "hola" // <-- ESLint va a chillar por variable sin usar (no-unused-vars)

function sumar(a,b){
return a+b; // <-- Prettier va a chillar por falta de espacios y mal formateo
}

console.log( sumar( 2, 3 ) ) // <-- Prettier prefiere un formato limpio aquí