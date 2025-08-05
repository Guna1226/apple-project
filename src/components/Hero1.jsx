// src/components/Hero1.jsx
import React from 'react';
import iphoneImage from '../assets/images/iphone16.jpg'; // ✅ Correct path

export default function Hero1() {
  return (
    <section className="w-full bg-[#f5f5f7] py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Title and subtitle */}
        <h1 className="text-5xl font-semibold text-gray-900">iPhone</h1>
        <p className="text-xl mt-2 text-gray-700">Meet the iPhone 16 family.</p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="#"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition"
          >
            Learn more
          </a>
          <a
            href="#"
            className="border border-blue-600 text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-50 transition"
          >
            Shop iPhone
          </a>
        </div>

        {/* Tagline */}
        <p className="mt-6 text-lg">
          <span className="text-blue-600 font-medium">Built for </span>
          <span className="text-pink-600 font-medium">Apple Intelligence</span>
          <span className="text-orange-500">.</span>
        </p>

        {/* Image */}
        <div className="mt-10">
          <img
            src={iphoneImage}
            alt="iPhone 16 family"
            className="mx-auto max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

