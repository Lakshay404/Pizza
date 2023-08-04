// Product Controller - It is a Glue B/w View and Model
// Controller - I/O View Layer

import productOperations from "../services/product-operations.js";

// Data Exchange B/w View and Model.

// async function loadPizza1(){
//   const pizza = await productOperations.loadProducts();
//   console.log('Pizza',pizza);
//   const rowdiv = document.getElementById('loadData');
//   let pizzalen = pizza.length;
//   for (let i = 0; i < pizzalen; i++) {
//     const col = document.createElement('div');
//     col.classList.add('col-4');
//     col.innerHTML = `<div class="card" style="width: 18rem;">
//     <img src="${pizza[i].url}">
//     <div class="card-body">
//       <h5 class="card-title">${pizza[i].name}</h5>
//       <p class="card-text">${pizza[i].desc}</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>`;
//   rowdiv.appendChild(col);

//   }
    
  
// }
// loadPizza1();





/*
 <div class="col-4">
                  <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  </div>
*/
function addToCart(){
  console.log('added to cart',this);
  const currentbutton=this;
  const pizzaid=currentbutton.getAttribute('product-id');
  console.log('pizza-id=',pizzaid);
  productOperations.search(pizzaid);
  printcart();
}

function printcart(){
  const cartproducts=productOperations.getProductsInCart();
  const basket=document.querySelector('#basket');
  const total=document.querySelector('#total');
  const gst=document.querySelector('#gst');
  basket.innerHTML='';
  var  totalprice=0;
  for(let product of cartproducts){
    totalprice=totalprice+parseFloat(product.price*product.qty);
    const li=document.createElement('li');
    li.innerText=`${product.name} x ${product.qty}: ${product.price*product.qty}`;
    total.innerText=`pay: $${totalprice}`;
    basket.appendChild(li);
     const a =(totalprice*0.18)+totalprice;
     gst.innerText=`after gst: $${a}`;
  }
  
 

}

async function loadpizza(){
const pizzas=await productOperations.loadProducts();
console.log('Pizzas are ', pizzas);
for(let pizza of pizzas){
  loadpizza2(pizza);
}
}
loadpizza();

function loadpizza2(pizza){
  
  const rowdiv=document.querySelector('#output');                     
  const coldiv=document.createElement('div');
  coldiv.className="col-4";
  const cardDiv=document.createElement('div');
  cardDiv.className='card';
  cardDiv.style="width: 18rem;";
  coldiv.appendChild(cardDiv);
  const imgdiv=document.createElement('img');
  imgdiv.src=pizza.url;
  imgdiv.className="card-img-top";
  cardDiv.appendChild(imgdiv);
  const cbdiv=document.createElement('div');
  cbdiv.className='card-body';
  cardDiv.appendChild(cbdiv);
  const h5=document.createElement('h5');
  h5.className='card-title';
  h5.innerText = pizza.name;
  const p=document.createElement('p');
  p.className='card-text';
  p.innerText = pizza.desc;
  const button=document.createElement('button');
  button.addEventListener('click',addToCart);
   button.innerText='add to cart';
   button.className='btn btn-primary';
    button.setAttribute('product-id',pizza.id);
  cbdiv.appendChild(h5);
  cbdiv.appendChild(p);
  cbdiv.appendChild(button);
  rowdiv.appendChild(coldiv);
}




