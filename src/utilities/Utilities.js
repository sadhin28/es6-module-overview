const getStoredCart =()=>{
    const storcartString = localStorage.getItem('cart')
    if(storcartString){
        return JSON.parse(storcartString)
    }
    return [];
}
const saveCartToLs = cart =>{
    const cartStringyfy = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringyfy);
}
const addTols = id=>{
    const cart = getStoredCart();
    cart.push(id);
   //save to local
   saveCartToLs(cart);
}
export{addTols}