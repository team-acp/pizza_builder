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
console.log(Pizza.toppings);




//constructor
function Pizza(sauce, cheese, toppings) {
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
}
//accept multiple toppings
//max of 5 toppings
//no double toppings
Pizza.prototype.addTopping = function (toppings) {

    if (!toppings.includes(toppings)) {
        this.toppings.push(toppings);
    }
};

Pizza.prototype.removeTopping = function (toppings) {
    for (let i = 0; i < toppings[i].length; i++) {
        if (toppings.includes(toppings)) {
            this.toppings.splice(i, 1);
            break;
        }

    }
};

Pizza.prototype.addCheese = function (cheese) {
    for (let i = 0; i < cheese[i].length; i++) {
        if (!cheese.includes(cheese)) {
            this.cheese.push(cheese);
        }
    }
};

Pizza.prototype.removeCheese = function (cheese) {
    for (let i = 0; i < cheese[i].length; i++) {
        if (cheese.includes(cheese)) {
            this.cheese.splice(i, 1);
            break;
        }
    }
};
//one pizza sauce not multiple
Pizza.prototype.addSauce = function (sauce) {
    this.sauce = sauce;
};

Pizza.prototype.removeSauce = function () {
    this.sauce = 'olive oil';
};
//check to see if toppings are already on pizza
console.log(toppings);


//might not need to be here.
Pizza.prototype.addTopping = function () {
    var addToppings = document.getElementById('meats', 'vegetables');
    var listEl = document.createElement('li');

    for (let i = 0; i < Pizza.toppings[i].length; i++) {
        listEl = Pizza.toppings[i];
        addToppings.append(listEl);
    }
};

Pizza.prototype.removeTopping = function () {
    var removeToppings = document.getElementById('meats', 'vegetables');
    var listEl = document.removeElement('li');

    for (let i = 0; i < Pizza.toppings[i].length; i++) {
        listEl = Pizza.toppings[i];
        removeToppings.detach(listEl);
    }//make it so u cant remove a topping that isnt there
};

//getElementById
Pizza.prototype.addCheese = function () {
    var addCheese = document.getElementById('cheese');
    var listEl = document.createElement('li');
    for (let i = 0; i < Pizza.cheese[i].length; i++) {
        listEl = Pizza.cheese[i];
        addCheese.append(listEl);
    }
};

Pizza.prototype.removeCheese = function () {
    var removeCheese = document.getElementById('cheese');
    var listEl = document.removeElement('li');
    for (let i = 0; i < Pizza.cheese[i].length; i++) {
        listEl = Pizza.cheese[i];
        removeCheese.detach(listEl);
    }
};

Pizza.prototype.addSauce = function () {
    var addSauce = document.getelementById('sauce');
    var listEl = document.createElement('li');
    for (let i = 0; i < Pizza.sauce[i].length; i++) {
        listEl = Pizza.sauce[i];
        addSauce.append(listEl);
    }
};

Pizza.prototype.removeSauce = function () {
    var removeSauce = document.getElementById('sauce');
    var listEl = document.createElement('li');
    for (let i = 0; i < Pizza.sauce[i].length; i++) {
        listEl = Pizza.sauce[i];
        removeSauce.detach(listEl);
    }
};

Pizza.prototype.render = function () {

};

var sauceString = JSON.stringify(Pizza.sauce);
var toppingsString = JSON.stringify(Pizza.toppings);
var cheeseString = JSON.stringify(Pizza.cheese);
localStorage.setItem('cheeseString', 'toppingsString', 'sauceString');
