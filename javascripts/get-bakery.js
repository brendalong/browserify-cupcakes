"use strict";

let inventory = require('./cakeInventory');

//create object to hold all the 'bakery' methods
let bakery = {};


//get inventory
bakery.getInventory = () => {
   return inventory;
};

bakery.addItem = () => {
   //code to add a new item
}

bakery.removeItem = () => {
   //code to remove an item from data source
}

module.exports = bakery;