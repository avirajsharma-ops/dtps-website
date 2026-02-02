"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ExpertGuidanceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ success: 0, rating: 0, stories: 0 });

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

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounters({
          success: Math.round(98 * progress),
          rating: Math.round(49 * progress) / 10,
          stories: Math.round(70 * progress),
        });
        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const features = [
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 20v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1"/>
        </svg>
      ), 
      text: 'Registered Dietitians' 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ), 
      text: 'Tailored Meal Plan' 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ), 
      text: 'Nutritional Counsellors' 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18"/>
          <rect x="4" y="8" width="16" height="8" rx="2"/>
          <path d="M2 12h4"/>
          <path d="M18 12h4"/>
        </svg>
      ), 
      text: 'Weight Management' 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ), 
      text: 'Compassionate Care' 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ), 
      text: 'Better Health' 
    },
  ];

  const mediaCards = [
    { image: '/img/Garima-Mam.jpeg', title: 'Lorem Ipsum' },
    { image: '/img/Shivani.jpeg', title: 'Lorem Ipsum' },
    { image: '/img/Anshu-Jain.jpeg', title: 'Lorem Ipsum' },
  ];

  const mediaLogos = [
    '/img/logo-aajtak.png',
    '/img/logo-zee5.png',
    '/img/logo-midday.png',
    '/img/logo-dailyhunt.png',
    '/img/logo-theprint.png',
    '/img/logo-aajtak.png',
    '/img/logo-zee5.png',
    '/img/logo-midday.png',
    '/img/logo-dailyhunt.png',
    '/img/logo-theprint.png',
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a4a4a] py-12 md:py-16 px-4 md:px-8 overflow-hidden rounded-[20px] md:rounded-[30px]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className={`text-[1.8rem] md:text-[2.5rem] font-bold text-white leading-tight mb-2 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            You are under Expert&apos;s Guidance
          </h2>
          <p className={`text-white/70 text-sm md:text-base transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Meet our Award Winning Dietitian
          </p>
        </div>

        {/* Main Content - Image and Features */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Left - Dietitian Image */}
          <div className={`relative flex-shrink-0 transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="relative w-[280px] md:w-[320px] h-[350px] md:h-[400px]">
              <Image
                src="/img/Group-319-2-1.webp"
                alt="Dietitian Poonam Sagar"
                fill
                className="object-contain"
              />
              {/* Name text overlay - vertical */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2">
                <div className="text-white font-light text-xs tracking-[0.2em] opacity-60" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  Dietitian
                </div>
              </div>
              <div className="absolute -right-4 top-[20%]">
                <div className="text-[#f5a623] font-bold text-4xl md:text-5xl" style={{ writingMode: 'vertical-rl' }}>
                  SAGAR
                </div>
              </div>
              <div className="absolute left-4 top-4">
                <div className="text-white font-bold text-lg md:text-xl">
                  <span className="font-light text-xs block opacity-60">Dietitian</span>
                  POONAM
                </div>
              </div>
            </div>
          </div>

          {/* Right - Description and Features */}
          <div className={`flex-1 transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <p className="text-white/80 text-[0.9rem] md:text-base leading-[1.8] mb-8">
              Dt. Poonam Sagar understands that one-size-fits-all plans simply don&apos;t suffice. That&apos;s why we specialize in crafting personalized dietary solutions tailored to your unique needs and preferences. Dt. Sagar&apos;s philosophy revolves around creating sustainable meal plans centered on delicious, home-cooked dishes.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  style={{ transitionDelay: `${400 + index * 50}ms` }}
                >
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-[10px] bg-[#0d5a5a] border border-white/20 flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <span className="text-white text-[0.85rem] md:text-[0.95rem] font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8 mb-12 md:mb-16">
          {mediaCards.map((card, index) => (
            <div
              key={index}
              className={`bg-[#0d5a5a] rounded-[16px] p-4 md:p-5 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="relative w-full h-[140px] md:h-[160px] rounded-[12px] overflow-hidden mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-white text-base font-medium">{card.title}</p>
            </div>
          ))}
        </div>

        {/* Media Logos Ticker */}
        <div className="relative overflow-hidden py-6 md:py-8 mb-10 md:mb-14 bg-[#0d5a5a] rounded-[16px]">
          <div className="flex animate-ticker whitespace-nowrap">
            {[...mediaLogos, ...mediaLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-6 md:mx-10">
                <div className="relative w-[100px] md:w-[140px] h-[40px] md:h-[50px]">
                  <Image
                    src={logo}
                    alt="Media Logo"
                    fill
                    className="object-contain brightness-0 invert opacity-80"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <div className={`bg-[#f5a623]/20 border-2 border-[#f5a623] rounded-[16px] px-6 md:px-8 py-4 md:py-5 text-center min-w-[140px] md:min-w-[160px] transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
            <div className="text-[#f5a623] text-3xl md:text-4xl font-bold mb-1">
              {counters.success}%
            </div>
            <div className="text-white text-xs md:text-sm opacity-80">Success Rate</div>
          </div>

          <div className={`bg-[#f5a623]/20 border-2 border-[#f5a623] rounded-[16px] px-6 md:px-8 py-4 md:py-5 text-center min-w-[140px] md:min-w-[160px] transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '900ms' }}>
            <div className="text-[#f5a623] text-3xl md:text-4xl font-bold mb-1">
              {counters.rating.toFixed(1)}
            </div>
            <div className="text-white text-xs md:text-sm opacity-80">Average Rating</div>
          </div>

          <div className={`bg-[#f5a623]/20 border-2 border-[#f5a623] rounded-[16px] px-6 md:px-8 py-4 md:py-5 text-center min-w-[140px] md:min-w-[160px] transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
            <div className="text-[#f5a623] text-3xl md:text-4xl font-bold mb-1">
              {counters.stories}K+
            </div>
            <div className="text-white text-xs md:text-sm opacity-80">Success Stories</div>
          </div>

          <div className={`bg-[#f5a623]/20 border-2 border-[#f5a623] rounded-[16px] px-6 md:px-8 py-4 md:py-5 text-center min-w-[180px] md:min-w-[200px] transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '1100ms' }}>
            <div className="text-[#f5a623] text-3xl md:text-4xl font-bold mb-1">
              #1
            </div>
            <div className="text-white text-xs md:text-sm opacity-80">Business Achievers<br />& News 18 Award</div>
          </div>
        </div>
      </div>
    </section>
  );
}
