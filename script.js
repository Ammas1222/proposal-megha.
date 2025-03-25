const questions = [
    "What made you catch my attention when we first met online?",
    "Do you believe in love at first sight... or should I refresh the page? 😊",
    "Would you like to be my player 2 in this game called life?",
    "Can I be the one to make you smile every day?"
];

let currentQuestion = 0;

function startJourney() {
    window.location.href = 'question.html';
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion];
    } else {
        window.location.href = 'proposal.html';
    }
}

function nextQuestion(answer) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        window.location.href = 'proposal.html';
    }
}