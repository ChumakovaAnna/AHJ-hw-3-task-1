import BoardRenderer from "./BoardRenderer";
import GameState from "./GameState";
import CharacterMoving from "./CharacterMoving";
import StateRenderer from "./StateRenderer";

console.log("The game started");

const boardRenderer = new BoardRenderer();
boardRenderer.bindToDOM(document.querySelector(".container"));

const gameState = new GameState();

const stateRenderer = new StateRenderer(gameState);
stateRenderer.bindToDOM(document.querySelector(".score"));
stateRenderer.bindCounters();

const characterMoving = new CharacterMoving(boardRenderer, gameState, stateRenderer);
characterMoving.addClickListener();
characterMoving.moveCharacterSetInterval();
