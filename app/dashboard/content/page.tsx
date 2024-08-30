'use client'


import React, { useState } from 'react'
import SearchSection from '../__components/SearchSection'
import TemplateListSection from '../__components/TemplateListSection'

function Dashboard() {
  const [userSearchInput , setUserSearchInput]=useState<string>()
  return (
    <div>
<SearchSection onSearchInput={(value:string)=>
setUserSearchInput(value)
}/>
      <TemplateListSection userSearchInput={userSearchInput} />

    </div>
  )
}

export default Dashboard
