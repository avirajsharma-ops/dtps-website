"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    'Holistic Health Approach',
    'One-on-One Coaching',
    'Sustainable Life Strategies',
    'Nutrition and Meal Guidance',
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white py-12 md:py-20 px-4 md:px-8 overflow-hidden rounded-[20px] md:rounded-[30px]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-center">
        {/* Left Side - Images */}
        {/* Desktop Images Layout */}
        <div className="relative w-full md:min-w-[480px] max-w-[400px] md:max-w-[600px] flex-1 hidden md:block h-[580px] mx-auto">
          {/* Main Image - Woman eating salad */}
          <div
            className={`absolute left-0 top-[40px] w-[340px] h-[450px] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-[2] transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[50px] opacity-0'
            }`}
            style={{ transform: isVisible ? 'translateY(0) rotate(-8deg)' : 'translateY(50px) rotate(-8deg)' }}
          >
            <Image
              src="/img/image-24-1.webp"
              alt="Woman enjoying healthy food"
              fill
              className="object-cover"
            />
          </div>

          {/* Second Image - Woman with vegetables */}
          <div
            className={`absolute right-[20px] top-[60px] w-[220px] h-[300px] rounded-[16px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-[3] border-[5px] border-white transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[50px] opacity-0'
            }`}
            style={{ transform: isVisible ? 'translateY(0) rotate(4deg)' : 'translateY(50px) rotate(4deg)' }}
          >
            <Image
              src="/img/image-27.webp"
              alt="Woman with healthy vegetables"
              fill
              className="object-cover"
            />
          </div>

          {/* Decorative Dashed Curved Arrow pointing to badge */}
          <div
            className={`absolute right-[60px] top-[320px] w-[120px] h-[180px] z-[4] transition-opacity duration-[800ms] delay-[600ms] ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <svg
              width="120"
              height="180"
              viewBox="0 0 120 180"
              fill="none"
              className="w-full h-full"
            >
              {/* Line coming from top right */}
              <path
                d="M100 0 C 90 20, 75 35, 65 45"
                stroke="#333"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                fill="none"
                strokeLinecap="round"
              />
              {/* Orange dot */}
              <circle cx="65" cy="45" r="8" fill="#f5a623" />
              {/* Circular loop */}
              <path
                d="M65 45 C 30 50, 15 80, 25 105 C 35 130, 55 130, 65 110 C 75 90, 60 75, 45 80 C 30 85, 25 100, 35 115"
                stroke="#333"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                fill="none"
                strokeLinecap="round"
              />
              {/* Line going down from loop */}
              <path
                d="M35 115 L 40 155"
                stroke="#333"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                fill="none"
                strokeLinecap="round"
              />
              {/* Arrow head pointing down */}
              <path
                d="M30 145 L40 165 L50 145"
                stroke="#333"
                strokeWidth="2.5"
                fill="#333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Years Badge with floating animation */}
          <div
            className={`absolute right-[40px] bottom-[10px] bg-gradient-to-br from-[#f5a623] to-[#f57c00] rounded-xl px-6 py-4 flex items-center gap-3 shadow-[0_10px_30px_rgba(245,124,0,0.4)] z-[5] transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[400ms] animate-float ${
              isVisible ? 'scale-100 opacity-100' : 'scale-[0.8] opacity-0'
            }`}
          >
            <span className="text-[2.5rem] font-bold text-white leading-none">
              25
            </span>
            <span className="text-[0.9rem] font-medium text-white leading-tight">
              Years of
              <br />
              experience
            </span>
          </div>
        </div>

        {/* Mobile Images Layout - Separate structure */}
        <div className="md:hidden w-full max-w-[350px] mx-auto">
          {/* Years Badge - Top on mobile */}
          <div
            className={`mx-auto mb-4 bg-gradient-to-br from-[#f5a623] to-[#f57c00] rounded-2xl px-4 py-3 flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(245,124,0,0.4)] w-fit transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isVisible ? 'scale-100 opacity-100' : 'scale-[0.8] opacity-0'
            }`}
          >
            <span className="text-[1.6rem] font-bold text-white leading-none">
              25
            </span>
            <span className="text-[0.7rem] font-medium text-white leading-tight">
              Years of
              <br />
              experience
            </span>
          </div>
          
          {/* Mobile Images - Side by side */}
          <div className="flex justify-center gap-3 relative">
            {/* Main Image */}
            <div
              className={`w-[150px] h-[200px] rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
              }`}
              style={{ transform: isVisible ? 'rotate(-3deg)' : 'translateY(30px) rotate(-3deg)' }}
            >
              <Image
                src="/img/image-24-1.webp"
                alt="Woman enjoying healthy food"
                fill
                className="object-cover"
              />
            </div>

            {/* Second Image */}
            <div
              className={`w-[150px] h-[200px] rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-3 border-white transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
              }`}
              style={{ transform: isVisible ? 'rotate(3deg)' : 'translateY(30px) rotate(3deg)' }}
            >
              <Image
                src="/img/image-27.webp"
                alt="Woman with healthy vegetables"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div
          className={`flex-1 w-full md:min-w-[320px] max-w-[520px] transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-300 text-center md:text-left ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'
          }`}
        >
          {/* Label */}
          <div className="flex items-center gap-2 mb-3 md:mb-4 justify-center md:justify-start">
            <span className="text-[#f5a623] text-lg md:text-xl">✦</span>
            <span className="text-[#0d9488] text-sm md:text-base font-semibold tracking-wide">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[1.5rem] md:text-[2.8rem] font-bold text-[#1a1a1a] leading-[1.2] mb-3 md:mb-6">
            Your wellness journey
            <br />
            starts here
          </h2>

          {/* Description */}
          <p className="text-[0.9rem] md:text-base text-[#666] leading-[1.7] md:leading-[1.8] mb-5 md:mb-8">
            25+ years of expertise guiding over 15,000+ clients to their health goals.
            Whether it&apos;s weight loss, PCOD management, disease prevention, or lifestyle
            optimization, we create customized plans that fit your life, not the other way around.
          </p>

          {/* Features Box */}
          <div className="bg-gradient-to-br from-[#f5f7fa] to-[#eef1f5] border border-[#e0e4e8] rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-y-5 md:gap-x-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-2 md:p-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                  style={{ transitionDelay: isVisible ? `${0.5 + index * 0.1}s` : '0s', transition: 'all 0.3s ease' }}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-[#f5a623]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 7L6 10L11 4"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[0.85rem] md:text-[0.95rem] font-medium text-[#333] text-left">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/about">
            <button className="bg-gradient-to-br from-[#f5a623] to-[#f57c00] text-white text-sm md:text-base font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full border-none cursor-pointer shadow-[0_8px_25px_rgba(245,124,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(245,124,0,0.45)]">
              More About Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
