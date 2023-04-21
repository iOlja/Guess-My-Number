'use strict';

//define secret number

let secretNumber = Math.floor(Math.random() * 20) + 1;

//define starter score

let score = 20;

//define starter highscore

let highscore = 0;

//diplay message

const displayMessage = function (messages) {
  document.querySelector('.message').textContent = messages;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('⛔️  No number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🎉 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//restart the game

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.floor(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
