import Char from "./Char";
/**
 * Класс для перемещение персонажа на поле
 */
export default class MoveChar {
  /**
   * @param  {} gamePlayDraw класс для прорисовки игрового поля
   * @param  {} gameState класс для отслеживания состояния игры
   */
  constructor(gamePlayDraw, gameState, gameStateDraw) {
    this.gamePlayDraw = gamePlayDraw;
    this.char = null;
    this.gameState = gameState;
    this.stateDraw = gameStateDraw;
    this.indexCell = null;
  }

  /**
   * Создание персонажа
   */
  createdNewChar() {
    this.char = new Char();
    this.char.creatChar();
  }

  /**
   * Получение случайного индекса
   */
  getIndex() {
    return Math.floor(Math.random() * (this.gamePlayDraw.getBorderSize() ** 2));
  }

  /**
   * Получение неповторяющегося индекса
   */
  getNewIndex() {
    let index = this.getIndex();
    if (this.indexCell === index) {
      index = this.getIndex();
    }
    this.indexCell = index;
  }

  /**
   * Прорисовка персонажа на поле
   * Останавливаем игру, если количество показов без кликов больше 5
   */
  movingChar() {
    this.stateDraw.drawUi();
    this.getNewIndex();
    const idCell = `[data-id=cell_${this.indexCell}]`;
    const cell = document.querySelector(idCell);
    this.gameState.move += 1;
    this.gameState.checkAttempt(this.gameState.move);
    cell.insertAdjacentElement("beforeEnd", this.char.char);
  }

  /**
   * Рисует поле с персонажем с заданным интервалом
   * @param {number} interval -интервал, с каким будет показан персонаж на поле
   */
  movingCharSetInterval(interval = 1000) {
    this.gamePlayDraw.drawUi();
    this.createdNewChar();
    this.movingChar();
    const jump = setInterval(() => {
      this.movingChar();
      if (this.gameState.finish === true) {
        clearInterval(jump);
      }
    }, interval);
  }

  /**
   * Метод для проверки, поймана ли персонаж
   * @param {*} event - объект, на который произошел click
   */
  catchChar(event) {
    if (event.target.classList.contains("img_goblin")) {
      this.gameState.hit += 1;
      this.gameState.move -= 1;
      this.gameState.checkMoveMin();
      this.gameState.checkAttempt(this.gameState.hit);
      return;
    }
    this.gameState.miss += 1;
    this.gameState.move -= 1;
    this.gameState.checkMoveMin();
    this.gameState.checkAttempt(this.gameState.miss);
  }

  /**
   * Метод для навешивания addEvenListener на игровое поле для ловли персонажа
   */
  addClick() {
    this.gamePlayDraw.container.addEventListener("click", (event) => {
      this.catchChar(event);
    });
  }
}
