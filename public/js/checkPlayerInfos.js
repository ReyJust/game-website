export default function checkplayerInfos(score) {
  /**
    *Update user info after each game.
    *
    * @param {number} score The user's game score.
  */
  let date = new Date();
  let scoreDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();

  let localStore = window.localStorage;
  let sessionStorage = window.sessionStorage;
  //Fetch status
  let username = JSON.parse(sessionStorage.getItem("isLoggedIn")).username;
  let users = JSON.parse(localStore.getItem("users"));

  for (let user in users) {
    if (users[user].username === username) {
      if (users[user].highscore < score) {
        users[user].highscore = score
        users[user].highscore_date = scoreDate
      }
      users[user].game_played += 1;
      users[user].achievements[0].completed = true;

      //Give Achievement is score meet the requierement
      //Nested If because 3000 score don't need to be checked if we already know score is less than 1000 for exemple.
      if (score >= 1000) {
        if (users[user].achievements[2].completed != true) {
          users[user].achievements[2].completed = true
        }
        if (score >= 2000) {
          if (users[user].achievements[3].completed != true) {
            users[user].achievements[3].completed = true
          }
          if (score >= 3000) {
            if (users[user].achievements[4].completed != true) {
              users[user].achievements[4].completed = true
            }
          }
        }
      }
      if (users[user].game_played >= 50) {
        if (users[user].achievements[1].completed != true) {
          users[user].achievements[1].completed = true
        }
      }
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
}