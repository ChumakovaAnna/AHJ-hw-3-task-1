/**
 * Класс для создания гоблина
 */
export default class Char {
  constructor() {
    this.char = null;
  }

  /**
   * Создает HTML-элемент картинку
   */
  creatChar() {
    this.char = document.createElement("img");
    this.char.src = "src/img/goblin.png";
    this.char.alt = "goblin";
  }

  /**
   * Получение персонажа
   */
  getChar() {
    return this.char;
  }
}
