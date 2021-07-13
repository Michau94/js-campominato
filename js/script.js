/*
Consegna
Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio.


 
!BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50


!preparazione
1- creare un array bombs che contenca 16 numeri random tutti diversi.
2- creazione array scelta utente (sfruttabile come punteggio finale con leght)

!gioco
1-richiesta utente di un numero
2- confronto numero con array bombe - se presente fine gioco game over
3- se si continua confronto numero pushato in array numeri utente solo se non presente doppione
3a - se presente numero in arrayscelteutente richiedere con while numero.
4 - se numero passa sia controllo bombe che controllo doppione viene pushato.

!stampa in console
1- utilizzo della length di scelte utente come punteggio.


*/

// array bombe di 16 cifre da 1 a 100 (cifre diverse)
var bombs = [];

// array per scelta utente
var userChoice = [];

//utilizzata per interromper ciclo while.
var bomba = false;

var i = 0;
while (bombs.length < 16) {
    var randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if (!bombs.includes(randomNumber)) {
        bombs.push(randomNumber);
    }
    i++;
}

// generato array di 16 cifre
console.log(bombs);


//richiesta all'utente di un numero per 100 - 16 (numero bombe)





var i = 0;

while (!bombs.includes(userNumber) || !userChoice.includes(userNumber) && bomba === false) {

    // se array bombe non iclude scelta utente e array scelta utente non include lo stesso numero continua a giocare
    var userNumber = parseInt(prompt('Inserisci un numero', 1));

    // se scelta già effettuata rischiedere numero
    while (userChoice.includes(userNumber)) {
        userNumber = parseInt(prompt('Numero già inserito riprovare', 1));
    }

    // se bombs include scelta utente il gioco finisce GAME OVER
    if (bombs.includes(userNumber)) {
        bomba = true;
        alert('GameOver');

        // se array scelte utente contiene un numero gia scelto continuo a chiedere
    } else {
        userChoice.push(userNumber);
    }

    i++;
}


console.log(userChoice);

console.log('Punteggio ottenuto: ', userChoice.length);




