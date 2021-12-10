export default class ButtonClass {
  //custom button.
  constructor(game, x, y) {
    this.x = x;
    this.y = y;
    this.draw = function () {
      const circle = new Path2D();
      circle.arc(x, y, 50, 0, 2 * Math.PI);
      game.context.fillStyle = 'black';
      game.context.fill(circle);
      game.context.strokeStyle = 'black';

      game.context.beginPath();
      game.context.moveTo(x - 10, y - 20);
      game.context.lineTo(x - 10, y + 25);
      game.context.lineTo(x + 25, y);
      game.context.lineTo(x - 10, y - 20);
      game.context.fillStyle = 'white';
      game.context.fill();
      game.canvas.addEventListener('click', function (event) {
        // Check whether click is inside button.
        if (game.context.isPointInPath(circle, event.offsetX, event.offsetY)) {
          game.start();
        }
      });
    };
  }
}