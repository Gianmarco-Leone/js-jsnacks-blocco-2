// TRACCIA:
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

// SVOLGIMENTO:
// Crea array 1
const myArray1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// Crea array 2 con meno elementi dell'array 1
let myArray2 = ["a", "b", "c"];

// SE array 2 ha meno elementi dell array 1 aggiungi elementi a array 2
for (let i = 0; i < myArray1.length && myArray1.length != myArray2.length; i++) {
    if (myArray2.length < myArray1.length) {
        myArray2.push("nuovo elemento");
        // ALTRIMENTI esci dal ciclo
    }
    console.log(myArray2);
}