export default class diceAnimation {
  constructor(element) {
    element.addEventListener("dice-roll", function (event) {
      event.target.classList.add("rolling");
    });
  }
}
