export default class hayRollClass {
  //obstacle
  constructor(game) {
    this.x = game.canvas.width;
    this.dimensions = {
      width: 50,
      height: 50,
    }
    //floor coordinate
    this.y = game.canvas.height - this.dimensions.height - 151;

    this.image = new Image();
    this.image.src = "../assets/img/game/hayroll.png";

    this.update = function () {
      game.context.drawImage(this.image, this.x, this.y, this.dimensions.width, this.dimensions.height);
    }
  }
}