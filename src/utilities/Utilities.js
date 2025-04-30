
const getStoredCart =()=>{
  const storedCartString =  localStorage.getItem('cart')
  if(storedCartString){
    return JSON.parse(storedCartString)
  }
     return [];
}

const saveCartToLs = cart =>{
    const cartStringyfy = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringyfy)
}

const addTols = id=>{
 const cart = getStoredCart(id);
 cart.push(id);
 saveCartToLs(cart);
 
}
 
export{addTols, getStoredCart}