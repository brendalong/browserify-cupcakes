"use strict";

//notice the commas
// let cakeInventory = require('./fetch-bakery'),
let cakeInventory = require('./get-bakery'),
   cakeTemplate = require('./cake-grid'),
   welcomeTemplate = require('./welcome');


let welcomeDiv = document.createElement("header");
welcomeDiv.innerHTML = welcomeTemplate.showWelcome();
document.getElementById('welcome').append(welcomeDiv);


function populatePage(sweetArray){
   // console.log("sweetArray", sweetArray);
   let newDiv = document.createElement("div");
   newDiv.setAttribute("class", "flex-container");
   newDiv.innerHTML = sweetArray.map(cakeTemplate.makeGridItem);
   document.getElementById("cake-cards").append(newDiv);
}


const sweetStuff = cakeInventory.getInventory();
console.log("sweetStuff", sweetStuff);
//getting started with array data
populatePage(cakeInventory.getInventory());

// //lets get this started xhr
// cakeInventory.loadInventory()
// .then(
// 	(inventoryFromLoadInventoryResolve) => {
// 		console.log("Cake Promise", inventoryFromLoadInventoryResolve);
// 		populatePage(inventoryFromLoadInventoryResolve);
// 	},
// 	(reject) => {
// 		console.log("SOMETHING WENT REALLY WRONG");
// 	});