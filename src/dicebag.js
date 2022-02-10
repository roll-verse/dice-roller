import Dice from "./dice.js";
export default class DiceBag {
  constructor() {
    this.dicebag = [];
  }

  createNewDice(config) {
    let dice = new Dice(config);
    this.dicebag.push(dice);
  }

  draw(element) {
    let bag = document.getElementById(element);
    bag.textContent = "";
    this.dicebag.forEach((dice) => {
      dice.renderDice(element);
    });
  }
}
