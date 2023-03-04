/*
PALINDROME
1 - create variables:
    a - input for word (from HTML doc);
    b - button (from HTML doc);
    c - output element - showing id the word is palindrome or not (from HTML doc);
2 - create a PALINDROME FUNCTION;
3 - button click:
    a - create variable word value insperted in input;
    b - create an array variable made of all the word characters;
    c - let the output be equal to the palindrome function result;
*/

//VARIABLES
let wordInput = document.getElementById('word-input');
let wordButton = document.getElementById('word-button');
let wordOutput = document.getElementById('word-output');

//BUTTON CLICK
wordButton.addEventListener('click', function() {

    let wordEl = wordInput.value;
    let wordArray = wordEl.split('');
    wordOutput.innerText = isPalindrome(wordArray);

});

//PALINDROME FUNCTION ---------------------------------------
function isPalindrome(word) {

    let isPalindrome = true;

    for (let i = 0; i < word.length; i++) {

        if (word[i] == word[word.length - i - 1]) {
            
            console.log(word[i]);
            console.log(word[word.length - i - 1]);

        } else {

            console.log(word[i]);
            console.log(word[word.length - i - 1]);
            isPalindrome = false;

        };

    };

    if (isPalindrome) {
        return ('La parola è palindroma');
    } else {
        return ('La parola non è palindroma');
    };

};

/*
EVEN OR ODD
*/

let playButton = document.getElementById('play-button');
let numberInputContainer = document.getElementById('number-input-container');

playButton.addEventListener('click', function() {
    
    numberInputContainer.classList.remove('display-none');

});

let winnerButton = document.getElementById('winner-button');
let numberOutput = document.getElementById('number-output');

winnerButton.addEventListener('click', function() {

    let userNumber = parseInt(document.getElementById('number-input').value);

    if (isNaN(userNumber) || (userNumber <= 0) || (userNumber > 5)) {

        alert('Per favore, inserisci un numero da 1 a 5');

    } else {

        let machineNumber = randomNumberBetween(1, 5);
    
        let sum = addNumbers(userNumber, machineNumber);
        let output = isEvenOrOdd(sum);
        let evenOrOdd = document.getElementById('even-or-odd').value;
    
        let textOutput;
        
        if (output == evenOrOdd) {
            textOutput = 'Hai vinto!';
        } else {
            textOutput = 'Hai perso!';
        } 
    
        numberOutput.classList.remove('display-none');
        numberOutput.innerText = 'Tu hai scelto ' + userNumber + ' e il PC ha scelto ' + machineNumber + '. La somma è ' + output + '. ' + textOutput;
    
    }

});

//ADD NUMBERS FUNCTION ---------------------------------------
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

//RANDOM NUMBER FUNCTION ---------------------------------------
function randomNumberBetween(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}

//EVEN-ODD NUMBER FUNCTION ---------------------------------------
function isEvenOrOdd(number) { 
    if(number % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    };
};