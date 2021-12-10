export function userAchievement(user) {
  /**
    *Dump the achievements info of the user.
    *
    * @param {string} user The user informations.
    */
  let achievementEl = document.getElementsByClassName('achievement');
  let achievements = user.achievements;

  for (let item = 0; item < achievementEl.length; item++) {
    let achievementInfo = achievements[item];

    let myHtml = '<div class="row align-items-center "> \
    <div class="col-lg text-right achievement-item"> \
      <img class="achievement-img" src="' + achievementInfo.img + '" alt=""> \
    </div>  \
    <div class="col text-start"> \
    <div class="row"><b> \
    '+ achievementInfo.name + ' \
    </b></div> \
    <div class="row"> \
    '+ achievementInfo.Description + '  \
      </div> \
    </div> ';

    if (achievementInfo.completed) {
      myHtml += '<div class="col-lg text-start"> \
      <i class="fas fa-check"></i> \
    </div></div>';
      achievementEl[item].innerHTML = myHtml
    } else {
      myHtml += '<div class="col-lg text-start"> \
      <i class="fas fa-check achievement-not-done"></i> \
    </div></div>';
      achievementEl[item].innerHTML = myHtml
    }
  }
}
