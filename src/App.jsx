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
  // const watches =[
  //   { "id": 1, "name": "Apple Watch Series 7", "price": 399, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Apple_Watch_Series_7_Aluminum_Green.png/800px-Apple_Watch_Series_7_Aluminum_Green.png" },
  //   { "id": 2, "name": "Samsung Galaxy Watch 4", "price": 250, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Samsung_Galaxy_Watch_4.png/800px-Samsung_Galaxy_Watch_4.png" },
  //   { "id": 3, "name": "Fitbit Charge 5", "price": 179, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Fitbit_Charge_5_%28White%29.png/800px-Fitbit_Charge_5_%28White%29.png" },
  //   { "id": 4, "name": "Garmin Venu 2", "price": 400, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Garmin_Venu_2_Smartwatch.png/800px-Garmin_Venu_2_Smartwatch.png" },
  //   { "id": 5, "name": "Amazfit GTR 3", "price": 180, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Amazfit_GTR_3.png/800px-Amazfit_GTR_3.png" },
  //   { "id": 6, "name": "Suunto 7", "price": 399, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Suunto_7_Watch.png/800px-Suunto_7_Watch.png" },
  //   { "id": 7, "name": "Huawei Watch GT 3", "price": 250, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Huawei_Watch_GT_3.png/800px-Huawei_Watch_GT_3.png" },
  //   { "id": 8, "name": "Withings Steel HR", "price": 180, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Withings_Steel_HR.png/800px-Withings_Steel_HR.png" },
  //   { "id": 9, "name": "Polar Vantage V2", "price": 500, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Polar_Vantage_V2.png/800px-Polar_Vantage_V2.png" },
  //   { "id": 10, "name": "Fossil Gen 5", "price": 295, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Fossil_Gen_5_Smartwatch.png/800px-Fossil_Gen_5_Smartwatch.png" },
  //   { "id": 11, "name": "Samsung Galaxy Watch 5", "price": 300, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Samsung_Galaxy_Watch_5_Pro.png/800px-Samsung_Galaxy_Watch_5_Pro.png" },
  //   { "id": 12, "name": "Apple Watch SE", "price": 279, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Apple_Watch_SE_2022.png/800px-Apple_Watch_SE_2022.png" },
  //   { "id": 13, "name": "Garmin Forerunner 945", "price": 600, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Garmin_Forerunner_945.png/800px-Garmin_Forerunner_945.png" },
  //   { "id": 14, "name": "Amazfit Bip U Pro", "price": 60, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Amazfit_Bip_U_Pro.png/800px-Amazfit_Bip_U_Pro.png" },
  //   { "id": 15, "name": "Fitbit Sense", "price": 299, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Fitbit_Sense.png/800px-Fitbit_Sense.png" },
  //   { "id": 16, "name": "Garmin Lily", "price": 199, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Garmin_Lily.png/800px-Garmin_Lily.png" },
  //   { "id": 17, "name": "Amazfit GTS 2", "price": 179, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Amazfit_GTS_2.png/800px-Amazfit_GTS_2.png" },
  //   { "id": 18, "name": "Huawei Watch Fit", "price": 130, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Huawei_Watch_Fit.png/800px-Huawei_Watch_Fit.png" },
  //   { "id": 19, "name": "Suunto 9 Peak", "price": 700, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Suunto_9_Peak.png/800px-Suunto_9_Peak.png" },
  //   { "id": 20, "name": "Garmin Venu Sq", "price": 200, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Garmin_Venu_Sq.png/800px-Garmin_Venu_Sq.png" }
  // ]
  
 
  return (
    <>
      <h1>Es6 Module Overview</h1>
      <div className='watchContainer'>
      {
        watches.map(watch=><Watch key={watch.id} watch={watch}></Watch>)
      }
      </div>
    </>
  )
}

export default App
