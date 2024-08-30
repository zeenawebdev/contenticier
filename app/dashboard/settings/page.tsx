import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
 
    <div className='flex
    justify-center
     items-center p-5
     md:w-full
     '>
      <UserProfile routing="hash"/>
    </div>
  )
}

export default Settings
