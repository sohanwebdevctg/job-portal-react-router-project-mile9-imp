//adding data database
const addData = (id) => {
  let shoppingCart = {};

  const storeCart = localStorage.getItem('shopping-cart');
  if(storeCart){
    shoppingCart = JSON.parse(storeCart)
  }

  const quantity = shoppingCart[id];
  if(quantity){
    let newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }else{
    shoppingCart[id] = 1;
  }

  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

//get data from database
const getData = () => {
  let shoppingCart = {};

  const storeCart = localStorage.getItem('shopping-cart');
  if(storeCart){
    shoppingCart = JSON.parse(storeCart)
  }

  return shoppingCart;
}



export {addData, getData}