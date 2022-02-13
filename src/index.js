import DiceBag from "./dicebag.js";

let MyBag = new DiceBag();

MyBag.createNewDice({ faces: 4, base_modifier: -4 });
MyBag.createNewDice({ faces: 8 });
MyBag.draw();
