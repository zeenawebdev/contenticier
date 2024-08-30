import React from 'react'
import { TEMPLATE } from './ImageTemplateSection'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'


function ImageTemplateCard(item:TEMPLATE) {
  return (
    <div > 
      <Link href={`/dashboard/image/${item.slug}`}>
  <div
  className='p-5 
    shadow-md rounded-md border bg-white 
  flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all
  '
  > 
   <Image 
   src={item.icon}
      alt='icon'
      width={32}
      height={22}
      />
 
    <h2 className='font-medium text-lg'>{item.name}</h2>
  <p className='text-gray-500 line-clamp-3'>{item.desc}</p>
  <div className='flex justify-end flex-end primary'>
  <ArrowRight className='text-primary' />
  </div>
  </div>
  </Link> 

  </div>
  )
}

export default ImageTemplateCard
