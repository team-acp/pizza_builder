'use strict';

var newPizzaOrder;

function pizzaOrder() {
  newPizzaOrder = Pizza.loadPizza();
  newPizzaOrder.render();
}
pizzaOrder();

function commentButtonHandler() {
  newPizzaOrder.createStickyNote();
}

document.getElementById('submit_comment').addEventListener('click', commentButtonHandler);
