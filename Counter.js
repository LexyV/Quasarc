class Counter {
    constructor(game) {
        this.game = game;
        this.score = 0;
        // STARTING SCORE FOR HOW MANY WAVES YOU'VE PAST 
        this.shield = 100;
        // STARTING HEALTH SCORE
        
    }

    survivedWaves () {
        this.game.ctx.font = "100px Rajdhani ";
        this.game.ctx.fillStyle = "#FBDF3C";
        this.game.ctx.fillText(this.score, 650, 100);
    }

    lives () {
        this.game.ctx.font = "35px Rajdhani ";
        this.game.ctx.fillStyle = "#FBDF3C";
        this.game.ctx.fillText('HEALTH: ' + this.shield, 600, 170);
    }

}