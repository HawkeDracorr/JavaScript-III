// The for principles of "this";
// * in your own words. explain the four principle for the "this" keyword below.
// *
// * 1. Window/Global: When placed within the global body, the window itself will be the target of `this`
// // Principle 1
// // code example for Window Binding

function goPewpew(weapon) {
  console.log(this);
  return weapon;
}
goPewpew("gun");

// * 2. Implicit: When used within a function, the function is called within itself with the format `this.something`,
//                where `this` is aimed at it's parent function.
// // Principle 2
// // code example for Implicit Binding
  function Appletax(price) {
    let Apple = this.price + 1000;
    return Apple;
  }

// * 3. New: when used within a `constructor`, this refers to the specific object created at the time by the `constructor`
// // Principle 3
// // code example for New Binding

  function Humanoid(chara) {
  CharacterStats.call(this, chara);
  this.team = chara.team;
  this.weapons = chara.weapons;
  this.language = chara.language;
  this.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`
  };
}
//
// * 4. Explicit: this refers to whatever you call it upon.
// // Principle 4
// // code example for Explicit Binding

  CharacterStats.call(this, chara);
