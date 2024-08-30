"use client";

import React, { useEffect, useState } from 'react';
import { db } from '@/app/utils/db'; // Adjust the path as needed
import { AIOutput } from '@/app/utils/schema'; // Adjust the path as needed
import { useUser } from '@clerk/nextjs'; // If you need user context
import { desc, eq } from 'drizzle-orm';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

export interface HISTORY {
    id: number;
    formData: string;
    aiResponse: string;
    templateSlug: string;
    createdAt: string; // ISO string format
    createdBy: string;
}

const History = () => {
    const [history, setHistory] = useState<HISTORY[]>([]);
    const [copiedId, setCopiedId] = useState<number | null>(null); // Track which item is copied
    const { user } = useUser();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                if (user?.primaryEmailAddress?.emailAddress) {
                    const result = await db.select().from(AIOutput)
                        .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
                        .orderBy(desc(AIOutput.createdAt))
                        .execute();
                    {/* @ts-ignore */}
                    setHistory(result as HISTORY[]);
                } else {
                    console.error("User email not available");
                }
            } catch (error) {
                console.error("Error fetching history");
            }
        };

        fetchHistory();
    }, [user]);

    const handleCopy = async (aiResponse: string, id: number) => {
        try {
            await navigator.clipboard.writeText(aiResponse);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 5000); // Reset the copied status after 5 seconds
        } catch (error) {
            console.error('Failed to copy text: ', error);
        }
    };

    return (
        <div className='p-10 bg-gray-50 min-h-screen'>
            <h1 className='text-3xl font-bold text-gray-800'>History</h1>
            <div className='mt-8'>
                {history.length === 0 ? (
                    <p className='text-gray-500 justify-center align-center'>No history available</p>
                ) : (
                    <ul className='space-y-6'>
                        {history.map((item) => (
                            <li key={item.id} className='p-5 shadow bg-white rounded-lg border border-gray-200'>
                                <h2 className='text-xl font-bold text-gray-900'>{item.templateSlug}</h2>
                                <p className='text-gray-700 mt-3 whitespace-pre-line'>
                                    <strong>AI Response:</strong> {item.aiResponse}
                                </p>
                                <p className='text-sm text-gray-500 mt-2'>
                                    <strong>Created At:</strong> {new Date(item.createdAt).toLocaleString()}
                                </p>
                                <Button
                                    variant='outline'
                                    className='mt-4 text-white flex justify-end items-end flex-end gap-2 text-sm bg-primary'
                                    onClick={() => handleCopy(item.aiResponse, item.id)}
                                >
                                    <Copy className='w-4 h-4' />
                                    {copiedId === item.id ? 'Copied!' : 'Copy'}
                                </Button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default History;
