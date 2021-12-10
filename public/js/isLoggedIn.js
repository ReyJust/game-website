import { userStatus } from "./changeUserStatus.js";

function isLoggedIn() {
  /**
  *Check User status and display navigation bar as wanted.
  */
  let sessionStore = window.sessionStorage;
  let newUserStatus = {
    isLoggedIn: Boolean,
    username: String
  }

  //Handle Object creation.
  if (!(sessionStore.getItem("isLoggedIn"))) {
    sessionStore.setItem('isLoggedIn', JSON.stringify({
      isLoggedIn: false
    }));
  }

  //Fetch status
  newUserStatus = JSON.parse(sessionStore.getItem("isLoggedIn"));

  if (newUserStatus.isLoggedIn === true) {
    let menu = document.getElementById('navbar')
    menu.childNodes[2].innerHTML = '<a id="signout" class="nav-link py-3 px-0 px-lg-3 rounded" href="index.php">Log Out</a>';
    menu.childNodes[3].remove()


    let playItem = document.createElement("LI");
    playItem.className = 'nav-item mx-0 mx-lg-1 play';
    playItem.innerHTML = '<a class="nav-link py-3 px-0 px-lg-3 rounded" href="play.php">Play</a>'
    menu.insertBefore(playItem, menu.childNodes[1])

    let accountItem = document.createElement("LI");
    accountItem.className = 'nav-item mx-0 mx-lg-1 account';
    accountItem.innerHTML = '<a class="nav-link py-3 px-0 px-lg-3 rounded" href="account.php">My Account</a>'
    menu.insertBefore(accountItem, menu.childNodes[3])



    document.getElementById('signout').addEventListener('click', () => userStatus(false));
  }

  console.log(newUserStatus.isLoggedIn, newUserStatus.username)
}
document.addEventListener('DOMContentLoaded', (event) => {
  isLoggedIn();
})