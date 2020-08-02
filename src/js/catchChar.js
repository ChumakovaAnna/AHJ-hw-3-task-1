/**
 * Функция для ловли проверки, поймана ли картинка
 * @param {*} event - объект, на который произошел click
 * @returns {number} - возвращает 1, если попали на картинку, или -1, если промахнулись
 */
export default function catchChar(event) {
  if (event.target.classList.contains("img_goblin")) {
    return 1;
  }

  return -1;
}
