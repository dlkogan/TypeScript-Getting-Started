/// <reference path="player.ts" />
/// <reference path="game.ts" />

let newGame: Game;
document.getElementById('startGame')!.addEventListener('click', () => {
    const player:Player = new Player();
    player.name = Utility.getInputValue('playername');

    const problemCount: number = Number(Utility.getInputValue('problemCount'))
    const factor: number = Number(Utility.getInputValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
})

document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
})

// //use void when a function does not have a return
// function logPlayer(name: string = "Multimath Player") :void {
//     console.log(`Hello, ${name}`);
// }


// //putting a question mark makes it ok for a param to be undefined
// function postScore(score: number, player: string = "MultiMath Player"): void {
//     const scoreElement: HTMLElement | null = document.getElementById('postedScores');
//     scoreElement!.innerText = `${score} by ${player}`
// }

// let playerName: string = "Candace";
// logPlayer(playerName);



// function startGame() {
//     // const messageElement = document.getElementById("messages");
//     // messageElement!.innerText = "Welcome to MultiMath! Starting New Game...";
//     const player = getInputValue("playername")
//     postScore(200, player);
// }

// document.getElementById('startGame')!.addEventListener('click', startGame);

// const firstPlayer: Player = new Player();
// firstPlayer.name = "Meowy";
// console.log(firstPlayer);

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

Static Members:
--


class Developer {
    constructor() {
        console.log('Creating a new developer');
    }
}

class WebDeveloper extends Developer {
    readonly
}

Why use modules?

Encapsulation
Reusability
Create higher-level abstractions

Supporting Technologies for Modules:
Typescript plus compiler

Javascript Modules

Loader/Bundler(Node, RequireJs, SystemJS, or Webpack)
you can just export with 
export interface Person {}
export default class Employee {}
export default says that this is the default class exported from module if not specified

Export Statements:

export {Person, hireDeveloper, Employee as StaffMember };

Importing from a module

import {Person, hireDeveloper} from './person';
import Worker from './person';

let engineer: worker = new Worker();

import {StaffMember as CoWorker} from './person'

import * as HR from './person';
HR.hireDeveloper();

Type Declaration Files

What are they?
TypeScript wrapper for existing Javascript libraries
-Types for variables, functions, etc
-define valid prop names
define function params
and more!

Javascript libraries still need to be brought in normally
Filenames end with .d.ts
They are a developmenet Tool


Obtaining Them:
Check the library in node_modules for the .d.ts files

DefinitelyTyped is a github repo of thousands of type declaration files and a source for installation utilities

To install type declaration files:
Install w/ npm
installed from @types/<name>
Sourced form defintelytyped repo on github

Steps:
microsoft.github.io/TypeSearch
If you find what you want, this will take you to the name of the npm install 
YOU MUST INSTALL NODE MODULE AND THE TYPE MODULE
npm install --save lodash
npm install --save @types/lodash

To include lodash:
import  *  as _ from  "lodash";

*/