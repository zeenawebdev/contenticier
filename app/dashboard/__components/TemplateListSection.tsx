import Templates from '@/app/(data)/Templates';
import React, { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard';

export interface TEMPLATE {
    name: string; 
    desc: string;
    icon: string;
    image?:string
    pro:boolean
    slug:string
    category: string;
    aiPrompt: string;
    form?: FORM[]; 
    value:any  
}

export interface FORM {
    label: string;
    field: string;
    name: string;
    required: boolean;
}

function TemplateListSection({ userSearchInput }: any) {
    const [templateList, setTemplateList] = useState(Templates);

    useEffect(() => {
        if (userSearchInput) {
            const filteredData = Templates.filter(item =>
                item.name.toLowerCase().includes(userSearchInput.toLowerCase())
            );
            setTemplateList(filteredData);
        } else {
          setTemplateList(Templates);
            }
    }, [userSearchInput]);

 

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
             {/* @ts-ignore */}
            {templateList.map((item: TEMPLATE, index: number) => (
                <TemplateCard key={index} {...item} />
            ))}
        </div>
    );
}

export default TemplateListSection;
