"use client"
import { useState } from 'react';
import Image from 'next/image';

const faqData = [
  {
    question: "What is health coaching?",
    answer: "Health coaching is a personalized and structured service designed to guide you toward achieving your health and wellness goals. Through tailored strategies, ongoing support, and motivation."
  },
  {
    question: "How does health coaching work?",
    answer: "Health coaching is a personalized and structured service designed to guide you toward achieving your health and wellness goals. Through tailored strategies, ongoing support, and motivation."
  },
  {
    question: "Who can benefit from health coaching?",
    answer: "Health coaching is a personalized and structured service designed to guide you toward achieving your health and wellness goals. Through tailored strategies, ongoing support, and motivation."
  },
  {
    question: "Can I do health coaching online?",
    answer: "Health coaching is a personalized and structured service designed to guide you toward achieving your health and wellness goals. Through tailored strategies, ongoing support, and motivation."
  }
];

/* 3×3 teal cross grid decorative element */
function CrossGrid() {
  return (
    <div className="grid grid-cols-3 gap-[7px]">
      {[...Array(9)].map((_, i) => (
        <svg key={i} width="10" height="10" viewBox="0 0 10 10">
          <line x1="2" y1="2" x2="8" y2="8" stroke="#014E4E" strokeWidth="2" />
          <line x1="8" y1="2" x2="2" y2="8" stroke="#014E4E" strokeWidth="2" />
        </svg>
      ))}
    </div>
  );
}

/* Radial sparkle / dots decoration */
function SparkleDecor() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" style={{ transform: 'rotate(-56deg)' }}>
      {/* Outer ring dots */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const cx = 18 + 14 * Math.cos(angle);
        const cy = 18 + 14 * Math.sin(angle);
        return <circle key={`o${i}`} cx={cx} cy={cy} r="1.4" fill="#014E4E" />;
      })}
      {/* Middle ring dots */}
      {[...Array(8)].map((_, i) => {
        const angle = ((i * 45 + 22.5) * Math.PI) / 180;
        const cx = 18 + 9 * Math.cos(angle);
        const cy = 18 + 9 * Math.sin(angle);
        return <circle key={`m${i}`} cx={cx} cy={cy} r="1.1" fill="#014E4E" />;
      })}
      {/* Inner ring dots */}
      {[...Array(4)].map((_, i) => {
        const angle = ((i * 90 + 45) * Math.PI) / 180;
        const cx = 18 + 5 * Math.cos(angle);
        const cy = 18 + 5 * Math.sin(angle);
        return <circle key={`in${i}`} cx={cx} cy={cy} r="0.9" fill="#014E4E" />;
      })}
    </svg>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(1);

  return (
    <section className="section-wrapper pt-16 md:pt-24 pb-12 md:pb-20">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

        {/* ── Left: Images ── */}
        <div className="relative w-full lg:w-[480px] min-h-[360px] md:min-h-[440px] flex-shrink-0">
          {/* Image 1 – top-left woman */}
          <div className="relative w-[200px] h-[260px] md:w-[250px] md:h-[320px] rounded-[20px] overflow-hidden z-[1]">
            <Image
              src="/img/9141869b7970fcca95d022e21e1d786db4838ace.png"
              alt="Health coaching"
              fill
              className="object-cover"
            />
          </div>

          {/* Sparkle decoration – between images */}
          <div className="absolute top-[100px] left-[210px] md:top-[120px] md:left-[270px] z-[3]">
            <SparkleDecor />
          </div>

          {/* Dashed circle decoration */}
          <div className="absolute top-[85px] left-[195px] md:top-[100px] md:left-[250px] z-[2]">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="25" fill="none" stroke="#014E4E" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
            </svg>
          </div>

          {/* Image 2 – bottom-right food plate */}
          <div className="absolute left-[100px] top-[160px] md:left-[140px] md:top-[190px] w-[220px] h-[200px] md:w-[280px] md:h-[250px] rounded-[20px] overflow-hidden border-[4px] border-white z-[4] shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <Image
              src="/img/1ab426ea9c4c4725ca785448c846667e69b74af4.jpg"
              alt="Healthy food"
              fill
              className="object-cover"
            />
          </div>

          {/* Cross grid decoration – bottom-left */}
          <div className="absolute bottom-[30px] left-[50px] md:bottom-[10px] md:left-[60px] z-[5]">
            <CrossGrid />
          </div>
        </div>

        {/* ── Right: FAQ Accordion ── */}
        <div className="flex-1 w-full">
          {/* Label */}
          <div className="flex items-center gap-2 mb-1">
            <span className="w-[14px] h-[14px] rounded-[2px] bg-[#FF850B] inline-block" />
            <span className="text-[#014E4E] font-semibold text-sm italic" style={{ fontFamily: 'var(--font-epilogue), Epilogue, sans-serif' }}>
              Frequently Asked Questions
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-[28px] md:text-[38px] lg:text-[46px] font-extrabold text-[#1E1E1E] leading-[1.1] mb-6 md:mb-8 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-epilogue), Epilogue, sans-serif' }}
          >
            Common questions<br />about<span className="inline" style={{ letterSpacing: '-0.04em' }}>&thinsp;</span>health coaching
          </h2>

          {/* Accordion */}
          <div className="flex flex-col gap-4 md:gap-5">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="flex flex-col gap-2.5">
                  {/* Question bar */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className={`w-full flex items-center justify-between px-4 md:px-5 py-3 md:py-[14px] rounded-[10px] transition-colors duration-200 cursor-pointer ${
                      isOpen
                        ? 'bg-[#FF850B]'
                        : 'bg-transparent outline outline-1 outline-[#F1F1F1]'
                    }`}
                  >
                    <span
                      className={`text-[13px] md:text-[15px] font-semibold text-left ${
                        isOpen ? 'text-white' : 'text-[#1E1E1E]'
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* +/- icon */}
                    <span
                      className={`flex-shrink-0 w-[26px] h-[26px] md:w-[30px] md:h-[30px] rounded-[5px] flex items-center justify-center ${
                        isOpen ? 'bg-white' : 'bg-[#FF850B]'
                      }`}
                    >
                      {isOpen ? (
                        /* minus */
                        <span className="w-[11px] h-[2px] bg-[#FF850B] rounded-full" />
                      ) : (
                        /* plus */
                        <svg width="12" height="12" viewBox="0 0 12 12">
                          <line x1="6" y1="1" x2="6" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                          <line x1="1" y1="6" x2="11" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* Answer panel */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="bg-[#EAEEF1] rounded-[10px] px-4 md:px-5 py-3 md:py-4">
                      <p className="text-[#828283] text-[12px] md:text-[14px] leading-[1.65] font-normal font-[Inter] m-0">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
