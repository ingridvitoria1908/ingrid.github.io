let randomNumber;
let attempts = 0;


function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


function startGame() {
    randomNumber = generateRandomNumber();
    attempts = 0;
    document.getElementById("message").innerHTML = '';
    document.getElementById("resetButton").style.display = "none";
}


function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    const messageElement = document.getElementById("message");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.innerHTML = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        messageElement.innerHTML = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas!`;
        document.getElementById("resetButton").style.display = "block";
    } else if (userGuess < randomNumber) {
        messageElement.innerHTML = "O número é maior. Tente novamente!";
    } else {
        messageElement.innerHTML = "O número é menor. Tente novamente!";
    }
}


function resetGame() {
    startGame();
    document.getElementById("userGuess").value = '';
}


document.getElementById("checkButton").addEventListener("click", checkGuess);
document.getElementById("resetButton").addEventListener("click", resetGame);


