'use strict';


function createCheckboxList(toppings, container, type) {
  for (let i = 0; i < toppings.length; i++) {
    var inputEl = document.createElement('input');
    var labelEl = document.createElement('label');
    container.append(inputEl); //do we want to append the input to the label?
    container.append(labelEl);
    container.append(document.createElement('br'));

    inputEl.type = type;
    inputEl.id = 'cb_' + toppings[i];
    inputEl.name = 'cb_' + toppings[i];
    inputEl.value = toppings[i];
    labelEl.for = 'cb_' + toppings[i];
    labelEl.textContent = toppings[i];

  }

  return container;
}

function createAllCheckBoxes() {
  var saucesEl = document.getElementById('sauce');
  var cheesesEl = document.getElementById('cheese_base');
  var veggiesEl = document.getElementById('vegetables');
  var meatsEl = document.getElementById('meats');
  var extracheesesEl = document.getElementById('cheese_toppings');

  // create one array for the veggies and afterbakes
  var temp_veggies = [];
  for (let i = 0; i < veggies.length; i++)
    temp_veggies.push(veggies[i]);
  for (let i = 0; i < afterbakes.length; i++)
    temp_veggies.push(afterbakes[i]);

  // create one array for the under and over meats
  var temp_meats = [];
  for (let i = 0; i < underLayerMeats.length; i++)
    temp_meats.push(underLayerMeats[i]);
  for (let i = 0; i < overLayerMeats.length; i++)
    temp_meats.push(overLayerMeats[i]);

  // now lets make the checkboxes in the menu form
  createCheckboxList(sauces, saucesEl, 'checkbox');
  createCheckboxList(basecheeses, cheesesEl, 'checkbox');
  createCheckboxList(temp_veggies, veggiesEl, 'checkbox');
  createCheckboxList(temp_meats, meatsEl, 'checkbox');
  createCheckboxList(extracheeses, extracheesesEl, 'checkbox');
}

createAllCheckBoxes();

// this is a test pizza
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

document.getElementById('submit_pizza').addEventListener('click', submitButtonHandler);

function submitButtonHandler() {
  myPizza.savePizza();
}
