const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TGZ2rGzxRYwf6utIxrJm/scores/';

// get data from the API
const getScore = async () => {
  const response = await fetch(API_URL);
  const result = await response.json();
  const scoreList = result.result;

  return scoreList;
};

// show data
const fetchScores = async (list) => {
  list.innerHTML = '';
  const scores = await getScore();
  scores.forEach((availableScore) => {
    const scoreElement = `
      <li class="availableScore">
        <p>${availableScore.user} : ${availableScore.score}</p>
        </li>
    `;
    list.innerHTML += scoreElement;
  });
};

export default fetchScores;
