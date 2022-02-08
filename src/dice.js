export default class Dice {
  /**
   *  This object is the Dice. Set the {faces} of the dice (default: 6)
   *
   * @param {faces} Faces of the dice
   */
  constructor(config) {
    
    this.config = {

      faces: config.faces ? config.faces : 6, // Numero di facce

      base_modifier: config.base_modifier ? config.base_modifier : 0, // Modificatore di base applicato ad ogni tiro

      custom_dice_class: config.custom_diceclass ? config.custom_diceclass : "", // Classe css custom in aggiunta a quella base (es. 'dice d4 galaxy-dice' )

      custom_crit_class: config.custom_crit_class ? config.custom_crit_class : ""       // Classe css custom in aggiunta a quella base quando il dado critta (es. 'dice d4 galaxy-dice crit fabuluse-crit' )
    
    };
  }

  /**
   * Render the element inside a Node with id {element} and return the Dice node
   *
   * @param {elemnt} id of parent Node.
   * @retun {Dice}  Node of the Dice
   */

  renderDice(elemnt) {
    let Dice = document.createElement("dice");

    Dice.classList.add("dice");

    switch (this.config.faces) {
      case 4:
        Dice.classList.add("d4");
        break;

      case 6:
        Dice.classList.add("d6");
        break;

      case 8:
        Dice.classList.add("d8");
        break;

      case 10:
        Dice.classList.add("d10");
        break;

      case 12:
        Dice.classList.add("d12");
        break;

      case 100:
        Dice.classList.add("d100");
        break;

      case 20:
        Dice.classList.add("d20");
        break;

      default:
        Dice.classList.add("ddefault");
        break;
    }

    document.getElementById(elemnt).appendChild(Dice);

    Dice.addEventListener("click", (event) => {
      this.rollTheDice();
    });
    this.rendered = Dice;
    return Dice;
  }

  /**
   * rollTheDice generates a random value between 1 and this.faces and then prints it in to this.rendered
   *
   * @param {mod} Modifier of the function (default: 0)
   * @retun {value} Random value
   */

  rollTheDice(mod = 0) {
    let max = this.config.faces;
    let value = Math.floor(Math.random() * max) + mod + 1;
    this.rendered.textContent = value;
    if (value == this.config.faces) this.rendered.classList.add("crit");
    else this.rendered.classList.remove("crit");
    return value;
  }
}
