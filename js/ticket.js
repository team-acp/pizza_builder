'use strict';

var newPizzaOrder;

function pizzaOrder() {
  newPizzaOrder = Pizza.loadPizza();
  newPizzaOrder.render();
}
pizzaOrder();

function commentButtonHandler(event) {
  event.preventDefault();
  var commentPlaceEl = document.createElement('p');
  commentPlaceEl.id = "instruction";
  var textFieldEl = document.getElementById('text_box');
  commentPlaceEl.textContent = textFieldEl.value;
  var orderPizzaEl = document.getElementById('order_pizza');
  orderPizzaEl.append(commentPlaceEl);
  document.getElementById('comment').innerHTML = null;
}

document.getElementById('submit_button').addEventListener('click', commentButtonHandler);
