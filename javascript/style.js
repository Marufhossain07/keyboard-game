

function continueGame (){
    const alphabet = randomAlphabet();
    const screenAlphabet = document.getElementById('random');
    screenAlphabet.innerText = alphabet.toUpperCase()
}

function play(){
    hideElementById("home");
    showElementById("playground");

    continueGame();
}