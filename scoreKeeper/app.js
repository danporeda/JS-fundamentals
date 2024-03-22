const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Score')
};

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Score')
}

const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

const displayScore = () => {
  p1.display.innerText = p1.score;
  p2.display.innerText = p2.score;
};

const setScore = (player) => {
  if (!isGameOver) {
    player.score +=1;
    if (player.score === winningScore) {
      isGameOver = true;
      setColors();
    }
  }
  displayScore();
};

const setColors = () => {
  if (isGameOver) {
    disableButtons(true);
    if (p1.score > p2.score) {
      p1.display.classList.add('has-text-success');
      p2.display.classList.add('has-text-danger');
    } else {
      p2.display.classList.add('has-text-success');
      p1.display.classList.add('has-text-danger');
    }
  } else {
    disableButtons(false);
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-success', 'has-text-danger');
  }
};

const disableButtons = (b) => {
  p1.button.disabled = b;
  p2.button.disabled = b;
}

const reset = () => {
    p1.score = 0;
    p2.score = 0;
    displayScore();
    isGameOver = false;
    setColors();
};

p1.button.addEventListener('click', () => {
 setScore(p1);
});

p2Button.addEventListener('click', function() {
  setScore(p2);
});

winningScoreSelect.addEventListener('change', function() {
  reset();
  winningScore = parseInt(this.value);
})

resetButton.addEventListener('click', reset);

displayScore();