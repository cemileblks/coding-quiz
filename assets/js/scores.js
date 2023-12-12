

document.addEventListener('DOMContentLoaded', function(){

    const clearBtn = document.getElementById('clear');
    const highscoresBox = document.getElementById('highscores');

    const highscores = JSON.parse(localStorage.getItem('highscores')) || []; //in case there are no value for highscores
    
    highscores.sort((a, b) => b.score - a.score); // to sort the highscores

    highscores.forEach(score => {
        const scoreEl = document.createElement('li');
        scoreEl.textContent = 'Initials: ' + score.initials + '  Score: ' + score.score;
        highscoresBox.appendChild(scoreEl);
    });

    clearBtn.addEventListener('click', function(){
        localStorage.removeItem('highscores');
        highscoresBox.innerHTML = '';
    });

})







