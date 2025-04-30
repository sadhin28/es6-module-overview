import { useState } from 'react'
import './App.css'
import Watch from './components/watch/Watch'
import { useEffect } from 'react';
function App() {
  const [watches,setwatches]=useState([]);
  useEffect(()=>{
    fetch('Watches.json')
    .then(res => res.json())
    .then(data=>{
      setwatches(data)
       
    })
  },[])
 const handelAddToCart = bottle =>{
    console.log(bottle)
 }
 
 
  return(
    <>
      <h1>Bottles</h1>
      
      <div style={{}} id='btnWatch' className='watchContainer'>
      {
        watches.map(watch=><Watch handelAddToCart={handelAddToCart} key={watch.id} watch={watch}></Watch>)
      }
      </div>
    </>
  )
}

export default App
