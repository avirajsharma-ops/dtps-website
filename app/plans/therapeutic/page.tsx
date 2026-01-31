"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import DynamicPageHero from '@/components/DynamicPageHero';
import TransformationGallery from '@/components/TransformationGallery';
import DynamicPlansDisplay from '@/components/DynamicPlansDisplay';
import { getPricingByCategory } from '@/lib/api';
import type { IPricing } from '@/models/Pricing';

const successStories = [
  { name: 'Soranya', loss: '15 kgs', days: '97 Days', image: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/SORANYA-1-1.webp' },
  { name: 'Randhir Jha', loss: '10.8 kgs', days: '55 Days', image: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/Randhir-Jha-1.webp' },
  { name: 'Sonika', loss: '13 kgs', days: '150 Days', image: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/Sonika-1.webp' },
];

const whatYouGet = [
  { number: '01', title: '24/7 Support' },
  { number: '02', title: 'Flexible Diet Plans' },
  { number: '03', title: 'Personal Diet Assistant' },
  { number: '04', title: 'Multiple Food Options' },
  { number: '05', title: 'Lifestyle based curated Diet Plans' },
  { number: '06', title: 'Experienced Team of Dieticians' },
  { number: '07', title: 'Sustainable Weight Management' },
  { number: '08', title: 'Guaranteed Results' },
];

const youtubeVideos = [
  'QnvX0T0dH3g',
  '3_pnN3p23t4',
  'ipMaYZpyJAg',
  '6uk0l9SU0Sw',
  'CUUjzE5NnTA',
  'QRIWXRkjEXE'
];

const fallbackPricingPlans = [
  {
    duration: '1',
    durationSub: 'Month',
    durationEnd: 'Plan',
    price: '₹ 4,500',
    originalPrice: '₹ 5,000',
    image: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/tiffin1.png',
    popular: false,
    badge: '',
    features: ['8 hours of Chat support', 'Dietitian Consultation (12)', 'Customized Meal Plan', 'Progress Tracking']
  },
  {
    duration: '3',
    durationSub: 'Months',
    durationEnd: 'Plan',
    price: '₹ 12,000',
    originalPrice: '₹ 15,000',
    image: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/tiffin1.png',
    popular: true,
    badge: 'Most Popular',
    features: ['24/7 Chat support', 'Dietitian Consultation (36)', 'Customized Meal Plan', 'Progress Tracking', 'Weekly Check-ins']
  },
  {
    duration: '6',
    durationSub: 'Months',
    durationEnd: 'Plan',
    price: '₹ 22,000',
    originalPrice: '₹ 30,000',
    image: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/tiffin1.png',
    popular: false,
    badge: 'Best Value',
    features: ['24/7 Chat support', 'Dietitian Consultation (72)', 'Customized Meal Plan', 'Progress Tracking', 'Weekly Check-ins', 'Custom Recipes']
  }
];


export default function TherapeuticPlanPage() {
  const [bmiData, setBmiData] = useState({
    age: '',
    gender: 'male',
    heightFt: '',
    heightIn: '',
    weight: ''
  });
  const [bmiResult, setBmiResult] = useState<{ bmi: number; category: string } | null>(null);
  const [pricingPlans, setPricingPlans] = useState<any[]>(fallbackPricingPlans);
  const [loadingPricing, setLoadingPricing] = useState(true);

  // Fetch pricing from database on component mount
  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const dbPricing = await getPricingByCategory('therapeutic-diet-plans');
        
        if (dbPricing && dbPricing.length > 0) {
          // Transform database pricing to match display format
          const formattedPricing = dbPricing.map((plan: any) => ({
            duration: plan.planName.split(' ')[0],
            durationSub: plan.planName.split(' ').slice(1).join(' '),
            durationEnd: 'Plan',
            price: `₹ ${plan.price.toLocaleString()}`,
            originalPrice: `₹ ${plan.originalPrice.toLocaleString()}`,
            image: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/tiffin1.png',
            popular: plan.popular,
            badge: plan.badge,
            features: plan.features
          }));
          setPricingPlans(formattedPricing);
        }
      } catch (error) {
        console.error('Error fetching pricing:', error);
        setPricingPlans(fallbackPricingPlans);
      } finally {
        setLoadingPricing(false);
      }
    };

    fetchPricing();
  }, []);


  const calculateBMI = () => {
    const heightInMeters = ((parseInt(bmiData.heightFt) * 12 + parseInt(bmiData.heightIn)) * 0.0254);
    const weightInKg = parseFloat(bmiData.weight);
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';
    
    setBmiResult({ bmi: Math.round(bmi * 10) / 10, category });
  };

  return (
    <main className="bg-white">
      {/* Hero Section - Mobile */}
      <section className="bg-white pt-0 px-0 md:hidden">
        <div className="bg-gradient-to-br from-[#0d4043] to-[#0a2f31] relative overflow-hidden min-h-auto">
          {/* Navbar inside the hero section */}
          <div className="relative z-10">
            <Navbar />
          </div>

          {/* Hero Content Mobile */}
          <div className="py-6 px-4 pb-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="inline-flex items-center gap-2 bg-white/[0.08] py-2 px-3 rounded-full backdrop-blur-[10px] border border-white/10">
                <span className="text-sm">✨</span>
                <span className="text-white text-xs font-medium">For Healthier, Happier you</span>
              </div>

              {/* Image first on mobile */}
              <div className="w-full flex justify-center">
                <Image
                  src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/d21d7b0157faacaede7445061a44a9041ebc0603.png"
                  alt="Healthy Food Heart"
                  width={260}
                  height={260}
                  className="w-[260px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                />
              </div>
              
              <h1 className="text-3xl font-bold text-white leading-tight font-[Epilogue,sans-serif] tracking-tight">
                Therapeutic Diet Plans: Mend-Your-Menu
              </h1>
              
              <p className="text-white/75 text-sm leading-relaxed px-2">
                Meet the visionary force behind central India's leading company, Our expert 
                therapeutic Dietitian Poonam Sagar - a dynamic and inspirational leader.
              </p>
              
              <div className="flex flex-col gap-3 w-full px-2">
                <button 
                  onClick={() => {
                    const product = {
                      id: 'therapeutic-plan-3months',
                      name: 'Therapeutic Plan - 3 Months',
                      price: 13000,
                      quantity: 1
                    };
                    sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
                    window.location.href = '/checkout';
                  }}
                  className="bg-[#FF850B] text-white border-none rounded-full py-3 px-6 text-sm font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_20px_rgba(255,133,11,0.3)] hover:bg-[#e07a1a] w-full">
                  Get Started Today <span className="text-base">→</span>
                </button>
                <button className="bg-transparent text-white border-2 border-white/25 rounded-full py-3 px-6 text-sm font-semibold cursor-pointer transition-all duration-300 hover:border-white/50 w-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Desktop */}
      <section className="bg-white pt-3 px-12 hidden md:block">
        <div className="bg-gradient-to-br from-[#0d4043] to-[#0a2f31] rounded-[30px] relative overflow-hidden min-h-[620px]">
          {/* Navbar inside the hero section */}
          <div className="relative z-10">
            <Navbar />
          </div>

          {/* Hero Content */}
          <div className="py-10 px-16 pb-24">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 -right-[5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,133,11,0.1)_0%,transparent_70%)] rounded-full -translate-y-1/2 pointer-events-none" />
        
            <div className="max-w-[1200px] mx-auto flex items-center justify-between flex-wrap gap-10">
          {/* Left Content */}
          <div className="flex-[1_1_480px] max-w-[580px]">
            <div className="inline-flex items-center gap-2 bg-white/[0.08] py-2.5 px-4 rounded-full mb-6 backdrop-blur-[10px] border border-white/10">
              <span className="text-sm">✨</span>
              <span className="text-white text-[13px] font-medium">For Healthier, Happier you</span>
            </div>
            
            <h1 className="text-5xl font-bold text-white leading-tight mb-6 font-[Epilogue,sans-serif] tracking-tight">
              Therapeutic Diet<br />
              Plans: Mend-<br />
              Your-Menu
            </h1>
            
            <p className="text-white/75 text-[15px] leading-relaxed mb-8 max-w-[480px]">
              Meet the visionary force behind central India's leading company, Our expert 
              therapeutic Dietitian Poonam Sagar - a dynamic and inspirational leader, a powerful 
              women entrepreneur, and the guiding light of our dedicated team of dietitians.
            </p>
            
            <div className="flex gap-3.5 flex-wrap">
              <button 
                onClick={() => {
                  const product = {
                    id: 'therapeutic-plan-3months',
                    name: 'Therapeutic Plan - 3 Months',
                    price: 13000,
                    quantity: 1
                  };
                  sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
                  window.location.href = '/checkout';
                }}
                className="bg-[#FF850B] text-white border-none rounded-full py-3.5 px-7 text-sm font-semibold cursor-pointer flex items-center gap-2 transition-all duration-300 shadow-[0_4px_20px_rgba(255,133,11,0.3)] hover:bg-[#e07a1a]">
                Get Started Today <span className="text-base">→</span>
              </button>
              <button className="bg-transparent text-white border-2 border-white/25 rounded-full py-3.5 px-7 text-sm font-semibold cursor-pointer transition-all duration-300 hover:border-white/50">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-[0_1_420px] flex justify-center items-center">
            <Image
              src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/d21d7b0157faacaede7445061a44a9041ebc0603.png"
              alt="Healthy Food Heart"
              width={420}
              height={420}
              className="w-full h-auto max-w-[420px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            />
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Health Section - Mobile */}
      <section className="bg-white py-10 px-4 md:hidden">
        <div className="max-w-full mx-auto text-center">
          {/* Success Stories Section */}
          <TransformationGallery 
            page="therapeutic"
            title="Transform Your Health with Expert Nutrition Plan"
            subtitle="Embark on a transformative journey of wellness and success, led by our true industry trailblazer."
            maxItems={6}
          />

          {/* We are Most Trusted */}
          <div className="mb-8 mt-8">
            <p className="font-['Pacifico',cursive] text-3xl text-[#333] -mb-1 font-normal">We are</p>
            <h2 className="text-4xl font-extrabold text-[#FF850B] font-[Epilogue,sans-serif] m-0">Most Trusted</h2>
          </div>

          {/* Stats - 2 columns on mobile */}
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center bg-[#f8f9fa] rounded-2xl py-6 px-3">
              <div className="text-3xl font-bold text-[#1a1a1a] mb-1">98%</div>
              <div className="text-[#666] text-xs font-medium">Success Rate</div>
            </div>
            <div className="text-center bg-[#f8f9fa] rounded-2xl py-6 px-3">
              <div className="text-3xl font-bold text-[#1a1a1a] mb-1">4.9</div>
              <div className="text-[#666] text-xs font-medium">Average Rating</div>
            </div>
            <div className="text-center bg-[#f8f9fa] rounded-2xl py-6 px-3">
              <div className="text-3xl font-bold text-[#1a1a1a] mb-1">100K+</div>
              <div className="text-[#666] text-xs font-medium">Success Stories</div>
            </div>
            <div className="text-center bg-[#f8f9fa] rounded-2xl py-6 px-3">
              <div className="text-3xl font-bold text-[#1a1a1a] mb-1">#1</div>
              <div className="text-[#666] text-xs font-medium">Achievements</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Health Section - Desktop */}
      <section className="bg-white py-24 px-5 hidden md:block">
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Success Stories Section */}
          <TransformationGallery 
            page="therapeutic"
            title="Transform Your Health with Expert Nutrition Plan"
            subtitle="Embark on a transformative journey of wellness and success, led by our true industry trailblazer."
            maxItems={6}
          />

          {/* We are Most Trusted */}
          <div className="mb-16">
            <p className="font-['Pacifico',cursive] text-5xl text-[#333] -mb-2.5 font-normal">We are</p>
            <h2 className="text-7xl font-extrabold text-[#FF850B] font-[Epilogue,sans-serif] m-0">Most Trusted</h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-7 max-w-[1000px] mx-auto">
            <div className="text-center bg-[#f8f9fa] rounded-[20px] py-10 px-5">
              <div className="text-[52px] font-bold text-[#1a1a1a] mb-2">98%</div>
              <div className="text-[#666] text-[15px] font-medium">Success Rate</div>
            </div>
            <div className="text-center bg-[#f8f9fa] rounded-[20px] py-10 px-5">
              <div className="text-[52px] font-bold text-[#1a1a1a] mb-2">4.9</div>
              <div className="text-[#666] text-[15px] font-medium">Average Rating</div>
            </div>
            <div className="text-center bg-[#f8f9fa] rounded-[20px] py-10 px-5">
              <div className="text-[52px] font-bold text-[#1a1a1a] mb-2">100K+</div>
              <div className="text-[#666] text-[15px] font-medium">Success Stories</div>
            </div>
            <div className="text-center bg-[#f8f9fa] rounded-[20px] py-10 px-5">
              <div className="text-[52px] font-bold text-[#1a1a1a] mb-2">#1</div>
              <div className="text-[#666] text-[15px] font-medium">Achievements & Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Do You Get Section - Mobile */}
      <section className="bg-[#f8f9fa] py-10 px-4 md:hidden">
        <div className="max-w-full mx-auto">
          <h2 className="text-2xl font-bold text-[#FF850B] leading-tight mb-3 font-[Epilogue,sans-serif] text-center">
            What do you get?
          </h2>
          <div className="w-[40px] h-1 bg-[#0d4043] mx-auto mb-6 rounded-sm" />

          <div className="flex flex-col gap-3">
            {whatYouGet.map((item, index) => {
              const isHighlighted = index === 4 || index === 7;
              return (
                <div key={index} className={`rounded-2xl py-4 px-4 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 ${
                  isHighlighted ? 'bg-[#0d4043]' : 'bg-white'
                }`}>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${
                    isHighlighted ? 'bg-[#FF850B]' : 'bg-[#0d4043]'
                  }`}>
                    <span className="text-white text-sm font-bold">{item.number}</span>
                  </div>
                  <h3 className={`text-sm font-semibold m-0 leading-normal ${
                    isHighlighted ? 'text-white' : 'text-[#333]'
                  }`}>{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Do You Get Section - Desktop */}
      <section className="bg-[#f8f9fa] py-24 px-5 hidden md:block">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[44px] font-bold text-[#FF850B] leading-tight mb-4 font-[Epilogue,sans-serif] text-center">
            What do you get?
          </h2>
          <div className="w-[60px] h-1 bg-[#0d4043] mx-auto mb-12 rounded-sm" />

          <div className="grid grid-cols-3 gap-6">
            {whatYouGet.map((item, index) => {
              const isHighlighted = index === 4 || index === 7;
              return (
                <div key={index} className={`rounded-[20px] py-7 px-6 flex items-center gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer relative ${
                  isHighlighted ? 'bg-[#0d4043]' : 'bg-white'
                }`}>
                  <div className={`flex items-center justify-center w-14 h-14 rounded-[14px] shrink-0 ${
                    isHighlighted ? 'bg-[#FF850B]' : 'bg-[#0d4043]'
                  }`}>
                    <span className="text-white text-lg font-bold">{item.number}</span>
                  </div>
                  <div className="flex items-center gap-4 flex-1">
                    <h3 className={`text-base font-semibold m-0 leading-normal ${
                      isHighlighted ? 'text-white' : 'text-[#333]'
                    }`}>{item.title}</h3>
                    <div className="flex gap-2 ml-auto">
                      <div className={`w-[60px] h-[60px] rounded-full ${
                        isHighlighted ? 'bg-[rgba(255,133,11,0.3)]' : 'bg-[rgba(13,64,67,0.08)]'
                      }`} />
                      <div className={`w-10 h-10 rounded-full mt-5 ${
                        isHighlighted ? 'bg-[rgba(255,133,11,0.5)]' : 'bg-[rgba(13,64,67,0.15)]'
                      }`} />
                    </div>
                  </div>
                  {isHighlighted && (
                    <div className="absolute right-5 top-5 w-2 h-2 rounded-full bg-[#FF850B]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BMI Calculator Section - Mobile */}
      <section className="bg-[#FF850B] py-10 px-4 relative overflow-hidden md:hidden">
        <div className="flex flex-col gap-6">
          {/* Content */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white leading-tight mb-3 font-[Epilogue,sans-serif]">
              Flab or Fab? Find Out Fast!
            </h2>
            <p className="text-white/90 text-sm leading-relaxed">
              Enter your stats and get your body fat score in under 30 seconds.
            </p>
          </div>

          {/* Form */}
          <div className="bg-[#FFF5EC] rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <h3 className="text-[#1a1a1a] text-xl font-bold mb-5">Body Fat & BMI</h3>

            <div className="grid grid-cols-1 gap-3 mb-4">
              <div>
                <label className="block text-[#666] text-xs mb-1.5">Age (years)</label>
                <input
                  type="number"
                  value={bmiData.age}
                  onChange={(e) => setBmiData({...bmiData, age: e.target.value})}
                  className="w-full bg-white border-2 border-[#e0e0e0] rounded-xl py-3 px-3 text-[#333] text-sm outline-none box-border focus:border-[#FF850B]"
                />
              </div>
              <div>
                <label className="block text-[#666] text-xs mb-1.5">Gender</label>
                <select
                  value={bmiData.gender}
                  onChange={(e) => setBmiData({...bmiData, gender: e.target.value})}
                  className="w-full bg-white border-2 border-[#e0e0e0] rounded-xl py-3 px-3 text-[#333] text-sm outline-none box-border focus:border-[#FF850B]"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#666] text-xs mb-1.5">Height (ft)</label>
                  <input
                    type="number"
                    value={bmiData.heightFt}
                    onChange={(e) => setBmiData({...bmiData, heightFt: e.target.value})}
                    className="w-full bg-white border-2 border-[#e0e0e0] rounded-xl py-3 px-3 text-[#333] text-sm outline-none box-border focus:border-[#FF850B]"
                  />
                </div>
                <div>
                  <label className="block text-[#666] text-xs mb-1.5">Height (in)</label>
                  <input
                    type="number"
                    value={bmiData.heightIn}
                    onChange={(e) => setBmiData({...bmiData, heightIn: e.target.value})}
                    className="w-full bg-white border-2 border-[#e0e0e0] rounded-xl py-3 px-3 text-[#333] text-sm outline-none box-border focus:border-[#FF850B]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#666] text-xs mb-1.5">Weight (kg)</label>
                <input
                  type="number"
                  value={bmiData.weight}
                  onChange={(e) => setBmiData({...bmiData, weight: e.target.value})}
                  className="w-full bg-white border-2 border-[#e0e0e0] rounded-xl py-3 px-3 text-[#333] text-sm outline-none box-border focus:border-[#FF850B]"
                />
              </div>
            </div>

            <button
              onClick={calculateBMI}
              className="bg-[#0d4043] text-white border-none rounded-xl py-3 px-8 text-sm font-semibold cursor-pointer w-full transition-all duration-300 hover:bg-[#0a3033]"
            >
              Calculate
            </button>

            {bmiResult && (
              <div className="mt-5 p-4 bg-white rounded-xl border-2 border-[#e0e0e0]">
                <div className="text-[#1a1a1a] text-xl font-bold">
                  Your BMI: {bmiResult.bmi}
                </div>
                <div className="text-[#FF850B] text-base font-semibold mt-1">
                  Category: {bmiResult.category}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BMI Calculator Section - Desktop */}
      <section className="bg-[#FF850B] py-20 px-5 relative overflow-hidden hidden md:block">
        {/* Top wave decoration */}
        <div 
          className="absolute top-0 left-0 right-0 h-20 bg-cover"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100'%3E%3Cpath fill='%23f8f9fa' d='M0,0 C480,100 960,100 1440,0 L1440,0 L0,0 Z'/%3E%3C/svg%3E\")" }}
        />
        
        {/* Bottom wave decoration */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 bg-cover"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100'%3E%3Cpath fill='%23fff' d='M0,100 C480,0 960,0 1440,100 L1440,100 L0,100 Z'/%3E%3C/svg%3E\")" }}
        />
        
        <div className="max-w-[1100px] mx-auto flex items-center gap-16 flex-wrap py-10">
          {/* Left Content */}
          <div className="flex-[1_1_300px] max-w-[400px]">
            <h2 className="text-[42px] font-bold text-white leading-tight mb-5 font-[Epilogue,sans-serif]">
              Flab or Fab? Find Out Fast!
            </h2>
            <p className="text-white/90 text-[17px] leading-relaxed">
              Enter your stats and get your body fat score in under 30 seconds.
            </p>
          </div>

          {/* Right Form */}
          <div className="flex-[1_1_500px] bg-[#FFF5EC] rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <h3 className="text-[#1a1a1a] text-[28px] font-bold mb-7">Body Fat & BMI</h3>

            <div className="grid grid-cols-1 gap-4 mb-6">
              <div>
                <label className="block text-[#666] text-sm mb-2">Age (years)</label>
                <input
                  type="number"
                  placeholder=""
                  value={bmiData.age}
                  onChange={(e) => setBmiData({...bmiData, age: e.target.value})}
                  className="w-full bg-white border-2 border-[#e0e0e0] rounded-xl py-3.5 px-4 text-[#333] text-base outline-none box-border focus:border-[#FF850B]"
                />
              </div>
              <div>
                <label className="block text-[#666] text-sm mb-2">Gender</label>
                <select
                  value={bmiData.gender}
                  onChange={(e) => setBmiData({...bmiData, gender: e.target.value})}
                  className="w-full bg-white border-2 border-[#e0e0e0] rounded-xl py-3.5 px-4 text-[#333] text-base outline-none box-border focus:border-[#FF850B]"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#666] text-sm mb-2">Height (ft)</label>
                  <input
                    type="number"
                    placeholder=""
                    value={bmiData.heightFt}
                    onChange={(e) => setBmiData({...bmiData, heightFt: e.target.value})}
                    className="w-full bg-white border-2 border-[#e0e0e0] rounded-xl py-3.5 px-4 text-[#333] text-base outline-none box-border focus:border-[#FF850B]"
                  />
                </div>
                <div>
                  <label className="block text-[#666] text-sm mb-2">Height (in)</label>
                  <input
                    type="number"
                    placeholder=""
                    value={bmiData.heightIn}
                    onChange={(e) => setBmiData({...bmiData, heightIn: e.target.value})}
                    className="w-full bg-white border-2 border-[#e0e0e0] rounded-xl py-3.5 px-4 text-[#333] text-base outline-none box-border focus:border-[#FF850B]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#666] text-sm mb-2">Weight (kg)</label>
                <input
                  type="number"
                  placeholder=""
                  value={bmiData.weight}
                  onChange={(e) => setBmiData({...bmiData, weight: e.target.value})}
                  className="w-full bg-white border-2 border-[#e0e0e0] rounded-xl py-3.5 px-4 text-[#333] text-base outline-none box-border focus:border-[#FF850B]"
                />
              </div>
            </div>

            <button
              onClick={calculateBMI}
              className="bg-[#0d4043] text-white border-none rounded-xl py-4 px-12 text-base font-semibold cursor-pointer w-full transition-all duration-300 hover:bg-[#0a3033]"
            >
              Calculate
            </button>

            {bmiResult && (
              <div className="mt-7 p-5 bg-white rounded-2xl border-2 border-[#e0e0e0]">
                <div className="text-[#1a1a1a] text-2xl font-bold">
                  Your BMI: {bmiResult.bmi}
                </div>
                <div className="text-[#FF850B] text-lg font-semibold mt-2">
                  Category: {bmiResult.category}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section - Mobile */}
      <section className="bg-white px-4 py-10 md:hidden">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="text-center mb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-[#FF850B]">Exclusive Offers</p>
            <h2 className="mb-3 font-[Epilogue] text-2xl font-bold leading-[1.2] text-[#1a1a1a]">
              Choose Your Perfect Plan
            </h2>
            <p className="mx-auto max-w-full text-sm leading-[1.6] text-[#666]">
              Flexible pricing options designed to fit your wellness journey.
            </p>
          </div>

          <div className="w-full">
            <DynamicPlansDisplay
              category="therapeutic-diet-plans"
              showHeader={false}
              columns="1"
              onSelectPlan={(plan) => {
                const product = {
                  id: `therapeutic-${plan.planName.toLowerCase().replace(/\s+/g, '-')}`,
                  name: `Therapeutic Diet Plan - ${plan.planName}`,
                  price: plan.price,
                  quantity: 1
                };
                sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
                window.location.href = '/checkout';
              }}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section - Desktop */}
      <section className="bg-white px-5 py-[100px] hidden md:block">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="text-center mb-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-[#FF850B]">Exclusive Offers</p>
            <h2 className="mb-5 font-[Epilogue] text-[44px] font-bold leading-[1.2] text-[#1a1a1a]">
              Choose Your Perfect Plan
            </h2>
            <p className="mx-auto max-w-[600px] text-[17px] leading-[1.7] text-[#666]">
              Flexible pricing options designed to fit your wellness journey.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <div className="max-w-[1400px] w-full px-5">
              <DynamicPlansDisplay
                category="therapeutic-diet-plans"
                showHeader={false}
                columns="3"
                onSelectPlan={(plan) => {
                  const product = {
                    id: `therapeutic-${plan.planName.toLowerCase().replace(/\s+/g, '-')}`,
                    name: `Therapeutic Diet Plan - ${plan.planName}`,
                    price: plan.price,
                    quantity: 1
                  };
                  sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
                  window.location.href = '/checkout';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories Section - Hidden since we show it earlier */}

      {/* Watch Success Stories Section - Mobile */}
      <section className="bg-white py-10 px-4 md:hidden">
        <div className="max-w-full mx-auto text-center">
          <p className="text-[#FF850B] text-xs font-semibold tracking-[2px] uppercase mb-2">
            Real Stories, Real Results
          </p>
          <h2 className="text-xl font-bold text-[#1a1a1a] leading-tight mb-3 font-[Epilogue,sans-serif]">
            Watch Our Success Stories
          </h2>
          <p className="text-[#666] text-sm leading-relaxed max-w-full mx-auto mb-6">
            Hear directly from our clients about their transformative journey.
          </p>

          {/* Phone mockups - 2 per row on mobile */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {youtubeVideos.slice(0, 4).map((videoId, index) => (
              <a
                key={index}
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block no-underline"
              >
                <div className="w-full aspect-[9/16] max-w-[140px] mx-auto bg-black rounded-[24px] p-1.5 relative shadow-[0_10px_30px_rgba(0,0,0,0.2)] border-[2px] border-[#333]">
                  {/* Video thumbnail */}
                  <div className="w-full h-full rounded-[18px] overflow-hidden relative">
                    <Image
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt="Success Story"
                      fill
                      className="object-cover"
                    />
                    
                    {/* Play button */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-[#1a1a1a] ml-0.5" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Success Stories Section - Desktop */}
      <section className="bg-white py-[100px] px-5 hidden md:block">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[#FF850B] text-sm font-semibold tracking-[2px] uppercase mb-4">
            Real Stories, Real Results
          </p>
          <h2 className="text-[44px] font-bold text-[#1a1a1a] leading-tight mb-5 font-[Epilogue,sans-serif]">
            Watch Our Success Stories
          </h2>
          <p className="text-[#666] text-[17px] leading-relaxed max-w-[600px] mx-auto mb-[60px]">
            Hear directly from our clients about their transformative journey.
          </p>

          {/* Phone mockups slider */}
          <div className="flex justify-center gap-5 flex-wrap mb-10">
            {youtubeVideos.slice(0, 5).map((videoId, index) => (
              <a
                key={index}
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block no-underline"
              >
                <div className="w-[180px] h-[380px] bg-black rounded-[36px] p-2 relative shadow-[0_20px_60px_rgba(0,0,0,0.2)] border-[3px] border-[#333]">
                  {/* Phone notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[70px] h-6 bg-black rounded-[20px] z-10" />
                  
                  {/* Status bar */}
                  <div className="absolute top-3 left-5 right-5 flex justify-between items-center z-[5]">
                    <span className="text-white text-xs font-semibold">5:13</span>
                    <div className="flex gap-1 items-center">
                      <span className="text-white text-[10px]">⦿</span>
                      <span className="text-white text-[10px]">📶</span>
                      <span className="text-white text-[10px]">🔋</span>
                    </div>
                  </div>
                  
                  {/* Video thumbnail */}
                  <div className="w-full h-full rounded-[28px] overflow-hidden relative">
                    <Image
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt="Success Story"
                      fill
                      className="object-cover"
                    />
                    
                    {/* Play button */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-white/90 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-[#1a1a1a] ml-1" />
                    </div>
                    
                    {/* Bottom navigation bar */}
                    <div className="absolute bottom-2.5 left-5 right-5 flex justify-around items-center">
                      <span className="text-lg">🏠</span>
                      <span className="text-lg">🔍</span>
                      <span className="text-lg">👤</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile */}
      <section className="bg-gradient-to-br from-[#0d4043] to-[#0a2f31] py-10 px-4 md:hidden">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-2xl font-bold text-white leading-tight mb-3 font-[Epilogue,sans-serif]">
            Ready to Transform Your <span className="text-[#FF850B]">Health</span>?
          </h2>
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            Start your personalized therapeutic diet plan today and experience the change you deserve.
          </p>
          <button 
            onClick={() => {
              const product = {
                id: 'therapeutic-plan-3months',
                name: 'Therapeutic Plan - 3 Months',
                price: 13000,
                quantity: 1
              };
              sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
              window.location.href = '/checkout';
            }}
            className="bg-[#FF850B] text-white border-none rounded-full py-3 px-8 text-sm font-semibold cursor-pointer w-full"
          >
            Book Your Consultation →
          </button>
        </div>
      </section>

      {/* CTA Section - Desktop */}
      <section className="bg-gradient-to-br from-[#0d4043] to-[#0a2f31] py-20 px-5 hidden md:block">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[42px] font-bold text-white leading-tight mb-5 font-[Epilogue,sans-serif]">
            Ready to Transform Your <span className="text-[#FF850B]">Health</span>?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Start your personalized therapeutic diet plan today and experience the change you deserve.
          </p>
          <button 
            onClick={() => {
              const product = {
                id: 'therapeutic-plan-3months',
                name: 'Therapeutic Plan - 3 Months',
                price: 13000,
                quantity: 1
              };
              sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
              window.location.href = '/checkout';
            }}
            className="bg-[#FF850B] text-white border-none rounded-full py-[18px] px-12 text-lg font-semibold cursor-pointer"
          >
            Book Your Consultation →
          </button>
        </div>
      </section>
    </main>
  );
}
