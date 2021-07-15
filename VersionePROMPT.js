// versione con prompt 


// array bombe di 16 cifre da 1 a 100 (cifre diverse)
var bombs = [];

// array per scelta utente
var userChoice = [];

//dati consegna
var numBombs = 16;
var maxNum = 100;



var possibility = maxNum - numBombs;

//array difficoltà
var levelPossible = ['easy', 'medium', 'hard'];




//utilizzata per interromper ciclo while.
var bomba = false;
var level;


// Richiesta selezione difficoltà
do {
    level = prompt('Easy, medium or hard');


} while (!arrayIncludes(levelPossible, level));


// Validazione difficoltà




// cambio difficoltà attraverso switch
switch (level) {
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

// stampa
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
while (bomba === false && i < possibility) {

    console.log('Possibilità: ', possibility - i);

    // se array bombe non include scelta utente e array scelta utente non include lo stesso numero continua a giocare
    var userNumber = parseInt(prompt('Inserisci un numero', 1));

    if (validateNum(1, maxNum, userNumber) === false) {
        alert('per favore inserire un numero compreso tra 1 e ' + maxNum)
        userNumber = parseInt(prompt('Inserisci un numero', 1));
    };

    // se scelta già effettuata richiedere numero
    if (arrayIncludes(bombs, userNumber)) {
        bomba = true;

        alert('GameOver');
        console.log('Game Over');


        // output Punteggio
        alert('Punteggio ottenuto: ' + userChoice.length);
        console.log('Punteggio ottenuto: ', userChoice.length);

        // se array scelte utente contiene un numero gia scelto continuo a chiedere
    } else {

        if (arrayIncludes(userChoice, userNumber)) {
            alert('Numero gia inserito riprovare');
            userNumber = parseInt(prompt('Numero già inserito riprovare', 1));
        } else {

            // se bombs include scelta utente il gioco finisce GAME OVER

            userChoice.push(userNumber);
        }

        i++;
    }

}

// in caso di vittoria
if (bomba === false) {
    alert('Hai Vinto');
}






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

// validazione inserimento null o spazio
function validatePrompt(element) {
    var result = false;
    if (!element || element == ' ') {
        result = true;
    }
    return result;
}



