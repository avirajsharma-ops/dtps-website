"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function OurTeamSection() {
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

  const highlights = [
    { number: '01', label: 'Years of Hands-On Experience' },
    { number: '02', label: 'Real-World Case Experts' },
    { number: '03', label: 'Condition-Specific Guidance' },
    { number: '04', label: 'PCOD, Thyroid & Diabetes Experience' },
  ];

  const galleryImages = [
    '/img/e35fbfd455b90e6785ec1d81b0e5d65937c00191.png',
    '/img/506d2aa64affd742abc64e22868e9de4b0824b14.png',
    '/img/eb12ef7c5dee140d48c30ccb5b52fd3fa3e8982f.png',
    '/img/f9308defaee01658dfa71d33d5019abf85676479.png',
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white pb-10 md:pb-12 rounded-[20px] md:rounded-[26px] overflow-hidden"
      style={{ outline: '0.5px solid #6C6C6C', outlineOffset: '-0.5px' }}
    >
      {/* ─── Full-width Team Photo (cropped) ─── */}
      <div
        className={`relative w-full h-[220px] sm:h-[320px] md:h-[425px] overflow-hidden transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <Image
          src="/img/a21bc645bd7be0db87d5480827d18929468c8767.png"
          alt="Our Team"
          fill
          className="object-cover object-[center_30%]"
        />
      </div>

      {/* ─── Content area ─── */}
      <div className="flex flex-col items-center gap-8 md:gap-10 px-5 md:px-10 lg:px-16 mt-8 md:mt-10">

        {/* Label + Title + Description */}
        <div className="w-full max-w-[920px] flex flex-col items-center">
          {/* "Our Team" label */}
          <div className={`flex items-center gap-1.5 mb-3 transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="w-3.5 h-3.5 bg-[#FF850B]" />
            <span className="text-[#014E4E] text-sm font-semibold" style={{ fontFamily: "'Epilogue', sans-serif" }}>
              Our Team
            </span>
          </div>

          {/* Title */}
          <h2
            className={`text-center text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold text-[#1E1E1E] leading-tight mb-6 md:mb-8 transition-all duration-700 delay-150 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ fontFamily: "'Epilogue', sans-serif" }}
          >
            The People Behind Your Weight Loss Journey
          </h2>

          {/* Description */}
          <div className={`text-black text-[15px] md:text-base leading-[26px] mb-0 transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
               style={{ fontFamily: "'Epilogue', sans-serif" }}>
            <p className="mb-1">
              Weight loss doesn&apos;t work because of a chart. It works because of people.
              {' '}DTPS is run by a team of <strong className="font-bold">200+ dietitians and health counsellors.</strong>
            </p>
            <p>
              They talk to you, understand your routine and adjust your plan when things don&apos;t go as planned. They track your
              progress, adjust your plan when needed, and stay involved until results show. This isn&apos;t automated support.
              This isn&apos;t passion written in a job description. It comes from people who genuinely care about outcomes, who think
              beyond charts and calls, and who take personal responsibility for your progress until results actually show.
            </p>
          </div>
        </div>

        {/* ─── Divider ─── */}
        <div className="w-[300px] md:w-[458px] h-[2px] bg-[#e5e5e5]" />

        {/* ─── Highlight Pills (2-column) ─── */}
        <div className={`w-full max-w-[920px] grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[22px] transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3.5 bg-white rounded-[40px] p-2"
              style={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)' }}
            >
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-[#014E4E] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-extrabold text-lg md:text-2xl leading-[30px]" style={{ fontFamily: "'Century Gothic', sans-serif" }}>
                  {item.number}
                </span>
              </div>
              <span className="text-black font-semibold text-[15px] md:text-lg leading-[30px]" style={{ fontFamily: "'Century Gothic', sans-serif" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Gallery (full width, 4-col row) ─── */}
      <div className={`max-w-[1152px] mx-auto mt-8 md:mt-10 px-4 md:px-6 transition-all duration-700 delay-[400ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative h-[130px] sm:h-[150px] md:h-[179px] rounded-[16px] overflow-hidden"
            >
              <Image
                src={img}
                alt={`Team gallery ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
