import "./styles.css";
import Dice from "./dice.js";

let D4 = new Dice(4);
let D4Element = D4.renderDice("app");
D4.rollTheDice();

let D8 = new Dice(8);
let D8Element = D8.renderDice("app");
D8.rollTheDice();

let D10 = new Dice(10);
let D10Element = D10.renderDice("app");
D10.rollTheDice();

let D12 = new Dice(12);
let D12Element = D12.renderDice("app");
D12.rollTheDice();

let D20 = new Dice(20);
let D20Element = D20.renderDice("app");
D20.rollTheDice();

let D100 = new Dice(100);
let D100Element = D100.renderDice("app");
D100.rollTheDice();
