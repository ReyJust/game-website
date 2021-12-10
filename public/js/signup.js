import { formStatus } from "./formStatus.js";


document.addEventListener('DOMContentLoaded', (event) => {
  let inputs = document.getElementsByTagName("input");

  Array.from(inputs).forEach((input, index) => {
    input.addEventListener('click', formStatus)
  })

  document.getElementById('submit').addEventListener('click', signup);
})

function signup() {
  /**
    *Trigger on Sign Up Button Click. Create A user with form verification.
  */
  //Array of Users.
  let users;

  //Check if Storage is supported.
  if (typeof (Storage) !== "undefined") {
    //Check if array exist in the storage, if not create it.
    if (JSON.parse(localStorage.getItem('users'))) {
      users = JSON.parse(localStorage.getItem('users'))
    } else {
      localStorage.setItem('users', JSON.stringify([]));
      users = JSON.parse(localStorage.getItem('users'))
    }

    //Clear the validation errors.
    formStatus()

    let date = new Date();
    let imagesPath = "../assets/img/achievements/";
    //Retrieve the values from Inputs.

    let user_data = {
      username: document.getElementById('username').value,
      name: document.getElementById('name').value,
      surname: document.getElementById('surname').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      phone_number: document.getElementById('phone_number').value,
      highscore: 0,
      highscore_date: '2021/01/1',
      game_played: 0,
      date: date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate(),
      avatar: "wolf",
      slogan: "Basic",
      achievements: [
        {
          img: imagesPath + "Achievement1.png",
          name: "Newbie",
          Description: "Play at least one game.",
          completed: false
        },
        {
          img: imagesPath + "Achievement2.png",
          name: "Expert",
          Description: "Play at least 50 games.",
          completed: false
        },
        {
          img: imagesPath + "Achievement3.png",
          name: "First thousand",
          Description: "Reach score of 1000.",
          completed: false
        },
        {
          img: imagesPath + "Achievement4.png",
          name: "Thousand of Thousands",
          Description: "Reach score of 2000.",
          completed: false
        },
        {
          img: imagesPath + "Achievement5.png",
          name: "Unstoppable",
          Description: "Reach score of 3000.",
          completed: false
        },
        {
          img: imagesPath + "Achievement6.png",
          name: "King of the hill",
          Description: "Reach Rank 1 in the leaderboard at least 1 time.",
          completed: false
        },
      ]
    }
    //Variables for validation.
    let result = { type: "", value: "" };
    let emptyValue = false;
    let badEmail = false;

    // Checking all fields are filled.
    for (let data in user_data) {
      if (user_data[data] === "") {
        emptyValue = true
      }
    }
    //Checking email is in proper format.
    const specialChar = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
    if ((!user_data.email.includes("@")) || (user_data.email.indexOf("@") == 0) || (user_data.email.indexOf("@") >= user_data.email.length - 5) || (!user_data.email.includes(".")) || (specialChar.test(user_data.email))) {
      badEmail = true;
    }

    let usernameTaken = false;

    //If not filled correctly
    if (!emptyValue) {
      //If email is not correct
      if (!badEmail) {
        //If username is taken
        let users = JSON.parse(localStorage.getItem('users'))

        for (let user in users) {
          if (user_data.username === users[user].username) {
            result.type = "Username taken"
            usernameTaken = true
          }
        }
        if (!usernameTaken) {
          //If password is longer than 8 char
          if (user_data.password.length >= 8) {
            result.type = "success";

            users.push(user_data);
            localStorage.setItem('users', JSON.stringify(users));


            window.location.href = "http://" + window.location.hostname + "/login.php";
          } else {
            result.type = "Password must be 8 character long minimum."
          }
        } else {
          result.type = "Username Taken"
        }
      } else {
        result.type = "Email is not correct."
      }
    } else {
      result.type = "Please fill all fields."
    }

    document.getElementById('submit').insertAdjacentHTML('beforebegin',
      '<p id="form-message">' + result.type + '</p>');

  } else {
    console.log("Web Storage is not supported")
  }
}

