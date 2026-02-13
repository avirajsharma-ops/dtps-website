"use client"
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutUsSection from '@/components/AboutUsSection';
import ServicesSection from '@/components/ServicesSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ExpertGuidanceSection from '@/components/ExpertGuidanceSection';
import OurTeamSection from '@/components/OurTeamSection';
import YouTubeShortsSlider from '@/components/YouTubeShortsSlider';
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
    <div className="bg-white">
      <Hero />
      <div className="section-wrapper">
        <AboutUsSection />
      </div>
      <div className="section-wrapper">
        <ServicesSection />
      </div>
      <div className="section-wrapper">
        <WhatWeDoSection />
      </div>
      <div className="section-wrapper">
        <WhyChooseUsSection />
      </div>
      {/* Expert Guidance Section */}
      <div className="section-wrapper">
        <ExpertGuidanceSection />
      </div>
      {/* Our Team Section */}
      <div className="section-wrapper">
        <OurTeamSection />
      </div>

      {/* Our Programs Section */}
      <div className="section-wrapper">
      <section className="bg-white py-16 md:py-20 px-4 md:px-8 rounded-[30px] overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-start justify-between mb-10 md:mb-14 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#ff9100] text-xl">✦</span>
                <span className="text-teal-600 font-semibold text-base">Our Programs</span>
              </div>
              <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-gray-900 leading-tight">
                Tailored programs for<br />your wellness
              </h2>
            </div>
            <button className="bg-[#ff9100] text-white font-semibold text-base border-none rounded-full py-3 px-8 cursor-pointer transition-all duration-300 hover:shadow-lg">
              All Programs
            </button>
          </div>
          <YouTubeShortsSlider />
        </div>
      </section>
      </div>

      {/* How It Work Section */}
      <div className="section-wrapper">
      <section className="bg-gradient-to-b from-[#0b4c4c] to-[#073535] pt-14 md:pt-20 pb-44 md:pb-56 px-4 md:px-8 rounded-[30px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Header row */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 mb-14 md:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#ff9100] text-xl">✦</span>
                <span className="text-[#ff9100] font-semibold text-base italic">How It Work</span>
              </div>
              <h2 className="text-[1.8rem] md:text-[2.5rem] font-bold text-white leading-tight italic">
                Step-by-step guide to<br />your healthy journey
              </h2>
            </div>
            <p className="max-w-[420px] text-white/80 text-sm md:text-[15px] leading-relaxed md:pt-8">
              Achieving your health goals has never been easier. Our step-by-step approach provides personalized guidance, actionable strategies, and ongoing support.
            </p>
          </div>

          {/* 5 Steps with connectors */}
          <div className="relative">
            {/* Desktop: horizontal row with connectors */}
            <div className="hidden md:grid grid-cols-5 gap-0 relative">
              {/* Dotted connector line across all icons */}
              <div className="absolute top-[40px] left-[10%] right-[10%] h-0 border-t-2 border-dashed border-white/30 z-0" />

              {/* Step 1 */}
              <div className="text-center relative z-10 px-2">
                <div className="inline-block mb-6 relative">
                  <div className="w-[80px] h-[80px] border-2 border-white/30 rounded-full flex items-center justify-center bg-[#0b4c4c] relative z-10">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <circle cx="9" cy="7" r="3" />
                      <path d="M9 13a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5z" />
                      <path d="M17 11l2 2 4-4" stroke="#ff9100" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#ff9100] rounded-full flex items-center justify-center text-white text-xs font-bold z-20">1</div>
                </div>
                <h3 className="text-white font-bold text-[15px] mb-2 leading-snug">Choose Your Plan</h3>
                <p className="text-white/70 text-[12.5px] leading-relaxed">Select a diet plan based on your goal, health condition, and duration.</p>
              </div>

              {/* Step 2 */}
              <div className="text-center relative z-10 px-2">
                <div className="inline-block mb-6 relative">
                  <div className="w-[80px] h-[80px] border-2 border-white/30 rounded-full flex items-center justify-center bg-[#0b4c4c] relative z-10">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <circle cx="8" cy="7" r="3" />
                      <path d="M8 13a5 5 0 0 0-4 4h8" />
                      <circle cx="17" cy="7" r="3" />
                      <path d="M17 13a5 5 0 0 1 4 4h-8" />
                      <path d="M12 17v3" stroke="#ff9100" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#ff9100] rounded-full flex items-center justify-center text-white text-xs font-bold z-20">2</div>
                </div>
                <h3 className="text-white font-bold text-[15px] mb-2 leading-snug">Health Counsellor Connect</h3>
                <p className="text-white/70 text-[12.5px] leading-relaxed">Our health counsellor connects with you to understand your lifestyle and concerns.</p>
              </div>

              {/* Step 3 */}
              <div className="text-center relative z-10 px-2">
                <div className="inline-block mb-6 relative">
                  <div className="w-[80px] h-[80px] border-2 border-white/30 rounded-full flex items-center justify-center bg-[#0b4c4c] relative z-10">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <path d="M3 5h18v14H3z" rx="2" />
                      <circle cx="9" cy="12" r="2" />
                      <circle cx="15" cy="12" r="2" />
                      <path d="M9 12h6" strokeDasharray="2 2" stroke="#ff9100" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#ff9100] rounded-full flex items-center justify-center text-white text-xs font-bold z-20">3</div>
                </div>
                <h3 className="text-white font-bold text-[15px] mb-2 leading-snug">Dietitian Assessment Call</h3>
                <p className="text-white/70 text-[12.5px] leading-relaxed">Your assigned dietitian speaks with you to understand your lifestyle, food choices and health goals before planning your diet.</p>
              </div>

              {/* Step 4 */}
              <div className="text-center relative z-10 px-2">
                <div className="inline-block mb-6 relative">
                  <div className="w-[80px] h-[80px] border-2 border-white/30 rounded-full flex items-center justify-center bg-[#0b4c4c] relative z-10">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <rect x="4" y="3" width="16" height="18" rx="2" />
                      <path d="M8 7h8" />
                      <path d="M8 11h8" />
                      <path d="M8 15h5" />
                      <path d="M15 15l2 2 4-4" stroke="#ff9100" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#ff9100] rounded-full flex items-center justify-center text-white text-xs font-bold z-20">4</div>
                </div>
                <h3 className="text-white font-bold text-[15px] mb-2 leading-snug">Personalised Plan Delivery</h3>
                <p className="text-white/70 text-[12.5px] leading-relaxed">Your customised diet plan is shared on OUR APP within 24 hours of the assessment.</p>
              </div>

              {/* Step 5 */}
              <div className="text-center relative z-10 px-2">
                <div className="inline-block mb-6 relative">
                  <div className="w-[80px] h-[80px] border-2 border-white/30 rounded-full flex items-center justify-center bg-[#0b4c4c] relative z-10">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <path d="M12 20V10" />
                      <path d="M6 20v-6" />
                      <path d="M18 20v-4" />
                      <circle cx="12" cy="7" r="2" stroke="#ff9100" />
                      <path d="M9 4l3 3 3-3" stroke="#ff9100" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#ff9100] rounded-full flex items-center justify-center text-white text-xs font-bold z-20">5</div>
                </div>
                <h3 className="text-white font-bold text-[15px] mb-2 leading-snug">Follow-Ups &amp; Tracking</h3>
                <p className="text-white/70 text-[12.5px] leading-relaxed">Weekly or requirement-based follow-ups to track progress and make timely adjustments.</p>
              </div>
            </div>

            {/* Mobile: stacked layout */}
            <div className="md:hidden space-y-8">
              {[
                { num: 1, title: 'Choose Your Plan', desc: 'Select a diet plan based on your goal, health condition, and duration.', icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><circle cx="9" cy="7" r="3" /><path d="M9 13a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5z" /><path d="M17 11l2 2 4-4" stroke="#ff9100" /></svg>
                )},
                { num: 2, title: 'Health Counsellor Connect', desc: 'Our health counsellor connects with you to understand your lifestyle and concerns.', icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><circle cx="8" cy="7" r="3" /><path d="M8 13a5 5 0 0 0-4 4h8" /><circle cx="17" cy="7" r="3" /><path d="M17 13a5 5 0 0 1 4 4h-8" /></svg>
                )},
                { num: 3, title: 'Dietitian Assessment Call', desc: 'Your assigned dietitian speaks with you to understand your lifestyle, food choices and health goals before planning your diet.', icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M3 5h18v14H3z" /><circle cx="9" cy="12" r="2" /><circle cx="15" cy="12" r="2" /></svg>
                )},
                { num: 4, title: 'Personalised Plan Delivery', desc: 'Your customised diet plan is shared on OUR APP within 24 hours of the assessment.', icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8" /><path d="M8 11h8" /><path d="M8 15h5" /></svg>
                )},
                { num: 5, title: 'Follow-Ups & Tracking', desc: 'Weekly or requirement-based follow-ups to track progress and make timely adjustments.', icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 20V10" /><path d="M6 20v-6" /><path d="M18 20v-4" /></svg>
                )},
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center bg-[#0b4c4c]">
                      {step.icon}
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#ff9100] rounded-full flex items-center justify-center text-white text-[10px] font-bold">{step.num}</div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">{step.title}</h3>
                    <p className="text-white/70 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Appointment Section - Overlapping */}
      <div className="section-wrapper">
      <section className="bg-white px-4 md:px-8 -mt-28 md:-mt-36 relative z-10 rounded-[30px]">
        <div className="max-w-[1100px] mx-auto bg-white rounded-[20px] md:rounded-[30px] p-5 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="w-full lg:flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#ff9100] text-xl">✦</span>
                <span className="text-teal-600 font-semibold text-base">Appointment</span>
              </div>
              <h2 className="text-[1.75rem] md:text-[2.5rem] font-bold text-gray-900 leading-tight mb-4">
                Make appointment
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                Easy scheduling for a personalized health coaching session. Take the first step towards better health today!
              </p>
              <Image 
                src="/img/b29c961c86fe88546c6e3c94c7c1fdaee4e4c518.png"
                alt="Dietitian consultation"
                width={450}
                height={300}
                className="rounded-2xl object-cover w-full max-w-[450px] hidden md:block"
              />
            </div>
            <div className="w-full lg:flex-1">
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full p-3 md:p-4 border border-gray-300 rounded-lg text-sm md:text-base outline-none focus:border-teal-500"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full p-3 md:p-4 border border-gray-300 rounded-lg text-sm md:text-base outline-none focus:border-teal-500"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-3 md:p-4 border border-gray-300 rounded-lg text-sm md:text-base outline-none focus:border-teal-500"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-3 md:p-4 border border-gray-300 rounded-lg text-sm md:text-base outline-none focus:border-teal-500"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="w-full p-3 md:p-4 border border-gray-300 rounded-lg text-sm md:text-base outline-none bg-white text-gray-600 focus:border-teal-500">
                    <option>Service</option>
                    <option>Weight Management</option>
                    <option>PCOD/PCOS</option>
                    <option>Therapeutic Diet</option>
                    <option>Wedding Program</option>
                  </select>
                  <input 
                    type="date" 
                    placeholder="dd-mm-yyyy"
                    className="w-full p-3 md:p-4 border border-gray-300 rounded-lg text-sm md:text-base outline-none text-gray-600 focus:border-teal-500"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-[#ff9100] text-white font-semibold text-sm md:text-base border-none rounded-full py-3 md:py-4 px-8 cursor-pointer mt-2 hover:shadow-lg transition-all duration-300"
                >
                  Book An Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* FAQ Section */}
      <div className="section-wrapper">
        <FAQSection />
      </div>

      {/* Testimonials Section */}
      <div className="section-wrapper">
      <section className="bg-white py-20 px-4 md:px-8 rounded-[30px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-[#ff9100] text-xl">✦</span>
              <span className="text-teal-600 font-semibold text-base">Our Testimonials</span>
            </div>
            <h2 className="text-[2.5rem] font-bold text-gray-900 leading-tight">
              Success stories from our clients
            </h2>
          </div>
          
          <div className="flex gap-12 flex-wrap items-start">
            {/* Left - Testimonial Cards */}
            <div className="flex-1 min-w-[400px]">
              <div className="grid grid-cols-2 gap-6">
                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <div 
                    key={testimonial._id || index}
                    className={`rounded-[20px] p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                      index === 1 
                        ? 'bg-[#ff9100] shadow-[0_10px_30px_rgba(255,145,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,145,0,0.4)]' 
                        : 'bg-white shadow-[0_5px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]'
                    }`}
                  >
                    <div className={`mb-3 text-lg tracking-widest ${index === 1 ? 'text-white' : 'text-[#ff9100]'}`}>★★★★★</div>
                    <p className={`text-[0.95rem] leading-relaxed mb-4 italic ${index === 1 ? 'text-white' : 'text-gray-600'}`}>
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className={`flex items-center gap-3 pt-3 ${index === 1 ? 'border-t border-white/20' : 'border-t border-gray-200'}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base ${
                        index === 1 ? 'bg-white/20' : 'bg-teal-600'
                      }`}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className={`font-bold ${index === 1 ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Stats and Badge */}
            <div className="flex-1 min-w-[350px] relative h-[450px]">
              {/* Main Stats Card */}
              <div className="bg-[#0b4c4c] rounded-[30px] p-12 text-white h-full flex flex-col justify-center relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -top-[50px] -right-[50px] w-[200px] h-[200px] rounded-full bg-[rgba(255,145,0,0.1)]" />
                <div className="absolute -bottom-[30px] -left-[30px] w-[150px] h-[150px] rounded-full bg-[rgba(0,150,136,0.2)]" />
                
                <div className="relative z-10">
                  <div className="text-[5rem] font-extrabold leading-none mb-2">
                    15K<span className="text-[#ff9100]">+</span>
                  </div>
                  <div className="text-2xl font-semibold mb-6 opacity-90">
                    Happy Clients
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 py-3 px-4 rounded-xl w-fit">
                    <span className="text-[#ff9100] text-2xl">★</span>
                    <span className="text-xl font-semibold">4.9</span>
                    <span className="opacity-80 text-sm">Average Rating</span>
                  </div>
                  
                  {/* Trust badges */}
                  <div className="flex gap-4 mt-8 flex-wrap">
                    <div className="bg-[#ff9100] py-2 px-4 rounded-lg text-sm font-semibold">
                      ✓ Verified Reviews
                    </div>
                    <div className="bg-white/15 py-2 px-4 rounded-lg text-sm font-semibold">
                      ✓ 25+ Years Trust
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
// Removed local fallback implementations of useState/useEffect — using React's useState and useEffect imported above.
