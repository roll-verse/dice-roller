# Dice-Roller

With the Dice Class you can make the Roll-Verse dream come true.

## Usage
Import the class file and the default css: 
```javascript
import "./dice.css";
import Dice from "./dice.js";
```


## CheatSheat - How to

 #### How to create a defaut dice
How to create a  D20  defaut dice inside the ```<div id='app'></div> ```
```javascript
let D20 = new Dice({  faces : 20 });
let D20HtmlNode = D20.renderDice("app");
```

 #### How to create a custom dice
 How to create a custom D4  dice with a +2 on each roll
```javascript
let D4 = new Dice(
{
  faces : 4,
  base_modifier : +2,
  custom_dice_class : 'my-custom-css-class',
  custom_crit_class : 'my-custom-crit-css-class'
});
let D4Element = D4.renderDice("app");
```

 #### How to roll  dice
 How to create a custom D4  dice with a +2 on each roll
```javascript
let result = D20.rollTheDice(); 
console.log(result)

let custom_result = D20.rollTheDice(-2); 
console.log(custom_result)

let custom_result_2 = D20.rollTheDice(+4); 
console.log(custom_result_2)
```

## CSS Structures
You can create a custom css theme for the dice. Default dice use the ```.dice``` class plus a normalized  ```.d{faces}``` class for standard faces value :   ```[4,6,8,10,12,20,100]``` for other value use the ```.ddefault``` class.
So you can make a css file like this:
```css 
.dice {
    /* dice structure border padding ecc.. */
}
.d4 {
    /* customizzation for the d4 */
}
.d6 {
    /* customizzation for the d6 */
}
.d8 {
    /* customizzation for the d8 */
}
.d10 {
    /* customizzation for the d10 */
}
.d12 {
    /* customizzation for the d12 */
}
.d20 {
    /* customizzation for the d20 */
}
.d100 {
    /* customizzation for the d100 */
}
.ddefault {
    /* customizzation for the other dices */
}
``` 
 

