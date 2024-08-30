import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css'; 
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import AlertComponent from './Alert';


interface Props {
    aiOutput: string;
}

const OutputSection: React.FC<Props> = ({ aiOutput }) => {
    const editorRef = useRef<Editor>(null);
    const [alertVisible, setAlertVisible] = useState(false);

    useEffect(() => {
        if (editorRef.current) {
            const editorInstance = editorRef.current.getInstance();
            editorInstance.setMarkdown(aiOutput);
        }
    }, [aiOutput]);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(aiOutput)
            .then(() => {
                // Trigger the scroll behavior
                window.scrollBy({
                    top: 800, // Adjust this value to control the scroll distance
                    left: 0,
                    behavior: 'smooth' // Smooth scrolling effect
                });
    
                setAlertVisible(true);
                setTimeout(() => {
                    setAlertVisible(false);
                }, 2000); // Hide alert after 2 seconds
            })
            .catch(err => console.error('Failed to copy text:', err));
    };
    

    return (
        <div className='bg-white rounded-lg shadow-lg border'>
            <div className='flex justify-between p-5 items-center'>
                <h3 className='font-medium text-lg'>
                    Your Result
                </h3>
                <Button className='flex gap-2' onClick={handleCopyClick}>
                    <Copy className='w-4 h-4' />Copy
                </Button>
            </div>
            <Editor
                ref={editorRef}
                previewStyle="vertical"
                height='600px'
                initialEditType="wysiwyg"
                useCommandShortcut={true}
            />
            {alertVisible && <AlertComponent />} 
        </div>
    );
}

export default OutputSection;
