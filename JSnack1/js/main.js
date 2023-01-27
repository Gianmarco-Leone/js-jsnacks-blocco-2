// TRACCIA:
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// SVOLGIMENTO:
const generateButton = document.getElementById("generate_button");

generateButton.addEventListener(
    "click",
    function () {
        // Inserisci numero
        const inputNumber = document.getElementById("input_number");
        let myNumber = parseInt(inputNumber.value);
        let myOutputNumber;
        // SE numero pari
        if (myNumber % 2 == 0) {
            // stampi numero
            myOutputNumber = myNumber;
            // ALTRIMENTI stampi numero successivo
        } else {
            myOutputNumber = myNumber + 1;
        }

        document.getElementById("output_number").innerHTML = myOutputNumber;
    }
)