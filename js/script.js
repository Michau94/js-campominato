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
3a - se presente numero in array scelte utente richiedere con while numero.
4 - se numero passa sia controllo bombe che controllo doppione viene pushato.

!stampa in console
1- utilizzo della length di scelte utente come punteggio.

Ristampa in html fatta come BONUS!


*/
//! variabili
// * display 
let displayLevel = document.getElementById('difficulty');
let pointsDisplay = document.getElementById('points');
let infoMessage = document.getElementById('message');
let playButton = document.getElementById('play');
let gameOver = document.getElementById('over');
let inputField = document.getElementById('number');
let levelField = document.getElementById('level');
let resetButton = document.getElementById('reset');
let alertError = document.getElementById('alert');
let confirmLevel = document.getElementById('confirm');
let gameScore = document.getElementById('game-score');

//utilizzata per interromper ciclo while.
let bomba = false;

// array per scelta utente
const userChoice = [];

// variabile max per range difficoltà
let maxNum = 100;
let numBombs = 16;
let tentativi = maxNum - numBombs;

console.log(tentativi - 1);


// array bombe di 16 cifre da 1 a 100 (cifre diverse)
const bombs = [];


// reset button
resetButton.addEventListener('click', function () {

    document.location.reload();

})


playButton.addEventListener('click', function () {


    let levelValue = levelField.value;


    // cambio difficoltà attraverso switch
    switch (levelValue) {
        case 'easy':
            maxNum = 100;
            break;
        case 'medium':
            maxNum = 80;
            break;
        case 'hard':
            maxNum = 50;
            break;
    }


    // stampa difficoltà

    console.log('Livello di difficoltà scelto:', levelValue);
    displayLevel.innerText = 'Livello di difficoltà scelto:' + levelValue;

    // generazione array bomba

    while (bombs.length < 16) {

        let randomNumber = randomizeNumber(1, maxNum);

        if (!bombs.includes(randomNumber)) {
            bombs.push(randomNumber);
        }

    }

    // generato array di 16 cifre
    console.log(bombs);


    //sezione alert nascosta
    alertError.classList.add('hidden');

    let userNumber = parseInt(inputField.value);
    console.log(userNumber);

    var i = 0;

    // se array bombe non include scelta utente e array scelta utente non include lo stesso numero continua a giocare
    if (bomba === false) {

        //var userNumber = parseInt(prompt('Inserisci un numero' + 'tentativi restanti: ' + (85 - i), 1));
        validateNum(1, maxNum, userNumber);
        if (validateNum(1, maxNum, userNumber) === false) {

            alertError.classList.remove('hidden');
            alertError.classList.add('red');
            alertError.innerText = 'per favore inserire un numero compreso tra 1 e ' + maxNum;

        } else if (arrayIncludes(userChoice, userNumber)) {

            alertError.classList.add('red');
            alertError.classList.remove('hidden');
            alertError.innerText = 'Numero già inserito per favore riprovare';

        } else if (arrayIncludes(bombs, userNumber)) {
            // se bombs include scelta utente il gioco finisce GAME OVER

            bomba = true;

            console.log('Game Over');
            gameOver.innerText = 'GAME OVER!'

            // output Punteggio
            console.log('Punteggio ottenuto: ', userChoice.length);
            gameScore.classList.remove('hidden');
            pointsDisplay.innerText = 'Punteggio ottenuto: ' + userChoice.length;

        } else {

            //se passa tutti i controlli numero pushato (punto guadagnato)
            userChoice.push(userNumber);
            inputField.value = "";

        }

        i++;

    }



})





//! Functions 

// Random Number 
function randomizeNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Ricerca in array
function arrayIncludes(myArray, myElement) {

    let includes = false;
    let i = 0;
    while (!includes && i < myArray.length) {
        if (myElement === myArray[i]) {
            includes = true;
        }

        i++;
    }
    return includes;
}

// Validate Number

function validateNum(min, max, num) {
    let result = false;
    if (num >= min && num <= max) {
        result = true;
    }
    return result;
}






