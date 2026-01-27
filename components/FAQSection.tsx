"use client"
import { useState } from 'react';
import Image from 'next/image';

const faqData = [
  {
    question: "What does Dt Poonam Sagar specialize in?",
    answer: "Dt Poonam Sagar specializes in weight management, PCOD/PCOS management, therapeutic diets for diabetes, thyroid, and other health conditions, as well as nutrition counseling for overall wellness and lifestyle improvement."
  },
  {
    question: "How are the diet plans designed?",
    answer: "Every plan starts with a detailed assessment of your health goals, medical condition (if any), and dietary habits. Based on this, a tailored nutrition plan is created that fits your routine and helps you achieve sustainable results."
  },
  {
    question: "Is the nutrition plan difficult to follow?",
    answer: "Not at all! Our diet plans are designed with simple, home-cooked meals that are easy to prepare and follow. We focus on practical solutions that fit your lifestyle rather than restrictive diets."
  },
  {
    question: "What results can I expect?",
    answer: "Results vary depending on individual goals and commitment. Most clients see visible changes within the first month, with sustainable weight loss of 3-5 kg per month on average. Beyond weight, clients report improved energy levels, better sleep, and enhanced overall wellbeing."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(1);

  return (
    <section className="faq-section" style={{ background: '#f5f7fa', padding: '5rem 2rem' }}>
      <div className="faq-container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* Left - Images */}
        <div className="faq-images" style={{ flex: '1', minWidth: '300px', position: 'relative', height: '550px' }}>
          <div style={{ position: 'relative' }}>
            <Image 
              src="/img/faq-image-1.jpg" 
              alt="Healthy lifestyle" 
              width={350} 
              height={400}
              style={{ borderRadius: '20px', objectFit: 'cover' }}
            />
            {/* Rotating dashed circle */}
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              right: '-30px',
              width: '80px',
              height: '80px',
              animation: 'spin 10s linear infinite'
            }}>
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle 
                  cx="40" 
                  cy="40" 
                  r="35" 
                  fill="none" 
                  stroke="#009688" 
                  strokeWidth="2" 
                  strokeDasharray="8 4"
                />
              </svg>
            </div>
          </div>
          <Image 
            src="/img/faq-image-2.jpg" 
            alt="Diet consultation" 
            width={280} 
            height={220}
            style={{ 
              borderRadius: '20px', 
              objectFit: 'cover', 
              position: 'absolute', 
              bottom: '0', 
              right: '20px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              border: '4px solid #fff'
            }}
          />
          {/* Decorative dots */}
          <div style={{ 
            position: 'absolute', 
            bottom: '80px', 
            left: '0',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px'
          }}>
            {[...Array(16)].map((_, i) => (
              <span key={i} style={{ 
                width: '8px', 
                height: '8px', 
                background: i % 3 === 0 ? '#ff9100' : '#009688', 
                borderRadius: '50%',
                opacity: 0.6
              }} />
            ))}
          </div>
        </div>
        
        {/* Right - FAQ Accordion */}
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
            {faqData.map((faq, index) => (
              <div 
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                style={{ 
                  background: openIndex === index ? '#ff9100' : '#fff', 
                  borderRadius: '16px', 
                  padding: '1.2rem 1.5rem',
                  boxShadow: openIndex === index ? '0 8px 25px rgba(255, 145, 0, 0.3)' : '0 2px 10px rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ 
                    fontWeight: 600, 
                    color: openIndex === index ? '#fff' : '#222',
                    fontSize: '1rem'
                  }}>
                    {faq.question}
                  </span>
                  <span style={{ 
                    color: openIndex === index ? '#fff' : '#ff9100', 
                    fontSize: '1.5rem', 
                    fontWeight: 300,
                    transition: 'transform 0.3s ease',
                    transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: openIndex === index ? 'rgba(255,255,255,0.2)' : 'rgba(255, 145, 0, 0.1)'
                  }}>
                    +
                  </span>
                </div>
                <div style={{
                  maxHeight: openIndex === index ? '200px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease, margin-top 0.3s ease, opacity 0.3s ease',
                  marginTop: openIndex === index ? '1rem' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}>
                  <p style={{ 
                    color: '#fff', 
                    fontSize: '0.95rem', 
                    lineHeight: 1.7,
                    margin: 0
                  }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
