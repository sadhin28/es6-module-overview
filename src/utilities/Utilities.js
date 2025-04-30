const getStoredCart =()=>{
    const storcartString = localStorage.getItem('cart')
    if(storcartString){
        return JSON.parse(storcartString)
    }
    return [];
}
