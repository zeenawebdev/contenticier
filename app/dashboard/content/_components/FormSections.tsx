"use client"

import React, { useState } from 'react'
import { TEMPLATE } from '../../__components/TemplateListSection'
import Image from 'next/image'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LoaderIcon } from 'lucide-react'




interface PROPS{
    selectedTemplate?:TEMPLATE
    userFormInput:any
    loading:boolean
}
function FormSections({selectedTemplate,userFormInput,loading}:PROPS) {

const [formData,setFormData]=useState()
    const handleInputChange =(event:any)=>{
const {name,value}=event.target
        {/* @ts-ignore */}

setFormData({...formData,[name]:value})
    }
const onSubmit=(e:any)=>{
e.preventDefault()
userFormInput(formData)
}

  return (
    <div className='p-5 shadow-md border rounded-lg bg-white' >
        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70}/>
      <h2 className='font-bold text-2xl mb-2 text-primary' >
         {/* @ts-ignore */}
        {selectedTemplate.name}
      </h2>
      <p className='text-gray-500 text-sm'>
        {selectedTemplate?.desc}
      </p>
      <form className='mt-6' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item,index)=>(
           <div className='my-2 flex flex-col gap-2 mb-7'>
            <label className='font-bold'>
                {item.label}
            </label>
            {item.field=='input' ? 
        <Input 
        name={item.name} 
        required={item?.required}
        onChange={handleInputChange}
        /> :
        item.field=='textarea'?
        <Textarea
        name={item.name} 
        required={item?.required}
        onChange={handleInputChange}
        />:null

        }
           </div> 
        ))}
      </form>
      <Button 
      type='submit' 
      onClick={onSubmit}
      className='w-full py-6'
      disabled={loading}
      >
        {loading && <LoaderIcon className='animate-spin'/>} Generate Content</Button>
    </div>
  )
}

export default FormSections
