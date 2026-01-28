"use client"
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutUsSection from '@/components/AboutUsSection';
import ServicesSection from '@/components/ServicesSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import FAQSection from '@/components/FAQSection';
import Image from 'next/image';
import { getOptimizedUrl } from '@/lib/imagekit';


type Testimonial = {
  _id?: string;
  name: string;
  role?: string;
  content: string;
  image: string;
};

const fallbackTestimonials: Testimonial[] = [
  {
    name: 'Kalyani Satpathy',
    content: 'The diet plan is very simple and it included home cooked meal. Nothing fancy they will tell you and this is the best part of my journey.',
    image: '/assets/img/testimonial-1.jpg',
  },
  {
    name: 'Farah',
    content: 'I saw ad of Dt Poonam Sagar on Instagram and thought to give it a try and I dont regret my decision.',
    image: '/assets/img/testimonial-2.jpg',
  },
  {
    name: 'Rimpy Thakur',
    content: "Great experience with Dietician Poonam Sagar's team. Special thanks to Ritika Bhatnagar ma'am who created a special diet plan for me",
    image: '/assets/img/testimonial-3.jpg',
  },
  {
    name: 'Payal Padamwar',
    content: 'I lost 6 kg in just 3 months with a simple yet highly effective diet plan. The best part was the team\'s support.',
    image: '/assets/img/testimonial-1.jpg',
  },
];

export default function HomePage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials?page=home&active=true');
        if (!res.ok) throw new Error('Failed to fetch testimonials');
        const data = await res.json();
        const normalized = (data.testimonials || []).map((item: Testimonial & { _id?: string }) => ({
          _id: item._id,
          name: item.name || 'Client',
          role: item.role || '',
          content: item.content || '',
          image: getOptimizedUrl(item.image || '/assets/img/testimonial-1.jpg', {
            width: 300,
            height: 350,
            quality: 80,
            format: 'auto',
          }),
        }));
        if (normalized.length > 0) {
          setTestimonials(normalized);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);
  return (
    <>
      <Hero />
      <AboutUsSection />
      <ServicesSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      {/* About Section */}
      {/* ...existing code... */}
      {/* Services Section */}
      {/* ...existing code... */}
      {/* What We Do Section */}
      {/* ...existing code... */}
      {/* Why Choose Us Section */}
      {/* ...existing code... */}
      {/* Expert Guidance Section */}
      <section className="expert-guidance-section" style={{ background: '#fff', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ color: '#ff9100', fontSize: '1.2rem' }}>✦</span>
              <span style={{ color: '#009688', fontWeight: 600, fontSize: '1rem' }}>Expert Guidance</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#222', lineHeight: 1.2 }}>
              You are under Expert&apos;s Guidance
            </h2>
            <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '0.5rem' }}>
              Meet our award Winning Dietitian
            </p>
          </div>
          
          {/* Expert Content */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {/* Left - Vertical SAGAR Text */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
              {'SAGAR'.split('').map((letter, i) => (
                <span key={i} style={{ 
                  fontWeight: 800, 
                  fontSize: '2.5rem', 
                  color: '#0b4c4c',
                  lineHeight: 1,
                  letterSpacing: '2px'
                }}>{letter}</span>
              ))}
            </div>
            
            {/* Center - Image with decoration */}
            <div style={{ position: 'relative' }}>
              <Image
                src="/img/Group-319-2-1.webp"
                alt="Dietitian Poonam Sagar"
                width={320}
                height={400}
                style={{ borderRadius: '20px', objectFit: 'cover' }}
              />
              {/* Decorative circles */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                width: '60px',
                height: '60px',
                border: '2px dashed #009688',
                borderRadius: '50%',
                animation: 'spin 10s linear infinite'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '-10px',
                width: '40px',
                height: '40px',
                background: '#ff9100',
                borderRadius: '50%',
                opacity: 0.8
              }} />
            </div>
            
            {/* Right - Description Card */}
            <div style={{ 
              maxWidth: '400px', 
              background: '#0b4c4c', 
              borderRadius: '20px', 
              padding: '2rem',
              color: '#fff',
              position: 'relative'
            }}>
              <div style={{ 
                position: 'absolute',
                top: '-20px',
                left: '20px',
                background: '#ff9100',
                color: '#fff',
                fontWeight: 700,
                borderRadius: '8px',
                padding: '0.5rem 1rem',
                fontSize: '0.85rem'
              }}>
                25+ Years Experience
              </div>
              <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '0.5rem', marginTop: '1rem' }}>
                Dt. Poonam Sagar
              </h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '1rem' }}>
                Award Winning Dietitian
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.95 }}>
                Dt. Poonam Sagar has 25+ years dietary and clinical expertise. That&apos;s why we are trusted by 15,000+ clients for their health and nutrition goals. Her approach is rooted in evidence-based nutrition, personalized care, and a passion for helping people achieve lasting results.
              </p>
              {/* Stats */}
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#ff9100' }}>15K+</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Happy Clients</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#ff9100' }}>25+</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Video Section */}
      <section style={{ 
        background: 'url("/img/what-we-do-image-1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 2rem',
        position: 'relative',
        minHeight: '600px'
      }}>
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(11, 76, 76, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)'
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem' }}>
            {/* Left content */}
            <div style={{ maxWidth: '500px', color: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ color: '#ff9100', fontSize: '1.2rem' }}>✦</span>
                <span style={{ color: '#ff9100', fontWeight: 600, fontSize: '1rem' }}>Our Video</span>
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                Lives through wellness<br />video stories
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem', opacity: 0.9 }}>
                Explore inspiring stories of transformation and growth through our wellness videos, showcasing real journeys toward healthier, happier lives.
              </p>
              <button style={{ 
                background: '#ff9100', 
                color: '#fff', 
                fontWeight: 600, 
                fontSize: '1rem', 
                border: 'none', 
                borderRadius: '2rem', 
                padding: '1rem 2.5rem', 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(255, 145, 0, 0.4)'
              }}>
                Explore More
              </button>
            </div>
            
            {/* Right - Play button with rotating text */}
            <div style={{ position: 'relative', width: '200px', height: '200px' }}>
              {/* Center play button */}
              <div style={{ 
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px', 
                height: '80px', 
                background: '#ff9100', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 30px rgba(255,145,0,0.5)',
                zIndex: 2
              }}>
                <div style={{ 
                  width: 0, 
                  height: 0, 
                  borderLeft: '22px solid #fff', 
                  borderTop: '14px solid transparent', 
                  borderBottom: '14px solid transparent',
                  marginLeft: '6px'
                }} />
              </div>
              
              {/* Rotating circular text */}
              <svg style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '200px',
                height: '200px',
                animation: 'spin 15s linear infinite'
              }} viewBox="0 0 200 200">
                <defs>
                  <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text fill="#fff" fontSize="12" fontWeight="500" letterSpacing="3">
                  <textPath href="#circlePath">
                    • WATCH VIDEO • TRANSFORMATION • SUCCESS STORIES • WELLNESS JOURNEY 
                  </textPath>
                </text>
              </svg>
              
              {/* Dashed circle border */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '170px',
                height: '170px',
                border: '2px dashed rgba(255,255,255,0.3)',
                borderRadius: '50%'
              }} />
            </div>
          </div>
          
          {/* Stats Bar */}
          <div style={{ 
            marginTop: '4rem', 
            display: 'flex', 
            justifyContent: 'space-between', 
            flexWrap: 'wrap',
            gap: '2rem',
            padding: '2rem',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ textAlign: 'center', color: '#fff', flex: 1, minWidth: '150px' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700 }}>25<span style={{ color: '#ff9100' }}>+</span></div>
              <div style={{ fontSize: '0.95rem', opacity: 0.9 }}>Year of experience</div>
            </div>
            <div style={{ textAlign: 'center', color: '#fff', flex: 1, minWidth: '150px' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700 }}>260<span style={{ color: '#ff9100' }}>+</span></div>
              <div style={{ fontSize: '0.95rem', opacity: 0.9 }}>Hours of coaching</div>
            </div>
            <div style={{ textAlign: 'center', color: '#fff', flex: 1, minWidth: '150px' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700 }}>550<span style={{ color: '#ff9100' }}>+</span></div>
              <div style={{ fontSize: '0.95rem', opacity: 0.9 }}>Complete courses</div>
            </div>
            <div style={{ textAlign: 'center', color: '#fff', flex: 1, minWidth: '150px' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700 }}>20K<span style={{ color: '#ff9100' }}>+</span></div>
              <div style={{ fontSize: '0.95rem', opacity: 0.9 }}>Happy customer</div>
            </div>
            <div style={{ textAlign: 'center', color: '#fff', flex: 1, minWidth: '150px' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700 }}>359<span style={{ color: '#ff9100' }}>+</span></div>
              <div style={{ fontSize: '0.95rem', opacity: 0.9 }}>Awards win</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#ff9100', fontSize: '1.2rem' }}>✦</span>
                <span style={{ color: '#009688', fontWeight: 600, fontSize: '1rem' }}>Our Programs</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#222', lineHeight: 1.2 }}>
                Tailored programs for<br />your wellness
              </h2>
            </div>
            <button style={{ 
              background: '#ff9100', 
              color: '#fff', 
              fontWeight: 600, 
              fontSize: '1rem', 
              border: 'none', 
              borderRadius: '2rem', 
              padding: '0.8rem 2rem', 
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              All Programs
            </button>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Program Card 1 - Using Garima-Mam.jpeg */}
            <div style={{ 
              background: '#222', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              width: '360px', 
              height: '450px',
              position: 'relative',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <img src="/img/Garima-Mam.jpeg" alt="Weight Management Program" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ 
                position: 'absolute', 
                left: 0, 
                bottom: 0, 
                width: '100%', 
                padding: '1.5rem', 
                background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)',
                color: '#fff'
              }}>
                <div style={{ 
                  display: 'inline-block', 
                  background: '#ff9100', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: '20px', 
                  fontSize: '0.75rem', 
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>
                  WEIGHT LOSS
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Weight Management<br />Program</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>Customized diet plans for effective and sustainable weight loss results.</p>
              </div>
            </div>
            
            {/* Program Card 2 - Using Shivani.jpeg */}
            <div style={{ 
              background: '#222', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              width: '360px', 
              height: '450px',
              position: 'relative',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <img src="/img/Shivani.jpeg" alt="PCOD/PCOS Program" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ 
                position: 'absolute', 
                left: 0, 
                bottom: 0, 
                width: '100%', 
                padding: '1.5rem', 
                background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)',
                color: '#fff'
              }}>
                <div style={{ 
                  display: 'inline-block', 
                  background: '#009688', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: '20px', 
                  fontSize: '0.75rem', 
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>
                  PCOD/PCOS
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>PCOD/PCOS<br />Management</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>Specialized nutrition programs for hormonal balance and PCOD management.</p>
              </div>
            </div>
            
            {/* Program Card 3 - Using Anshu-Jain.jpeg */}
            <div style={{ 
              background: '#222', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              width: '360px', 
              height: '450px',
              position: 'relative',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <img src="/img/Anshu-Jain.jpeg" alt="Therapeutic Diet Program" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ 
                position: 'absolute', 
                left: 0, 
                bottom: 0, 
                width: '100%', 
                padding: '1.5rem', 
                background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)',
                color: '#fff'
              }}>
                <div style={{ 
                  display: 'inline-block', 
                  background: '#0b4c4c', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: '20px', 
                  fontSize: '0.75rem', 
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>
                  THERAPEUTIC
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Therapeutic Diet<br />Program</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>Medical nutrition therapy for diabetes, thyroid, and other health conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Work Section */}
      <section style={{ background: '#0b4c4c', padding: '5rem 2rem', borderRadius: '40px 40px 0 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#ff9100', fontSize: '1.2rem' }}>✦</span>
                <span style={{ color: '#ff9100', fontWeight: 600, fontSize: '1rem' }}>How It Work</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                Step-by-step guide to<br />better health
              </h2>
            </div>
            <p style={{ maxWidth: '500px', color: '#fff', opacity: 0.9, fontSize: '1rem', lineHeight: 1.7 }}>
              Achieving your health goals has never been easier. Our step-by-step approach provides personalized guidance, actionable strategies, and ongoing support.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            {/* Step 1 */}
            <div style={{ textAlign: 'center', flex: '1', minWidth: '200px' }}>
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  border: '2px solid rgba(255,255,255,0.3)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                    <circle cx="12" cy="5" r="3" />
                    <line x1="12" y1="8" x2="12" y2="14" />
                    <line x1="12" y1="14" x2="6" y2="20" />
                    <line x1="12" y1="14" x2="18" y2="20" />
                    <circle cx="6" cy="20" r="2" />
                    <circle cx="18" cy="20" r="2" />
                  </svg>
                </div>
                <div style={{ 
                  position: 'absolute', 
                  top: '-5px', 
                  right: '-5px', 
                  background: '#ff9100', 
                  color: '#fff', 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  fontSize: '0.8rem', 
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>1</div>
              </div>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Custom Coaching Plan</h3>
              <p style={{ color: '#fff', opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.6 }}>Begin with a comprehensive health assessment to understand.</p>
            </div>
            {/* Step 2 */}
            <div style={{ textAlign: 'center', flex: '1', minWidth: '200px' }}>
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  border: '2px solid rgba(255,255,255,0.3)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="4" />
                    <circle cx="6" cy="16" r="3" />
                    <circle cx="18" cy="16" r="3" />
                    <line x1="9" y1="11" x2="7" y2="13" />
                    <line x1="15" y1="11" x2="17" y2="13" />
                  </svg>
                </div>
                <div style={{ 
                  position: 'absolute', 
                  top: '-5px', 
                  right: '-5px', 
                  background: '#ff9100', 
                  color: '#fff', 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  fontSize: '0.8rem', 
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>2</div>
              </div>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ongoing Support</h3>
              <p style={{ color: '#fff', opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.6 }}>Begin with a comprehensive health assessment to understand.</p>
            </div>
            {/* Step 3 */}
            <div style={{ textAlign: 'center', flex: '1', minWidth: '200px' }}>
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  border: '2px solid rgba(255,255,255,0.3)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <div style={{ 
                  position: 'absolute', 
                  top: '-5px', 
                  right: '-5px', 
                  background: '#ff9100', 
                  color: '#fff', 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  fontSize: '0.8rem', 
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>3</div>
              </div>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Practical Tools</h3>
              <p style={{ color: '#fff', opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.6 }}>Begin with a comprehensive health assessment to understand.</p>
            </div>
            {/* Step 4 */}
            <div style={{ textAlign: 'center', flex: '1', minWidth: '200px' }}>
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  border: '2px solid rgba(255,255,255,0.3)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                    <circle cx="12" cy="6" r="2" />
                    <circle cx="6" cy="12" r="2" />
                    <circle cx="18" cy="12" r="2" />
                    <circle cx="12" cy="18" r="2" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <div style={{ 
                  position: 'absolute', 
                  top: '-5px', 
                  right: '-5px', 
                  background: '#ff9100', 
                  color: '#fff', 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  fontSize: '0.8rem', 
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>4</div>
              </div>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Flexible Engagement</h3>
              <p style={{ color: '#fff', opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.6 }}>Begin with a comprehensive health assessment to understand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section style={{ background: '#0b4c4c', padding: '0 2rem 5rem' }}>
        <div style={{ 
          maxWidth: '1100px', 
          margin: '0 auto', 
          background: '#fff', 
          borderRadius: '30px', 
          padding: '3rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#ff9100', fontSize: '1.2rem' }}>✦</span>
                <span style={{ color: '#009688', fontWeight: 600, fontSize: '1rem' }}>Appointment</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#222', lineHeight: 1.2, marginBottom: '1rem' }}>
                Make appointment
              </h2>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Easy scheduling for a personalized health coaching session. Take the first step towards better health today!
              </p>
              <Image 
                src="/assets/img/appointment-img.jpg" 
                alt="Healthy food" 
                width={400} 
                height={300}
                style={{ borderRadius: '16px', objectFit: 'cover', width: '100%', maxWidth: '400px' }}
              />
            </div>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    style={{ 
                      flex: 1, 
                      minWidth: '140px',
                      padding: '1rem', 
                      border: '1px solid #ddd', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      outline: 'none'
                    }} 
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    style={{ 
                      flex: 1, 
                      minWidth: '140px',
                      padding: '1rem', 
                      border: '1px solid #ddd', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      outline: 'none'
                    }} 
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  style={{ 
                    padding: '1rem', 
                    border: '1px solid #ddd', 
                    borderRadius: '8px', 
                    fontSize: '1rem',
                    outline: 'none'
                  }} 
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  style={{ 
                    padding: '1rem', 
                    border: '1px solid #ddd', 
                    borderRadius: '8px', 
                    fontSize: '1rem',
                    outline: 'none'
                  }} 
                />
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <select 
                    style={{ 
                      flex: 1, 
                      minWidth: '140px',
                      padding: '1rem', 
                      border: '1px solid #ddd', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      outline: 'none',
                      background: '#fff',
                      color: '#666'
                    }}
                  >
                    <option>Service</option>
                    <option>Weight Management</option>
                    <option>PCOD/PCOS</option>
                    <option>Therapeutic Diet</option>
                    <option>Wedding Program</option>
                  </select>
                  <input 
                    type="date" 
                    placeholder="dd-mm-yyyy"
                    style={{ 
                      flex: 1, 
                      minWidth: '140px',
                      padding: '1rem', 
                      border: '1px solid #ddd', 
                      borderRadius: '8px', 
                      fontSize: '1rem',
                      outline: 'none',
                      color: '#666'
                    }} 
                  />
                </div>
                <button 
                  type="submit"
                  style={{ 
                    background: '#ff9100', 
                    color: '#fff', 
                    fontWeight: 600, 
                    fontSize: '1rem', 
                    border: 'none', 
                    borderRadius: '2rem', 
                    padding: '1rem 2rem', 
                    cursor: 'pointer',
                    marginTop: '0.5rem'
                  }}
                >
                  Book An Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <section style={{ background: '#fff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ color: '#ff9100', fontSize: '1.2rem' }}>✦</span>
              <span style={{ color: '#009688', fontWeight: 600, fontSize: '1rem' }}>Our Testimonials</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#222', lineHeight: 1.2 }}>
              Success stories from our clients
            </h2>
          </div>
          
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {/* Left - Testimonial Cards */}
            <div style={{ flex: '1', minWidth: '400px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <div 
                    key={testimonial._id || index}
                    style={{ 
                      background: index === 1 ? '#ff9100' : '#fff', 
                      borderRadius: '20px', 
                      padding: '1.5rem',
                      boxShadow: index === 1 ? '0 10px 30px rgba(255, 145, 0, 0.3)' : '0 5px 20px rgba(0,0,0,0.08)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => { 
                      e.currentTarget.style.transform = 'translateY(-5px)'; 
                      e.currentTarget.style.boxShadow = index === 1 ? '0 15px 40px rgba(255, 145, 0, 0.4)' : '0 10px 30px rgba(0,0,0,0.12)';
                    }}
                    onMouseOut={(e) => { 
                      e.currentTarget.style.transform = 'translateY(0)'; 
                      e.currentTarget.style.boxShadow = index === 1 ? '0 10px 30px rgba(255, 145, 0, 0.3)' : '0 5px 20px rgba(0,0,0,0.08)';
                    }}
                  >
                    <div style={{ 
                      color: index === 1 ? '#fff' : '#ff9100', 
                      marginBottom: '0.75rem',
                      fontSize: '1.1rem',
                      letterSpacing: '2px'
                    }}>★★★★★</div>
                    <p style={{ 
                      color: index === 1 ? '#fff' : '#555', 
                      fontSize: '0.95rem', 
                      lineHeight: 1.7, 
                      marginBottom: '1rem',
                      fontStyle: 'italic'
                    }}>
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem',
                      paddingTop: '0.75rem',
                      borderTop: index === 1 ? '1px solid rgba(255,255,255,0.2)' : '1px solid #eee'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: index === 1 ? 'rgba(255,255,255,0.2)' : '#009688',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '1rem'
                      }}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div style={{ fontWeight: 700, color: index === 1 ? '#fff' : '#222' }}>{testimonial.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Stats and Badge */}
            <div style={{ flex: '1', minWidth: '350px', position: 'relative', height: '450px' }}>
              {/* Main Stats Card */}
              <div style={{
                background: '#0b4c4c',
                borderRadius: '30px',
                padding: '3rem',
                color: '#fff',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Background decoration */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'rgba(255, 145, 0, 0.1)'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'rgba(0, 150, 136, 0.2)'
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ 
                    fontSize: '5rem', 
                    fontWeight: 800, 
                    lineHeight: 1,
                    marginBottom: '0.5rem'
                  }}>
                    15K<span style={{ color: '#ff9100' }}>+</span>
                  </div>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 600,
                    marginBottom: '1.5rem',
                    opacity: 0.9
                  }}>
                    Happy Clients
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'rgba(255,255,255,0.1)',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    width: 'fit-content'
                  }}>
                    <span style={{ color: '#ff9100', fontSize: '1.5rem' }}>★</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>4.9</span>
                    <span style={{ opacity: 0.8, fontSize: '0.9rem' }}>Average Rating</span>
                  </div>
                  
                  {/* Trust badges */}
                  <div style={{ 
                    display: 'flex', 
                    gap: '1rem', 
                    marginTop: '2rem',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{
                      background: '#ff9100',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 600
                    }}>
                      ✓ Verified Reviews
                    </div>
                    <div style={{
                      background: 'rgba(255,255,255,0.15)',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 600
                    }}>
                      ✓ 25+ Years Trust
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
// Removed local fallback implementations of useState/useEffect — using React's useState and useEffect imported above.
