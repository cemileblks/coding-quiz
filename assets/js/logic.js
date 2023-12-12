const startBtn = document.getElementById('start');
const startScreen = document.getElementById('start-screen');
const timer = document.getElementById('time');
const questionsContainer = document.getElementById('questions');
const questionTitle = document.getElementById('question-title');
const questionChoices = document.getElementById('choices'); // this is a div
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');
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
        choicesBtn.addEventListener('click', checkAnswer());
    };
}

// code to check the correct answer 

const checkAnswer = function (userClick) {
    
    const currentQuestion = quizQuestions[currentQuestionindex];
    console.log(currentQuestion);
    if (userClick === currentQuestion.correctAns) {
        displayFeedback('Correct Answer!✅');
        
    } else {
        displayFeedback('Wrong Answer ❌');
        
        timeLeft -= 15;
        timeLeft = Math.max(0, timeLeft); //if user gets all wrong to prevent timer displaying negative
    }

    currentQuestionindex++;

    if (currentQuestionindex < quizQuestions.length) {
        questionChoices.textContent = '';
        questionDisplay();
      } else {
        setTimeout(endQuiz, 800); // added delay so that feedback for the last question is visible to the user
      }

};


const displayFeedback = function(message){
    feedback.textContent = message;
    feedback.classList.remove('hide');
    setTimeout(() => {
        feedback.classList.add('hide');
    }, 450);
};


// code to end the quiz

const endQuiz = function () {
    clearInterval(intervalId);

    finalScore.textContent = timeLeft;

    questionsContainer.classList.add('hide');
    endScreen.classList.remove('hide');
    feedback.classList.add('hide');

    timer.textContent = timeLeft; // update the timer with final time

}


submitBtn.addEventListener('click', function () {
    const initials = initialsInput.value.trim();

    if (initials !== '') {
        const newScore = {
            initials: initials,
            score: timeLeft
        };

        // get all high scores from local storage
        const highscoresFromStorage = JSON.parse(localStorage.getItem('highscores')) || [];

        // Add the new score to the array
        highscoresFromStorage.push(newScore);

        // save the updated high scores back to local storage
        localStorage.setItem('highscores', JSON.stringify(highscoresFromStorage));

        window.location.href = 'highscores.html';
    } else {
        alert('Please write your initials to save your result');
    }
});

console.log(window);