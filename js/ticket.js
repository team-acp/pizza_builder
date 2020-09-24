'use strict';

var newPizzaOrder;

function pizzaOrder() {
  newPizzaOrder = Pizza.loadPizza();
  newPizzaOrder.render();
}
pizzaOrder();

function commentButtonHandler(event) {
  event.preventDefault();

  var orderPizzaEl = document.getElementById('order_pizza');
  var commentsEl = document.createElement('p');
  orderPizzaEl.append(commentsEl);

  commentsEl.id = 'instruction';
  commentsEl.textContent = document.getElementById('text_box').value;

  document.getElementById('ticket_entry_form').innerHTML = null;
}

document.getElementById('submit_button').addEventListener('click', commentButtonHandler);
