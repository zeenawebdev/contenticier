import React from 'react'
import Slider from './__components/Slider'
import HomeTemplates from './__components/HomeTemplates'
import PremiumTemplates from './__components/PremiumTemplates'

function Home() {
  return (
    <div>
      <div>
     <Slider/>   
      </div>
     <div className='p-3 mt-8'>
     <HomeTemplates/>
     <div className='m-12'>
        <PremiumTemplates/> 
   
     </div>
     </div>
     
    </div>
  )
}

export default Home
