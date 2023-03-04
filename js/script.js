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

                //CHECK
                console.log(wordEl);
                //CHECK

    let wordArray = wordEl.split('');

                //CHECK
                console.log(wordArray);
                console.log(wordArray.length);
                //CHECK

    wordOutput.innerText = isPalindrome(wordArray);

});

//PALINDROME FUNCTION ---------------------------------------
function isPalindrome(word) {

    for (let i = 0; i < word.length; i++) {

        if (word[i] == word[word.length - i - 1]) {
            return ('La parola è palindroma');
        }; 

    };

    return ('La parola non è palindroma');
}