"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const services = [
    {
      title: 'Weight Loss & Wellness',
      description:
        'Shed pounds sustainably with metabolism-boosting nutrition plans that celebrate whole foods and home-cooked meals. No crash diets, just smart choices.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M6 12H26M6 16H26M10 20H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
      featured: true,
      link: '/weight-loss',
    },
    {
      title: 'PCOD Management',
      description:
        'Specialized nutrition protocols designed specifically for hormonal balance, energy management, and symptom relief. Manage your condition, not let it manage you.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="22" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="10" cy="22" r="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="22" cy="22" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      featured: false,
      link: '/pcod',
    },
    {
      title: 'Therapeutic Nutrition',
      description:
        'Custom plans for thyroid health, diabetes management, cardiac wellness, and more. Nutrition-based disease management with proven results.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
          <line x1="16" y1="6" x2="16" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="30" x2="16" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="6" y1="16" x2="2" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="30" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      featured: false,
      link: '/plans/therapeutic',
    },
    {
      title: "Women's Health",
      description:
        'Dedicated nutrition support for pregnancy, lactation, postpartum recovery, and menopause. Every phase of life deserves expert nutritional guidance.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="8" y="8" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M12 14H20M12 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 12V8M12 12V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      featured: false,
      link: '/plans/therapeutic',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-gray-100 py-12 md:py-20 px-4 md:px-8 rounded-[20px] md:rounded-[30px]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Header Card */}
          <div
            className={`bg-gray-100 p-6 flex flex-col justify-center transition-all duration-[600ms] ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#f5a623] text-lg">✦</span>
              <span className="text-teal-600 text-base font-semibold">
                Services
              </span>
            </div>
            <h2 className="text-[2.2rem] font-bold text-gray-900 leading-tight mb-4">
              Personalized
              <br />
              Solutions for Every
              <br />
              Health Goal
            </h2>
            <p className="text-[0.95rem] text-gray-500 leading-relaxed mb-6">
              We offer personalized health coaching services support your wellness journey and empower you to life.
            </p>
            <Link href="/plans/therapeutic">
              <button
                className="bg-gradient-to-br from-[#f5a623] to-[#f57c00] text-white text-[0.95rem] font-semibold py-3.5 px-7 rounded-full border-none cursor-pointer shadow-[0_6px_20px_rgba(245,124,0,0.3)] transition-all duration-300 w-fit hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(245,124,0,0.4)]"
              >
                All Services
              </button>
            </Link>
          </div>

          {/* Weight Loss Card - Featured Orange */}
          <div
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`bg-gradient-to-br from-[#f5a623] to-[#f57c00] rounded-[20px] p-8 flex flex-col cursor-pointer transition-all duration-[400ms] ease-out ${
              isVisible 
                ? (hoveredCard === 0 ? '-translate-y-2.5 shadow-[0_20px_40px_rgba(245,124,0,0.4)]' : 'translate-y-0')
                : 'translate-y-[30px] opacity-0'
            }`}
          >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 text-white">
              {services[0].icon}
            </div>
            <h3 className="text-[1.35rem] font-bold text-white mb-4">
              {services[0].title}
            </h3>
            <p className="text-sm text-white/90 leading-relaxed mb-6 flex-1">
              {services[0].description}
            </p>
            <Link
              href={services[0].link}
              className="flex items-center gap-2 text-white text-[0.95rem] font-semibold no-underline"
            >
              Read More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* PCOD Management Card */}
          <div
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`rounded-[20px] p-8 flex flex-col cursor-pointer transition-all duration-[400ms] ease-out ${
              hoveredCard === 1 
                ? 'bg-gradient-to-br from-[#f5a623] to-[#f57c00] -translate-y-2.5 shadow-[0_20px_40px_rgba(245,124,0,0.3)]' 
                : 'bg-white'
            } ${isVisible ? '' : 'translate-y-[30px] opacity-0'}`}
          >
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-[400ms] ${
                hoveredCard === 1 
                  ? 'bg-white/20 text-white border-0' 
                  : 'bg-white border-2 border-teal-600 text-teal-600'
              }`}
            >
              {services[1].icon}
            </div>
            <h3
              className={`text-[1.35rem] font-bold mb-4 transition-all duration-[400ms] ${
                hoveredCard === 1 ? 'text-white' : 'text-gray-900'
              }`}
            >
              {services[1].title}
            </h3>
            <p
              className={`text-sm leading-relaxed mb-6 flex-1 transition-all duration-[400ms] ${
                hoveredCard === 1 ? 'text-white/90' : 'text-gray-500'
              }`}
            >
              {services[1].description}
            </p>
            <Link
              href={services[1].link}
              className={`flex items-center gap-2 text-[0.95rem] font-semibold no-underline transition-all duration-[400ms] ${
                hoveredCard === 1 ? 'text-white' : 'text-teal-600'
              }`}
            >
              Read More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Therapeutic Nutrition Card */}
          <div
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`rounded-[20px] p-8 flex flex-col cursor-pointer transition-all duration-[400ms] ease-out ${
              hoveredCard === 2 
                ? 'bg-gradient-to-br from-[#f5a623] to-[#f57c00] -translate-y-2.5 shadow-[0_20px_40px_rgba(245,124,0,0.3)]' 
                : 'bg-white'
            } ${isVisible ? '' : 'translate-y-[30px] opacity-0'}`}
          >
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-[400ms] ${
                hoveredCard === 2 
                  ? 'bg-white/20 text-white' 
                  : 'bg-teal-50 text-teal-600'
              }`}
            >
              {services[2].icon}
            </div>
            <h3
              className={`text-[1.35rem] font-bold mb-4 transition-all duration-[400ms] ${
                hoveredCard === 2 ? 'text-white' : 'text-gray-900'
              }`}
            >
              {services[2].title}
            </h3>
            <p
              className={`text-sm leading-relaxed mb-6 flex-1 transition-all duration-[400ms] ${
                hoveredCard === 2 ? 'text-white/90' : 'text-gray-500'
              }`}
            >
              {services[2].description}
            </p>
            <Link
              href={services[2].link}
              className={`flex items-center gap-2 text-[0.95rem] font-semibold no-underline transition-all duration-[400ms] ${
                hoveredCard === 2 ? 'text-white' : 'text-teal-600'
              }`}
            >
              Read More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Women's Health Card */}
          <div
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`rounded-[20px] p-8 flex flex-col cursor-pointer transition-all duration-[400ms] ease-out ${
              hoveredCard === 3 
                ? 'bg-gradient-to-br from-[#f5a623] to-[#f57c00] -translate-y-2.5 shadow-[0_20px_40px_rgba(245,124,0,0.3)]' 
                : 'bg-white'
            } ${isVisible ? '' : 'translate-y-[30px] opacity-0'}`}
          >
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-[400ms] ${
                hoveredCard === 3 
                  ? 'bg-white/20 text-white' 
                  : 'bg-teal-50 text-teal-600'
              }`}
            >
              {services[3].icon}
            </div>
            <h3
              className={`text-[1.35rem] font-bold mb-4 transition-all duration-[400ms] ${
                hoveredCard === 3 ? 'text-white' : 'text-gray-900'
              }`}
            >
              {services[3].title}
            </h3>
            <p
              className={`text-sm leading-relaxed mb-6 flex-1 transition-all duration-[400ms] ${
                hoveredCard === 3 ? 'text-white/90' : 'text-gray-500'
              }`}
            >
              {services[3].description}
            </p>
            <Link
              href={services[3].link}
              className={`flex items-center gap-2 text-[0.95rem] font-semibold no-underline transition-all duration-[400ms] ${
                hoveredCard === 3 ? 'text-white' : 'text-teal-600'
              }`}
            >
              Read More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Contact CTA Card */}
          <div
            className={`rounded-[20px] overflow-hidden relative min-h-[280px] transition-all duration-[600ms] ease-out delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
            }`}
          >
            <Image
              src="/img/what-we-do-image-1.jpg"
              alt="Contact Us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(13,64,67,0.85)] to-[rgba(13,64,67,0.75)] flex flex-col justify-center p-8">
              <p className="text-sm text-white/80 mb-2">
                Have You any question
              </p>
              <h3 className="text-[1.6rem] font-bold text-white leading-tight mb-6">
                Don&apos;t waste your
                <br />
                time call us!
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-white/15 rounded-[10px] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/70 mb-0.5">
                    Call Us 24/7
                  </p>
                  <p className="text-xl font-bold text-white">
                    98930 27688
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
