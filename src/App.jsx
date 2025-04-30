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
 
 
 
  return(
    <>
      <h1>Es6 Module Overview</h1>
      
      <div style={{}} id='btnWatch' className='watchContainer'>
      {
        watches.map(watch=><Watch key={watch.id} watch={watch}></Watch>)
      }
      </div>
    </>
  )
}

export default App
