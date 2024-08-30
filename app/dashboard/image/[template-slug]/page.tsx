import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import TransformationForm from '../_components/TransformationForm'
import { TEMPLATE } from '../_components/ImageTemplateSection'
import { ImageTemplates } from '@/app/(data)/ImageTemplates'


interface PROPS{
  params:{
    'template-slug':string
  }
  slug:string
}
function GenerateNewImage(props:PROPS) {
   {/* @ts-ignore */}
const selectedImageTemplate:TEMPLATE|undefined=ImageTemplates?.find((item)=>item.slug==props.params['template-slug'])
  return (
    <div className='p-5'>
    <Link href='/dashboard/image'>
      <Button className='flex items-center mt-4 mb-2'>
        <ArrowLeft className='mr-2' /> Back
      </Button>
    </Link>
    <TransformationForm selectedImageTemplate={selectedImageTemplate} />
  
  </div>
  
  )
}

export default GenerateNewImage
