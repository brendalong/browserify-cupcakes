"use strict";


let makeGridItem = (item, index) => {
   //set default styling
   let sold = `<span class="cake-message buy">BUY</span>`;
   let purchased = item.purchased;
   if (purchased) {
      sold = `<span class="cake-message soldout">SOLD OUT!</span>`;
   }

   let block = `<div id="card--${index}" class="card flex-item">
      <h3>#${index} CakeType: ${item.typeId}</h3>
      <div class="card-img" style="background-image: url('images/${item.image}')"></div>
      <div class="card-body">
       <h5 class="card-title">${item.flavor}  ${item.kind}</h5>
       <p class="card-text">${item.price}</p>
         ${sold}
         <p class="card-text">${item.description}</p>
      </div>
   </div>`;

   return block;
};




// <div class="card" style="width: 18rem;">
//    <img class="card-img-top" src=".../100px180/" alt="Card image cap">
//       <div class="card-body">
//          <h5 class="card-title">Card title</h5>
//          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//          <a href="#" class="btn btn-primary">Go somewhere</a>
//       </div>
// </div>

module.exports = { makeGridItem };