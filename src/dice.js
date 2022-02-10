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

      custom_crit_class: config.custom_crit_class
        ? config.custom_crit_class
        : "", // Classe css custom in aggiunta a quella base quando il dado critta (es. 'dice d4 galaxy-dice crit fabuluse-crit' )

      dice_name: config.dice_name ? config.dice_name : "" // Nome del dado
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
        if (this.config.dice_name === "") this.config.dice_name = "D4";
        Dice.classList.add("d4");
        break;

      case 6:
        if (this.config.dice_name === "") this.config.dice_name = "D6";
        Dice.classList.add("d6");
        break;

      case 8:
        if (this.config.dice_name === "") this.config.dice_name = "D8";
        Dice.classList.add("d8");
        break;

      case 10:
        if (this.config.dice_name === "") this.config.dice_name = "D10";
        Dice.classList.add("d10");
        break;

      case 12:
        if (this.config.dice_name === "") this.config.dice_name = "D12";
        Dice.classList.add("d12");
        break;

      case 100:
        if (this.config.dice_name === "") this.config.dice_name = "D100";
        Dice.classList.add("d100");
        break;

      case 20:
        if (this.config.dice_name === "") this.config.dice_name = "D20";
        Dice.classList.add("d20");
        break;

      default:
        if (this.config.dice_name === "") this.config.dice_name = "Custom Dice";
        Dice.classList.add("ddefault");
        break;
    }

    if (this.config.custom_dice_class !== "") {
      Dice.classList.add(this.config.custom_dice_class);
    }

    this.draw(Dice, {
      dice_name: this.config.dice_name,
      value: this.config.faces,
      modifier: this.config.base_modifier
    });

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
    let total_modifier = mod + this.config.base_modifier;
    let value =
      Math.floor(Math.random() * max) + total_modifier + 1;

    this.draw(this.rendered, {
      dice_name: this.config.dice_name,
      value: value,
      modifier: this.config.base_modifier
    });

    if (value - total_modifier  == this.config.faces) {
      this.rendered.classList.add("crit");

      if (this.config.custom_crit_class)
        this.rendered.classList.add(this.config.custom_crit_class);
    } else this.rendered.classList.remove("crit");

    const event = new CustomEvent("dice-roll", {
      detail: {
        dice_config: this.config,
        result: this.value
      }
    });

    this.rendered.dispatchEvent(event);
    return value;
  }


  /**
   * Use this function for drawing inside a Dice Element
   * @param {Dice} Dice Html node od the Dice where we drawing inside 
   * @param {config} config parameters to render
   */
  draw(Dice, config) {
    Dice.textContent = "";
    let diceName = document.createElement("name");
    let diceValue = document.createElement("value");
    let diceMod = document.createElement("mod");

    Dice.appendChild(diceName);
    Dice.appendChild(diceValue);
    Dice.appendChild(diceMod);

    diceName.textContent = config.dice_name;

    diceValue.textContent = config.value;

    diceMod.textContent =
      "(" +
      (config.modifier >= 0 ? "+" + config.modifier : config.modifier) +
      ")";
  }
}
