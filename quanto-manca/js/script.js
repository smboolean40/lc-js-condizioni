// utilizzando le funzioni dell'oggetto Date, stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.

// 1) creo l'oggetto date
var date = new Date();
// 2) leggere i minuti dall'oggetto date
var minutes = date.getMinutes();
// 3) 60 - minuti = i minuti mancanti allo scoccare della prossima ora.
var result = 60 - minutes;

console.log(result);