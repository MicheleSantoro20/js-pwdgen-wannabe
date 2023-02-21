
// Richiesta nome

const nomeUtente = prompt("Inserisci qui il tuo nome");

document.getElementById("nome").innerHTML = `Nome: ${nomeUtente}`;

console.log = (nomeUtente);

// Richiesta Cognome

const cognomeUtente = prompt("Inserisci qui il tuo Cognome");

document.getElementById("cognome").innerHTML = `Cognome: ${cognomeUtente}`;

console.log = (cognomeUtente);

// Richiesta Colore Preferito

const colorePreferito = prompt("Inserisci qui il tuo Colore preferito");

document.getElementById("colore").innerHTML = `Colore Preferito: ${colorePreferito}`;

console.log = (colorePreferito);

// Concatenazione

const concatenazioneDati = nomeUtente + cognomeUtente + colorePreferito + "23";

document.getElementById("concatenazione").innerHTML = `${concatenazioneDati}`;
