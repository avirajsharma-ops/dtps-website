"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ExpertGuidanceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ rating: 0, success: 0, clients: 0 });

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
          rating: Math.round(48 * progress) / 10,
          success: Math.round(98 * progress),
          clients: Math.round(75 * progress),
        });
        if (step >= steps) clearInterval(timer);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const badges = [
    '200+ Certified Dietitians',
    'Science-Based Planning',
    'Ghar Ka Khana Expertise',
    'Proven Results',
    'Award-Winning Dietitian',
    'Clinically Guided Nutrition',
  ];

  const mediaCards = [
    { image: '/img/136ae8b9c65c9ecc4bd6404f96d814b89c709db8.png', title: 'Lorem Ipsum' },
    { image: '/img/b22a7c9c0507e051782037f4e5c7620b1855350f.png', title: 'Lorem Ipsum' },
    { image: '/img/a98174527a3226aba66885b3988ba022452cdc70.png', title: 'Lorem Ipsum' },
  ];

  const newsLogos = [
    '/img/5f6622dbf1b6de7b6925a69db64a227c2a89a714.png',
    '/img/12b3370d06475e6f999827b7b8938fbe6ae909a5.png',
    '/img/3973ec3d4b0c2566c67a2b1068351e93a29b071b.png',
    '/img/0c20361d32f016c8296b7a188772acee3e10a8ae.png',
    '/img/95a14613c629279b502eb34587ccb3cafe375df9.png',
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a4a4a] py-12 md:py-16 lg:py-20 px-4 md:px-8 overflow-hidden rounded-[20px] md:rounded-[30px]"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* ─── Header ─── */}
        <div className={`text-center mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-[1.6rem] md:text-[2rem] lg:text-[2.2rem] font-bold text-white leading-tight mb-2"
              style={{ fontFamily: "'Epilogue', sans-serif" }}>
            You are under Expert&apos;s Guidance
          </h2>
          <p className="text-white/70 text-sm md:text-lg lg:text-xl">
            Meet the Founder Behind DTPS
          </p>
        </div>

        {/* ─── Main Content: Bio Left + Image Right ─── */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 mb-12 md:mb-16">

          {/* Left column – bio text + badges */}
          <div className={`flex-1 max-w-full lg:max-w-[589px] transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="text-white/80 text-[0.85rem] md:text-[0.92rem] leading-[1.9] space-y-4 mb-8">
              <p>
                DTPS is led by Dietitian Poonam Sagar, a name trusted by thousands of
                families across India and beyond. With 15+ years of hands-on experience,
                she has worked with Indian as well as international clients. Her work has
                been recognised with multiple awards in the field of nutrition and
                wellness, but what truly sets her apart is not the titles. It&apos;s her belief that
                diet should support your life, not control it.
              </p>
              <p>
                While the world pushed salads, supplements, and starvation, she built a
                system around ghar ka khana, nutrition science, and consistency. That
                belief is what became DTPS.
              </p>
              <p>DTPS does not run on one dietitian alone.</p>
              <p>
                It runs on a team of 200+ qualified dietitians and health counsellors,
                trained to work with real people, real routines, and real challenges.
              </p>
            </div>

            {/* Badges – 2-column grid */}
            <div className="grid grid-cols-2 gap-3">
              {badges.map((label, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-[#f5a623] rounded-full px-4 py-2.5"
                  style={{ maxWidth: 260 }}
                >
                  <span className="w-2 h-2 rounded-full bg-white flex-shrink-0" />
                  <span className="text-white text-xs md:text-sm font-semibold whitespace-nowrap">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column – Founder image with vertical name */}
          <div className={`relative flex-shrink-0 w-full lg:w-auto transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="relative w-[253px] h-[420px] md:h-[542px] mx-auto lg:mx-0">
              <Image
                src="/img/b5074f02a380ce95c93ba5c4feb524a4c67cd0e5.png"
                alt="Dietitian Poonam Sagar"
                fill
                className="object-contain object-bottom"
              />
              {/* "Dietitian" – teal, vertical, left side */}
              <div className="absolute left-[-28px] top-[18%]">
                <span
                  className="text-[#5ec6c6] text-xs md:text-sm tracking-[0.25em] font-medium uppercase"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  Dietitian
                </span>
              </div>
              {/* "POONAM SAGAR" – orange, vertical, right side */}
              <div className="absolute right-[-32px] md:right-[-40px] top-[10%]">
                <span
                  className="text-[#f5a623] font-bold text-2xl md:text-4xl tracking-wider"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  POONAM SAGAR
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Media Cards – 3 white cards ─── */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 md:gap-6 mb-12 md:mb-16">
          {mediaCards.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-[16px] p-4 w-full sm:w-[260px] flex-shrink-0 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="relative w-full h-[170px] rounded-[12px] overflow-hidden mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-[#014E4E] font-bold text-base mb-2">{card.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
              </p>
              <button className="text-[#014E4E] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Read More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* ─── News Logo Ticker ─── */}
        <div className="relative overflow-hidden py-6 md:py-8 mb-10 md:mb-14 bg-white rounded-[16px]">
          {/* Gradient fade – left */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          {/* Gradient fade – right */}
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          <div className="flex animate-ticker whitespace-nowrap">
            {[...newsLogos, ...newsLogos, ...newsLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-6 md:mx-10">
                <div className="relative w-[120px] md:w-[180px] lg:w-[220px] h-[50px] md:h-[70px]">
                  <Image
                    src={logo}
                    alt="Media Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Counter Boxes – all orange ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {/* 4.8 Google Rating */}
          <div
            className={`bg-[#f5a623] rounded-[16px] flex flex-col items-center justify-center text-center transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
            style={{ minHeight: 140, transitionDelay: '800ms' }}
          >
            <div className="text-white text-3xl md:text-4xl font-bold mb-1">
              {counters.rating.toFixed(1)}
            </div>
            <div className="text-white/90 text-xs md:text-sm font-medium">Google Rating</div>
          </div>

          {/* 98% Success Rate */}
          <div
            className={`bg-[#f5a623] rounded-[16px] flex flex-col items-center justify-center text-center transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
            style={{ minHeight: 140, transitionDelay: '900ms' }}
          >
            <div className="text-white text-3xl md:text-4xl font-bold mb-1">
              {counters.success}%
            </div>
            <div className="text-white/90 text-xs md:text-sm font-medium">Success Rate</div>
          </div>

          {/* 75K+ Clients */}
          <div
            className={`bg-[#f5a623] rounded-[16px] flex flex-col items-center justify-center text-center transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
            style={{ minHeight: 140, transitionDelay: '1000ms' }}
          >
            <div className="text-white text-3xl md:text-4xl font-bold mb-1">
              {counters.clients}K+
            </div>
            <div className="text-white/90 text-xs md:text-sm font-medium">Clients</div>
          </div>

          {/* Personalised Ghar ka Khana */}
          <div
            className={`bg-[#f5a623] rounded-[16px] flex flex-col items-center justify-center text-center px-3 transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
            style={{ minHeight: 140, transitionDelay: '1100ms' }}
          >
            <div className="text-white text-xs font-medium mb-0.5">Personalised</div>
            <div className="text-white text-2xl md:text-3xl font-bold italic mb-0.5">Ghar</div>
            <div className="text-white text-xs font-medium">ka Khana Diet Plan</div>
          </div>
        </div>
      </div>
    </section>
  );
}
