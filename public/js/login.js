import { userStatus } from "./changeUserStatus.js";
import { formStatus } from "./formStatus.js";

document.addEventListener('DOMContentLoaded', (event) => {
  let inputs = document.getElementsByTagName("input");

  Array.from(inputs).forEach((input, index) => {
    input.addEventListener('click', formStatus)
  })

  document.getElementById('submit').addEventListener('click', login);
})
function login() {
  /**
    *Trigger on Log in button. Log in the User
  */
  formStatus()

  let login_data = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
  }

  let emptyValue = false;
  let result = { type: "", value: "" };

  // Checking all fields are filled.
  for (let data in login_data) {
    if (login_data[data] == "") {
      emptyValue = true
    }
  }

  let users = JSON.parse(localStorage.getItem('users'))
  if (users) {
    let userCount = 0

    if (!emptyValue) {
      for (let user in users) {
        if (users[user].username === login_data.username) {
          if (users[user].password === login_data.password) {
            userStatus(true, login_data.username)
            window.location.href = "http://" + window.location.hostname + "/";
            result.type = "success"
          } else {
            result.type = "Incorrect Password"
          }
        } else {
          userCount += 1
        }
      }
      if (userCount === users.length) {
        result.type = "User does not exist"
      }
    } else {
      result.type = "Please fill all fields."
    }
    document.getElementById('submit').insertAdjacentHTML('beforebegin',
      '<p id="form-message">' + result.type + '</p>');
  } else {
    result.type = "User does not exist"
    document.getElementById('submit').insertAdjacentHTML('beforebegin',
      '<p id="form-message">' + result.type + '</p>');
  }



}