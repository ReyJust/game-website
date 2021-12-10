import { userAchievement } from "./achievement.js";


//wait for dom to load
document.addEventListener('DOMContentLoaded', (event) => {
  let actualImage;

  let newImage = document.getElementById('saveAvatar')
  newImage.addEventListener('click', updateImage)

  let slogan = document.getElementById("slogan");
  slogan.addEventListener('focusout', changeSlogan)

  function appendUl(idName, innerhtml) {
    /**
    *Add a new li to a ul or ol.
    *
    * @param {string} idName The number to raise.
    * @param {sring} innerHtml HTML content to be dump.
    */
    var ul = document.getElementById(idName);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(innerhtml));
    ul.appendChild(li);
  }

  function changeSlogan() {
    /**
    *Trigger when user unfocus slogan input.
    *Update in localStorage with the new value.
    */
    let slogan = document.getElementById("slogan");
    let localStore = window.localStorage;

    //Fetch status
    let username = JSON.parse(sessionStorage.getItem("isLoggedIn")).username;
    let users = JSON.parse(localStore.getItem("users"));

    let newSlogan = slogan.value;

    //update for the correct user
    for (let user in users) {
      if (users[user].username === username) {
        users[user].slogan = newSlogan
      }
    }
    localStorage.setItem('users', JSON.stringify(users));
  }

  function changeImage(image) {
    /**
     *Modify the modal selected avatar style.
     * @param {string} image the image to add overlay
    */
    actualImage = image.alt

    let overlay = document.getElementById("overlay")
    overlay.remove()

    image.insertAdjacentHTML('afterend', '<div id="overlay" class="overlay"><i class="icon text-center fas fa-check fa-2x text-light"></i></div>')

  }

  function updateImage() {
    /**
     *Modify the user actual avatar in localStorage.
    */
    let localStore = window.localStorage;
    let sessionStorage = window.sessionStorage;
    //Fetch status
    let username = JSON.parse(sessionStorage.getItem("isLoggedIn")).username;
    let users = JSON.parse(localStore.getItem("users"));

    for (let user in users) {
      if (users[user].username === username) {
        users[user].avatar = actualImage
      }
    }
    localStorage.setItem('users', JSON.stringify(users));

    let mainAvatar = document.getElementById("main-avatar")
    mainAvatar.src = "../assets/img/avatars/" + actualImage + ".png";
    mainAvatar.alt = actualImage;
  }
  function account() {
    /**
     *Get all infos about the logged user.
    */
    let localStore = window.localStorage;
    let sessionStorage = window.sessionStorage;
    //Fetch status
    let username = JSON.parse(sessionStorage.getItem("isLoggedIn")).username;
    let users = JSON.parse(localStore.getItem("users"));

    //get the correct user
    let userInfo = users.filter(function (o) {
      return o.username === username;
    });
    userInfo = userInfo[0]

    let usernameEl = document.getElementById('username')
    let highscoreEl = document.getElementById('highscore')
    let sloganEl = document.getElementById('slogan')
    let generalEl = document.getElementById('general')
    let avatarEl = document.getElementsByClassName('image-list-item')
    let mainAvatar = document.getElementById("main-avatar")

    mainAvatar.src = "../assets/img/avatars/" + userInfo.avatar + ".png";
    mainAvatar.alt = userInfo.avatar;

    usernameEl.innerHTML = userInfo.username;
    highscoreEl.innerHTML = userInfo.highscore;
    sloganEl.value = userInfo.slogan;

    generalEl.innerHTML = "";

    appendUl('general', userInfo.email)
    appendUl('general', userInfo.name)
    appendUl('general', userInfo.surname)
    appendUl('general', userInfo.phone_number)
    appendUl('general', userInfo.date)

    for (let i = 0; i < avatarEl.length; i++) {
      avatarEl[i].addEventListener('click', () => changeImage(avatarEl[i]))

      if (avatarEl[i].alt === userInfo.avatar) {
        avatarEl[i].insertAdjacentHTML('afterend', '<div id="overlay" class="overlay"><i class="icon text-center fas fa-check fa-2x text-light"></i></div>')
      }
    }
    //display achievements
    userAchievement(userInfo)
  }

  account()
})