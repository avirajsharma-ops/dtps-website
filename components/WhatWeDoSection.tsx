"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function WhatWeDoSection() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIconColor = (index: number) => hoveredFeature === index ? '#fff' : '#0d9488';

  const features = [
    {
      title: 'Stress reduction techniques',
      description: 'Receive personalized nutrition guidance to create balanced, sustainable eating.',
    },
    {
      title: 'Goal-oriented wellness plan',
      description: 'Receive personalized nutrition guidance to create balanced, sustainable eating.',
    },
    {
      title: 'Weight loss strategies',
      description: 'Receive personalized nutrition guidance to create balanced, sustainable eating.',
    },
  ];

  const renderIcon = (index: number) => {
    const color = getIconColor(index);
    switch(index) {
      case 0:
        return (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="6" y="4" width="16" height="20" rx="2" stroke={color} strokeWidth="2" />
            <line x1="10" y1="9" x2="18" y2="9" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="13" x2="18" y2="13" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="17" x2="14" y2="17" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 1:
        return (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M6 10H22M6 14H22M10 18H18" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 2:
        return (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="6" y="6" width="16" height="16" rx="2" stroke={color} strokeWidth="2" />
            <path d="M10 12H18M10 16H14" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <path d="M18 10V6M10 10V6" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#fff',
        padding: '5rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr 1fr',
          gap: '2.5rem',
          alignItems: 'start',
        }}
      >
        {/* Left Image */}
        <div
          style={{
            position: 'relative',
            height: '480px',
            borderRadius: '20px',
            overflow: 'hidden',
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.7s ease',
          }}
        >
          <Image
            src="/img/what-we-do-image-1.jpg"
            alt="Woman preparing healthy drinks"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Middle Content */}
        <div
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.7s ease 0.2s',
          }}
        >
          {/* Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.75rem',
            }}
          >
            <span style={{ color: '#f5a623', fontSize: '1.1rem' }}>✦</span>
            <span
              style={{
                color: '#f5a623',
                fontSize: '1rem',
                fontWeight: '600',
              }}
            >
              What We Do
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1a1a1a',
              lineHeight: '1.2',
              marginBottom: '2rem',
            }}
          >
            Guiding your
            <br />
            health wellness
          </h2>

          {/* Features List */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.5s ease ${0.3 + index * 0.1}s`,
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    background: hoveredFeature === index ? '#f5a623' : '#e6f7f6',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                    transform: hoveredFeature === index ? 'scale(1.1)' : 'scale(1)',
                  }}
                >
                  {renderIcon(index)}
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: '#1a1a1a',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#6b7280',
                      lineHeight: '1.6',
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.7s ease 0.3s',
          }}
        >
          {/* Top Text & Button */}
          <div>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#6b7280',
                lineHeight: '1.7',
                marginBottom: '1rem',
              }}
            >
              Empowering you to achieve optimal health and wellness with{' '}
              <span
                style={{
                  border: '1px solid #f5a623',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '4px',
                }}
              >
                personalized
              </span>{' '}
              coaching, support.
            </p>
            <Link href="/contact">
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
                Contact Us
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div
            style={{
              position: 'relative',
              height: '340px',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/img/what-we-do-image-2.jpg"
              alt="Woman with healthy food"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          section > div {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
