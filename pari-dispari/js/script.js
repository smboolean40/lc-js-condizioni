// chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. 
// Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 
// Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

// 1) chiedere all'utente se vuole pari o dispari
var sceltaUtente = prompt("Inserisci pari o dispari");
sceltaUtente = sceltaUtente.toLowerCase();
console.log("Scelta Utente: " + sceltaUtente);
// 2) chiedere all'utente un numero intero compreso tra 1 e 9
var numeroUtente = parseInt(prompt("Inserisci un numero fra 1 e 9"));
if ( !(numeroUtente > 0 && numeroUtente < 10) ) {
	numeroUtente = parseInt(prompt("Occhio!!!!!!! Inserisci un numero fra 1 e 9"));
}
console.log("Numero Utente: " + numeroUtente);
// 3) Generare un numero casuale compreso tra 1 e 9 (CPU)
var numeroCpu = Math.floor(Math.random() * 9) + 1;
console.log("Numero Cpu: " + numeroCpu);
// 4) Somma del numero dell'utente col numero random cpu [2 + 3 = 5]
var somma = numeroUtente + numeroCpu;
console.log("Somma: " + somma);
// 5) Verifico se il numero e' pari o dispari [dispari]
var sommaPariDispari;
if( somma % 2 == 0 ) {
	//pari
	sommaPariDispari = 'pari';
} else {
	//dispari
	sommaPariDispari = 'dispari';
}
// 6) Verifico il risultato del numero (pari o dispari) con quello che ha scelto l'utente
if ( sommaPariDispari == sceltaUtente ) {
	alert("Hai vinto!");
} else {
	alert("Hai perso! Ritenta!");
}