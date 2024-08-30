"use client"


import React, { useState } from 'react'
import { FORM } from '../../__components/TemplateListSection';
import ImageTemplateCard from './ImageTemplateCard';
import { ImageTemplates } from '@/app/(data)/ImageTemplates';



export interface TEMPLATE {
    name: string; 
    image?:string,
    desc: string;
    icon: string;
    slug:string
    url:string
    category: string;
    aiPrompt: string;
    form?: FORM[];   
}


function ImageTemplateSection() {
    const [templateList, setTemplateList] = useState(ImageTemplates);

  return (
    <div className='grid grid-cols-1 
    bg-blue-50
     md:grid-cols-2 lg:grid-cols-4 gap-6 p-10 '>
             {/* @ts-ignore */}
            {templateList.map((item: TEMPLATE, index: number) => (
                <ImageTemplateCard key={index} {...item} />
            ))}
        </div>
  )
}

export default ImageTemplateSection
