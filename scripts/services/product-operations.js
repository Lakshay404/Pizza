// Contains the Logic for Fetching ,
// Adding, Sorting, Searching,
 // Deletion , Updation
 /*
  It talk to Network Layer to Bring the JSON, and
  convert JSON into Objects vice-versa

 */
  import Product from '../models/product.js';
  import makeNetworkCall from './api-client.js';
  
  const productOperations = {
    products:[],  //key-value pair
    search(pizzaid){
        const product=this.products.find(currentproduct=>currentproduct.id==pizzaid);
        console.log(product);
       // product.IsAddedInCart=true;
       product.qty++;
        
    },


      async loadProducts(){
          const pizzas = await makeNetworkCall();
          const pizzaArray = pizzas['Vegetarian'];
          const productsArray = pizzaArray.map(pizza=>{
              const currentPizza = new Product(pizza.id, pizza.name,
                   pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url);
                  return currentPizza;
                  })
                  console.log('Product Array ', productsArray);
                  this.products=productsArray;
                  return productsArray;  // Wrap in Promise
              },
      sortProducts(){
  
      },
      searchProducts(){

        
      },

      getProductsInCart(){
        const productincart=this.products.filter(product=>product./*IsAddedInCart*/qty>0);
        return productincart;
      }
  }
  export default productOperations;