function hideElementById(e) {
    document.getElementById(e).classList.add("hidden")
}
function showElementById(e) {
    document.getElementById(e).classList.remove("hidden");
}


function randomAlphabet() {
    const alphabets = 'abcdefghijklmnopqrstwxyz/'
    const alphabet = alphabets.split("");

    const randomNumber = Math.random() * 25;
    const Index = Math.round(randomNumber)
    const randomAlphabet = alphabet[Index];
    return randomAlphabet ;
}
