import { useState } from 'react'
import './App.css'
import Watch from './components/watch/Watch'
import { useEffect } from 'react';
import { addTols, getStoredCart } from './utilities/Utilities';

function App() {

  const [watches,setwatches]=useState([]);
  const [cart,setCart]=useState([])
  useEffect(()=>{
    fetch('Watches.json')
    .then(res => res.json())
    .then(data=>{
      setwatches(data)
       
    })
  },[])
  
  const clearCart =()=>{
    localStorage.clear();
    window.location.reload();
  }
  //load card form localStore
  useEffect(()=>{
   if(watches.length>0){
      const storeCard = getStoredCart();
      console.log(storeCard, watches)
      const savedCard = [];
      for(const id of storeCard){
         const bottle = watches.find(bottle =>bottle.id === id);
         if(bottle){
            savedCard.push(bottle)
         }
      }
      console.log(savedCard)
      setCart(savedCard)
   }
  },[watches])
 const handelAddToCart = bottle =>{
    const newCart = [...cart,bottle]
   setCart(newCart)
   addTols(bottle.id)
 }
 
  return(
    <>
      <h1>Bottles</h1>
      <button  onClick={clearCart}>Clear Cart </button>
      <div>
           <h4>Cart: {cart.length}</h4>
           
      </div>
      <div style={{}} id='btnWatch' className='watchContainer'>
      {
        watches.map(watch=><Watch handelAddToCart={handelAddToCart} key={watch.id} watch={watch}></Watch>)
      }
      </div>
    </>
  )
}

export default App
