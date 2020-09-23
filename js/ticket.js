'use strict';

var newPizzaOrder;

function pizzaOrder() {
  newPizzaOrder = Pizza.loadPizza();
  newPizzaOrder.render();
}
pizzaOrder();
