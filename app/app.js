/// <reference path="player.ts" />
//test
//use void when a function does not have a return
function logPlayer(name) {
    if (name === void 0) { name = "Multimath Player"; }
    console.log("Hello, " + name);
}
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === "") {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
//putting a question mark makes it ok for a param to be undefined
function postScore(score, player) {
    if (player === void 0) { player = "MultiMath Player"; }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = score + " by " + player;
}
var playerName = "Candace";
logPlayer(playerName);
function startGame() {
    // const messageElement = document.getElementById("messages");
    // messageElement!.innerText = "Welcome to MultiMath! Starting New Game...";
    var player = getInputValue("playername");
    postScore(200, player);
}
document.getElementById('startGame').addEventListener('click', startGame);
var firstPlayer = new Player();
firstPlayer.name = "Meowy";
console.log(firstPlayer);
//let logger: (value: string) => void; WITH THIS, logger can be set to any function that takes in a string and outputs void
/*
Interfaces vs Classes:

Interfaces define a new type                Classes define a new type
Properties(Signatures)                          Properties(with implementation)
Methods(Signatures)                            Methods(with implementations)
Can't be instantiated                             Can be Instantiated

Interface- An abstract idea                     Classes are more like blueprints. They have specifics to implement finished project.


Creating an Interface:

interface Employee {
    name: string;
    title: string;
}

interface Manager extends Employee {
    department: string;
    numOfEmployees: number;
    scheduleMeeting: (topic: string) => void;
}

TypeScript's Structural Type System
let developer = {
    name: 'Michelle',
    title: 'Senior Typescript Developer',
    editor: 'Visual Studio Code'
}

let newEmployee: Employee = developer;

As long as structures match, they are the same.


In addition to method and property implementation
Classes have Accessors (getters and setters)
Access Modifiers

class Developer {
    department: string;
    private _title: string;

    get title(): string {
        return this.title;
    }

    set title(newTitle: string) {
        this._title = newTitle.toUpperCase();
    }

}

class WebDeveloper extends Developer {
    favoriteEditor: string;
    writeTypeScript(): void {
        //some crap
    }
}

let webdev: WebDeveloper = new WebDeveloper();

interface Employee {
    name: string;
    title: string;
    logID: () => string;
}

class Engineer implements Employee {
    name: string;
    title: string;
    logID() {
        return "hi"
    }
}



*/ 
