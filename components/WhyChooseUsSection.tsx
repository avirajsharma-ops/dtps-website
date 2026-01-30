"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

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

  const leftFeatures = [
    {
      title: 'Nutrition counseling',
      description: 'Receive personalize nutrition guidance to create balanced, sustainable eating.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" stroke="#fff" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Supportive coaching',
      description: 'Receive personalize nutrition guidance to create balanced, sustainable eating.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="#fff" strokeWidth="2" />
          <path d="M6 20C6 16.6863 8.68629 14 12 14C15.3137 14 18 16.6863 18 20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const rightFeatures = [
    {
      title: 'Holistic approach',
      description: 'Receive personalize nutrition guidance to create balanced, sustainable eating.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" stroke="#fff" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="2" />
          <line x1="12" y1="4" x2="12" y2="2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="22" x2="12" y2="20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <line x1="4" y1="12" x2="2" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="12" x2="20" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Focus on sustainable',
      description: 'Receive personalize nutrition guidance to create balanced, sustainable eating.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="8" r="3" stroke="#fff" strokeWidth="2" />
          <circle cx="16" cy="8" r="3" stroke="#fff" strokeWidth="2" />
          <circle cx="8" cy="16" r="3" stroke="#fff" strokeWidth="2" />
          <circle cx="16" cy="16" r="3" stroke="#fff" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0d4043] pt-12 md:pt-16 px-4 md:px-8 pb-0 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12 flex-wrap gap-8">
          <div
            className={`transition-all duration-[600ms] ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[30px] opacity-0'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#f5a623] text-lg">✦</span>
              <span className="text-[#f5a623] text-base font-semibold">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-[2.5rem] font-bold text-white leading-tight">
              Your partner in lasting
              <br />
              wellness
            </h2>
          </div>

          <p
            className={`max-w-[450px] text-[0.95rem] text-white/80 leading-relaxed transition-all duration-[600ms] ease-out delay-100 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[30px] opacity-0'
            }`}
          >
            With a personalized approach and unwavering support, we guide you toward sustainable health and lasting well-being. Trust us to help you achieve your wellness goals.
          </p>
        </div>

        {/* Features with Center Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
          {/* Left Features */}
          <div className="flex flex-col gap-10 pb-12">
            {leftFeatures.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(`left-${index}`)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`cursor-pointer transition-all duration-[600ms] ease-out ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[30px] opacity-0'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                    hoveredFeature === `left-${index}`
                      ? 'bg-[#f5a623] border-0 scale-110'
                      : 'bg-white/10 border border-white/20 scale-100'
                  }`}
                >
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div
            className={`relative flex justify-center transition-all duration-[800ms] ease-out delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[50px] opacity-0'
            }`}
          >
            <div className="relative w-full max-w-[320px] h-[420px]">
              <Image
                src="/img/why-choose-image.png"
                alt="Health Expert"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-10 pb-12">
            {rightFeatures.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(`right-${index}`)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`cursor-pointer transition-all duration-[600ms] ease-out ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[30px] opacity-0'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                    hoveredFeature === `right-${index}`
                      ? 'bg-[#f5a623] border-0 scale-110'
                      : 'bg-white/10 border border-white/20 scale-100'
                  }`}
                >
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
