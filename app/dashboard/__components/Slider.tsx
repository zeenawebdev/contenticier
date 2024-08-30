'use client';

import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Link from 'next/link';

function Slider() {
  const slides = [
    {
      id: 1,
      content: (
        <div className="flex flex-col w-full h-full justify-center items-center 
        bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">AI Content Generator</h2>
          <p className="text-sm md:text-lg text-white mb-6 max-w-md">
            Generate different content with just one click. Explore endless possibilities in seconds. Try now!
          </p>
          <Link href='/dashboard/content'>
            <button className="px-6 py-2 md:px-8 md:py-3 bg-white text-blue-500 font-semibold rounded-full hover:bg-gray-200 transition">
              Try Now
            </button>
          </Link>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex flex-col w-full h-full justify-center
         items-center bg-gradient-to-r from-green-500 to-teal-600 p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">AI Image Generation Features</h2>
          <p className="text-sm md:text-lg text-white mb-6 max-w-md">
            Unlock premium features for AI image generation. Create stunning visuals effortlessly. Try now!
          </p>
          <Link href='/dashboard/image'>
            <button className="px-6 py-2 md:px-8 md:py-3 bg-white text-green-600
             font-semibold rounded-full hover:bg-gray-200 transition">
              Try Now
            </button>
          </Link>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex flex-col w-full h-full 
         justify-center items-center bg-gradient-to-r from-orange-500 to-red-600 p-8 text-center
         ">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Upgrade for Only $9.99/Month</h2>
          <p className="text-sm md:text-lg text-white mb-6 max-w-md">
            Get access to all premium features for just $9.99 a month. Upgrade now and enhance your creativity!
          </p>
          <Link href='/dashboard/billing'>
            <button className="px-6 py-2 md:px-8 md:py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-200 transition">
              Upgrade Now
            </button>
          </Link>
        </div>
      ),
    },
  ];

  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinity: true,
    indicators: true,
    prevArrow: (
      <div className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 z-10">
        <ArrowLeftIcon className="h-4 sm:h-6 w-6 sm:w-10 text-white cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 z-10">
        <ArrowRightIcon className="h-4 sm:h-6 w-6 sm:w-10 text-white cursor-pointer" />
      </div>
    ),
  };

  return (
    <div className="w-full h-60 sm:h-80 relative">
      <Zoom {...zoomInProperties}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full">
            {slide.content}
          </div>
        ))}
      </Zoom>
    </div>
  );
}

export default Slider;
