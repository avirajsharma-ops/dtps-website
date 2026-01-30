"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIconColor = (index: number) => hoveredFeature === index ? '#fff' : '#0d9488';

  const features = [
    {
      title: 'Stress reduction techniques',
      description: 'Receive personalized nutrition guidance to create balanced, sustainable eating.',
    },
    {
      title: 'Goal-oriented wellness plan',
      description: 'Receive personalized nutrition guidance to create balanced, sustainable eating.',
    },
    {
      title: 'Weight loss strategies',
      description: 'Receive personalized nutrition guidance to create balanced, sustainable eating.',
    },
  ];

  const renderIcon = (index: number) => {
    const color = getIconColor(index);
    switch(index) {
      case 0:
        return (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="6" y="4" width="16" height="20" rx="2" stroke={color} strokeWidth="2" />
            <line x1="10" y1="9" x2="18" y2="9" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="13" x2="18" y2="13" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="17" x2="14" y2="17" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 1:
        return (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M6 10H22M6 14H22M10 18H18" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 2:
        return (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="6" y="6" width="16" height="16" rx="2" stroke={color} strokeWidth="2" />
            <path d="M10 12H18M10 16H14" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <path d="M18 10V6M10 10V6" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 px-8"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.2fr_1fr] gap-10 items-start">
        {/* Left Image */}
        <div
          className={`relative h-[480px] rounded-[20px] overflow-hidden transition-all duration-[700ms] ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[50px] opacity-0'
          }`}
        >
          <Image
            src="/img/what-we-do-image-1.jpg"
            alt="Woman preparing healthy drinks"
            fill
            className="object-cover"
          />
        </div>

        {/* Middle Content */}
        <div
          className={`transition-all duration-[700ms] ease-out delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
          }`}
        >
          {/* Label */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#f5a623] text-lg">✦</span>
            <span className="text-[#f5a623] text-base font-semibold">
              What We Do
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[2.5rem] font-bold text-gray-900 leading-tight mb-8">
            Guiding your
            <br />
            health wellness
          </h2>

          {/* Features List */}
          <div className="flex flex-col gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`flex gap-4 items-start cursor-pointer transition-all duration-500 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div
                  className={`w-[52px] h-[52px] rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    hoveredFeature === index 
                      ? 'bg-[#f5a623] scale-110' 
                      : 'bg-teal-50 scale-100'
                  }`}
                >
                  {renderIcon(index)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div
          className={`flex flex-col gap-6 transition-all duration-[700ms] ease-out delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'
          }`}
        >
          {/* Top Text & Button */}
          <div>
            <p className="text-[0.95rem] text-gray-500 leading-relaxed mb-4">
              Empowering you to achieve optimal health and wellness with{' '}
              <span className="border border-[#f5a623] px-1.5 py-0.5 rounded">
                personalized
              </span>{' '}
              coaching, support.
            </p>
            <Link href="/contact">
              <button className="bg-gradient-to-br from-[#f5a623] to-[#f57c00] text-white text-[0.95rem] font-semibold py-3.5 px-7 rounded-full border-none cursor-pointer shadow-[0_6px_20px_rgba(245,124,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(245,124,0,0.4)]">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative h-[340px] rounded-[20px] overflow-hidden">
            <Image
              src="/img/what-we-do-image-2.jpg"
              alt="Woman with healthy food"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
