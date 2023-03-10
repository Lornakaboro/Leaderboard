import fetchScores from './fetchScores.js';
import addScore from './addScores.js';

class Score {
  constructor(user, score, displaySection, addBtn) {
    this.scores = [];
    this.user = user;
    this.score = score;
    this.displaySection = displaySection;
    this.addBtn = addBtn;
  }

  addedScore(e, message) {
    e.preventDefault();
    e.preventDefault();
    if (!this.user.value || !this.score.value) {
      return;
    }
    const userDetails = {
      user: this.user.value,
      score: this.score.value,
    };

    addScore(userDetails, message);
    this.user.value = '';
    this.score.value = '';
  }

  displayItem = async () => {
    await fetchScores(this.displaySection);
  };
}

export default Score;
