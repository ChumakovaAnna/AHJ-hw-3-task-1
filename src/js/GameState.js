/**
 * Класс для отслеживания состояния игры
 */
export default class GameState {
  constructor() {
    this.hit = 0;
    this.miss = 0;
    this.move = 0;
    this.finish = false;
    this.victory = false;
    // был ли клик в этом ходу
    this.clickThisTern = false;
  }

  /**
   * Метод для проверки количества попаданий, промахов и показов. Должно быть не более 5.
   */
  checkAttempt(item) {
    if (item >= 5) {
      this.gameOver();
    }
  }

  /**
   * Метод для проверки, чтобы количество показов персонажа было не меньше 0
   */
  checkMoveMin() {
    if (this.move < 0) {
      this.move = 0;
    }
  }

  /**
   * Метод для окончание игры
   */
  gameOver() {
    this.finish = true;
    console.log("Game over!");
  }

  /**
   * Победа и проигрыш
   */
  checkVictory() {
    if (this.hit >= 5 && this.finish === true) {
      this.victory = true;
      console.log("Victory!");
    }

    if (this.finish === true && this.miss >= 5) {
      console.log("You lose!");
    }
  }
}
