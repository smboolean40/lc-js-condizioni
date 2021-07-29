// chiedere all'utente con due prompt il nome di due persone e comunicare quale nome e piu lungo
// 1) chiedo all'utente il primo nome
var nome1 = prompt('Inserisci il primo nome');
// 2) chiedo all'utente il secondo nome
var nome2 = prompt('Inserisci il secondo nome');
// 3) se  il primo nome e piu lungo del secondo = il primo e piu lungo
// 4) se  il secondo nome e piu lungo del primo = il secondo e piu lungo
// 5) i nomi hanno la stessa lunghezza
if ( nome1.length > nome2.length ) {
	alert("il primo nome e piu lungo del secondo");
} else if ( nome2.length > nome1.length ) {
	alert("il secondo nome e piu lungo del primo");

} else {
	alert("i nomi hanno la stessa lunghezza");
}