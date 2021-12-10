import playerClass from "./playerClass.js";
import ButtonClass from "./buttonClass.js";
import textClass from "./textClass.js";
import groundClass from "./groundClass.js";
import hayRollClass from "./hayRollClass.js";
import soundClass from "./soundClass.js";
import checkplayerInfos from "../checkPlayerInfos.js";

//Game objects
let player;
let game;
let gameOver;

//Text Objects
let score;
let level;
let speedLabel;

//Others
let hayRolls = [];
let grounds = [];
let levelNumber = 1;
let levelEnd = 500;
let speed = 1;
let latestHayRoll = 0;
let max = 30;
let min = 0;


//Sounds
let walkSound;
let hayPunchSound;

class gameClass {
  constructor() {
    //Create an html canvas element on the page.
    this.canvas = document.createElement("canvas");
    this.canvas.classList.add("game");
    this.canvas.setAttribute('width', window.innerWidth - (window.innerWidth / 15));
    this.canvas.setAttribute('height', "500");

    this.context = this.canvas.getContext("2d");
    //first element of the Body.
    document.getElementById("game-section").appendChild(this.canvas);

    this.ground = new Image();
    this.ground.src = "../assets/img/game/ground.png";
    this.context.drawImage(this.ground, 0, this.canvas.height - 150, this.canvas.width, 150);

    this.background = new Image();
    this.background.src = "../assets/img/game/background.png";
    this.context.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height - 150);

    this.scoreBoard = new Image();
    this.scoreBoard.src = "../assets/img/game/scoreboard.png";
    this.context.drawImage(this.scoreBoard, 0, 0, this.canvas.width, this.canvas.height / 8);
  }
  start() {
    //To start the game
    //Frame number counter. 1 frame per 20 ms.
    this.frameNo = 0;
    this.interval = setInterval(updateArea, 25);
  }
  stop() {
    //To stop the game.
    clearInterval(this.interval);
  }
  clear() {
    //Clear the canvas after each frame.
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
function updateArea() {
  //For each obstacle, check if collision with player.
  for (let i = 0; i < hayRolls.length; i += 1) {
    if (player.collide(hayRolls[i])) {
      gameOver = new Image();
      gameOver.src = "../assets/img/game/gameOver.png";
      game.context.drawImage(gameOver, game.canvas.width / 2 - 100, game.canvas.height / 2 - 25, 200, 50);
      hayPunchSound.play();
      walkSound.stop();
      //draw 1 more frame to display game over.
      setTimeout(function () { game.stop(); checkplayerInfos(game.frameNo); }, 25)

      return;
    }
  }
  //clear before re-drawing.
  game.clear();
  //sounds
  if (player.y < 300) {
    walkSound.stop();
  } else {
    walkSound.play();
  }
  //re draw static images.
  game.context.drawImage(game.background, 0, 0, game.canvas.width, game.canvas.height - 150);
  game.context.drawImage(game.scoreBoard, 0, 0, game.canvas.width, game.canvas.height / 8);
  //Ground Section.
  if (game.frameNo == 0) {
    grounds.push(new groundClass(game, 0));
    grounds.at(-1).draw();
  }
  //if last item right part is less is in the canva area.
  if (grounds.at(-1).x + game.canvas.width < game.canvas.width) {
    grounds.push(new groundClass(game, grounds.at(-1).x + game.canvas.width - 2));
  }
  //update ground.
  for (let i = 0; i < grounds.length; i += 1) {
    grounds[i].x -= speed;
    grounds[i].draw();
  }

  //level configs.
  if (levelNumber == 2) {
    max = 20
    min = 5
  } else if (levelNumber == 4) {
    max = 15
    min = 10
  }

  //Obstacle Section
  if (game.frameNo == 1 || game.frameNo > latestHayRoll + Math.floor((Math.random() * (max - min) + max))) {
    latestHayRoll = game.frameNo + Math.floor((Math.random() * (max - min) + max));
    hayRolls.push(new hayRollClass(game));
  }
  for (let i = 0; i < hayRolls.length; i += 1) {
    hayRolls[i].x -= speed;
    hayRolls[i].update();
    speed = levelNumber + 10;
  }
  //Level and speed config.
  if (game.frameNo == levelEnd) {
    levelEnd += levelEnd;
    levelNumber += 1;
  }

  //append frame and score.
  game.frameNo += 1;

  //Redraw other objects.
  player.draw();
  player.update();
  score.text = `Score: ${game.frameNo}`;
  speedLabel.text = `${(levelNumber)}x`;
  level.text = `Level: ${levelNumber}`;
  level.update();
  score.update();
  speedLabel.update();
}

function startGame() {
  //Game Start declarations.
  game = new gameClass
  player = new playerClass(game)
  walkSound = new soundClass("../assets/sounds/game/grassRunning.wav", true);
  hayPunchSound = new soundClass("../assets/sounds/game/hayPunch.wav", false);

  level = new textClass(game, game.canvas.width - 220, 45, 24)
  speedLabel = new textClass(game, game.canvas.width / 2 - 20, 45, 24)
  score = new textClass(game, 30, 45, 24)

  let play = new ButtonClass(game, (game.canvas.width / 2), (game.canvas.height / 2));
  play.draw();

  //Jump cmd.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === ' ') { player.jump() }
  })
}

//To prevent the windows from scrolling up and down while playing 
window.addEventListener("keydown", function (event) {
  if (["Space", "ArrowUp", "ArrowDown"].indexOf(event.code) > -1) {
    event.preventDefault();
  }
}, false);


let myGame = document.getElementById('myGame');
myGame.addEventListener('load', startGame());
