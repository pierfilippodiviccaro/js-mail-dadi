// gioco dei dadi 
//generare un numero random da 1 a 6  per il giocatore e il computer e vedere qual'è il più altro tra i due e il più alto vince
//  let dadoPlayer = Math.floor((Math.random()*6)+1)
//  let dadoComp = Math.floor((Math.random()*6)+1)
//  if (dadoPlayer > dadoComp  ){
//     console.log("ha vinto il giocatore!")
//  }
//  else{
//     console.log("mi spiace ma ha vinto il computer")
//  }
//primo esercizio completato 
//secondo esercizio: Crea un array con delle email di chi può accedere.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
const emails = ["miaomiao@gmail.com", "asdrubalino@gmail.com", "paperino@hotmail.boh", "genoveffo@coccode.gallina"]
const userMail = prompt("aggiungi una mail")
let isMailFound = false
for (i = 0; i < emails.length; i++) {
    if (userMail === emails[i]) {
        isMailFound = true;
    }
}

if (isMailFound) {
    console.log("smettila di fare miao miao");
}
else {
    console.log("accesso negato");
}
