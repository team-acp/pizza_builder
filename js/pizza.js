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

  if (!cheese.includes(cheese)) {
    this.cheese.push(cheese);
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

//one pizza sauce not multiple - fixed
//any sort of variable type can be passed into sauce keep aware
Pizza.prototype.addSauce = function (sauce) {
  this.sauce = sauce;
};
Pizza.prototype.removeSauce = function () {
  this.sauce = 'olive oil';
};
//check to see if toppings are already on pizza - fixed
//might not need to be here.

Pizza.prototype.render = function () {
  var orderEl = document.getElementById('your_pizza');
  var toppingsEl = document.createElement('ul');
  orderEl.append(toppingsEl);

  Pizza.sortToppings(this.toppings);

  var li;
  for (let i = 0; i < this.toppings.length; i++) {
    li = document.createElement('li');
    toppingsEl.append(li);
    li.textContent = this.toppings[i];
    if (Pizza.toppingLayer(this.toppings[i]) < 0)
      li.textContent += ' (Under the cheese)';

  }
};
Pizza.sortToppings = function (toppings) {
  toppings.sort(function (a, b) { return Pizza.toppingLayer(a) - Pizza.toppingLayer(b); });
};

Pizza.toppingLayer = function (topping) {
  //future editing/test function
  switch (topping) {
    case 'green peppers': return 12;
    case 'pineapple': return 14;
    case 'mushrooms': return 11;
    case 'onions': return 13;
    case 'fresh minced garlic': return -1;
    default: return 0;
  }
};

//save pizza order turning the variables to strings and saving to local storage
Pizza.savePizza = function(pizza) {
  var pizzaString = JSON.stringify(pizza)
  localStorage.setItem("pizza", pizzaString);
}
//creating pizza from local storage and making them into a order list
Pizza.loadPizza = function() {
  var pizzaString = localStorage.getItem("pizza");
  var tempPizza = JSON.parse(pizzaString);
  var sauce = tempPizza.sauce
  var cheese = tempPizza.cheese
  var toppings = tempPizza.toppings
  return new Pizza(sauce, cheese, toppings);
}




