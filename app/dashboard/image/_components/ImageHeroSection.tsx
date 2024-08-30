"use client"

import { Button } from '@/components/ui/button';
import React from 'react';

function ImageHeroSection() {

        const handleScroll = () => {
          window.scrollBy({
            top: 220, 
            behavior: 'smooth',
          });
        };
  return (
    <div
      className='p-8 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-700
      flex flex-col items-center justify-center text-white text-center
      '
    >
      <h2 className='text-2xl md:text-5xl font-bold mb-4 leading-tight'>
        Transform Your Ideas into Stunning Images with AI
      </h2>
      <p className='text-lg md:text-xl mb-6 max-w-2xl'>
        Generate high-quality images in seconds with our <span className='italic font-bold'>advanced AI algorithms</span>. Perfect for <span className='italic'> designers, marketers, and creatives</span> looking for efficiency and innovation.
      </p>
      <Button
 onClick={handleScroll} 
       className='bg-white text-purple-700 hover:bg-gray-200 px-6 py-3 rounded-lg shadow-lg transition'>
        Test it out
      </Button>
    </div>
  );
}

export default ImageHeroSection;
