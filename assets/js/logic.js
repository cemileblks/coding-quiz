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
    startTimer();
    questionDisplay();
});

//code for the timer
let timeLeft = 60;
timer.textContent = timeLeft;
const startTimer = function () {
    setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            endQuiz();
        }
    }, 1000);
};
//code to display the question
let currentQuestionindex = 0;
const questionDisplay = function () {
    questionsContainer.textContent = '';


    // loop for quiz quesions
    for (let i = 0; i < quizQuestions.length; i++) {
        const currentQuestion = quizQuestions[i];
        questionTitle.textContent = currentQuestion.question;


    }

    // loop for quiz buttons 
    for (let i = 0; i < questionsContainer.choices.length; i++) {
        const choicesBtn = document.createElement('button');
        choicesBtn.textContent = currentQuestion.choices[i];
        choicesBtn.addEventListener('click', () => chcekAnswer(i));
        questionChoices.appendChild(choicesBtn);
    };
}

// code to check the correct answer 

const chcekAnswer = function (userClick) {
    const currentQuestion = quizQuestions[currentQuestionindex];

    if (userClick === currentQuestion.correctAns) {
        const correctFeedback = document.createElement('p');
        correctFeedback.textContent = 'Correct Answer!';
        feedback.appendChild(correctFeedback);
        feedback.classList.remove('hide');
    } else {
        const wrongFeedback = document.createElement('p');
        correctFeedback.textContent = 'Wrong Answer :((';
        feedback.appendChild(wrongFeedback);
        feedback.classList.remove('hide');
        timeLeft -= 20;
    }
    
    currentQuestionindex++;

    if (currentQuestionindex < questions.length) {
        displayQuestion();
      } else {
        endQuiz();
      }
}

// feedback code




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

