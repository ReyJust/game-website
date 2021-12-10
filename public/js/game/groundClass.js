export default class groundClass {
  //ground class.
  constructor(game, x = 0) {
    this.x = x;
    this.y = game.canvas.height - 150;
    this.ground = new Image();
    this.ground.src = "../assets/img/game/ground.png";

    this.draw = function () {
      game.context.drawImage(game.ground, this.x, this.y, game.canvas.width, 150);
    }
  }
}