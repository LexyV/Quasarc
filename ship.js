// eslint-disable-next-line no-unused-vars
class Ship {
    constructor(game) {
        this.game = game;
        this.image = new Image()
        this.image.src = "images/spaceship.png"
        this.angle = 0;
        this.radius = 65;
        this.speed = 0;
    }


    drawShip() {
        const ctx = this.game.ctx;
        ctx.save();
        ctx.translate(630, 270);
        ctx.rotate(this.angle);
        ctx.drawImage(this.image, 20, this.radius, 33, 42)
        ctx.restore();
    }
    
}
