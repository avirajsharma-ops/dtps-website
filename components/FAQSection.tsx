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
    <section className="bg-[#f5f7fa] py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto flex gap-8 md:gap-12 flex-wrap items-start">
        {/* Left - Images */}
        <div className="flex-1 w-full md:min-w-[300px] relative h-[400px] md:h-[550px] hidden md:block">
          <div className="relative">
            <Image 
              src="/img/faq-image-1.jpg" 
              alt="Healthy lifestyle" 
              width={350} 
              height={400}
              className="rounded-[20px] object-cover"
            />
            {/* Rotating dashed circle */}
            <div className="absolute top-1/2 -right-[30px] w-20 h-20 animate-spin-slow">
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
            className="rounded-[20px] object-cover absolute bottom-0 right-5 shadow-[0_10px_40px_rgba(0,0,0,0.15)] border-4 border-white"
          />
          {/* Decorative dots */}
          <div className="absolute bottom-20 left-0 grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <span 
                key={i} 
                className={`w-2 h-2 rounded-full opacity-60 ${
                  i % 3 === 0 ? 'bg-[#ff9100]' : 'bg-teal-600'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Right - FAQ Accordion */}
        <div className="flex-1 w-full md:min-w-[400px]">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#ff9100] text-xl">✦</span>
            <span className="text-teal-600 font-semibold text-base">Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl md:text-[2.5rem] font-bold text-gray-900 leading-tight mb-6 md:mb-8">
            Common Questions About<br />Our Diet Plans
          </h2>
          
          {/* FAQ Items */}
          <div className="flex flex-col gap-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className={`rounded-2xl py-5 px-6 cursor-pointer transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? 'bg-[#ff9100] shadow-[0_8px_25px_rgba(255,145,0,0.3)]' 
                    : 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className={`font-semibold text-base ${
                    openIndex === index ? 'text-white' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`text-2xl font-light transition-transform duration-300 flex items-center justify-center w-[30px] h-[30px] rounded-full ${
                    openIndex === index 
                      ? 'text-white bg-white/20 rotate-45' 
                      : 'text-[#ff9100] bg-[rgba(255,145,0,0.1)] rotate-0'
                  }`}>
                    +
                  </span>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? 'max-h-[200px] mt-4 opacity-100' 
                    : 'max-h-0 mt-0 opacity-0'
                }`}>
                  <p className="text-white text-[0.95rem] leading-relaxed m-0">
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
