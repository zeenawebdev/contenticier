'use client';

import React, { useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import SideNav from './SideNav'; 
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Header() {
    const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
    const pathname = usePathname();

    // Close sidebar when route changes
    React.useEffect(() => {
        setIsSideNavOpen(false);
    }, [pathname]);

    return (
        <div className='relative'>
            {/* Header Content */}
            <div className={`p-4 bg-white shadow-sm border-b-2 flex justify-between items-center transition-opacity duration-300 
                ${isSideNavOpen ? 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto' : 'opacity-100'}`}>
                
                <div className={`w-30 flex items-center ${isSideNavOpen ? 'hidden' : 'block'}`}>
                    <Link href='/dashboard'>
                        <h1 className='text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text'>
                            Contenticier
                        </h1>
                    </Link>
                </div>
                
                <div className={`flex mr-8 items-center ${isSideNavOpen ? 'hidden' : 'flex'}`}>
                    <UserButton />
                </div>
                
                {/* Toggle Button for Small Screens */}
                <button 
                    className='absolute top-4 right-2 md:hidden z-50'
                    onClick={() => setIsSideNavOpen(!isSideNavOpen)}
                >
                    <Image src='/menu.png' alt='menu' width={34} height={40} className='ml-2'/>
                </button>
            </div>

            {/* Side Navigation Menu */}
            {isSideNavOpen && <SideNav isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)} />}
        </div>
    );
}

export default Header;
