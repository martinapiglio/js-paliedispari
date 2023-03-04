/*
1 - create variables:
    a - input for word (from HTML doc);
    b - button (from HTML doc);
    c - output element - showing id the word is palindrome or not (from HTML doc);
2 - button click
*/


//VARIABLES
let wordInput = document.getElementById('word-input');
let wordButton = document.getElementById('word-button');
let wordOutput = document.getElementById('word-output');

//BUTTON CLICK
wordButton.addEventListener('click', function() {

                //CHECK
                console.log('pulsante cliccato');
                console.log(wordInput.value);
                //CHECK
            
    

});