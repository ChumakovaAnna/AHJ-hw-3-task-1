/**
 * Класс для работы с игровым полем
 */
export default class GamePlay {
  constructor(number = 4) {
    this.boardSize = number;
    this.container = null;
    this.cells = null;
    this.boardEl = null;
  }

  /**
   * Проверяет, является ли container HTML-элемент
   * @param  {} container
   */
  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("container is not HTMLElement");
    }
    this.container = container;
  }

  /**
   * Прорисовывает рабочее поле
   */
  drawUi() {
    this.checkBinding();

    this.container.innerHTML = `
    <div class="grid-${this.boardSize}-center-noGutter" data-id="board"></div>
    `;
    this.boardEl = this.container.querySelector("[data-id=board]");
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement("div");
      cellEl.classList.add("col");
      cellEl.innerHTML = `<div class="cell" data-id="cell_${i}"></div>`;
      this.boardEl.insertAdjacentElement("beforeEnd", cellEl);
    }
  }

  /**
   * Проверяет если container равен null
   */
  checkBinding() {
    if (this.container === null) {
      throw new Error("GamePlay not bind to DOM");
    }
  }

  /**
   * Возвращает размер поля по одной стороне
   */
  getBorderSize() {
    return this.boardSize;
  }
}
