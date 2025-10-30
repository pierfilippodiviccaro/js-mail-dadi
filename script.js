// gioco dei dadi 
//generare un numero random da 1 a 6  per il giocatore e il computer e vedere qual'è il più altro tra i due e il più alto vince
     let dadoPlayer = Math.floor((Math.random()*6)+1)
     let dadoComp = Math.floor((Math.random()*6)+1)
     if (dadoPlayer > dadoComp  ){
        console.log("ha vinto il giocatore!")
     }
     else{
        console.log("mi spiace ma ha vinto il computer")
     }

