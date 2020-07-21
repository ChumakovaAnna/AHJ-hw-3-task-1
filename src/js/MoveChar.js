// import GamePlay from "./GamePlay";
/**
 * Класс для появления персонажа на поле
 */
export default class MoveChar {
  constructor(gamePlay, char) {
    this.gamePlay = gamePlay;
    this.indexCell = null;
    this.char = char;
  }

  /**
   * Получение случайного индекса
   */
  getIndex() {
    return Math.floor(Math.random() * (this.gamePlay.getBorderSize() ** 2));
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
   * Прорисовка персонажа на поле.
   */
  movingChar() {
    this.getNewIndex();
    const idCell = `[data-id=cell_${this.indexCell}]`;
    const cell = document.querySelector(idCell);
    cell.insertAdjacentElement("beforeEnd", this.char);
  }

  /**
   * Рисует поле с персонажем с заданным интервалом
   */
  movingCharSetInterval(interval = 1000) {
    this.gamePlay.drawUi();
    this.movingChar();
    setInterval(() => {
      this.movingChar();
    }, interval);
  }
}
