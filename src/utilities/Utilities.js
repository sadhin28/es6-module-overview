const getStoredCart =()=>{
    const storcartString = localStorage.getItem('cart')
    if(storcartString){
        return JSON.parse(storcartString)
    }
    return [];
}
const saveCartToLs = cart =>{
    const cartStringyfyied = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringyfyied);
}
const addTols = id=>{
  
    const cart = getstoredCart();
    cart.push(id);
   //save to local
   saveCartToLs(cart);
}
export{addTols}