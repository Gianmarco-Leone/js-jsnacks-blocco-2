// TRACCIA:
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// SVOLGIMENTO:
// Inserisci numero
let myNumber = parseInt(prompt("Scegli un numero?"));
// SE numero pari
if (myNumber % 2 == 0) {
    // stampi numero
    myOutputNumber = myNumber;
    console.log(myOutputNumber);
    // ALTRIMENTI stampi numero successivo
} else {
    myOutputNumber = myNumber + 1;
    console.log(myOutputNumber);
}

document.getElementById("output_number").innerHTML = myOutputNumber;