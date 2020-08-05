/**
 * Класс для прорисовки статуса игры на странице
 */
export default class GameStateDraw {
  /**
   * @param  {} gameState - класс для отслеживания состояния игры
   */
  constructor(gameState) {
    this.gameState = gameState;
    this.container = null;
    this.hitEl = null;
    this.missEl = null;
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
   * Проверяет если container равен null
   */
  checkBinding() {
    if (this.container === null) {
      throw new Error("GameStateDraw not bind to DOM");
    }
  }

  /**
   * Прорисовывает рабочее поле
   */
  drawUi() {
    this.checkBinding();
    this.hitEl.innerHTML = this.gameState.hit;
    this.missEl.innerText = this.gameState.miss;
    this.gameState.checkedVictory();
  }

  /**
   * Находим HTML-элемент для количества попаданий
   */
  findHitEl() {
    this.hitEl = this.container.querySelector(".hit_number");
  }

  /**
   * Находим HTML-элемент для количества промахов
   */
  findMissEl() {
    this.missEl = this.container.querySelector(".miss_number");
  }

  /**
   * Находим все HTML-элементы для отображения статистики
   */
  findAllEl() {
    this.findHitEl();
    this.findMissEl();
  }
}
