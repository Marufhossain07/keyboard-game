
function keyboardPressed (event){
    const input = event.key;
    if (input === 'Escape'){
        finalScore();
    }
    const screenAlphabet = document.getElementById('random').innerText;
    const expectedAlphabet = screenAlphabet.toLowerCase();
    if (input === expectedAlphabet){
        const scoreElement = document.getElementById('score');
        const scoreText = scoreElement.innerText;
        let score = parseInt(scoreText);
       const newScore = score + 1;
       scoreElement.innerText = newScore;
       keyboardRemoved(expectedAlphabet);
       continueGame();
       
    }
    else{
        const lifeElement = document.getElementById('life');
        const lifeText = lifeElement.innerText;
        const life = parseInt(lifeText);
        const newLife = life - 1;
        lifeElement.innerText = newLife;
        keyboardRemoved(expectedAlphabet);
        continueGame();
        if (newLife == 0){
            finalScore();
        }
    }
}
document.addEventListener('keyup', keyboardPressed)




function continueGame (){
    const alphabet = randomAlphabet();
    const screenAlphabet = document.getElementById('random');
    screenAlphabet.innerText = alphabet.toUpperCase();
    keyboard(alphabet);
    
}


function play(){
    hideElementById("home");
    showElementById("playground");
    continueGame();
    
}
function finalScore(){
    hideElementById("playground");
    showElementById("play-again");
    const finalScore = document.getElementById("score").innerText;
    setTextElementValueById('final-score', finalScore)
}

function playAgain(){
    hideElementById("play-again");
    showElementById("playground");
    const lifeElement = document.getElementById('life');
    lifeElement.innerText=5;
    const score = document.getElementById('score');
    score.innerText = 0;
    keyboardPressed();
}