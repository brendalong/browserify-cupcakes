"use strict";

let welcomeData = require('./welcome-data');

let showWelcome = () => {
   const welcomeObj = welcomeData;

   //set a variable to hold the description
   let storeDesc = `<h3>We bake the most delicious pies and cake varieties like`;

   //make a shortcut to the array
   const cakeTypeArray = welcomeObj.cakeType;
   cakeTypeArray.forEach((element, index, cakeTypeArray) => {
      //the sentence should build with commas between each kind and the word and at the end.
      //ex. apples, cookies, cakes, fruits, and chips

      if (index !== 0){
         //add the comma or the word and
         //ternary condition
         storeDesc += (index !== cakeTypeArray.length - 1) ? `, ` : `, and `;
      }

      //add the topping
      storeDesc += ` ${element.cake}-${element.topping}`;
   });

   //after all js runs, display the page content
   let welcomeComponent = `<h2 class="brand">${welcomeObj.name}!</h2>
   ${storeDesc}
   </h3>`;

   return welcomeComponent;
};


module.exports = {showWelcome};