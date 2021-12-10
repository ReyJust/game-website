import soundClass from "./soundClass.js";

export default class playerClass {
  //player
  constructor(game) {
    this.x = 5;
    this.y = 5;
    this.color = 'black';
    this.velocity = 0;
    this.dimensions = {
      width: 50,
      height: 50,
    };
    this.gravity = 1;
    this.image = new Image();
    this.image.src = "../assets/img/game/lama1.png";
    this.image2 = new Image();
    this.image2.src = "../assets/img/game/lama2.png";
    this.jumpImage = new Image();
    this.jumpImage.src = "../assets/img/game/lamaJump.png";
    this.run = false;
    this.jumpSound = new soundClass("../assets/sounds/game/jump.wav", false);

    this.update = function () {
      //triggered each frame
      //Change image each time 4 is at the number of frameNo.
      if (String(game.frameNo).slice(-1).includes('4')) {
        this.run = !this.run;
      }
      //Image if in air
      if (this.y < 300) {
        game.context.drawImage(this.jumpImage, this.x, this.y, this.dimensions.width, this.dimensions.height);
      } else {
        //Image Swap for run illusion
        if (this.run) {
          game.context.drawImage(this.image2, this.x, this.y, this.dimensions.width, this.dimensions.height);
        } else {
          game.context.drawImage(this.image, this.x, this.y, this.dimensions.width, this.dimensions.height);
        }
      }

    };
    //Jump Draw and gravity management
    //velocity speed up with time, making the effect of gravity.
    this.draw = function () {
      this.velocity += this.gravity;
      this.y += this.velocity;
      let floor = game.canvas.height - this.dimensions.height - 150;
      if (this.y > floor) {
        this.y = floor;
        this.velocity = 0;
      }
    }
    //check if collision with hayrolls
    this.collide = function (obstacle) {
      let crash = false;
      let playerCenter = {
        x: this.x + (this.dimensions.width / 2),
        y: this.y + (this.dimensions.height / 2)
      }
      let obstacleCenter = {
        x: obstacle.x + (obstacle.dimensions.width / 2),
        y: obstacle.y + (obstacle.dimensions.height / 2)
      }

      if (obstacleCenter.x >= this.x && obstacleCenter.x <= playerCenter.x + this.dimensions.width / 2) {
        if (playerCenter.y + (this.dimensions.height / 2) >= obstacle.y) {
          crash = true
        }
      }

      return crash;
    }
    //jump function
    this.jump = function () {
      //Prevent the user to jump twice or more at the same time
      if (this.y >= game.canvas.height - this.dimensions.height - 150) {
        this.gravity = -2
        this.jumpSound.play()
        //Arrow function all this to go into the anonymous timeout function
        setTimeout(() => {
          this.gravity = 1.5
          this.jumpSound.stop()
        }, 150)
      }
    }
  }
}