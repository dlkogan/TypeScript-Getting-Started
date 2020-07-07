/// <reference path="utility.ts" />
/// <reference path="result.ts" />
/// <reference path="player.ts" />
/// <reference path="scoreboard.ts" />

class Game {
    private scoreboard: Scoreboard = new Scoreboard();
    factor: number;

    constructor(public player: Player, public problemCount: number, public multFactor: number) {
    }
    displayGame() {

    }
    calculateScore() {

    }
}


/*
//doing public player:Player is the same as defining a property player w/ string then setting it to this.player in constructor

*/