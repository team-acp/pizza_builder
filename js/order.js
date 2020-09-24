'use strict';

var myPizza = Pizza.loadPizza();

function createCheckboxList(toppings, container, type, name) {
  for (let i = 0; i < toppings.length; i++) {
    var inputEl = document.createElement('input');
    var labelEl = document.createElement('label');
    container.append(inputEl); //do we want to append the input to the label?
    container.append(labelEl);
    container.append(document.createElement('br'));

    inputEl.type = type;
    inputEl.setAttribute('class', 'toppingCheckbox');
    inputEl.id = 'cb_' + toppings[i];
    inputEl.name = name;
    inputEl.value = toppings[i];
    labelEl.for = name;
    labelEl.textContent = toppings[i];
  }
  return container;
}

function syncCheckboxes() {
  var allCheckboxes = document.getElementsByClassName('toppingCheckbox');
  for (let i = 0; i < allCheckboxes.length; i++) {
    if (myPizza.toppings.includes(allCheckboxes[i].value)) {
      allCheckboxes[i].checked = true;
    }
  }
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
  createCheckboxList(sauces, saucesEl, 'radio', 'sauce');
  createCheckboxList(basecheeses, cheesesEl, 'checkbox', 'cheese');
  createCheckboxList(temp_veggies, veggiesEl, 'checkbox', 'topping');
  createCheckboxList(temp_meats, meatsEl, 'checkbox', 'topping');
  createCheckboxList(extracheeses, extracheesesEl, 'checkbox', 'topping');
}

function toppingCheckBoxHandler(event) {
  var target = event.target;

  // Handle if we clicked on the label instead of the checkbox
  // which means reassign the target to the checkbox (or radio) object
  // and set a flag so we can manually manage the checkbox (or radio)
  // status later
  if (target.nodeName === 'LABEL') {
    var clickedLabel = 1;
    target = document.getElementById('cb_' + target.textContent);
    console.log(target.type);
    var radio = target.type === 'radio';
  }

  // if we clicked on something without a topping attribute, get out
  var topping = target.value;
  if (!topping) {
    return;
  }

  // get out if we clicked a label on a radio button that is already true
  var checked = target.checked;
  if (clickedLabel && radio && target.checked)
    return;

  // manually adjust checkbox value if we clicked the label
  if (clickedLabel) {
    checked = !checked;
    target.checked = checked;
  }

  // remove all souces from the pizza, we'll reapply the one sauce later
  if (target.name === 'sauce') {
    for (let i = 0; i < sauces.length; i++) {
      myPizza.removeTopping(sauces[i]);
    }
  }

  // apply or unapply the topping (including a sauce if that is the target) to the pizza
  if (checked === true) {
    myPizza.addTopping(topping);
  } else {
    myPizza.removeTopping(topping);
  }
  document.getElementById('your_pizza').innerHTML = null;
  myPizza.render();
  Pizza.savePizza(myPizza);
}

function submitButtonHandler() {
  Pizza.savePizza(myPizza);
}

document.getElementById('topping_selector').addEventListener('click', toppingCheckBoxHandler);
document.getElementById('submit_pizza').addEventListener('click', submitButtonHandler);

createAllCheckBoxes();
syncCheckboxes();

myPizza.render();
