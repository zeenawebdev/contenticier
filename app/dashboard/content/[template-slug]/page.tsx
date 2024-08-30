"use client";

import React, { useState } from 'react';

import { TEMPLATE } from '../../__components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/app/utils/AiModel';
import { db } from '@/app/utils/db';
import { AIOutput } from '@/app/utils/schema';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import FormSections from '../_components/FormSections';
import OutputSection from '../_components/OutputSection';

interface PROPS {
    slug: string;
    params: {
        'template-slug': string;
    };
}

function CreateNewContent(props: PROPS) {
        {/* @ts-ignore */}
    const selectedTemplate: TEMPLATE | undefined = Templates.find((item) => item.slug === props.params['template-slug']);
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>('');
    const { user } = useUser();
    const router = useRouter()

    const GenerateAIContent = async (FormData: any) => {
        setLoading(true);

        try {
            const SelectedPrompt = selectedTemplate?.aiPrompt || '';
            const FinalAIPrompt = JSON.stringify(FormData) + " ," + SelectedPrompt;

            const result = await chatSession.sendMessage(FinalAIPrompt);
            const responseText = await result?.response.text(); 
            
            setAiOutput(responseText);
            await SaveInDb(JSON.stringify(FormData), selectedTemplate?.slug, responseText);
        } catch (error) {
            console.error("Error generating AI content:", error);
        } finally {
            setLoading(false);
        }
    };

    const SaveInDb = async (formData: string, slug: string | undefined, aiOutput: string) => {
        const now = new Date();
    
        try {
            await db.insert(AIOutput).values({
                formData,
                templateSlug: slug || '',
                aiResponse: aiOutput,
                createdBy: user?.primaryEmailAddress?.emailAddress || '',
                createdAt: now, 
            });
    
            console.log("Data saved successfully");
        } catch (error) {
            console.error("Error saving data to the database");
        }
    };
    
    return (
        <div className='p-10'>
            <Link href={'/dashboard'}>
                <Button><ArrowLeft />Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                <FormSections
                    loading={loading}
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => GenerateAIContent(v)}
                />
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;
