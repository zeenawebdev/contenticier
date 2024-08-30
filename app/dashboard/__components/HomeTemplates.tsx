'use client';

import React, { useRef, useState, useEffect } from 'react';
import { TEMPLATE } from './TemplateListSection';
import Templates from '@/app/(data)/Templates';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function HomeTemplates() {
  {/* @ts-ignore */}
  const filteredTemplates: TEMPLATE[] = Templates.filter((template) => template.image);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -600,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 600,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 0);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div className="p-1">
        <h2 className="text-gray-700 font-bold text-lg mb-8">
          <span className="block md:hidden"></span>
          <span className="hidden md:block">You might want to try...</span>
        </h2>
        <div className="flex items-center space-x-2">
          {showLeftArrow && (
            <ArrowLeftIcon
              onClick={scrollLeft}
              className="cursor-pointer text-gray-600 hover:text-gray-900"
              size={32}
            />
          )}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll
            scrollbar-hide space-x-5 mb-2"
            style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
          >
            {filteredTemplates.map((template, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-[300px] flex-shrink-0 bg-white rounded-lg shadow-lg p-4 mb-5"
                style={{ scrollSnapAlign: 'start' }}
              >
                <img
                  src={template.image}
                  alt={template.name}
                  className="rounded-lg mb-3 object-cover w-full h-36"
                />
                <Link href={`/dashboard/content/${template.slug}`}>
                  <h3 className="cursor-pointer flex flex-row pr-1 font-medium text-gray-800">
                    {template.name}
                    {template.pro && (
                      <div>
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
                            fontSize: 24,
                            paddingLeft: '2px',
                            filter: 'brightness(1.5)',
                          }}
                        />
                      </div>
                    )}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
          {showRightArrow && (
            <ArrowRightIcon
              onClick={scrollRight}
              className="cursor-pointer text-gray-600 hover:text-gray-900"
              size={32}
            />
          )}
        </div>
        <Link href="/dashboard/content" className="text-fuchsia-500 text-bold mt-4 block text-center">
          view all
        </Link>
      </div>
    </div>
  );
}

export default HomeTemplates;
