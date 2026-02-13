"use client";
import Image from 'next/image';
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

  const highlights = [
    { label: 'Personalised Nutrition,\nNot Generic Charts' },
    { label: 'Science-Led,\nCalorie-Deficit Planning' },
    { label: 'Structured Monitoring\n& Feedback' },
    { label: 'Therapeutic Diets\nfor Lifestyle Conditions' },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white py-12 md:py-20 px-4 md:px-8 overflow-hidden rounded-[20px] md:rounded-[30px]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left Side - Images */}
        <div
          className={`relative w-full lg:w-[50%] flex-shrink-0 transition-all duration-[800ms] ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[50px] opacity-0'
          }`}
        >
          {/* Desktop Layout */}
          <div className="hidden md:block relative h-[520px]">
            {/* Image 1 - Award ceremony */}
            <div className="absolute left-0 top-[20px] w-[280px] h-[380px] rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-[2]"
              style={{ transform: 'rotate(-5deg)' }}
            >
              <Image
                src="/img/Div [elementor-element] (2).png"
                alt="Award Ceremony"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 - Business Achievers Award */}
            <div className="absolute right-[20px] top-[0px] w-[260px] h-[300px] rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-[3] border-[5px] border-white"
              style={{ transform: 'rotate(4deg)' }}
            >
              <Image
                src="/img/da78b942eb8662092e9c414840553c24c7218c2c.png"
                alt="Business Achievers Award"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Dashed Arrow */}
            <div className="absolute right-[60px] top-[280px] w-[100px] h-[160px] z-[4]">
              <svg width="100" height="160" viewBox="0 0 100 160" fill="none">
                <path
                  d="M80 0 C 70 25, 55 40, 50 50"
                  stroke="#333"
                  strokeWidth="2"
                  strokeDasharray="6 5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="50" r="6" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="4 3" />
                <path
                  d="M50 56 C 30 65, 20 85, 30 105 C 38 120, 50 118, 50 105 C 50 92, 38 88, 30 95"
                  stroke="#333"
                  strokeWidth="2"
                  strokeDasharray="6 5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M30 95 L 35 140"
                  stroke="#333"
                  strokeWidth="2"
                  strokeDasharray="6 5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path d="M25 130 L35 150 L45 130" stroke="#333" strokeWidth="2" fill="#333" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Years Badge */}
            <div className="absolute right-[30px] bottom-[10px] bg-gradient-to-br from-[#f5a623] to-[#f57c00] rounded-xl px-6 py-4 flex items-center gap-3 shadow-[0_10px_30px_rgba(245,124,0,0.4)] z-[5]">
              <span className="text-[2.5rem] font-bold text-white leading-none">25+</span>
              <span className="text-[0.9rem] font-medium text-white leading-tight">
                Years of<br />experience
              </span>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex justify-center gap-3 mb-4 relative h-[220px]">
              <div className="relative w-[48%] h-[200px] rounded-[16px] overflow-hidden shadow-lg" style={{ transform: 'rotate(-3deg)' }}>
                <Image src="/img/Div [elementor-element] (2).png" alt="Award Ceremony" fill className="object-cover" />
              </div>
              <div className="relative w-[48%] h-[200px] rounded-[16px] overflow-hidden shadow-lg border-3 border-white" style={{ transform: 'rotate(3deg)' }}>
                <Image src="/img/da78b942eb8662092e9c414840553c24c7218c2c.png" alt="Business Achievers Award" fill className="object-cover" />
              </div>
            </div>
            <div className="mx-auto w-fit bg-gradient-to-br from-[#f5a623] to-[#f57c00] rounded-xl px-5 py-3 flex items-center gap-2 shadow-[0_10px_30px_rgba(245,124,0,0.4)]">
              <span className="text-[1.6rem] font-bold text-white leading-none">25+</span>
              <span className="text-[0.7rem] font-medium text-white leading-tight">Years of<br />experience</span>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div
          className={`flex-1 w-full text-center lg:text-left transition-all duration-[800ms] ease-out delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'
          }`}
        >
          {/* Label */}
          <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
            <span className="text-[#f5a623] text-lg">✦</span>
            <span className="text-[#f5a623] text-sm font-semibold tracking-wide">About Us</span>
          </div>

          {/* Heading */}
          <h2 className="text-[1.8rem] md:text-[2.8rem] font-bold text-[#1a1a1a] leading-[1.15] mb-4 md:mb-6">
            Why Most Diets Fail &<br />Why This One Works
          </h2>

          {/* Description */}
          <div className="text-[0.9rem] md:text-[0.95rem] text-[#555] leading-[1.8] mb-6 md:mb-8 space-y-3 text-left">
            <p>
              Weight loss fails because most diets don&apos;t fit Indian food or real life. DTPS was built on one simple belief:
              If a diet can&apos;t work with <strong>Ghar ka Khana</strong>, it won&apos;t work at all.
            </p>
            <p>
              That&apos;s why our approach is science-led and diet-focused, using personalised calorie planning with normal
              Indian meals. Backed by <strong>200+ expert dietitians</strong>, we helped more than <strong>75,000+</strong> people to lose weight
              and manage Medical conditions with a <strong>98% success rate</strong>. If you&apos;re looking for something that finally fits
              your life,
            </p>
            <p>You&apos;re in the right place.</p>
          </div>

          {/* Highlights Box */}
          <div className="bg-[#f5f7fa] border border-[#e0e4e8] rounded-2xl p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-[#014E4E] mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7L6 10L11 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[0.9rem] font-semibold text-[#333] whitespace-pre-line leading-snug text-left">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
