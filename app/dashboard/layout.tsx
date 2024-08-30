"use client"

import React, { useState } from 'react'
import SideNav from './__components/SideNav';
import Header from './__components/Header';
import { Toaster } from '@/components/ui/toaster';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

  
  return (
  
    <div className='bg-slate-100 '>
        <div className='md:w-64 hidden md:block fixed'>
 {/* @ts-ignore */}
            <SideNav/>
        </div>
        <div className='md:ml-64 '>
            <Header/>
              {children}
        </div>
        <Toaster/>
    </div>
 
  )
}



export default layout
