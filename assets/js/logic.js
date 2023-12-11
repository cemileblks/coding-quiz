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
    questionsContainer.classList.remove('hide');
    startTimer();
    questionDisplay();
});

//code for the timer
let timeLeft = 60;
timer.textContent = timeLeft;
let startTimer = function () {
    intervalId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timer.textContent = timeLeft;
            console.log("funcion time left is", timeLeft);
        } else {
            endQuiz();
        }
    }, 1000);
};

//code to display the question
let currentQuestionindex = 0;

const questionDisplay = function () {

    const currentQuestion = quizQuestions[currentQuestionindex];
    questionTitle.textContent = currentQuestion.question;

    // loop for quiz buttons 
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        const choicesBtn = document.createElement('button');
        choicesBtn.classList.add('button');
        choicesBtn.textContent = currentQuestion.choices[i];
        questionChoices.appendChild(choicesBtn);
        choicesBtn.addEventListener('click', () => chcekAnswer(i));
    };
}

// code to check the correct answer 

const chcekAnswer = function (userClick) {
    
    const currentQuestion = quizQuestions[currentQuestionindex];

    if (userClick === currentQuestion.correctAns) {
        displayFeedback('Correct Answer!✅');
        
    } else {
        displayFeedback('Wrong Answer ❌');
        timeLeft -= 20;
    }

    currentQuestionindex++;

    if (currentQuestionindex < quizQuestions.length) {
        questionChoices.textContent = '';
        questionDisplay();
      } else {
        endQuiz();
      }

};

const displayFeedback = function(message){
    feedback.textContent = message;
    feedback.classList.remove('hide');
    setTimeout(() => {
        feedback.classList.add('hide');
    }, 400);
};


// code to end the quiz
// let score = timeLeft;
// console.log(score);

const endQuiz = function () {
    clearInterval(intervalId);
    // let score = timeLeft;
    // finalScore.textContent = score;
    // console.log(score);
    // console.log(timeLeft);
    questionsContainer.classList.add('hide');
    endScreen.classList.remove('hide');
    feedback.classList.add('hide');

    // score = Math.max(0, timeLeft);

    // // Update the timer display one final time
    // timer.textContent = timeLeft;

    // finalScore.textContent = score;

}

// code to get initals and save
