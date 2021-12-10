export function userStatus(newStatus = undefined, username = undefined) {
  /**
    *Handle user status. Logged In or Out.
    *
    * @param {bool} newStatus The number to raise.
    * @param {sring} username User username.
  */
  let sessionStore = window.sessionStorage;
  let status = {}

  //Handle Object creation.
  if (!sessionStore.getItem("isLoggedIn")) {
    sessionStore.setItem('isLoggedIn', JSON.stringify({
      isLoggedIn: false,
      username: ""
    }));
  }

  //Toggler
  if (newStatus != undefined) {
    sessionStore.setItem('isLoggedIn', JSON.stringify({
      isLoggedIn: newStatus,
      username: username
    }));
  }

  //Fetch status
  status = JSON.parse(sessionStore.getItem("isLoggedIn"));

  //ternary If
  return { status: status.isLoggedIn, username: status.username }
}
