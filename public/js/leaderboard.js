
function leaderboard() {
  /**
  *Display correctly the leaderboard.
  */
  let localStore = window.localStorage;
  let sessionStorage = window.sessionStorage;
  //Fetch status
  //Handle Object creation.
  if (!(sessionStorage.getItem("isLoggedIn"))) {
    sessionStorage.setItem('isLoggedIn', JSON.stringify({
      isLoggedIn: false
    }));
  }
  let username = JSON.parse(sessionStorage.getItem("isLoggedIn")).username;
  let users = JSON.parse(localStore.getItem("users"));

  let leaderboardRow = document.getElementsByClassName("leaderboard-row")

  //If users list exist.
  if (users) {
    let usersInfo = [];

    function sortJsonDesc(arr, index) {
      return arr.sort(function (item1, item2) {
        //For each index, compare 2 item from the list of user (sort) - Making all possible comparison.
        //then return the correct temporary index, 0 for first, 1 for 2nd and -1 for last.
        if (item1[index] > item2[index]) {
          return -1
        } else {
          if (item1[index] < item2[index]) {
            return 1
          } else {
            return 0
          }
        }
      });
    }

    usersInfo = sortJsonDesc(users, 'highscore');

    if (usersInfo[0].achievements[5].completed == false) {
      for (let user in users) {
        if (users[user].username === username) {
          users[user].achievements[5].completed = true
          localStorage.setItem('users', JSON.stringify(users));
        }
      }
    }
    for (let row = 0; row < leaderboardRow.length; row++) {
      if (usersInfo[row]) {
        leaderboardRow[row].innerHTML =
          '<div class="col-lg-2"> \
        <h2><span class="align-self-center badge rounded-pill bg-dark \      font-weight-bold">'+ (row + 1) + '</span></h2> \
        </div> \
        <div class="col-lg-3"> \
          <h2 class="text-dark font-weight-bold">'+ usersInfo[row].username + '</h2> \
        </div> \
        <div class="col-lg-3 align-self-center"> \
          <h4 class="text-dark font-weight-bold">'+ usersInfo[row].highscore + '</h4> \
        </div> \
        <div class="col-lg-3 ms-auto align-self-center"> \
          <h4 class="text-dark font-weight-bold">'+ usersInfo[row].highscore_date + '</h4> \
        </div>'
      } else {
        leaderboardRow[row].innerHTML =
          '<div class="col-lg-2"> \
        <h2><span class="align-self-center badge rounded-pill bg-dark \      font-weight-bold">'+ (row + 1) + '</span></h2> \
        </div> \
        <div class="col-lg-8"> \
          <h2 class="text-dark font-weight-bold">Free, Come on!</h2> \
        </div>'
      }
    }
  } else {
    for (let row = 0; row < leaderboardRow.length; row++) {
      leaderboardRow[row].innerHTML =
        '<div class="col-lg-2"> \
          <h2><span class="align-self-center badge rounded-pill bg-dark \      font-weight-bold">'+ (row + 1) + '</span></h2> \
          </div> \
          <div class="col-lg-8"> \
            <h2 class="text-dark font-weight-bold">Free, Come on!</h2> \
          </div>'
    }
  }
}


document.addEventListener('DOMContentLoaded', (event) => {
  leaderboard()
})