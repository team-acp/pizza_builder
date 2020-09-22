'use strict';
//global variables

//constructor
function Pizza(sauce, cheese, toppings) {
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
}
//accept multiple toppings
//max of 5 toppings
//no double toppings
Pizza.prototype.addTopping = function (toppings) {

  if (!toppings.includes(toppings)) {
    this.toppings.push(toppings);
  }
};

Pizza.prototype.removeTopping = function (toppings) {
  for (let i = 0; i < toppings[i].length; i++) {
    if (toppings.includes(toppings)) {
      this.toppings.splice(i, 1);
      break;
    }

  }
};

Pizza.prototype.addCheese = function (cheese) {
  for (let i = 0; i < cheese[i].length; i++) {
    if (!cheese.includes(cheese)) {
      this.cheese.push(cheese);
    }
  }
};

Pizza.prototype.removeCheese = function (cheese) {
  for (let i = 0; i < cheese[i].length; i++) {
    if (cheese.includes(cheese)) {
      this.cheese.splice(i, 1);
      break;
    }
  }
};

//one pizza sauce not multiple
//any sort of variable type can be passed into sauce keep aware
Pizza.prototype.addSauce = function (sauce) {
  this.sauce = sauce;
};
Pizza.prototype.removeSauce = function () {
  this.sauce = 'olive oil';
};
//check to see if toppings are already on pizza
//might not need to be here.

Pizza.prototype.render = function () {

};


// var sauceString = JSON.stringify(Pizza.sauce);
// var toppingsString = JSON.stringify(Pizza.toppings);
// var cheeseString = JSON.stringify(Pizza.cheese);
// localStorage.setItem('cheeseString', 'toppingsString', 'sauceString');
