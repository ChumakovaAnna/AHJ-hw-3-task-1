import Character from "./Character";
/**
 * Класс для перемещение персонажа на поле
 */
export default class CharacterMoving {
  /**
   * @param  {} boardRenderer класс для прорисовки игрового поля
   * @param  {} gameState класс для отслеживания состояния игры
   */
  constructor(boardRenderer, gameState, gameStateDraw) {
    this.boardRenderer = boardRenderer;
    this.character = null;
    this.gameState = gameState;
    this.stateDraw = gameStateDraw;
    this.indexCell = null;
  }

  /**
   * Создание персонажа
   */
  createNewCharacter() {
    this.character = new Character();
    this.character.creatCharacter();
  }

  /**
   * Получение случайного индекса
   */
  getRandomIndex() {
    return Math.floor(Math.random() * (this.boardRenderer.getBoardSize() ** 2));
  }

  /**
   * Получение неповторяющегося индекса
   */
  getUniqueIndex() {
    let index = this.getRandomIndex();
    if (this.indexCell === index) {
      index = this.getRandomIndex();
    }
    this.indexCell = index;
  }

  /**
   * Прорисовка персонажа на поле
   * Останавливаем игру, если количество показов без кликов больше 5
   */
  moveCharacter() {
    if (this.gameState.move !== -1 && !this.gameState.clickInThisTurn) {
      this.gameState.miss += 1;
    }

    this.stateDraw.renderUi();
    this.getUniqueIndex();
    const idCell = `[data-id=cell_${this.indexCell}]`;
    const cell = document.querySelector(idCell);
    this.gameState.clickInThisTurn = false;
    this.gameState.move += 1;
    this.gameState.checkAttempt(this.gameState.move);
    cell.insertAdjacentElement("beforeEnd", this.character.character);
  }

  /**
   * Рисует поле с персонажем с заданным интервалом
   * @param {number} interval -интервал, с каким будет показан персонаж на поле
   */
  moveCharacterSetInterval(interval = 1000) {
    this.boardRenderer.renderUi();
    this.createNewCharacter();
    this.moveCharacter();
    const jump = setInterval(() => {
      this.moveCharacter();
      if (this.gameState.finish === true) {
        clearInterval(jump);
      }
    }, interval);
  }

  /**
   * Метод для проверки, поймана ли персонаж
   * @param {*} event - объект, на который произошел click
   */
  catchCharacter(event) {
    if (!this.gameState.clickInThisTurn) {
      if (event.target.classList.contains("img_goblin")) {
        this.gameState.hit += 1;
        this.gameState.move -= 1;
        this.gameState.checkAttempt(this.gameState.hit);
      } else {
        this.gameState.miss += 1;
        this.gameState.move -= 1;
        this.gameState.checkMoveMin();
        this.gameState.checkAttempt(this.gameState.miss);
      }
    } else {
      console.log("Вы уже кликали");
    }
    this.gameState.clickInThisTurn = true;
  }

  /**
   * Метод для навешивания addEvenListener на игровое поле для ловли персонажа
   */
  addClickListener() {
    this.boardRenderer.container.addEventListener("click", (event) => {
      this.catchCharacter(event);
    });
  }
}
