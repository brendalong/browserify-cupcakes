"use strict";

let welcomeData = require('./welcome-data');

let showWelcome = () => {
   const welcomeObj = welcomeData;

   //set a variable to hold the description
   let cakeDesc = `<h3>We bake the most delicious pies and cake varieties like`;

   //make a shortcut to the array
   const cakeTypeArray = welcomeObj.cakeType;
   cakeTypeArray.forEach((element, index, cakeTypeArray) => {
      //the sentence should build with commas between each kind and the word and at the end.
      //ex. apples, cookies, cakes, fruits, and chips

      if (index !== 0){
         //add the comma or the word and
         //ternary condition
         cakeDesc += (index !== cakeTypeArray.length - 1) ? `, ` : `, and `;
      }

      //add the topping
      cakeDesc += ` ${element.cake}-${element.topping}`;
   });

   //after all js runs, display the page content
   let block = `<h2>${welcomeObj.name}!</h2>
   ${cakeDesc}
   </h3>`;

   return block;
};


module.exports = {showWelcome};