'use strict';


var sauces = ['red sauce', 'olive oil', 'bbq', 'pesto'];
var basecheese = ['mozzarella', 'fresh mozzarella'];
var extracheese = ['feta', 'gorgonzola', 'goat cheese', 'riccota'];
var veggies = ['fresh minced garlic', 'mushrooms', 'green peppers','onions', 'red onions', 'olives', 'mama lil\'s', 'roasted garlic', 'sundried tomatoes', 'pinapple', 'jalepeno', 'pepperoncini']; //Test toppings array
var meats = ['canadian bacon', 'salami', 'prosciutto', 'pepperoni', 'chicken', 'sausage', 'anchovies'];
var afterbakes = ['extra virgin olive oil', 'parsley', 'basil', 'arugula', 'tomatoes', 'sea salt'];

function diplayYourPizza(toppings) {
  var orderEl = document.getElementById('your_pizza'); //make sure we run ID name by Kim
  var toppingsEl = document.createElement('ul');
  orderEl.append(toppingsEl);

  sortToppings(toppings);

  var li;
  for (let i = 0; i < toppings.length; i++){
    li = document.createElement('li');
    toppingsEl.append(li);
    li.textContent = toppings[i];
    if (toppingLayer(toppings[i]) < 0)
      li.textContent += ' (Under the cheese)';

  }
}
diplayYourPizza(['green peppers', 'olives']);

function toppingLayer(topping) {
  switch(topping) {
  case 'green peppers': return 12;
  case 'pineapple': return 14;
  case 'mushrooms': return 11;
  case 'onions': return 13;
  case 'fresh minced garlic': return -1;
  default: return 0;
  }
}

function sortToppings(toppings) {
  toppings.sort(function(a,b){return toppingLayer(a) - toppingLayer(b);});
}

function createCheckboxList(toppings, container) {
  for (let i = 0; i < toppings.length; i++) {
    var inputEl = document.createElement('imput');
    var labelEl = document.createElement('label');
    container.append(inputEl); //do we want to append the input to the label?
    container.append(labelEl);
    container.append(document.createElement('br'));


    inputEl.type = 'checkbox';
    inputEl.id = 'cb_' + toppings[i];
    inputEl.name = 'cb_' + toppings[i];
    inputEl.value = toppings[i];
    labelEl.for = 'cb_' + toppings[i];
    labelEl.textContent = toppings[i];

  }

  return container;
}

function createAllCheckBoxes() {
  var sauceEl = document.getElementById('sauce');
  var cheeseEl = document.getElementById('cheese');
  var veggiesEl = document.getElementById('vegetables');
  var meatsEl = document.getElementById('meats');
  // var afterbakesEl = document.getElementById('afterbakes');
  createCheckboxList(sauces, sauceEl);
  createCheckboxList(basecheese, cheeseEl);
  createCheckboxList(veggies.concat(extracheese), veggiesEl); //should these be separated or copied?
  createCheckboxList(meats, meatsEl);
  // createCheckboxList(afterbakes, afterbakesEl);
}

createAllCheckBoxes();
