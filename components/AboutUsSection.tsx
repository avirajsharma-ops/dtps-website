"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function AboutUsSection() {
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
      className="bg-white py-12 md:py-20 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-16 justify-center">
        {/* Left Side - Images */}
        <div className="relative w-full md:min-w-[320px] max-w-[400px] md:max-w-[550px] flex-1 h-[320px] md:h-[500px] mx-auto">
          {/* Main Image - Woman eating salad */}
          <div
            className={`absolute left-[5%] md:left-0 top-0 w-[180px] md:w-[280px] h-[220px] md:h-[360px] rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-[2] transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[50px] opacity-0'
            }`}
            style={{ transform: isVisible ? 'translateY(0) rotate(-3deg)' : 'translateY(50px) rotate(-3deg)' }}
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
            className={`absolute right-[5%] md:right-0 top-[20px] md:top-[30px] w-[160px] md:w-[240px] h-[200px] md:h-[300px] rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-[3] border-4 border-white transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[50px] opacity-0'
            }`}
            style={{ transform: isVisible ? 'translateY(0) rotate(3deg)' : 'translateY(50px) rotate(3deg)' }}
          >
            <Image
              src="/img/image-27.webp"
              alt="Woman with healthy vegetables"
              fill
              className="object-cover"
            />
          </div>

          {/* Decorative Dashed Circle with Arrow */}
          <div
            className={`absolute right-[30%] md:right-[60px] top-[45%] md:top-1/2 -translate-y-1/2 w-[50px] md:w-[80px] h-[50px] md:h-[80px] z-[4] transition-opacity duration-[800ms] delay-[600ms] ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              className="animate-[rotate_10s_linear_infinite] w-full h-full"
            >
              <circle
                cx="40"
                cy="40"
                r="35"
                stroke="#333"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
              />
            </svg>
            <svg
              className="absolute -bottom-4 left-1/2 -translate-x-1/2"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Years Badge */}
          <div
            className={`absolute left-1/2 bottom-[10px] md:bottom-[30px] -translate-x-1/2 bg-gradient-to-br from-[#f5a623] to-[#f57c00] rounded-2xl px-4 py-3 md:px-6 md:py-4 flex items-center gap-2 md:gap-3 shadow-[0_10px_30px_rgba(245,124,0,0.4)] z-[5] transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[400ms] ${
              isVisible ? 'scale-100 opacity-100' : 'scale-[0.8] opacity-0'
            }`}
          >
            <span className="text-[1.6rem] md:text-[2.5rem] font-bold text-white leading-none">
              25
            </span>
            <span className="text-[0.7rem] md:text-[0.9rem] font-medium text-white leading-tight">
              Years of
              <br />
              experience
            </span>
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
          <div className="bg-gradient-to-br from-[#f0faf9] to-[#e8f7f6] border border-[#b8e6e3] rounded-2xl p-3 md:p-6 mb-6 md:mb-8">
            <div className="grid grid-cols-1 gap-2 md:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className={`flex items-center gap-3 p-2 md:p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    hoveredFeature === index ? 'bg-[#0d9488]' : 'bg-transparent'
                  } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                  style={{ transitionDelay: isVisible ? `${0.5 + index * 0.1}s` : '0s' }}
                >
                  <div
                    className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      hoveredFeature === index ? 'bg-white' : 'bg-[#0d9488]'
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="md:w-[14px] md:h-[14px]">
                      <path
                        d="M3 7L6 10L11 4"
                        stroke={hoveredFeature === index ? '#0d9488' : '#fff'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    className={`text-[0.85rem] md:text-[0.95rem] font-medium transition-all duration-300 text-left ${
                      hoveredFeature === index ? 'text-white' : 'text-[#333]'
                    }`}
                  >
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
