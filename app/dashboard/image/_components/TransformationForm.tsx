'use client';

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MediaUploader, { ImageProps } from "./MediaUploader";
import TransformedImage from "./TransformedImage";
import Image from "next/image";
import { TEMPLATE } from "./ImageTemplateSection";

interface TransformationFormProps {
  selectedImageTemplate?: TEMPLATE;
}

const TransformationForm: React.FC<TransformationFormProps> = ({ selectedImageTemplate }) => {
  const [image, setImage] = useState<ImageProps | null>(null);
  const [aspectRatio, setAspectRatio] = useState<string | null>(null);
  const [objectToRemove, setObjectToRemove] = useState<string>("");
  const [objectToRecolor, setObjectToRecolor] = useState<string>("");
  const [replacementColor, setReplacementColor] = useState<string>("");
  const [transformationConfig, setTransformationConfig] = useState<any | null>(null);

  const transformationRef = useRef<HTMLDivElement>(null);

  const handleAspectRatioChange = (value: string) => setAspectRatio(value);
  const handleObjectToRemoveChange = (e: React.ChangeEvent<HTMLInputElement>) => setObjectToRemove(e.target.value);
  const handleObjectToRecolorChange = (e: React.ChangeEvent<HTMLInputElement>) => setObjectToRecolor(e.target.value);
  const handleReplacementColorChange = (e: React.ChangeEvent<HTMLInputElement>) => setReplacementColor(e.target.value);

  const handleValueChange = (newImage: ImageProps) => {
    setImage(newImage);
  };

  const handleTransformation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (image && selectedImageTemplate) {
      let width = image.width || 500;
      let height = image.height || 500;

      if (aspectRatio) {
        const [aspectWidth, aspectHeight] = aspectRatio.split(':').map(Number);
        height = Math.floor(width * (aspectHeight / aspectWidth));
      }

      const aiTransformations: any = {
        remove: selectedImageTemplate.url === 'e_gen_remove' ? {
          prompt: objectToRemove,
          removeShadow: true,
          multiple: false,
        } : undefined,
        recolor: selectedImageTemplate.url === 'e_colorize' ? {
          prompt: objectToRecolor,
          to: replacementColor,
        } : undefined,
        removeBackground: selectedImageTemplate.url === 'e_background_removal',
      };

      setTransformationConfig(aiTransformations);

      if (transformationRef.current) {
        transformationRef.current.scrollIntoView({ behavior: 'smooth' });
      }

      console.log("Transformed Image Data: ", {
        publicId: image.publicId,
        transformationType: selectedImageTemplate.url,
        width,
        height,
        secureUrl: image.secureUrl,
        config: aiTransformations,
        aspectRatio: aspectRatio || undefined,
      });
    }
  };

  return (
    <div className="p-6 bg-white mt-4 rounded-md shadow-md grid grid-cols-1 gap-6 md:grid-cols-2">
      {selectedImageTemplate && (
        <>
          <div className="flex flex-col">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src={selectedImageTemplate.icon}
                alt="icon"
                width={70}
                height={70}
                className="mb-4"
              />
              <h3 className="text-gray-600">{selectedImageTemplate.name}</h3>
            </div>

            <form className="space-y-4">
              {/* @ts-ignore */}
              {selectedImageTemplate.form.map((item, index) => (
                <div key={index} className="flex flex-col m-4">
                  {item.field === "select" && item.name === "Aspect ratio" && (
                    <Select onValueChange={handleAspectRatioChange}>
                      <SelectTrigger className="w-full border rounded-md">
                        <SelectValue placeholder="Select aspect ratio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1:1">1:1</SelectItem>
                        <SelectItem value="4:3">4:3</SelectItem>
                        <SelectItem value="16:9">16:9</SelectItem>
                        <SelectItem value="3:2">3:2</SelectItem>
                      </SelectContent>
                    </Select>
                  )}

                  {item.field === "textarea" && item.name === "Object to remove" && (
                    <Input
                      type="text"
                      placeholder="Type object name"
                      value={objectToRemove}
                      onChange={handleObjectToRemoveChange}
                      className="p-3 border rounded-md w-full"
                    />
                  )}

                  {item.field === "textarea" && item.name === "Object to recolor" && (
                    <Input
                      type="text"
                      placeholder="Type object"
                      value={objectToRecolor}
                      onChange={handleObjectToRecolorChange}
                      className="p-3 border rounded-md w-full"
                    />
                  )}

                  {item.field === "textarea" && item.name === "Replacement color" && (
                    <Input
                      type="text"
                      placeholder="Add color"
                      value={replacementColor}
                      onChange={handleReplacementColorChange}
                      className="p-3 border rounded-md w-full"
                    />
                  )}

                  {item.field === "image" && (
                   
                    <MediaUploader
                      onValueChange={handleValueChange}
                      image={image}
                    />
                  )}
                </div>
              ))}
              <Button className="p-2 mt-6" onClick={handleTransformation}>Transform</Button>
            </form>
          </div>

          <div className="flex flex-col" ref={transformationRef}>
            <h3 className="media-uploader-title">Transformed Image</h3>
            {image ? (
              <div className="uploaded-image-container">
                <Image
                  src={image.secureUrl || `/path/to/your/local/transformed/image/${image.publicId}`}
                  alt="Uploaded Image"
                  width={image.width || 500}
                  height={image.height || 500}
                  className="uploaded-image"
                />
              </div>
            ) : (
              <div className="upload-placeholder"></div>
            )}
      
            <TransformedImage
              image={image}
              transformationConfig={transformationConfig}
              hasDownload={true}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TransformationForm;
