function hideElementById(e) {
    document.getElementById(e).classList.add("hidden")
}
function showElementById(e) {
    document.getElementById(e).classList.remove("hidden");
}


function randomAlphabet() {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz/'
    const alphabet = alphabets.split("");

    const randomNumber = Math.random() * 25;
    const Index = Math.round(randomNumber)
    const randomAlphabet = alphabet[Index];
    return randomAlphabet ;
}

function keyboard (e){
    const keyboardAlphabet = document.getElementById(e);
    keyboardAlphabet.classList.add('bg-[#d97706]')
}
function keyboardRemoved (e){
    const keyboardAlphabet = document.getElementById(e);
    keyboardAlphabet.classList.remove('bg-[#d97706]')
}


function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}