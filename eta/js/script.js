// chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

// 1) chiedo eta prima persona
var etaPrimaPersona = parseInt(prompt("Inserisci l'eta della prima persona")); 
// 2) chiedo eta seconda persona
var etaSecondaPersona = parseInt(prompt("Inserisci l'eta della seconda persona")); 
// 3) se eta prima persona > eta seconda persona = allora la prima persona sara piu grande
// 4) se eta seconda persona > eta prima persona = allora la seconda persona sara piu grande
// 5) altrimenti hanno la stessa eta
if( etaPrimaPersona > etaSecondaPersona) {
	alert(' la prima persona e piu grande');
} else if ( etaSecondaPersona >  etaPrimaPersona ) {
	alert(' la seconda persona e piu grande');
} else {
	alert('le due persone hanno la stessa eta');
}