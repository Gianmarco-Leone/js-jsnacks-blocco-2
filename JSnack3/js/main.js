// TRACCIA:
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

// SVOLGIMENTO:
// Crea array di numeri interi
const numbers = [21, 33, 4, 56, 87, 15, 20];
let somma = 0;
const numberChoosed = document.getElementById("number_array");
const additionMessage = document.getElementById("somma");

// Identifica numeri nelle posizioni dispari
for (let i = 0; i < numbers.length; i++) {
    if (i % 2 != 0) {
        let selectedNumber = numbers[i];
        numberChoosed.innerHTML += selectedNumber + " ";
        // Somma i numeri
        somma += selectedNumber;
    }
}
additionMessage.innerHTML = somma;