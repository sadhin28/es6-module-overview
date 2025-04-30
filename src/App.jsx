import { useState } from 'react'
import './App.css'
import Watch from './components/watch/Watch'
import { useEffect } from 'react';
import { addTols } from './utilities/Utilities';
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
 const handelAddToCart = bottle =>{
    const newCart = [...cart,bottle]
    setCart(newCart)
    // console.log(newCart)
   addTols(bottle.id)
   

  
 }
 localStorage.setItem("cart",cart)
 
  return(
    <>
      <h1>Bottles</h1>
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
