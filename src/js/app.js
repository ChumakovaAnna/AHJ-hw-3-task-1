import GamePlayDraw from "./GamePlayDraw";
import GameState from "./GameState";
import MoveChar from "./MoveChar";
import GameStateDraw from "./GameStateDraw";

console.log("The game started");

const gamePlayDraw = new GamePlayDraw();
gamePlayDraw.bindToDOM(document.querySelector(".container"));

const gameState = new GameState();

const stateDraw = new GameStateDraw(gameState);
stateDraw.bindToDOM(document.querySelector(".score"));
stateDraw.findAllEl();

const moveChar = new MoveChar(gamePlayDraw, gameState, stateDraw);
moveChar.addClick();
moveChar.movingCharSetInterval();
