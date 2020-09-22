'use strict';
//global variables
Pizza.toppings = [];
Pizza.cheese = [];
Pizza.sauce = [];
//pizza toppings
var toppings = ['onions', 'mushrooms', 'spinach', 'roasted peppers', 'banana peppers', 'jalapeno peppers', 'tomatoes', 'black olives', 'pepperoni', 'sausage', 'beef', 'anchovy', 'chicken', 'shaved steak'];
var cheese = ['American', 'Cheddar', 'Provolone', 'Swiss', 'Monterey Jack', 'feta', 'Havarti'];
var sauces = ['Italian inspired robust red tomato', 'Alfredo', 'garlic Parmesan', 'Nacho cheese'];
Pizza.toppings.push(toppings);
Pizza.cheese.push(cheese);
Pizza.sauce.push(sauces);






function Pizza(sauce, cheese, toppings) {
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
}
console.log(toppings);
Pizza.prototype.addTopping = function () {
    var addToppings = document.getElementByClass('toppings');
    var listEl = document.createElement('li');

    for (let i = 0; i < Pizza.toppings[i].length; i++) {
        listEl = Pizza.toppings[i];
        addToppings.append(listEl);
    }
};

Pizza.prototype.removeTopping = function () {
    var removeToppings = document.getElementById('toppings');
    var listEl = document.removeElement('li');

    for (let i = 0; i < Pizza.toppings[i].length; i++) {
        listEl = Pizza.toppings[i];
        removeToppings.detach(listEl);
    }
};

Pizza.prototype.addCheese = function () {
    var addCheese = document.getElementByClass('cheese');
    var listEl = document.createElement('li');
    for (let i = 0; i < Pizza.cheese[i].length; i++) {
        listEl = Pizza.cheese[i];
        addCheese.append(listEl);
    }
};

Pizza.prototype.removeCheese = function () {
    var removeCheese = document.getElementByClass('cheese');
    var listEl = document.removeElement('li');
    for (let i = 0; i < Pizza.cheese[i].length; i++) {
        listEl = Pizza.cheese[i];
        removeCheese.detach(listEl);
    }
};

Pizza.prototype.addSauce = function () {
    var addSauce = document.getelementByClass('sauce');
    var listEl = document.createElement('li');
    for (let i = 0; i < Pizza.sauce[i].length; i++) {
        listEl = Pizza.sauce[i];
        addSauce.append(listEl);
    }
};

Pizza.prototype.removeSauce = function () {
    var removeSauce = document.getElementByClass('sauce');
    var listEl = document.createElement('li');
    for (let i = 0; i < Pizza.sauce[i].length; i++) {
        listEl = Pizza.sauce[i];
        removeSauce.detach(listEl);
    }
};
