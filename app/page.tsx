'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

export default function LandingPage() {
  
 
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Interactive Three.js Background */}
      <div  className="absolute inset-0 -z-10" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between p-6 bg-gray-800 shadow-lg">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center"
          >
         <Link href='/dashboard'>
                        <h1 className='text-2xl font-bold flex align-middle mt-1 justify-center pb-3
                         bg-gradient-to-r from-purple-500
                          to-blue-500 text-transparent bg-clip-text'>
                            Contenticier
                        </h1>
                    </Link>
          </motion.div>

          <div>
            <Link href='/sign-up'>
            <button className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition duration-300">Get Started</button>
          </Link></div>
        </header>

        {/* Main Section */}
        <main className="flex flex-col items-center justify-center mt-16 py-20 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl font-extrabold mb-6"
          >
            AI Content <span className="text-purple-500">Generator</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg max-w-3xl mx-auto mb-8 sm:m-2"
          >
            Transform your content creation process with our advanced AI tools. Whether you need to generate engaging stories, craft professional job proposals, or more, our app provides versatile solutions for various content types. Discover powerful features to enhance your creative projects and streamline your workflow.
          </motion.p>
              <Link href='/sign-up'> <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="px-8 py-3 bg-purple-600 text-white rounded-full text-lg font-medium shadow-lg hover:bg-purple-700 transition-all duration-300"
          >
       
            Get Started
           
          </motion.button> 
          </Link>
        </main>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 py-20 text-center bg-gray-800">
          {[
            { icon: '⚙️', title: 'Versatile Tools', description: 'Access a broad range of content generation tools tailored to various needs.' },
            { icon: '📝', title: 'Creative Content', description: 'Generate engaging and high-quality content effortlessly.' },
            { icon: '📊', title: 'Streamlined Workflow', description: 'Enhance your productivity with tools designed for ease of use and efficiency.' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="bg-gray-900 p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl text-purple-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}
