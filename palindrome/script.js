const wordCheckButton = document.getElementById('wordCheck');
const scentenceCheckButton = document.getElementById('scentenceCheck');
let wordOutput = document.getElementById("wordOutput");
let scentenceOutput = document.getElementById("scentenceOutput");

function checkIfWordIsPalindrome() {
    let submittedWord = document.getElementById('userWord').value;

    let reversedWord = '';

    for (i = submittedWord.length - 1; i >= 0; i--) {
        reversedWord += submittedWord[i];
    }  

    if (submittedWord == reversedWord) {
        wordOutput.innerHTML = 'Het door u ingevoerde woord ' + submittedWord + ' is een palindroom.'
    } else {
        wordOutput.innerHTML = 'Het door u ingevoerde woord ' + submittedWord + ' is geen palindroom.'
    }

}

function checkIfScentenceIsPalindrome() {
    let submittedScentence = document.getElementById("userScentence").value
    let punctuation = /[\.,?! ]/g;
    let noWhitespace = submittedScentence.replaceAll(punctuation,'');
    let reversedScentence = '';

    for (i = noWhitespace.length -1; i >= 0; i--) {
        reversedScentence += noWhitespace[i]
    }

    if (noWhitespace == reversedScentence) {
          scentenceOutput.innerHTML = 'De door u ingevoerde zin ' + submittedScentence + ' is een palindroom.'
    } else {
        scentenceOutput.innerHTML = 'De door u ingevoerde zin ' + submittedScentence + ' is geen palindroom.'
    }

}

wordCheckButton.addEventListener('click', checkIfWordIsPalindrome);
scentenceCheckButton.addEventListener('click', checkIfScentenceIsPalindrome);
