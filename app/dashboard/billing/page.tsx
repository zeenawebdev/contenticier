import Link from 'next/link';
import React from 'react';

function Billing() {
  return (
    <div className="bg-gradient-to-r from-[#2b1055] to-[#7597de] p-4 min-h-screen flex items-center justify-center">
      <div className="text-center text-white max-w-screen-md mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-lg md:text-xl mb-10">Unlock endless possibilities</p>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 justify-center">
          {/* Basic Plan */}
          <div className="bg-[#1e1e30] rounded-xl p-6 shadow-lg w-full md:w-[280px] mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Basic</h2>
            <p className="text-gray-300 mb-6">For personal use and exploration of AI technology.</p>
            <div className="text-3xl md:text-4xl font-bold mb-4">$0</div>
            <Link href='/dashboard/content'>
              <button className="bg-gray-800 text-white rounded-full py-2 px-4 md:px-6 mt-2 mb-6">Get Started</button>
            </Link>
            <ul className="text-left space-y-2 md:space-y-4">
              <li className="text-green-400">✓ Access to free AI features</li>
              <li className="text-green-400">✓ Content AI generation</li>
            </ul>
          </div>
          {/* Premium Plan */}
          <div className="bg-[#301b6b] rounded-xl p-6 shadow-lg w-full md:w-[280px] mx-auto">
            <div className="bg-pink-600 text-white rounded-full px-3 py-1 mb-4 inline-block text-xs md:text-sm font-bold">Popular</div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Premium</h2>
            <p className="text-gray-300 mb-6">Perfect for professionals and small businesses in need of significant AI integration.</p>
            <div className="text-3xl md:text-4xl font-bold mb-4">$9.99</div>
            <button className="bg-pink-600 text-white rounded-full py-2 px-4 md:px-6 mt-2 mb-6">Get Started</button>
            <ul className="text-left space-y-2 md:space-y-4">
              <li className="text-green-400">✓ Unlimited AI generation</li>
              <li className="text-green-400">✓ Content generation</li>
              <li className="text-green-400">✓ Image editing using AI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
