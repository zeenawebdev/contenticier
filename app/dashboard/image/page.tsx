import React from 'react'
import ImageTemplateSection
 from './_components/ImageTemplateSection'
import ImageHeroSection from './_components/ImageHeroSection'



function ImageGenration() {

  return (
    <div className='h-screen bg-blue-50' >
        <ImageHeroSection/>
        <div className='h-100'>
        <ImageTemplateSection/>
        
        </div>
    </div>
  )
}

export default ImageGenration
