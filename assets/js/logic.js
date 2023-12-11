const startBtn = document.getElementById('start');
const startScreen = document.getElementById('start-screen');
const timer = document.getElementById('time');
const questionsContainer = document.getElementById('questions');
const questionTitle = document.getElementById('question-title');
const questionChoices = document.getElementById('choices'); // this is a div
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const initialsofQuiztaker = document.getElementById('initials');
const submitBtn = document.getElementById('submit');
const feedback = document.getElementById('feedback');

//code to start the quiz
startBtn.addEventListener('click', function () {
    startBtn.classList.add('hide');
    startScreen.classList.add('hide');
});

//code for the timer
const timeLeft = 60;
timer.textContent = timeLeft;
const startTimer = function () {
    setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            endQuiz();
        }
    }, 1000);
}
//code to display the question

const questionDisplay = function () {
    questionsContainer.textContent = '';

    for (let i = 0; i < quizQuestions.length; i++) {
        const currentQuestion = quizQuestions[i];
        questionTitle.textContent = currentQuestion.question;
        const choicesBtn = document.createElement('button');
        choicesBtn.textContent = currentQuestion.choices

    }
}

// code to move to the next question

// code to end the quiz
let score = 0;
const endQuiz = function () {
    clearInterval(timer);
    questionsContainer.classList.add('hide');
    endScreen.classList.remove('hide');
    finalScore.textContent = score;
}

// code to get initals and save

