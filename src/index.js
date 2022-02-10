import DiceBag from "./dicebag.js";

let MyBag = new DiceBag();

MyBag.createNewDice({ faces: 4, base_modifier: -4 });
MyBag.createNewDice({ faces: 8 });
MyBag.draw("app");

let MyBag2 = new DiceBag();
MyBag2.createNewDice({ faces: 6, base_modifier: -4 });
MyBag2.createNewDice({ faces: 18 });
MyBag2.draw("app2");