"use client";
import Image from 'next/image';
import Link from 'next/link';
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

  const features = [
    'Holistic Health Approach',
    'One-on-One Coaching',
    'Sustainable Life Strategies',
    'Nutrition and Meal Guidance',
  ];

  return (
    <section
      ref={sectionRef}
      className="about-us-section"
      style={{
        background: '#fff',
        padding: '5rem 2rem',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '4rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {/* Left Side - Images */}
        <div
          style={{
            position: 'relative',
            minWidth: '320px',
            maxWidth: '550px',
            flex: '1',
            height: '500px',
          }}
        >
          {/* Main Image - Woman eating salad */}
          <div
            style={{
              position: 'absolute',
              left: '0',
              top: '0',
              width: '280px',
              height: '360px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              transform: isVisible ? 'translateY(0) rotate(-3deg)' : 'translateY(50px) rotate(-3deg)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 2,
            }}
          >
            <Image
              src="/img/what-we-do-image-1.jpg"
              alt="Woman enjoying healthy food"
              fill
              style={{ objectFit: 'cover' }}
            />
            {/* Decorative dots */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                width: '12px',
                height: '12px',
                background: '#f5a623',
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '8px',
                height: '8px',
                background: '#f5a623',
                borderRadius: '50%',
              }}
            />
          </div>

          {/* Second Image - Woman with vegetables */}
          <div
            style={{
              position: 'absolute',
              right: '0',
              top: '30px',
              width: '240px',
              height: '300px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              transform: isVisible ? 'translateY(0) rotate(3deg)' : 'translateY(50px) rotate(3deg)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              zIndex: 3,
              border: '4px solid #fff',
            }}
          >
            <Image
              src="/img/what-we-do-image-2.jpg"
              alt="Woman with healthy vegetables"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Decorative Dashed Arrow */}
          <svg
            style={{
              position: 'absolute',
              right: '80px',
              bottom: '120px',
              width: '80px',
              height: '80px',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease 0.6s',
              zIndex: 4,
            }}
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              d="M40 5 C60 5, 70 20, 70 40 C70 60, 55 75, 40 75"
              stroke="#333"
              strokeWidth="2"
              strokeDasharray="6 4"
              fill="none"
            />
            <path
              d="M35 68 L40 78 L48 72"
              stroke="#333"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* Years Badge */}
          <div
            style={{
              position: 'absolute',
              right: '40px',
              bottom: '20px',
              background: 'linear-gradient(135deg, #f5a623 0%, #f57c00 100%)',
              borderRadius: '16px',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 10px 30px rgba(245, 124, 0, 0.4)',
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.8)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
              zIndex: 5,
            }}
          >
            <span
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#fff',
                lineHeight: '1',
              }}
            >
              25
            </span>
            <span
              style={{
                fontSize: '0.9rem',
                fontWeight: '500',
                color: '#fff',
                lineHeight: '1.3',
              }}
            >
              Years of
              <br />
              experience
            </span>
          </div>
        </div>

        {/* Right Side - Content */}
        <div
          style={{
            flex: '1',
            minWidth: '320px',
            maxWidth: '520px',
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
          }}
        >
          {/* Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
            }}
          >
            <span style={{ color: '#f5a623', fontSize: '1.2rem' }}>✦</span>
            <span
              style={{
                color: '#f5a623',
                fontSize: '1rem',
                fontWeight: '600',
                letterSpacing: '0.5px',
              }}
            >
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: '2.8rem',
              fontWeight: '700',
              color: '#1a1a1a',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
            }}
          >
            Your wellness journey
            <br />
            starts here
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: '1rem',
              color: '#666',
              lineHeight: '1.8',
              marginBottom: '2rem',
            }}
          >
            25+ years of expertise guiding over 15,000+ clients to their health goals.
            Whether it&apos;s weight loss, PCOD management, disease prevention, or lifestyle
            optimization, we create customized plans that fit your life, not the other way around.
          </p>

          {/* Features Box */}
          <div
            style={{
              background: 'linear-gradient(135deg, #f0faf9 0%, #e8f7f6 100%)',
              border: '1px solid #b8e6e3',
              borderRadius: '16px',
              padding: '1.5rem 2rem',
              marginBottom: '2rem',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.5s ease ${0.5 + index * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#0d9488',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 7L6 10L11 4"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: '0.95rem',
                      color: '#333',
                      fontWeight: '500',
                    }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/about">
            <button
              style={{
                background: 'linear-gradient(135deg, #f5a623 0%, #f57c00 100%)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: '600',
                padding: '1rem 2rem',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(245, 124, 0, 0.35)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(245, 124, 0, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 124, 0, 0.35)';
              }}
            >
              More About Us
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-us-section > div {
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
