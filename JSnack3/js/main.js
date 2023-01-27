// TRACCIA:
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

// SVOLGIMENTO:
// Crea array di numeri interi
const numbers = [];
const myArrayLength = Math.floor(Math.random() * 10) + 1;

for (let i = 0; i < myArrayLength; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumber);
}
let somma = 0;
const numberChoosed = document.getElementById("number_array");
numberChoosed.innerHTML = numbers;
const additionMessage = document.getElementById("somma");

// Identifica numeri nelle posizioni dispari
for (let i = 0; i < numbers.length; i++) {
    if (i % 2 != 0) {
        let selectedNumber = numbers[i];
        // Somma i numeri
        somma += selectedNumber;
    }
}
additionMessage.innerHTML = somma;