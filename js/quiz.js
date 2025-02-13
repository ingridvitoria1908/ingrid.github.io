const questions = [
    {
        question: "Qual linguagem é usada para criar páginas web dinâmicas?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: 2 
    },
    {
        question: "Qual é a estrutura básica de uma condição em JavaScript?",
        options: ["if (condição){}", "else (condição){}", "for (condição){}", "switch (condição){}"],
        answer: 0 
    },
    {
        question: "O que é um loop em programação?",
        options: ["Uma função", "Uma estrutura de repetição", "Uma variável", "Uma biblioteca"],
        answer: 1 
    },
    {
        question: "Qual é a tag usada para inserir uma imagem em HTML?",
        options: ["<img>", "<image>", "<picture>", "<src>"],
        answer: 0 
    }
];

let currentQuestionIndex = 0;
let score = 0;


function showQuestion() {
    const questionContainer = document.getElementById("quiz");
    const question = questions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <ul class="options">
            ${question.options.map((option, index) => 
                `<li><input type="radio" name="option" value="${index}" id="option${index}"><label for="option${index}">${option}</label></li>`
            ).join('')}
        </ul>
    `;
}


function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Por favor, selecione uma opção.");
        return;
    }

    const answer = parseInt(selectedOption.value);
    if (answer === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}


function showResult() {
    const result = document.getElementById("result");
    result.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("restartButton").style.display = "block";
}


function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
    document.getElementById("nextButton").style.display = "block";
    document.getElementById("restartButton").style.display = "none";
    document.getElementById("result").innerHTML = "";
}


showQuestion();
