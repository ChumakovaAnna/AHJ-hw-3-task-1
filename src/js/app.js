import GamePlay from "./GamePlay";
import Char from "./Char";
import MoveChar from "./MoveChar";

console.log("it works!");

const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector(".container"));
const char = new Char();
char.creatChar();

const moveChar = new MoveChar(gamePlay, char.getChar());
moveChar.movingCharSetInterval();
