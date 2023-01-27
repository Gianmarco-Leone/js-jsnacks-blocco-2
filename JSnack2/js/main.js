// TRACCIA:
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numbers = [];
const myArrayLength = Math.floor(Math.random() * 10) + 1;

for (let i = 0; i < myArrayLength; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumber);
}

for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    if (currentNumber % 2 == 0) {
        document.getElementById("first").innerHTML += currentNumber + " ";
    } else {
        document.getElementById("second").innerHTML += currentNumber + " ";
    }
}