const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
const p1ScoreBoard = document.querySelector('#p1Score');
const p2ScoreBoard = document.querySelector('#p2Score');
const winningScoreSelect = document.querySelector('#playto');
 
let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

const setScore = () => {
  p1ScoreBoard.innerText = p1Score;
  p2ScoreBoard.innerText = p2Score;
};

const setColors = () => {
  if (isGameOver) {
    if (p1Score > p2Score) {
      p1ScoreBoard.classList.add('winner');
      p2ScoreBoard.classList.add('loser');
    } else {
      p2ScoreBoard.classList.add('winner');
      p1ScoreBoard.classList.add('loser');
    }
  } else {
    p1ScoreBoard.classList.remove('winner', 'loser');
    p2ScoreBoard.classList.remove('winner', 'loser');
  }
};

const reset = () => {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    setScore()
    setColors();
    // p1ScoreBoard.classList.remove('winner', 'loser');
    // p2ScoreBoard.classList.remove('winner', 'loser');
};

p1Button.addEventListener('click', () => {
  if (!isGameOver) {
    p1Score +=1;
    if (p1Score === winningScore) {
      isGameOver = true;
      setColors();
      // p1ScoreBoard.classList.add('winner');
      // p2ScoreBoard.classList.add('loser');
    }
    setScore();
  }
});

p2Button.addEventListener('click', function() {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      setColors();
      // p2ScoreBoard.classList.add('winner');
      // p1ScoreBoard.classList.add('loser');
    }
    setScore();
  }
});

winningScoreSelect.addEventListener('change', function() {
  reset();
  winningScore = parseInt(this.value);
})

resetButton.addEventListener('click', reset);

setScore();

