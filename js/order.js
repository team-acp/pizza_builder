'use strict';

var toppings = ['green peppers', 'mushrooms', 'onions', 'fresh minced garlic', 'pinapple']; //Test toppings array

function diplayYourPizza() {
  var orderEl = document.getElementById('yourPizza'); //make sure we run ID name by Kim
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
diplayYourPizza();

function toppingLayer(topping) {
  switch(topping) {
  case 'green peppers': return 12;
  case 'pineapple': return 14;
  case 'mushrooms': return 11;
  case 'onions': return 13;
  case 'fresh minced garlic': return -1;
  }
}

function sortToppings(toppings) {
  toppings.sort(function(a,b){return toppingLayer(a) - toppingLayer(b);});
}
