'use client';

import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { useToast } from '@/components/ui/use-toast';


export interface ImageProps {
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
}


type MediaUploaderProps = {
  onValueChange: (value: ImageProps) => void;
  image: ImageProps | null;
};

const MediaUploader: React.FC<MediaUploaderProps> = ({
  onValueChange,
  image,
}) => {
  const { toast } = useToast();

  const onUploadSuccessHandler = (result: any) => {
    const newPublicId = result?.info?.public_id;
    const newSecureUrl = result?.info?.secure_url;

    if (newPublicId && newSecureUrl) {
      onValueChange({
        publicId: newPublicId,
        secureUrl: newSecureUrl,
      });

      toast({
        title: 'Image Uploaded successfully',
        duration: 5000,
        className: 'success-toast',
      });
    }
  };

  const onUploadErrorHandler = () => {
    toast({
      title: 'Something went wrong while uploading',
      description: 'Please try again',
      duration: 5000,
      className: 'error-toast',
    });
  };

  return (
    <CldUploadWidget
      uploadPreset="contenticier"
      options={{ multiple: false }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <div className="media-uploader-container">
          <h3 className="text-lg font-semibold mb-2">Upload Image</h3>
          {image?.secureUrl ? (
            <div className="w-full flex justify-center">
              <img
                src={image.secureUrl}
                alt="Uploaded Image"
                className="w-full max-w-xs rounded-md shadow-md"
              />
            </div>
          ) : (
            <div
              className="border-2 border-dashed border-gray-300 p-4 rounded-md cursor-pointer flex flex-col w-full h-full items-center justify-center"
              onClick={() => open()}
            >
              <svg
                className="w-12 h-12 text-gray-400 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <p className="text-gray-600">Click to upload image</p>
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
