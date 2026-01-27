"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TransformationGallery from '@/components/TransformationGallery';
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
    <>
      {/* Hero Section with integrated Navbar */}
      <section style={{
        background: '#fff',
        padding: '12px 50px 0 50px',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #0d4043 0%, #0a2f31 100%)',
          borderRadius: '30px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '620px',
        }}>
          {/* Navbar inside the hero section */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <Navbar />
          </div>

          {/* Hero Content */}
          <div style={{ padding: '40px 60px 100px' }}>
            {/* Background decorative elements */}
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '-5%',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(255,133,11,0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none'
            }} />
        
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '40px'
        }}>
          {/* Left Content */}
          <div style={{ flex: '1 1 480px', maxWidth: '580px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.08)',
              padding: '10px 18px',
              borderRadius: '50px',
              marginBottom: '24px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <span style={{ fontSize: '14px' }}>✨</span>
              <span style={{ color: '#fff', fontSize: '13px', fontWeight: 500 }}>For Healthier, Happier you</span>
            </div>
            
            <h1 style={{
              fontSize: '48px',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '24px',
              fontFamily: 'Epilogue, sans-serif',
              letterSpacing: '-0.5px'
            }}>
              Therapeutic Diet<br />
              Plans: Mend-<br />
              Your-Menu
            </h1>
            
            <p style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: '15px',
              lineHeight: 1.75,
              marginBottom: '32px',
              maxWidth: '480px'
            }}>
              Meet the visionary force behind central India's leading company, Our expert 
              therapeutic Dietitian Poonam Sagar - a dynamic and inspirational leader, a powerful 
              women entrepreneur, and the guiding light of our dedicated team of dietitians.
            </p>
            
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
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
                style={{
                background: '#FF850B',
                color: '#fff',
                border: 'none',
                borderRadius: '50px',
                padding: '14px 28px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(255,133,11,0.3)'
              }}>
                Get Started Today <span style={{ fontSize: '16px' }}>→</span>
              </button>
              <button style={{
                background: 'transparent',
                color: '#fff',
                border: '2px solid rgba(255,255,255,0.25)',
                borderRadius: '50px',
                padding: '14px 28px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div style={{ 
            flex: '0 1 420px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image
              src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/d21d7b0157faacaede7445061a44a9041ebc0603.png"
              alt="Healthy Food Heart"
              width={420}
              height={420}
              style={{ 
                width: '100%', 
                height: 'auto',
                maxWidth: '420px',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
              }}
            />
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Health Section */}
      <section style={{ background: '#fff', padding: '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            color: '#FF850B',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            Transform Your Health
          </p>
          <h2 style={{
            fontSize: '44px',
            fontWeight: 700,
            color: '#1a1a1a',
            lineHeight: 1.2,
            marginBottom: '20px',
            fontFamily: 'Epilogue, sans-serif'
          }}>
            Transform Your Health with Expert Nutrition Plan
          </h2>
          <p style={{
            color: '#666',
            fontSize: '17px',
            lineHeight: 1.7,
            maxWidth: '680px',
            margin: '0 auto 60px'
          }}>
            Embark on a transformative journey of wellness and success, led by our true industry trailblazer.
          </p>

          {/* Success Stories Section */}
          <TransformationGallery 
            page="therapeutic"
            title="Transform Your Health with Expert Nutrition Plan"
            subtitle="Embark on a transformative journey of wellness and success, led by our true industry trailblazer."
            maxItems={6}
          />

          {/* We are Most Trusted */}
          <div style={{ marginBottom: '60px' }}>
            <p style={{
              fontFamily: "'Pacifico', cursive",
              fontSize: '48px',
              color: '#333',
              marginBottom: '-10px',
              fontWeight: 400
            }}>We are</p>
            <h2 style={{
              fontSize: '72px',
              fontWeight: 800,
              color: '#FF850B',
              fontFamily: 'Epilogue, sans-serif',
              margin: 0
            }}>Most Trusted</h2>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ 
              textAlign: 'center',
              background: '#f8f9fa',
              borderRadius: '20px',
              padding: '40px 20px'
            }}>
              <div style={{ fontSize: '52px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>98%</div>
              <div style={{ color: '#666', fontSize: '15px', fontWeight: 500 }}>Success Rate</div>
            </div>
            <div style={{ 
              textAlign: 'center',
              background: '#f8f9fa',
              borderRadius: '20px',
              padding: '40px 20px'
            }}>
              <div style={{ fontSize: '52px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>4.9</div>
              <div style={{ color: '#666', fontSize: '15px', fontWeight: 500 }}>Average Rating</div>
            </div>
            <div style={{ 
              textAlign: 'center',
              background: '#f8f9fa',
              borderRadius: '20px',
              padding: '40px 20px'
            }}>
              <div style={{ fontSize: '52px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>100K+</div>
              <div style={{ color: '#666', fontSize: '15px', fontWeight: 500 }}>Success Stories</div>
            </div>
            <div style={{ 
              textAlign: 'center',
              background: '#f8f9fa',
              borderRadius: '20px',
              padding: '40px 20px'
            }}>
              <div style={{ fontSize: '52px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>#1</div>
              <div style={{ color: '#666', fontSize: '15px', fontWeight: 500 }}>Achievements & Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Do You Get Section */}
      <section style={{ background: '#f8f9fa', padding: '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '44px',
            fontWeight: 700,
            color: '#FF850B',
            lineHeight: 1.2,
            marginBottom: '16px',
            fontFamily: 'Epilogue, sans-serif',
            textAlign: 'center'
          }}>
            What do you get?
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: '#0d4043',
            margin: '0 auto 50px',
            borderRadius: '2px'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            {whatYouGet.map((item, index) => {
              const isHighlighted = index === 4 || index === 7;
              return (
                <div key={index} style={{
                  background: isHighlighted ? '#0d4043' : '#fff',
                  borderRadius: '20px',
                  padding: '28px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: '0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '56px',
                    height: '56px',
                    background: isHighlighted ? '#FF850B' : '#0d4043',
                    borderRadius: '14px',
                    flexShrink: 0
                  }}>
                    <span style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>{item.number}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    flex: 1
                  }}>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: isHighlighted ? '#fff' : '#333',
                      margin: 0,
                      lineHeight: 1.4
                    }}>{item.title}</h3>
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      marginLeft: 'auto'
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: isHighlighted ? 'rgba(255,133,11,0.3)' : 'rgba(13,64,67,0.08)'
                      }} />
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: isHighlighted ? 'rgba(255,133,11,0.5)' : 'rgba(13,64,67,0.15)',
                        marginTop: '20px'
                      }} />
                    </div>
                  </div>
                  {isHighlighted && (
                    <div style={{
                      position: 'absolute',
                      right: '20px',
                      top: '20px',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#FF850B'
                    }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section style={{
        background: '#FF850B',
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Top wave decoration */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 100\'%3E%3Cpath fill=\'%23f8f9fa\' d=\'M0,0 C480,100 960,100 1440,0 L1440,0 L0,0 Z\'/%3E%3C/svg%3E")',
          backgroundSize: 'cover'
        }} />
        
        {/* Bottom wave decoration */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 100\'%3E%3Cpath fill=\'%23fff\' d=\'M0,100 C480,0 960,0 1440,100 L1440,100 L0,100 Z\'/%3E%3C/svg%3E")',
          backgroundSize: 'cover'
        }} />
        
        <div style={{ 
          maxWidth: '1100px', 
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '60px',
          flexWrap: 'wrap',
          padding: '40px 0'
        }}>
          {/* Left Content */}
          <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.2,
              marginBottom: '20px',
              fontFamily: 'Epilogue, sans-serif'
            }}>
              Flab or Fab? Find Out Fast!
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '17px',
              lineHeight: 1.7
            }}>
              Enter your stats and get your body fat score in under 30 seconds.
            </p>
          </div>

          {/* Right Form */}
          <div style={{
            flex: '1 1 500px',
            background: '#FFF5EC',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
          }}>
            <h3 style={{
              color: '#1a1a1a',
              fontSize: '28px',
              fontWeight: 700,
              marginBottom: '30px'
            }}>Body Fat & BMI</h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '16px',
              marginBottom: '24px'
            }}>
              <div>
                <label style={{ display: 'block', color: '#666', fontSize: '14px', marginBottom: '8px' }}>Age (years)</label>
                <input
                  type="number"
                  placeholder=""
                  value={bmiData.age}
                  onChange={(e) => setBmiData({...bmiData, age: e.target.value})}
                  style={{
                    width: '100%',
                    background: '#fff',
                    border: '2px solid #e0e0e0',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    color: '#333',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', color: '#666', fontSize: '14px', marginBottom: '8px' }}>Gender</label>
                <select
                  value={bmiData.gender}
                  onChange={(e) => setBmiData({...bmiData, gender: e.target.value})}
                  style={{
                    width: '100%',
                    background: '#fff',
                    border: '2px solid #e0e0e0',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    color: '#333',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', color: '#666', fontSize: '14px', marginBottom: '8px' }}>Height (ft)</label>
                  <input
                    type="number"
                    placeholder=""
                    value={bmiData.heightFt}
                    onChange={(e) => setBmiData({...bmiData, heightFt: e.target.value})}
                    style={{
                      width: '100%',
                      background: '#fff',
                      border: '2px solid #e0e0e0',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      color: '#333',
                      fontSize: '16px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#666', fontSize: '14px', marginBottom: '8px' }}>Height (in)</label>
                  <input
                    type="number"
                    placeholder=""
                    value={bmiData.heightIn}
                    onChange={(e) => setBmiData({...bmiData, heightIn: e.target.value})}
                    style={{
                      width: '100%',
                      background: '#fff',
                      border: '2px solid #e0e0e0',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      color: '#333',
                      fontSize: '16px',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', color: '#666', fontSize: '14px', marginBottom: '8px' }}>Weight (kg)</label>
                <input
                  type="number"
                  placeholder=""
                  value={bmiData.weight}
                  onChange={(e) => setBmiData({...bmiData, weight: e.target.value})}
                  style={{
                    width: '100%',
                    background: '#fff',
                    border: '2px solid #e0e0e0',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    color: '#333',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            <button
              onClick={calculateBMI}
              style={{
                background: '#0d4043',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                padding: '18px 48px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
            >
              Calculate
            </button>

            {bmiResult && (
              <div style={{
                marginTop: '30px',
                padding: '20px',
                background: '#fff',
                borderRadius: '16px',
                border: '2px solid #e0e0e0'
              }}>
                <div style={{ color: '#1a1a1a', fontSize: '24px', fontWeight: 700 }}>
                  Your BMI: {bmiResult.bmi}
                </div>
                <div style={{ color: '#FF850B', fontSize: '18px', fontWeight: 600, marginTop: '8px' }}>
                  Category: {bmiResult.category}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white px-5 py-[100px]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-[#FF850B]">Exclusive Offers</p>
            <h2 className="mb-5 font-[Epilogue] text-[44px] font-bold leading-[1.2] text-[#1a1a1a]">
              Choose Your Perfect Plan
            </h2>
            <p className="mx-auto max-w-[600px] text-[17px] leading-[1.7] text-[#666]">
              Flexible pricing options designed to fit your wellness journey.
            </p>
          </div>

          <div className="relative flex w-full max-w-[980px] flex-col items-center gap-8 lg:flex-row lg:items-stretch">
            <div className="group relative w-full max-w-[560px] overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <div className="relative h-full min-h-[420px]">
                <div className="absolute inset-0 flex flex-col justify-between bg-white p-10 transition-transform duration-500 ease-out group-hover:-translate-x-full">
                  <div>
                    <h3 className="text-[34px] font-bold leading-[1.1] text-[#0f172a]">
                      One<br />Month<br />Plan
                    </h3>
                    <div className="mt-4 text-lg text-[#8b8b8b]">
                      <span className="line-through">₹ 5,000</span>
                      <span className="ml-3 block text-[32px] font-semibold text-[#FF850B]">₹ 4,500</span>
                    </div>
                  </div>
                  <p className="text-sm italic text-[#9b9b9b]">Hover above the card !</p>
                </div>

                <div className="absolute inset-0 flex flex-col justify-between bg-[#0d4043] p-10 text-white transition-transform duration-500 ease-out translate-x-full group-hover:translate-x-0">
                  <div>
                    <div className="text-lg font-semibold">
                      One Month Plan - <span className="line-through opacity-70">₹ 5,000</span>
                    </div>
                    <div className="mt-2 text-[28px] font-bold text-[#FFB154]">₹ 4,500</div>
                    <ul className="mt-6 space-y-3 text-sm leading-6">
                      <li>8 hours of Chat support</li>
                      <li>Dietitian Consultation (12)</li>
                      <li>Customized Meal Plan</li>
                      <li>Progress Tracking</li>
                      <li>Diet Recipe eBook (100+)</li>
                      <li>Stay on track: weekly check ins to ensure your progress.</li>
                    </ul>
                  </div>
                  <a
                    href="https://dtpoonamsagar.com/checkout/?buy-now=35346&quantity=1"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex"
                  >
                    <button className="rounded-full bg-[#FF850B] px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,133,11,0.35)] transition-transform duration-300 hover:scale-[1.02]">
                      Start Today
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative flex w-full max-w-[360px] items-center justify-center">
              <div className="relative h-[320px] w-[320px]">
                <Image
                  src="https://www.dtpoonamsagar.com/wp-content/uploads/2025/05/One-Month.png"
                  alt="One Month Plan"
                  fill
                  className="object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.2)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories Section - Hidden since we show it earlier */}

      {/* Watch Success Stories Section */}
      <section style={{ background: '#fff', padding: '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            color: '#FF850B',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            Real Stories, Real Results
          </p>
          <h2 style={{
            fontSize: '44px',
            fontWeight: 700,
            color: '#1a1a1a',
            lineHeight: 1.2,
            marginBottom: '20px',
            fontFamily: 'Epilogue, sans-serif'
          }}>
            Watch Our Success Stories
          </h2>
          <p style={{
            color: '#666',
            fontSize: '17px',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto 60px'
          }}>
            Hear directly from our clients about their transformative journey.
          </p>

          {/* Phone mockups slider */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            {youtubeVideos.slice(0, 5).map((videoId, index) => (
              <a
                key={index}
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textDecoration: 'none'
                }}
              >
                <div style={{
                  width: '180px',
                  height: '380px',
                  background: '#000',
                  borderRadius: '36px',
                  padding: '8px',
                  position: 'relative',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                  border: '3px solid #333'
                }}>
                  {/* Phone notch */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '70px',
                    height: '24px',
                    background: '#000',
                    borderRadius: '20px',
                    zIndex: 10
                  }} />
                  
                  {/* Status bar */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '20px',
                    right: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 5
                  }}>
                    <span style={{ color: '#fff', fontSize: '12px', fontWeight: 600 }}>5:13</span>
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                      <span style={{ color: '#fff', fontSize: '10px' }}>⦿</span>
                      <span style={{ color: '#fff', fontSize: '10px' }}>📶</span>
                      <span style={{ color: '#fff', fontSize: '10px' }}>🔋</span>
                    </div>
                  </div>
                  
                  {/* Video thumbnail */}
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '28px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <Image
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt="Success Story"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    
                    {/* Play button */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '50px',
                      height: '50px',
                      background: 'rgba(255,255,255,0.9)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: 0,
                        height: 0,
                        borderTop: '10px solid transparent',
                        borderBottom: '10px solid transparent',
                        borderLeft: '16px solid #1a1a1a',
                        marginLeft: '4px'
                      }} />
                    </div>
                    
                    {/* Bottom navigation bar */}
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '20px',
                      right: '20px',
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontSize: '18px' }}>🏠</span>
                      <span style={{ fontSize: '18px' }}>🔍</span>
                      <span style={{ fontSize: '18px' }}>👤</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0d4043 0%, #0a2f31 100%)',
        padding: '80px 20px'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '20px',
            fontFamily: 'Epilogue, sans-serif'
          }}>
            Ready to Transform Your <span style={{ color: '#FF850B' }}>Health</span>?
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '18px',
            lineHeight: 1.7,
            marginBottom: '40px'
          }}>
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
            style={{
            background: '#FF850B',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            padding: '18px 48px',
            fontSize: '18px',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            Book Your Consultation →
          </button>
        </div>
      </section>
    </>
  );
}
