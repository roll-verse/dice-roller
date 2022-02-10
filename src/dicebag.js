import Dice from "./dice.js"; //Dice class

export default class DiceBag {
  /**
   *  This object is the Dice Container. Create an array of Dice elemets.
   *
   */
  constructor() {
    this.dicebag = [];
  }

  /**
   *  Create a Dice and add it to the dice Array
   * 
   * @param {+}  Dice Configuration
   *
   */
  createNewDice(config) {
    let dice = new Dice(config);
    this.dicebag.push(dice); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  }

  /**
   * The draw function renders a dice in a specified <div id="elemnt"></div>
   *
   * @param {element} id of parent node
   * 
   */

  draw(element) {
    let bag = document.getElementById(element);
    bag.textContent = "";
    this.dicebag.forEach((dice) => {
      dice.renderDice(element);
    });
  }
}
