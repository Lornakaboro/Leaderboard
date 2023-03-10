const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TGZ2rGzxRYwf6utIxrJm/scores/';

// add score to the API.
const addScore = async (userDetails, message) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: userDetails.user,
      score: Number(userDetails.score),
    }),
  });

  await response.json();
  message.innerHTML += '<strong>Success!</strong>';
  message.classList.add('show');
};

export default addScore;