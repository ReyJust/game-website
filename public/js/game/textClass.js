export default class textClass {
  //custom text class.
  constructor(game, x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.update = function () {
      game.context.fillStyle = 'white';
      game.context.fillText(this.text, this.x, this.y);
      game.context.font = `${size}px "Press Start 2P"`;
    }
  }
}
