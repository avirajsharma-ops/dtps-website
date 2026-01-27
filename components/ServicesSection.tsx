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
      style={{
        background: '#f3f4f6',
        padding: '5rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Grid Layout */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: '1.5rem',
          }}
        >
          {/* Header Card */}
          <div
            style={{
              background: '#f3f4f6',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.6s ease',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              <span style={{ color: '#f5a623', fontSize: '1.1rem' }}>✦</span>
              <span
                style={{
                  color: '#0d9488',
                  fontSize: '1rem',
                  fontWeight: '600',
                }}
              >
                Services
              </span>
            </div>
            <h2
              style={{
                fontSize: '2.2rem',
                fontWeight: '700',
                color: '#1a1a1a',
                lineHeight: '1.2',
                marginBottom: '1rem',
              }}
            >
              Personalized
              <br />
              Solutions for Every
              <br />
              Health Goal
            </h2>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#6b7280',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
              }}
            >
              We offer personalized health coaching services support your wellness journey and empower you to life.
            </p>
            <Link href="/plans/therapeutic">
              <button
                style={{
                  background: 'linear-gradient(135deg, #f5a623 0%, #f57c00 100%)',
                  color: '#fff',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(245, 124, 0, 0.3)',
                  transition: 'all 0.3s ease',
                  width: 'fit-content',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 124, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(245, 124, 0, 0.3)';
                }}
              >
                All Services
              </button>
            </Link>
          </div>

          {/* Weight Loss Card - Featured Orange */}
          <div
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              background: 'linear-gradient(135deg, #f5a623 0%, #f57c00 100%)',
              borderRadius: '20px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              transform: isVisible ? (hoveredCard === 0 ? 'translateY(-10px)' : 'translateY(0)') : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              boxShadow: hoveredCard === 0 ? '0 20px 40px rgba(245, 124, 0, 0.4)' : 'none',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: '#fff',
              }}
            >
              {services[0].icon}
            </div>
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: '700',
                color: '#fff',
                marginBottom: '1rem',
              }}
            >
              {services[0].title}
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                flex: 1,
              }}
            >
              {services[0].description}
            </p>
            <Link
              href={services[0].link}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#fff',
                fontSize: '0.95rem',
                fontWeight: '600',
                textDecoration: 'none',
              }}
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
            style={{
              background: hoveredCard === 1 ? 'linear-gradient(135deg, #f5a623 0%, #f57c00 100%)' : '#fff',
              borderRadius: '20px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              transform: isVisible ? (hoveredCard === 1 ? 'translateY(-10px)' : 'translateY(0)') : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              boxShadow: hoveredCard === 1 ? '0 20px 40px rgba(245, 124, 0, 0.3)' : 'none',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                background: hoveredCard === 1 ? 'rgba(255,255,255,0.2)' : '#fff',
                border: hoveredCard === 1 ? 'none' : '2px solid #0d9488',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: hoveredCard === 1 ? '#fff' : '#0d9488',
                transition: 'all 0.4s ease',
              }}
            >
              {services[1].icon}
            </div>
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: '700',
                color: hoveredCard === 1 ? '#fff' : '#1a1a1a',
                marginBottom: '1rem',
                transition: 'all 0.4s ease',
              }}
            >
              {services[1].title}
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: hoveredCard === 1 ? 'rgba(255,255,255,0.9)' : '#6b7280',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                flex: 1,
                transition: 'all 0.4s ease',
              }}
            >
              {services[1].description}
            </p>
            <Link
              href={services[1].link}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: hoveredCard === 1 ? '#fff' : '#0d9488',
                fontSize: '0.95rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.4s ease',
              }}
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
            style={{
              background: hoveredCard === 2 ? 'linear-gradient(135deg, #f5a623 0%, #f57c00 100%)' : '#fff',
              borderRadius: '20px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              transform: isVisible ? (hoveredCard === 2 ? 'translateY(-10px)' : 'translateY(0)') : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              boxShadow: hoveredCard === 2 ? '0 20px 40px rgba(245, 124, 0, 0.3)' : 'none',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                background: hoveredCard === 2 ? 'rgba(255,255,255,0.2)' : '#e6f7f6',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: hoveredCard === 2 ? '#fff' : '#0d9488',
                transition: 'all 0.4s ease',
              }}
            >
              {services[2].icon}
            </div>
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: '700',
                color: hoveredCard === 2 ? '#fff' : '#1a1a1a',
                marginBottom: '1rem',
                transition: 'all 0.4s ease',
              }}
            >
              {services[2].title}
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: hoveredCard === 2 ? 'rgba(255,255,255,0.9)' : '#6b7280',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                flex: 1,
                transition: 'all 0.4s ease',
              }}
            >
              {services[2].description}
            </p>
            <Link
              href={services[2].link}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: hoveredCard === 2 ? '#fff' : '#0d9488',
                fontSize: '0.95rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.4s ease',
              }}
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
            style={{
              background: hoveredCard === 3 ? 'linear-gradient(135deg, #f5a623 0%, #f57c00 100%)' : '#fff',
              borderRadius: '20px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              transform: isVisible ? (hoveredCard === 3 ? 'translateY(-10px)' : 'translateY(0)') : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              boxShadow: hoveredCard === 3 ? '0 20px 40px rgba(245, 124, 0, 0.3)' : 'none',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                background: hoveredCard === 3 ? 'rgba(255,255,255,0.2)' : '#e6f7f6',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: hoveredCard === 3 ? '#fff' : '#0d9488',
                transition: 'all 0.4s ease',
              }}
            >
              {services[3].icon}
            </div>
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: '700',
                color: hoveredCard === 3 ? '#fff' : '#1a1a1a',
                marginBottom: '1rem',
                transition: 'all 0.4s ease',
              }}
            >
              {services[3].title}
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: hoveredCard === 3 ? 'rgba(255,255,255,0.9)' : '#6b7280',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                flex: 1,
                transition: 'all 0.4s ease',
              }}
            >
              {services[3].description}
            </p>
            <Link
              href={services[3].link}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: hoveredCard === 3 ? '#fff' : '#0d9488',
                fontSize: '0.95rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.4s ease',
              }}
            >
              Read More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Contact CTA Card */}
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              minHeight: '280px',
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.6s ease 0.5s',
            }}
          >
            <Image
              src="/img/what-we-do-image-1.jpg"
              alt="Contact Us"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(13, 64, 67, 0.85) 0%, rgba(13, 64, 67, 0.75) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '2rem',
              }}
            >
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.8)',
                  marginBottom: '0.5rem',
                }}
              >
                Have You any question
              </p>
              <h3
                style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  color: '#fff',
                  lineHeight: '1.3',
                  marginBottom: '1.5rem',
                }}
              >
                Don&apos;t waste your
                <br />
                time call us!
              </h3>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
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
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.7)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    Call Us 24/7
                  </p>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#fff',
                    }}
                  >
                    98930 27688
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          section > div > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          section > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
