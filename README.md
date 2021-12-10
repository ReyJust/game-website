# Game Website #

This project is intended for CST2120 Web Applications and Databases Module along Middlesex University of Mauritius, Year 2, BsC Computer Science and System Engineering. 

### Summary ###

* About
* Folder Structure
* Prerequise & Deployment

### About ###

This project is a simple website this 6 pages, implemented using PHP, HTML, Javascript and CSS.
It try to recreate a real commercial Game website.It only contain one game, which is a replica of the famous 'Dino Chrome', the game that we all play when network is down.
The website is constituted of 6 pages:

* Home
* Play
* LeaderBoard
* My Account
* Log In
* Sign In

PHP is used for, rendering the HTML, avoiding duplicates with function, writing/reading player information among the Database (MYSQL) and several other tasks.

For the aesthetic, Bootstrap as been used along with custom CSS.
These imports are in CDN format to make the file smaller, but you will internet connection to test it out.

### Folder Structure ###

All pages are place in the root folder.
This is an example of the folder structure, it does not contain all the files.
```bash
public
│
├── assets
│   ├── game.ico
│   │ 
│   │── sounds
│   │   └── game
│   │       └── grassRunning.wav
│   │
│   └── img
│       │── achievements
│       │   └── achievement1.png
|       |
│       │── avatar
│       │   └── dodo.png
|       |
│       └── gamePic.png
│
├── css
│   └── styles.css
│
├── js
│   ├── game
│   │   ├── playerClass.js
│   │   └── game.js
│   │
│   ├── achievements.js
│   ├── isLoggedIn.js
│   ├── signup.js
│   ├── account.js
│   ├── leaderboard.js
│   ├── scripts.js
│   └── login.js
│
├── modules
│   ├── achievements.php
│   ├── divider.php
│   ├── footer.php
│   ├── head.php
│   ├── import.php
│   ├── leaderboard.php
│   ├── leaderboard-row.php
│   └── navigation.php
│
├── index.php
├── play.php
├── leaderboard.php
├── account.php
├── login.php
└── signup.php
```


### Prerequise & Deployment ###

Don't forget to stop Xammp services before doing this manipulation.
You will need a Xammp environment and place the folder into the working directory. most of the time it will be var/www/.

#### Steps
* Stop xampp services
* ./deploy.sh
  You can also copy the and place the project to the root folder manually.
* sudo npm i (even if all packages are CDN, just for good practise)
* Restart xampp services
* Browse http://localhost:80


### NOTES
* sudo /opt/lampp/manager-linux-x64.run for starting XAMPP GUI on 64x based systems.