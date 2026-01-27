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
      style={{
        background: '#0d4043',
        padding: '4rem 2rem 0 2rem',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div
            style={{
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.6s ease',
            }}
          >
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
                Why Choose Us
              </span>
            </div>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#fff',
                lineHeight: '1.2',
              }}
            >
              Your partner in lasting
              <br />
              wellness
            </h2>
          </div>

          <p
            style={{
              maxWidth: '450px',
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: '1.7',
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.6s ease 0.1s',
            }}
          >
            With a personalized approach and unwavering support, we guide you toward sustainable health and lasting well-being. Trust us to help you achieve your wellness goals.
          </p>
        </div>

        {/* Features with Center Image */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem',
            alignItems: 'end',
          }}
        >
          {/* Left Features */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              paddingBottom: '3rem',
            }}
          >
            {leftFeatures.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(`left-${index}`)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{
                  transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease ${0.2 + index * 0.1}s`,
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: hoveredFeature === `left-${index}` ? '#f5a623' : 'rgba(255,255,255,0.1)',
                    border: hoveredFeature === `left-${index}` ? 'none' : '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    transition: 'all 0.3s ease',
                    transform: hoveredFeature === `left-${index}` ? 'scale(1.1)' : 'scale(1)',
                  }}
                >
                  {feature.icon}
                </div>
                <h4
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: '700',
                    color: '#fff',
                    marginBottom: '0.5rem',
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: '1.6',
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease 0.3s',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '320px',
                height: '420px',
              }}
            >
              <Image
                src="/img/why-choose-image.png"
                alt="Health Expert"
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
              />
            </div>
          </div>

          {/* Right Features */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              paddingBottom: '3rem',
            }}
          >
            {rightFeatures.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(`right-${index}`)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{
                  transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease ${0.2 + index * 0.1}s`,
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: hoveredFeature === `right-${index}` ? '#f5a623' : 'rgba(255,255,255,0.1)',
                    border: hoveredFeature === `right-${index}` ? 'none' : '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    transition: 'all 0.3s ease',
                    transform: hoveredFeature === `right-${index}` ? 'scale(1.1)' : 'scale(1)',
                  }}
                >
                  {feature.icon}
                </div>
                <h4
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: '700',
                    color: '#fff',
                    marginBottom: '0.5rem',
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: '1.6',
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          section > div > div:last-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          section > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
