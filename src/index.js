import "./styles.css";
import "./dices.css";
import Dice from "./dice.js";

let D4 = new Dice({ faces: 4 , base_modifier:-4});
let D4Element = D4.renderDice("app");
D4.rollTheDice();

let D8 = new Dice({ faces: 8 });
let D8Element = D8.renderDice("app");
D8.rollTheDice();

let D10 = new Dice({ faces: 10 });
let D10Element = D10.renderDice("app");
D10.rollTheDice();

let D12 = new Dice({ faces: 12, dice_name:"Spadone", base_modifier:1  });
let D12Element = D12.renderDice("app");
D12.rollTheDice();

let D20 = new Dice({ faces: 20 });
let D20Element = D20.renderDice("app");
D20.rollTheDice();

let D100 = new Dice({ faces: 100 });
let D100Element = D100.renderDice("app");
D100.rollTheDice();
