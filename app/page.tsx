"use client"
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutUsSection from '@/components/AboutUsSection';
import ServicesSection from '@/components/ServicesSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import OurExpertiseSection from '@/components/OurExpertiseSection';
import ExpertGuidanceSection from '@/components/ExpertGuidanceSection';
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
      <div className="section-wrapper">
        <OurExpertiseSection />
      </div>
      {/* About Section */}
      {/* ...existing code... */}
      {/* Services Section */}
      {/* ...existing code... */}
      {/* What We Do Section */}
      {/* ...existing code... */}
      {/* Why Choose Us Section */}
      {/* ...existing code... */}
      {/* Expert Guidance Section */}
      <div className="section-wrapper">
        <ExpertGuidanceSection />
      </div>

      {/* Our Programs Section */}
      <div className="section-wrapper">
      <section className="bg-white py-20 px-4 md:px-8 rounded-[30px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#ff9100] text-xl">✦</span>
                <span className="text-teal-600 font-semibold text-base">Our Programs</span>
              </div>
              <h2 className="text-[2.5rem] font-bold text-gray-900 leading-tight">
                Tailored programs for<br />your wellness
              </h2>
            </div>
            <button className="bg-[#ff9100] text-white font-semibold text-base border-none rounded-full py-3 px-8 cursor-pointer transition-all duration-300 hover:shadow-lg">
              All Programs
            </button>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            {/* Program Card 1 - Using Garima-Mam.jpeg */}
            <div 
              className="bg-gray-900 rounded-[20px] overflow-hidden w-full sm:w-[360px] h-[400px] sm:h-[450px] relative cursor-pointer transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            >
              <img src="/img/Garima-Mam.jpeg" alt="Weight Management Program" className="w-full h-full object-cover" />
              <div className="absolute left-0 bottom-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
                <div className="inline-block bg-[#ff9100] py-1 px-3 rounded-full text-xs font-semibold mb-2">
                  WEIGHT LOSS
                </div>
                <h3 className="text-xl font-bold mb-2">Weight Management<br />Program</h3>
                <p className="text-sm opacity-90">Customized diet plans for effective and sustainable weight loss results.</p>
              </div>
            </div>
            
            {/* Program Card 2 - Using Shivani.jpeg */}
            <div 
              className="bg-gray-900 rounded-[20px] overflow-hidden w-full sm:w-[360px] h-[400px] sm:h-[450px] relative cursor-pointer transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            >
              <img src="/img/Shivani.jpeg" alt="PCOD/PCOS Program" className="w-full h-full object-cover" />
              <div className="absolute left-0 bottom-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
                <div className="inline-block bg-teal-600 py-1 px-3 rounded-full text-xs font-semibold mb-2">
                  PCOD/PCOS
                </div>
                <h3 className="text-xl font-bold mb-2">PCOD/PCOS<br />Management</h3>
                <p className="text-sm opacity-90">Specialized nutrition programs for hormonal balance and PCOD management.</p>
              </div>
            </div>
            
            {/* Program Card 3 - Using Anshu-Jain.jpeg */}
            <div 
              className="bg-gray-900 rounded-[20px] overflow-hidden w-full sm:w-[360px] h-[400px] sm:h-[450px] relative cursor-pointer transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            >
              <img src="/img/Anshu-Jain.jpeg" alt="Therapeutic Diet Program" className="w-full h-full object-cover" />
              <div className="absolute left-0 bottom-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
                <div className="inline-block bg-[#0b4c4c] py-1 px-3 rounded-full text-xs font-semibold mb-2">
                  THERAPEUTIC
                </div>
                <h3 className="text-xl font-bold mb-2">Therapeutic Diet<br />Program</h3>
                <p className="text-sm opacity-90">Medical nutrition therapy for diabetes, thyroid, and other health conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* How It Work Section */}
      <div className="section-wrapper">
      <section className="bg-[#0b4c4c] pt-16 md:pt-20 pb-40 md:pb-52 px-4 md:px-8 rounded-[30px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-start flex-wrap gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#ff9100] text-xl">✦</span>
                <span className="text-[#ff9100] font-semibold text-base">How It Work</span>
              </div>
              <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-white leading-tight">
                Step-by-step guide to<br />better health
              </h2>
            </div>
            <p className="max-w-[500px] text-white opacity-90 text-sm md:text-base leading-relaxed">
              Achieving your health goals has never been easier. Our step-by-step approach provides personalized guidance, actionable strategies, and ongoing support.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Step 1 - Custom Coaching Plan */}
            <div className="text-center">
              <div className="relative inline-block mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-white/30 rounded-full flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff9100" strokeWidth="1.5" className="md:w-8 md:h-8">
                    <circle cx="9" cy="7" r="3" />
                    <path d="M9 10v4" />
                    <path d="M9 14l-3 6" />
                    <path d="M9 14l3 6" />
                    <circle cx="17" cy="7" r="3" />
                    <path d="M17 10v4" />
                    <path d="M17 14l-3 6" />
                    <path d="M17 14l3 6" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 bg-[#ff9100] text-white w-5 h-5 md:w-6 md:h-6 rounded-full text-[10px] md:text-xs font-bold flex items-center justify-center">1</div>
              </div>
              <h3 className="text-white font-bold text-sm md:text-lg mb-2">Custom Coaching Plan</h3>
              <p className="text-white opacity-80 text-xs md:text-sm leading-relaxed">Begin with a comprehensive health assessment to understand.</p>
            </div>
            {/* Step 2 - Ongoing Support */}
            <div className="text-center">
              <div className="relative inline-block mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-white/30 rounded-full flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff9100" strokeWidth="1.5" className="md:w-8 md:h-8">
                    <circle cx="9" cy="7" r="3" />
                    <path d="M9 10v4" />
                    <path d="M6 20l3-6 3 6" />
                    <circle cx="17" cy="7" r="3" />
                    <path d="M17 10v4" />
                    <path d="M14 20l3-6 3 6" />
                    <path d="M9 7h8" strokeDasharray="2 2" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 bg-[#ff9100] text-white w-5 h-5 md:w-6 md:h-6 rounded-full text-[10px] md:text-xs font-bold flex items-center justify-center">2</div>
              </div>
              <h3 className="text-white font-bold text-sm md:text-lg mb-2">Ongoing Support</h3>
              <p className="text-white opacity-80 text-xs md:text-sm leading-relaxed">Begin with a comprehensive health assessment to understand.</p>
            </div>
            {/* Step 3 - Practical Tools */}
            <div className="text-center">
              <div className="relative inline-block mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-white/30 rounded-full flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff9100" strokeWidth="1.5" className="md:w-8 md:h-8">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 bg-[#ff9100] text-white w-5 h-5 md:w-6 md:h-6 rounded-full text-[10px] md:text-xs font-bold flex items-center justify-center">3</div>
              </div>
              <h3 className="text-white font-bold text-sm md:text-lg mb-2">Practical Tools</h3>
              <p className="text-white opacity-80 text-xs md:text-sm leading-relaxed">Begin with a comprehensive health assessment to understand.</p>
            </div>
            {/* Step 4 - Flexible Engagement */}
            <div className="text-center">
              <div className="relative inline-block mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-white/30 rounded-full flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff9100" strokeWidth="1.5" className="md:w-8 md:h-8">
                    <circle cx="7" cy="7" r="2" />
                    <circle cx="17" cy="7" r="2" />
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                    <path d="M9 7h6" />
                    <path d="M9 17h6" />
                    <path d="M7 9v6" />
                    <path d="M17 9v6" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 bg-[#ff9100] text-white w-5 h-5 md:w-6 md:h-6 rounded-full text-[10px] md:text-xs font-bold flex items-center justify-center">4</div>
              </div>
              <h3 className="text-white font-bold text-sm md:text-lg mb-2">Flexible Engagement</h3>
              <p className="text-white opacity-80 text-xs md:text-sm leading-relaxed">Begin with a comprehensive health assessment to understand.</p>
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
                src="/assets/img/appointment-img.jpg" 
                alt="Healthy food" 
                width={400} 
                height={300}
                className="rounded-2xl object-cover w-full max-w-[400px] hidden md:block"
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
