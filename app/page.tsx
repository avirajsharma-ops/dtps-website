"use client"
import Hero from '@/components/Hero';
import AboutUsSection from '@/components/AboutUsSection';
import ServicesSection from '@/components/ServicesSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
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
      <section className="expert-guidance-section" style={{ background: '#fff', padding: '0 0 3rem 0', display: 'flex', justifyContent: 'center' }}>
        <div style={{ borderRadius: '20px', maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '4rem 3rem 4rem 3rem', background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', transform: 'scale(1.3)', transformOrigin: 'top center' }}>
          <div style={{ color: '#222', textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '0.5rem' }}>
              You are under Expert’s Guidance
            </div>
            <div style={{ fontWeight: 400, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Meet our award Winning Dietitian
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* ...existing code for expert guidance content... */}
            <div style={{ minWidth: 220, textAlign: 'center', background: '#fff', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '1rem' }}>
              <Image
                src="/assets/img/D-I-E-T-I-C-I-AN.png"
                alt="Dietitian Poonam Sagar"
                width={220}
                height={300}
                style={{ borderRadius: '16px', objectFit: 'cover', marginBottom: '0.5rem' }}
              />
              <div style={{ background: '#0b4c4c', color: '#fff', fontWeight: 700, borderRadius: '8px', padding: '0.25rem 0.75rem', display: 'inline-block', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                An Award winning Dietitian
              </div>
            </div>
            <div style={{ color: '#222', maxWidth: 400, textAlign: 'left', background: '#fff', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '1rem' }}>
              <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem', letterSpacing: '0.5px', color: '#0b4c4c' }}>
                Dt. Poonam Sagar
              </div>
              <div style={{ fontWeight: 400, fontSize: '1rem', lineHeight: 1.6 }}>
                Dt. Poonam Sagar has 25+ years dietary and clinical expertise. That’s why we are trusted by 15,000+ clients for their health and nutrition goals. Her approach is rooted in evidence-based nutrition, personalized care, and a passion for helping people achieve lasting results. You are always in expert hands, receiving a combination of compassion, knowledge, and motivation to create a healthier you.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Video Section */}
      <section style={{ 
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/img/video-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 2rem',
        position: 'relative',
        minHeight: '500px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ maxWidth: '500px', color: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ color: '#ff9100', fontSize: '1.2rem' }}>✦</span>
              <span style={{ color: '#ff9100', fontWeight: 600, fontSize: '1rem' }}>Our Video</span>
            </div>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Lives through wellness<br />video stories
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem', opacity: 0.9 }}>
              Explore inspiring stories of transformation and growth through our wellness videos, showcasing real journeys toward healthier, happier lives.
            </p>
            <button style={{ 
              background: '#ff9100', 
              color: '#fff', 
              fontWeight: 600, 
              fontSize: '1rem', 
              border: 'none', 
              borderRadius: '2rem', 
              padding: '0.9rem 2rem', 
              cursor: 'pointer' 
            }}>
              Explore More
            </button>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              background: '#ff9100', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(255,145,0,0.4)'
            }}>
              <div style={{ 
                width: 0, 
                height: 0, 
                borderLeft: '20px solid #fff', 
                borderTop: '12px solid transparent', 
                borderBottom: '12px solid transparent',
                marginLeft: '5px'
              }}></div>
            </div>
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              width: '150px',
              height: '150px',
              border: '1px dashed rgba(255,255,255,0.3)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'spin 20s linear infinite'
            }}>
              <span style={{ 
                position: 'absolute',
                fontSize: '0.7rem',
                color: '#fff',
                whiteSpace: 'nowrap',
                letterSpacing: '2px'
              }}>
              </span>
            </div>
          </div>
        </div>
        {/* Stats Bar */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '3rem auto 0', 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{ textAlign: 'center', color: '#fff' }}>
            <div style={{ fontSize: '3rem', fontWeight: 700 }}>25+</div>
            <div style={{ fontSize: '0.95rem', opacity: 0.9 }}>Year of experience</div>
          </div>
          <div style={{ textAlign: 'center', color: '#fff' }}>
            <div style={{ fontSize: '3rem', fontWeight: 700 }}>260<span style={{ color: '#ff9100' }}>+</span></div>
            <div style={{ fontSize: '0.95rem', opacity: 0.9 }}>Hours of coaching</div>
          </div>
          <div style={{ textAlign: 'center', color: '#fff' }}>
            <div style={{ fontSize: '3rem', fontWeight: 700 }}>550+</div>
            <div style={{ fontSize: '0.95rem', opacity: 0.9 }}>Complete courses</div>
          </div>
          <div style={{ textAlign: 'center', color: '#fff' }}>
            <div style={{ fontSize: '3rem', fontWeight: 700 }}>20K+</div>
            <div style={{ fontSize: '0.95rem', opacity: 0.9 }}>Happy customer</div>
          </div>
          <div style={{ textAlign: 'center', color: '#fff' }}>
            <div style={{ fontSize: '3rem', fontWeight: 700 }}>359+</div>
            <div style={{ fontSize: '0.95rem', opacity: 0.9 }}>Awards win</div>
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
              cursor: 'pointer' 
            }}>
              All Programs
            </button>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Program Card 1 */}
            <div style={{ 
              background: '#222', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              width: '360px', 
              height: '450px',
              position: 'relative',
              cursor: 'pointer',
              transition: 'transform 0.3s'
            }}>
              <img src="/assets/img/program-1.jpg" alt="Weight Management Program" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ 
                position: 'absolute', 
                left: 0, 
                bottom: 0, 
                width: '100%', 
                padding: '1.5rem', 
                background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                color: '#fff'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Weight Management<br />Program</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>DAINIK BHASKAR WOMEN ENTREPRENEUR AWARD<br /><span style={{ opacity: 0.7 }}>Former IPS Smt. Kiran Bedi Awarded Dietician Poonam Sagar</span></p>
              </div>
            </div>
            {/* Program Card 2 */}
            <div style={{ 
              background: '#222', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              width: '360px', 
              height: '450px',
              position: 'relative',
              cursor: 'pointer',
              transition: 'transform 0.3s'
            }}>
              <img src="/assets/img/program-2.jpg" alt="Stress Reduction & Mindfulness" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ 
                position: 'absolute', 
                left: 0, 
                bottom: 0, 
                width: '100%', 
                padding: '1.5rem', 
                background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                color: '#fff'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Stress Reduction &<br />Mindfulness</h3>
                <button style={{ 
                  background: '#ff9100', 
                  color: '#fff', 
                  fontWeight: 600, 
                  fontSize: '0.9rem', 
                  border: 'none', 
                  borderRadius: '2rem', 
                  padding: '0.6rem 1.5rem', 
                  cursor: 'pointer',
                  marginTop: '0.5rem'
                }}>
                  Read More
                </button>
                <p style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '0.5rem' }}>NEWS 18 NARAYANI NAM<br /><span style={{ opacity: 0.7 }}>Leading Women Entrepreneur (Health & Nutrition) Dietician Poonam Sagar</span></p>
              </div>
            </div>
            {/* Program Card 3 */}
            <div style={{ 
              background: '#222', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              width: '360px', 
              height: '450px',
              position: 'relative',
              cursor: 'pointer',
              transition: 'transform 0.3s'
            }}>
              <img src="/assets/img/program-3.jpg" alt="Fitness And Movement Coaching" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ 
                position: 'absolute', 
                left: 0, 
                bottom: 0, 
                width: '100%', 
                padding: '1.5rem', 
                background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                color: '#fff'
              }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Fitness And Movement<br />Coaching</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>MID DAY ICONIC BUSINESS WOMAN (Health & Nutrition) AWARD<br /><span style={{ opacity: 0.7 }}>Actress Bhagyashree & Rishabh Sawhney Awarded Dietician Poonam Sagar</span></p>
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
      <section style={{ background: '#f5f7fa', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px', position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              <Image 
                src="/assets/img/faq-img-1.jpg" 
                alt="Healthy lifestyle" 
                width={350} 
                height={400}
                style={{ borderRadius: '16px', objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                top: '50%', 
                right: '-30px',
                width: '60px',
                height: '60px',
                border: '2px dashed #009688',
                borderRadius: '50%'
              }}></div>
            </div>
            <Image 
              src="/assets/img/faq-img-2.jpg" 
              alt="Diet consultation" 
              width={300} 
              height={250}
              style={{ 
                borderRadius: '16px', 
                objectFit: 'cover', 
                position: 'absolute', 
                bottom: '-50px', 
                right: '0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            />
            <div style={{ 
              position: 'absolute', 
              bottom: '0', 
              left: '0',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '5px'
            }}>
              {[...Array(9)].map((_, i) => (
                <span key={i} style={{ color: '#009688', fontSize: '0.6rem' }}>✦</span>
              ))}
            </div>
          </div>
          <div style={{ flex: '1', minWidth: '400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ color: '#ff9100', fontSize: '1.2rem' }}>✦</span>
              <span style={{ color: '#009688', fontWeight: 600, fontSize: '1rem' }}>Frequently Asked Questions</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#222', lineHeight: 1.2, marginBottom: '2rem' }}>
              Common Questions About<br />Our Diet Plans
            </h2>
            {/* FAQ Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ 
                background: '#fff', 
                borderRadius: '12px', 
                padding: '1.2rem 1.5rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, color: '#222' }}>What does Dt Poonam Sagar specialize in?</span>
                  <span style={{ color: '#ff9100', fontSize: '1.5rem', fontWeight: 300 }}>+</span>
                </div>
              </div>
              <div style={{ 
                background: '#ff9100', 
                borderRadius: '12px', 
                padding: '1.2rem 1.5rem',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontWeight: 600, color: '#fff' }}>How are the diet plans designed?</span>
                  <span style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 300 }}>−</span>
                </div>
                <p style={{ color: '#fff', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Every plan starts with a <strong>detailed assessment</strong> of your health goals, medical condition (if any), and dietary habits. Based on this, a tailored nutrition plan is created that fits your routine and helps you achieve sustainable results.
                </p>
              </div>
              <div style={{ 
                background: '#fff', 
                borderRadius: '12px', 
                padding: '1.2rem 1.5rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, color: '#222' }}>Is the nutrition plan difficult to follow?</span>
                  <span style={{ color: '#ff9100', fontSize: '1.5rem', fontWeight: 300 }}>+</span>
                </div>
              </div>
              <div style={{ 
                background: '#fff', 
                borderRadius: '12px', 
                padding: '1.2rem 1.5rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, color: '#222' }}>What results can I expect?</span>
                  <span style={{ color: '#ff9100', fontSize: '1.5rem', fontWeight: 300 }}>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ background: '#f5f7fa', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ color: '#ff9100', fontSize: '1.2rem' }}>✦</span>
              <span style={{ color: '#009688', fontWeight: 600, fontSize: '1rem' }}>Our Testimonials</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#222', lineHeight: 1.2, marginBottom: '2rem' }}>
              Success stories from our<br />clients
            </h2>
            {/* Testimonial Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {/* Testimonial 1 */}
              <div style={{ 
                background: '#fff', 
                borderRadius: '16px', 
                padding: '1.5rem',
                boxShadow: '0 2px 15px rgba(0,0,0,0.05)'
              }}>
                <div style={{ color: '#ff9100', marginBottom: '0.75rem' }}>★★★★★</div>
                <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  "The diet plan is very simple and it included home cooked meal. Nothing fancy they will tell you and this is the best part of my journey."
                </p>
                <div style={{ fontWeight: 700, color: '#222' }}>Kalyani Satpathy</div>
              </div>
              {/* Testimonial 2 */}
              <div style={{ 
                background: '#ff9100', 
                borderRadius: '16px', 
                padding: '1.5rem'
              }}>
                <div style={{ color: '#fff', marginBottom: '0.75rem' }}>★★★★★</div>
                <p style={{ color: '#fff', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  "I saw ad of Dt Poonam Sagar on Instagram and thought to give it a try and I dont regret my decision."
                </p>
                <div style={{ fontWeight: 700, color: '#fff' }}>Farah</div>
              </div>
              {/* Testimonial 3 */}
              <div style={{ 
                background: '#fff', 
                borderRadius: '16px', 
                padding: '1.5rem',
                boxShadow: '0 2px 15px rgba(0,0,0,0.05)'
              }}>
                <div style={{ color: '#ff9100', marginBottom: '0.75rem' }}>★★★★★</div>
                <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  "Great experience with Dietician Poonam Sagar's team. Special thanks to Ritika Bhatnagar ma'am who created a special diet plan for me"
                </p>
                <div style={{ fontWeight: 700, color: '#222' }}>Rimpy Thakur</div>
              </div>
              {/* Testimonial 4 */}
              <div style={{ 
                background: '#fff', 
                borderRadius: '16px', 
                padding: '1.5rem',
                boxShadow: '0 2px 15px rgba(0,0,0,0.05)'
              }}>
                <div style={{ color: '#ff9100', marginBottom: '0.75rem' }}>★★★★★</div>
                <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  "I lost 6 kg in just 3 months with a simple yet highly effective diet plan. The best part was the team's support."
                </p>
                <div style={{ fontWeight: 700, color: '#222' }}>Payal Padamwar</div>
              </div>
            </div>
          </div>
          {/* Right Side Images */}
          <div style={{ flex: '1', minWidth: '350px', position: 'relative' }}>
            <Image 
              src="/assets/img/testimonial-1.jpg" 
              alt="Happy client" 
              width={280} 
              height={350}
              style={{ 
                borderRadius: '16px', 
                objectFit: 'cover',
                position: 'absolute',
                top: '0',
                left: '0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            />
            <Image 
              src="/assets/img/testimonial-2.jpg" 
              alt="Healthy lifestyle" 
              width={250} 
              height={300}
              style={{ 
                borderRadius: '16px', 
                objectFit: 'cover',
                position: 'absolute',
                top: '30px',
                right: '0',
                transform: 'rotate(5deg)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            />
            <Image 
              src="/assets/img/testimonial-3.jpg" 
              alt="Kitchen cooking" 
              width={300} 
              height={200}
              style={{ 
                borderRadius: '16px', 
                objectFit: 'cover',
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            />
            {/* Reviews Badge */}
            <div style={{ 
              position: 'absolute', 
              bottom: '30px', 
              right: '20px',
              background: '#0b4c4c',
              borderRadius: '12px',
              padding: '0.75rem 1rem',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 5px 20px rgba(0,0,0,0.2)'
            }}>
              <div style={{ 
                background: '#ff9100', 
                borderRadius: '50%', 
                padding: '0.25rem 0.5rem',
                fontSize: '0.75rem',
                fontWeight: 700
              }}>15K</div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>0.5 ★ ( 15.5 k riview )</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
