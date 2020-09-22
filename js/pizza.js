'use strict';
//global variables
var sauces = ['red sauce', 'olive oil', 'bbq', 'pesto'];
var basecheese = ['mozzarella', 'fresh mozzarella'];
var extracheese = ['feta', 'gorgonzola', 'goat cheese', 'riccota'];
var veggies = ['fresh minced garlic', 'mushrooms', 'green peppers', 'onions', 'red onions', 'olives', 'mama lil\'s', 'roasted garlic', 'sundried tomatoes', 'pinapple', 'jalepeno', 'pepperoncini']; //Test toppings array
var underLayerMeats = ['canadian bacon', 'salami', 'prosciutto', 'pepperoni'];
var overLayerMeats = ['chicken', 'sausage', 'anchovies']
var afterbakes = ['extra virgin olive oil', 'parsley', 'basil', 'arugula', 'tomatoes', 'sea salt'];

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
  if (!orderEl) orderEl = document.getElementById('order_pizza');//this is hack so that CSS will not capture the ticket the same way it does on the order form
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


Pizza.toppingLayer = function () {
  var selectedToppings = [];
  
  for (let i = 0; i < underLayerMeats.length; i++) {
    selectedToppings.push(underLayerMeats[i]);
  }

  for (let i = 0; i < veggies.length; i++) {
    selectedToppings.push(veggies[i]);
  }

  for (let i = 0; i < overLayerMeats.length; i++) {
    selectedToppings.push(overLayerMeats[i]);
  }
 
  for (let i = 0; i < extracheese.length; i++) {
    selectedToppings.push(extracheese[i]);
  }

  for (let i = 0; i < afterbakes.length; i++) {
    selectedToppings.push(afterbakes[i]);
  }
};

//save pizza order turning the variables to strings and saving to local storage
Pizza.prototype.savePizza = function() {
  var pizzaString = JSON.stringify(this);
  localStorage.setItem('pizza', pizzaString);
};

//creating pizza from local storage and making them into a order list
Pizza.prototype.loadPizza = function() {
  var pizzaString = localStorage.getItem('pizza');
  var tempPizza = JSON.parse(pizzaString);
  this.sauce = tempPizza.sauce;
  this.cheese = tempPizza.cheese;
  this.toppings = tempPizza.toppings;
};




