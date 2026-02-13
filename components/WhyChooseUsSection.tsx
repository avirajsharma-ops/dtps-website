"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const noItems = [
    {
      label: 'No expensive\nsupplements',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 4v20M8 8l12 12M20 8L8 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: 'No heavy\nexercise',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="10" stroke="white" strokeWidth="2" />
          <path d="M9 14h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: 'No\nstarvation',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 4C8.5 4 4 8.5 4 14s4.5 10 10 10 10-4.5 10-10S19.5 4 14 4z" stroke="white" strokeWidth="2" />
          <path d="M10 12c0-1 .5-2 2-2s2 1 2 2M14 12c0-1 .5-2 2-2s2 1 2 2M10 18s1.5 2 4 2 4-2 4-2" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#f0f2f5] py-12 md:py-20 px-4 md:px-8 rounded-[20px] md:rounded-[30px] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Side - Image */}
          <div
            className={`relative w-full lg:w-[45%] flex-shrink-0 transition-all duration-[800ms] ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[50px] opacity-0'
            }`}
          >
            <div className="relative w-full max-w-[450px] mx-auto h-[400px] md:h-[500px] rounded-[24px] overflow-hidden">
              <Image
                src="/img/1f442ed4deb44d6e85c1c12b7e577a214cf99ff6.png"
                alt="DTPS Team"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`flex-1 w-full transition-all duration-[800ms] ease-out delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'
            }`}
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#f5a623] text-lg">✦</span>
              <span className="text-[#f5a623] text-sm font-semibold tracking-wide">Why Choose Us</span>
            </div>

            {/* Heading */}
            <h2 className="text-[1.6rem] md:text-[2.5rem] font-bold text-[#1a1a1a] leading-[1.2] mb-6 md:mb-8">
              Agar aap soch rahe ho<br />
              Ab yeh bhi supplements aur juice bolenge...<br />
              Nahi. Bilkul nahi.
            </h2>

            {/* Orange Box - "Because We Removed What Makes Diets Fail" */}
            <div className="bg-[#f5a623] rounded-2xl p-5 md:p-6 mb-6 md:mb-8">
              <h3 className="text-white font-bold text-lg md:text-xl mb-4">
                Because We Removed What Makes Diets Fail.
              </h3>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {noItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-white font-semibold text-sm whitespace-pre-line leading-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Text */}
            <p className="text-[#444] text-[0.95rem] md:text-base leading-[1.8]">
              Just a Personalised <strong className="underline">Ghar-ka-Khana</strong> Diet Plan, built around
              calorie science and your real lifestyle. That&apos;s how we deliver
              a <strong className="text-[#f5a623]">98% success rate</strong>, not just fake promises!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
