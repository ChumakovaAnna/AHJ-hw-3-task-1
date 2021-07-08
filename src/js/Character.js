/**
 * Класс для создания гоблина
 */
export default class Character {
  constructor() {
    this.character = null;
  }

  /**
   * Создает HTML-элемент картинку
   */
  creatCharacter() {
    this.character = document.createElement("img");
    this.character.classList.add("img_goblin");
    this.character.src = "src/img/goblin.png";
    this.character.alt = "goblin";
  }
}
