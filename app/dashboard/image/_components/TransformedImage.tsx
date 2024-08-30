'use client'
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { CldImage } from 'next-cloudinary';
import React from 'react';

declare type Transformations = {
  restore?: boolean;
  fillBackground?: boolean;
  remove?: {
    prompt: string;
    removeShadow?: boolean;
    multiple?: boolean;
  };
  recolor?: {
    prompt?: string;
    to: string;
    multiple?: boolean;
  };
  removeBackground?: boolean;
};

interface ImageProps {
  publicId: string;
  [key: string]: any; // Allows for additional properties
}

interface TransformedImageProps {
  transformationConfig: Transformations | null;
  image: ImageProps | null;
  hasDownload?: boolean;
}

const TransformedImage: React.FC<TransformedImageProps> = ({
  transformationConfig,
  image,
  hasDownload = false,
}) => {
  const downloadHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Implement download logic here, possibly generating a URL and triggering a download
    console.log('Downloading image...', e);
  };

  return (
    <div className='flex m-5 p-5'>
     
      {image?.publicId && transformationConfig ? (
        <div className='relative m-10'>
          {/* @ts-ignore */}
          <CldImage
            width={700}
            height={700}
            src={image.publicId}
            sizes='(max-width:767px) 100vw, 50vw'
            {...transformationConfig} // Ensure transformationConfig matches the expected structure for Cloudinary
          />
        <div className='flex justify-end'>
        {hasDownload && (
          <Button onClick={downloadHandler}>
            Download <Download />
          </Button>
        )}</div> 
      </div>
      ) : (
        <div className='flex justify-center items-center text-center text-gray-500'>
          Transformed Image will appear here
        </div>
      )}
    </div>
  );
};

export default TransformedImage;
