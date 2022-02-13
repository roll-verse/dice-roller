import Dice from "./dice.js"; //Dice class

export default class DiceBag {
  /**
   *  This object is the Dice Container. Create an array of Dice elemets.
   *
   */
  constructor() {
    const d = new Date();
    let time = d.getTime();
    this.dicebag = [];
    this.id = "dice-bag-" + time;
  }

  /**
   *  Create a Dice and add it to the dice Array
   * @param {+} config - Dice Configuration
   *
   */
  createNewDice(config) {
    let dice = new Dice(config);
    this.dicebag.push(dice); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  }

  /**
   * The draw function renders a dice in a specified <div id="elemnt"></div>
   *
   * @param {element} element
   */

  draw() {
    let bag = document.createElement("dicebag");
    bag.classList.add("card");
    bag.setAttribute("id", this.id);
    //bag.textContent = "";
    document.body.append(bag);
    this.dicebag.forEach((dice) => {
      dice.renderDice(this.id);
    });
  }
}
