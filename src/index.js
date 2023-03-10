// css files here
import './style.css';
import addScore from './modules/addScores.js';
import fetchScores from './modules/fetchScores.js';
import {
  displaySection, user, score, addBtn,
} from './modules/itemDeclaration.js';
import Score from './modules/scores.js';

const form = document.querySelector('.input-form');
const refreshBtn = document.getElementById('refresh-button');
const message = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userDetails = {
    user: user.value,
    score: score.value,
  };

  addScore(userDetails, message);
  form.reset();
});

[user, score].forEach((input) => {
  input.addEventListener('focus', () => {
    message.classList.remove('show');
  });
});

refreshBtn.addEventListener('click', () => {
  fetchScores(displaySection);
});

const availableScore = new Score(user, score, displaySection, addBtn);

document.addEventListener('DOMContentLoaded', () => {
  availableScore.displayItem();
});

addBtn.addEventListener('click', (e) => {
  availableScore.addedScore(e, message);
});
