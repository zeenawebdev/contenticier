import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'
import FlashOnIcon from '@mui/icons-material/FlashOn';


function TemplateCard(item: TEMPLATE) {
  return (
    <div> 
    <Link href={`/dashboard/content/${item.slug}`}>
        <div
          className='p-5 shadow-md rounded-md border bg-white 
          flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'
        > 
          <Image 
            src={item.icon}
            alt='icon'
            width={50}
            height={50}
          />
          <h2 className='font-medium text-lg flex flex-row pr-1'>{item.name} {item.pro && (
            <div className='justify-end'>
                                                       <svg width="0" height="0">
                                                            <defs>
                                                                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%"> 
                                                                    <stop offset="0%" style={{ stopColor: '#8A2BE2', stopOpacity: 1 }} />
                                                                    <stop offset="100%" style={{ stopColor: '#C71585', stopOpacity: 1 }} />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>
                                                        <FlashOnIcon
                                                            sx={{
                                                                fill: 'url(#gradient1)',
                                                                fontSize: 28,
                                                                paddingLeft: '2px',
                                                                filter:'brightness(1.5)'
                                                            }}
                                                        />
                                                    </div>
                            )}</h2>
     
          <p className='text-gray-500 line-clamp-3'>{item.desc}</p>
        </div>
      </Link>
    </div>
  )
}

export default TemplateCard;
