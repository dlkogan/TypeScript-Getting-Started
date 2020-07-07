var Game = (function () {
    function Game(player, problemCount, multFactor) {
        this.player = player;
        this.problemCount = problemCount;
        this.multFactor = multFactor;
        this.scoreboard = new Scoreboard();
    }
    Game.prototype.displayGame = function () {
    };
    Game.prototype.calculateScore = function () {
    };
    return Game;
}());
//# sourceMappingURL=game.js.map