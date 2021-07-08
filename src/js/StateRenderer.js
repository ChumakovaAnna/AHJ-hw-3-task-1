/**
 * Класс для прорисовки статуса игры на странице
 */
export default class StateRenderer {
  /**
   * @param  {} gameState - класс для отслеживания состояния игры
   */
  constructor(gameState) {
    this.gameState = gameState;
    this.container = null;
    this.hitElement = null;
    this.missElement = null;
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
   * renderUi
   */
  renderUi() {
    this.checkBinding();
    this.hitElement.innerHTML = this.gameState.hit;
    this.missElement.innerText = this.gameState.miss;
    this.gameState.checkVictory();
  }

  /**
   * Находим HTML-элемент для количества попаданий
   */
  findHitElement() {
    this.hitElement = this.container.querySelector(".hit_number");
  }

  /**
   * Находим HTML-элемент для количества промахов
   */
  findMissElement() {
    this.missElement = this.container.querySelector(".miss_number");
  }

  /**
   * Находим все HTML-элементы для отображения статистики
   */
  bindCounters() {
    this.findHitElement();
    this.findMissElement();
  }
}
