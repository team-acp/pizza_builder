'use strict';
//global variables
var sauces = ['red sauce', 'olive oil', 'bbq', 'pesto'];
var sauce_seasonings = ['fresh minced garlic', 'red chili flakes', 'oregeno'];
var basecheeses = ['mozzarella', 'fresh mozzarella'];
var extracheeses = ['feta', 'gorgonzola', 'goat cheese', 'riccota'];
var veggies = ['fresh minced garlic', 'mushrooms', 'green peppers', 'onions', 'red onions', 'olives', 'mama lil\'s', 'roasted garlic', 'sundried tomatoes', 'pineapple', 'jalepeno', 'pepperoncini']; //Test toppings array
var underLayerMeats = ['canadian bacon', 'salami', 'prosciutto', 'pepperoni'];
var overLayerMeats = ['chicken', 'sausage', 'anchovies'];
var afterbakes = ['extra virgin olive oil', 'parsley', 'basil', 'arugula', 'tomatoes', 'sea salt'];

//constructor
function Pizza(toppings) {
  this.toppings = toppings;
}
//accept multiple toppings
//max of 5 toppings
//no double toppings
Pizza.prototype.addTopping = function (topping) {
  if (!this.toppings.includes(topping)) {
    this.toppings.push(topping);
  }
};

Pizza.prototype.removeTopping = function (topping) {
  for (let i = 0; i < this.toppings.length; i++) {
    if (topping === this.toppings[i]) {
      this.toppings.splice(i, 1);
      break;
    }

  }
};

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

    // Any topping with a negative toppingLayer are meant to go under the cheese
    if (Pizza.toppingLayer(this.toppings[i]) < 0)
      li.textContent += ' (Under the cheese)';

    // Any topping in the afterbakes array will say so
    if (afterbakes.includes(this.toppings[i])) {
      li.textContent += ' (afterbake)';
    }

  }
};

Pizza.prototype.createStickyNote = function () {
  if (!this.stickyNote) {
    this.stickyNote = "Enter special considerations here, please.";
  }
  var stickyNoteEl = document.createElement('input');
  stickyNoteEl.setAttribute('type', 'text');
  stickyNoteEl.id = "stickyNote";
  stickyNoteEl.value = this.stickyNote;
  document.getElementById("order_pizza").append(stickyNoteEl);
}

Pizza.sortToppings = function (toppings) {
  toppings.sort(function (a, b) { return Pizza.toppingLayer(a) - Pizza.toppingLayer(b); });
};


Pizza.toppingLayer = function (topping) {
  var selectedToppings = [];

  // Return a negative value for sauce_seasonings
  if (sauce_seasonings.includes(topping))
    for (let i = 0; i < sauce_seasonings.length; i++)
      if (topping === sauce_seasonings[i])
        return i - sauce_seasonings.length;

  // sauces are at layer 0
  if (sauces.includes(topping))
    return 0;

  //basecheeses are at layer 1-9
  if (basecheeses.includes(topping))
    for (let i = 0; i < basecheeses.length; i++)//fix bug
      if (topping === basecheeses[i])
        return i + 1;

  // compile all other toppings into a single array
  for (let i = 0; i < underLayerMeats.length; i++) {
    selectedToppings.push(underLayerMeats[i]);
  }

  for (let i = 0; i < veggies.length; i++) {
    selectedToppings.push(veggies[i]);
  }

  for (let i = 0; i < overLayerMeats.length; i++) {
    selectedToppings.push(overLayerMeats[i]);
  }

  for (let i = 0; i < extracheeses.length; i++) {
    selectedToppings.push(extracheeses[i]);
  }

  for (let i = 0; i < afterbakes.length; i++) {
    selectedToppings.push(afterbakes[i]);
  }

  // return the position of that topping in the array + 10
  // this is because sauce is layer 0, and base_cheeses are
  // reserved for layers 1-9
  for (let i = 0; i < selectedToppings.length; i++) {
    if (topping === selectedToppings[i])
      return i + 10;
  }

};

//save pizza order turning the variables to strings and saving to local storage
Pizza.savePizza = function (pizza) {
  var pizzaString = JSON.stringify(pizza);
  localStorage.setItem('pizza', pizzaString);
};

//creating pizza from local storage and making them into a order list
Pizza.loadPizza = function () {
  var tempPizza;
  if (!localStorage.pizza) {
    tempPizza = new Pizza(['red sauce', 'mozzarella']);
  } else {
    var pizzaString = localStorage.getItem('pizza');
    var savedPizza = JSON.parse(pizzaString);

    tempPizza = new Pizza(savedPizza.toppings);
  }
  return tempPizza;
};
