'use strict';


function createCheckboxList(toppings, container) {
  for (let i = 0; i < toppings.length; i++) {
    var inputEl = document.createElement('input');
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

var myPizza = new Pizza('sauce', 'mozzarella', ['green peppers', 'mushrooms', 'onions', 'anchovies']);
myPizza.render();

document.getElementById('topping_selector').addEventListener('click', toppingCheckBox);

function toppingCheckBox(event) {
  var topping = event.target.value;
  var checked = event.target.checked;
  console.log(topping, checked);
  if (!topping) {
    return;
  }
  if (checked === true) {
    myPizza.addTopping(topping);
  } else {
    myPizza.removeTopping(topping);
  }
  document.getElementById('your_pizza').innerHTML = null;
  myPizza.render();
}
