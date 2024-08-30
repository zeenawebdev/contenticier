'use client';

import React from 'react';
import { TEMPLATE } from '../image/_components/ImageTemplateSection';
import { ImageTemplates } from '@/app/(data)/ImageTemplates';
import Link from 'next/link';

function PremiumTemplates() {
  // Filter templates with images
      {/* @ts-ignore */}
  const filteredTemplates: TEMPLATE[] = ImageTemplates.filter(template => template.image);

  return (
    <div>
      <div className="flex flex-row items-center">
        <Link href="/dashboard/image">
          <h2 className="text-gray-700 font-bold text-lg mb-8 p-3">
            Check our AI image generation services
          </h2>
        </Link>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
          {filteredTemplates.map((template, index) => (
            <div key={index} className="m-3">
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-[150px] rounded-lg shadow-lg"
              />
              <Link href={`/dashboard/image/${template.slug}`}>
                <h3 className="mt-5 mb-7 font-medium text-center">{template.name}</h3>
              </Link>
            </div>
          ))}
        </div>

        <Link href="/dashboard/image" className="text-fuchsia-500 text-bold mt-4 block text-center">
          view all
        </Link>
      </div>
    </div>
  );
}

export default PremiumTemplates;
