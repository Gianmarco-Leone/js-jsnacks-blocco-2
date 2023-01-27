// TRACCIA:
// Dato un array contenente i risultati di una squadra (vittorie, pareggi e sconfitte) [W, W, L, X, X, W, L, X], stampare a video il numero di vittorie, il numero di pareggi ed il numero di sconfitte.

// SVOLGIMENTO
// Creo array
const result = ["W", "W", "L", "X", "X", "W", "L", "X"];
let vittorie = 0;
let sconfitte = 0;
let pareggi = 0;

for (let i = 0; i < result.length; i++) {
    let matchResult = result[i];
    // Identifico numero vittorie
    if (matchResult == "W") {
        vittorie++;
        // Identifico numero sconfitte
    } else if (matchResult == "L") {
        sconfitte++;
        // Identifico numero pareggi
    } else {
        pareggi++;
    }

}
console.log("Vittorie: " + vittorie);
console.log("Sconfitte: " + sconfitte);
console.log("Pareggi: " + pareggi);

document.getElementById("output_message").innerHTML = "Vittorie: " + vittorie + " Sconfitte: " + sconfitte + " Pareggi: " + pareggi;