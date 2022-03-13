import DiceBag from "./dicebag.js";
import diceAnimation from "./diceAnimation.js";
import dice from "./dices.css";
import style from "./styles.css";
import animation from "./animations.css";
import end from "./end.css";
import image from "./../resources/back.jpg";
let MyBag = new DiceBag();

MyBag.createNewDice({ faces: 4, base_modifier: -4, image: image });
MyBag.createNewDice({ faces: 8 });
MyBag.draw();
