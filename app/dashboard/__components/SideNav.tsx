import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FileClock, FileText, Home, ImageIcon, Settings, WalletIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import FlashOnIcon from '@mui/icons-material/FlashOn';

interface SideNavProps {
    isOpen: boolean;
    onClose: () => void;
}

function SideNav({ isOpen, onClose }: SideNavProps) {
    const Menulist = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'Content Generator',
            icon: FileText,
            path: '/dashboard/content'
        },
        {
            name: 'Pic Generator',
            icon: ImageIcon,
            path: '/dashboard/image',
            pro: true
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletIcon,
            path: '/dashboard/billing'
        },
        {
            name: 'Settings',
            icon: Settings,
            path: '/dashboard/settings'
        }
    ];

    const path = usePathname();

    return (
        <div className={`fixed h-screen inset-0 top-0 left-0 p-5 shadow-sm border bg-white custom-scrollbar transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:w-64 md:shadow-none z-50`}>
            {/* Close Button */}
            <button
                className="absolute top-4 right-4 md:hidden"
                onClick={onClose}
                aria-label="Close Menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            <Link href='/dashboard'>
                        <h1 className='text-2xl font-bold flex align-middle mt-1 justify-center pb-3
                         bg-gradient-to-r from-purple-500
                          to-blue-500 text-transparent bg-clip-text'>
                            Contenticier
                        </h1>
                    </Link>
            <hr className='my-6 border' />
            <div className='mt-3'>
                {Menulist.map((menu, index) => (
                    <Link key={index} href={menu.path}>
                        <div
                            className={`flex justify-between items-center gap-2 mb-2 p-3 rounded-lg
                            ${path === menu.path  ? 'bg-primary text-white' : 'hover:bg-gray-200'}`}
                        >
                            <div className='flex items-center gap-2'>
                                <menu.icon className='h-7 w-7' />
                                <h2 className='text-md'>{menu.name}</h2>
                            </div>
                            {menu.pro && (
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
                                            fill: path.startsWith(menu.path) ? 'white' : 'url(#gradient1)',
                                            fontSize: 30,
                                            padding: '2px',
                                            filter: path.startsWith(menu.path) ? 'brightness(1.5)' : 'none'
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SideNav;
