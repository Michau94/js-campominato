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


var maxNum = 0;

// Richiesta selezione difficoltà

var level = prompt('Easy, medium or hard').toLowerCase().trim();

// Validazione difficoltà
while (level != 'easy' && level != 'medium' && level != 'high') {
    alert('Please insert correct difficulty');
    level = prompt('Easy, medium or hard').toLowerCase().trim();
}



// cambio difficoltà attraverso switch
switch (level) {
    case 'easy':
        maxNum = 100;
        break;
    case 'medium':
        maxNum = 80;
        break;
    case 'high':
        maxNum = 50;
        break;
}

// stampa difficoltà scelta
console.log('Livello di difficoltà scelto:', level);

// generazione array bomba
while (bombs.length < 16) {

    var randomNumber = randomizeNumber(1, maxNum);


    if (!bombs.includes(randomNumber)) {
        bombs.push(randomNumber);
    }
    i++;
}

// generato array di 16 cifre
console.log(bombs);


var i = 0;

// includes lasciato apposta qui giusto per usare un po tutto 
while (!bombs.includes(userNumber) || !userChoice.includes(userNumber) && bomba === false && i < (100 - 16)) {

    // se array bombe non iclude scelta utente e array scelta utente non include lo stesso numero continua a giocare
    var userNumber = parseInt(prompt('Inserisci un numero', 1));

    while (validateNum(1, maxNum, userNumber) === false) {
        alert('per favore inserire un numero compreso tra 1 e ' + maxNum)
        userNumber = parseInt(prompt('Inserisci un numero', 1));
    };

    // se scelta già effettuata richiedere numero
    //userChoice.includes(userNumber) - soluzione easy
    while (arrayIncludes(userChoice, userNumber)) {
        userNumber = parseInt(prompt('Numero già inserito riprovare', 1));
    }

    // se bombs include scelta utente il gioco finisce GAME OVER
    //bombs.includes(userNumber) - soluzione easy
    if (arrayIncludes(bombs, userNumber)) {
        bomba = true;
        alert('GameOver');
        console.log('Game Over');

        // se array scelte utente contiene un numero gia scelto continuo a chiedere
    } else {
        userChoice.push(userNumber);
    }

    i++;
}


console.log(userChoice);


// output Punteggio
console.log('Punteggio ottenuto: ', userChoice.length);




//! Functions 

// Random Number 
function randomizeNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Ricerca in array
function arrayIncludes(myArray, myElement) {

    var includes = false;
    var i = 0;
    while (i < myArray.length) {
        if (myElement === myArray[i]) {
            includes = true;
        }

        i++;
    }
    return includes;
}

// Validate Number

function validateNum(min, max, num) {
    result = false;
    if (num >= min && num <= max) {
        result = true;
    }
    return result;
}






