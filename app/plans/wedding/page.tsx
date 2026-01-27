"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TransformationShowcase from '@/components/TransformationShowcase';
import LoseWeightSection from '@/components/LoseWeightSection';
import DynamicPlansDisplay from '@/components/DynamicPlansDisplay';
import { getPricingByCategory } from '@/lib/api';
import type { Pricing } from '@/lib/api';

// Tab data for "What Happens" section
const tabsData: Record<string, { image: string; benefits: string[] }> = {
  brides: {
    image: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Bride.png",
    benefits: [
      "You'll drop those extra inches with real, home-cooked food.",
      "Skin looks clearer and naturally glowing.",
      "Hair feels stronger and healthier from within.",
      "Energy stays consistent through long functions.",
      "You feel fresh, light, and comfortable in your outfits."
    ]
  },
  grooms: {
    image: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Groom.png",
    benefits: [
      "Better sherwani fit and confident posture.",
      "Sharper jawline and reduced puffiness.",
      "Stamina improves during busy wedding days.",
      "Better digestion with clean meals.",
      "You look naturally sharp in pictures."
    ]
  },
  couples: {
    image: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Couple.png",
    benefits: [
      "Both partners feel fit & confident.",
      "Shared food routine improves bonding.",
      "Glow shows naturally in wedding photos.",
      "No starving — full satisfying meals.",
      "You look and feel great together."
    ]
  },
  guests: {
    image: "https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Guest-1.png",
    benefits: [
      "Stay light and comfortable through events.",
      "Better digestion reduces bloating.",
      "Skin looks naturally bright in pictures.",
      "Energy stays stable throughout functions.",
      "Feel confident and fresh in outfits."
    ]
  }
};

const transformations = [
  { name: 'Anshu Jain', loss: '5 kgs', days: '25 Days', image: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Anshu-Jain-min-1.webp' },
  { name: 'Sarika', loss: '5 kgs', days: '25 Days', image: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Sarika-min-1.webp' },
  { name: 'Shusheel', loss: '6 kgs', days: '30 Days', image: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Shusheel-min-1.webp' },
];

const pricingPlans = [
  {
    duration: '10 Days Trial',
    badge: 'LIMITED OFFER!',
    price: '₹399',
    originalPrice: '₹999',
    features: [
      'Pre-Wedding Detox Plan',
      'Visible Inch loss',
      { text: 'Skin & hair Care Diets', crossed: true },
      { text: 'Anemia Treatment', crossed: true },
      'Easy Workouts',
      '8hrs/day Availability',
      'Dietitian Consultation (3)',
      'Customised Diet Plan',
      '20+ Diet Recipe E Book',
      'Weekly Check-ins'
    ],
    timeline: 'quick debloat & routine kickstart'
  },
  {
    duration: '01 Month',
    badge: 'Most Popular',
    price: '₹4999',
    originalPrice: '₹6000',
    features: [
      'Pre-Wedding Detox Plan',
      'Visible Inch loss',
      { text: 'Skin & hair Care Diets', crossed: true },
      'Anemia Treatment',
      'Easy Workouts',
      '8hrs/day Availability',
      'Dietitian Consultation (12)',
      'Customised Diet Plan',
      '50+ Diet Recipe E Book',
      'Weekly Check-ins'
    ],
    timeline: 'fast inch loss for outfits'
  },
  {
    duration: '03 Months',
    badge: 'Premium',
    price: '₹7999',
    originalPrice: '₹11000',
    features: [
      'Pre-Wedding Detox Plan',
      'Visible Inch loss',
      'Skin & hair Care Diets',
      'Anemia Treatment',
      'Easy Workouts',
      '8hrs/day Availability',
      'Dietitian Consultation (18)',
      'Customised Diet Plan',
      '100+ Diet Recipe E Book',
      'Weekly Check-ins'
    ],
    timeline: 'deeper fat loss + glow rebuild'
  },
  {
    duration: '06 Months',
    badge: 'Most Effective',
    price: '₹11000',
    originalPrice: '₹15000',
    features: [
      'Pre-Wedding Detox Plan',
      'Visible Inch loss',
      'Skin & hair Care Diets',
      'Anemia Treatment',
      'Easy Workouts',
      '8hrs/day Availability',
      'Customised Diet Plan',
      'Dietitian Consultation upto(20)',
      '150+ Diet Recipe E Book',
      'Weekly Check-ins'
    ],
    timeline: 'long-term change + maintenance'
  }
];

// Fallback pricing if database is empty
const fallbackPricingPlans = pricingPlans;

const awards = [
  {
    image: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/image-27.webp',
    title: 'News 18 Narayani Namah Award'
  },
  {
    image: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/image-24-1.webp',
    title: 'Dainik Bhaskar Women Entrepreneur Award'
  },
  {
    image: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/0010-600x450-1.webp',
    title: 'Iconic Business Women (Health & Nutrition) Award 2024'
  }
];

export default function WeddingPlanPage() {
  const [activeTab, setActiveTab] = useState('brides');
  const [pricingPlans, setPricingPlans] = useState<any[]>(fallbackPricingPlans);
  const [loadingPricing, setLoadingPricing] = useState(true);

  // Fetch pricing from database on component mount
  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const dbPricing = await getPricingByCategory('new-wedding-plan');
        
        if (dbPricing && dbPricing.length > 0) {
          // Transform database pricing to match display format
          const formattedPricing = dbPricing.map((plan: Pricing) => ({
            duration: plan.duration,
            badge: plan.badge,
            price: `₹${plan.price}`,
            originalPrice: `₹${plan.originalPrice}`,
            features: plan.features.map(f => f.text),
            timeline: plan.durationLabel
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

  return (
    <>
      {/* Hero Section with Navbar */}
      <section className="wedding-hero-wrapper">
        <div className="wedding-hero-section">
          <Navbar />
          <div className="wedding-hero-content">
            <h1 className="wedding-hero-title">
              India&apos;s Only<br />
              <span className="wedding-highlight">Ghar Ka Khana</span> Diet Plan<br />
              That Gets You Wedding-Ready.
            </h1>
            <p className="wedding-hero-subtitle">
              Because you shouldn&apos;t have to suffer to look beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Lose 5-7 Kg Section with Dynamic Data */}
      <LoseWeightSection />

      {/* What Happens When You Start Section */}
      <section style={{ background: '#fff', padding: '50px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '48px',
            fontWeight: 700,
            color: '#000000',
            lineHeight: 1.3,
            marginBottom: '60px',
            fontFamily: 'Epilogue, sans-serif'
          }}>
            What Happens<br />
            When You Start the <span style={{ color: '#ff850b' }}>DTPS Wedding Plan</span>
          </h2>

          {/* Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px',
            maxWidth: '996px',
            margin: '0 auto 32px'
          }}>
            {/* Brides Tab */}
            <div
              onClick={() => setActiveTab('brides')}
              style={{
                height: '240px',
                width: '220px',
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: '0.3s',
                transform: activeTab === 'brides' ? 'translateY(-6px) scale(1.06)' : 'none'
              }}
            >
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderRadius: '24px',
                background: activeTab === 'brides' ? '#ff850b' : '#4e0101',
                width: '100%',
                height: '180px',
                transition: 'background 0.25s ease'
              }}></div>
              <div style={{ position: 'absolute', bottom: 0, left: 'calc(50% - 79px)', width: '159px', height: '240px' }}>
                <Image src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Images-2.png" alt="Brides" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderRadius: '24px',
                background: activeTab === 'brides'
                  ? 'linear-gradient(180deg, rgba(78,1,1,0) 55%, rgba(255,133,11,0.55) 100%)'
                  : 'linear-gradient(180deg, rgba(78,1,1,0) 60%, #4e0101)',
                width: '100%',
                height: '180px'
              }}></div>
              <div style={{
                position: 'absolute',
                top: '203px',
                left: 'calc(50% - 38px)',
                fontWeight: 600,
                color: '#fff',
                fontSize: '24px',
                textShadow: activeTab === 'brides' ? '0 1px 10px rgba(255,133,11,0.45)' : 'none'
              }}>Brides</div>
            </div>

            {/* Grooms Tab */}
            <div
              onClick={() => setActiveTab('grooms')}
              style={{
                height: '240px',
                width: '220px',
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: '0.3s',
                transform: activeTab === 'grooms' ? 'translateY(-6px) scale(1.06)' : 'none'
              }}
            >
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderRadius: '24px',
                background: activeTab === 'grooms' ? '#ff850b' : '#4e0101',
                width: '100%',
                height: '180px',
                transition: 'background 0.25s ease'
              }}></div>
              <div style={{ position: 'absolute', bottom: 0, left: 'calc(50% - 100px)', width: '201px', height: '240px' }}>
                <Image src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Images-3.png" alt="Grooms" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderRadius: '24px',
                background: activeTab === 'grooms'
                  ? 'linear-gradient(180deg, rgba(78,1,1,0) 55%, rgba(255,133,11,0.55) 100%)'
                  : 'linear-gradient(180deg, rgba(78,1,1,0) 60%, #4e0101)',
                width: '100%',
                height: '180px'
              }}></div>
              <div style={{
                position: 'absolute',
                top: '203px',
                left: 'calc(50% - 47px)',
                fontWeight: 600,
                color: '#fff',
                fontSize: '24px',
                textShadow: activeTab === 'grooms' ? '0 1px 10px rgba(255,133,11,0.45)' : 'none'
              }}>Grooms</div>
            </div>

            {/* Couples Tab */}
            <div
              onClick={() => setActiveTab('couples')}
              style={{
                height: '240px',
                width: '220px',
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: '0.3s',
                transform: activeTab === 'couples' ? 'translateY(-6px) scale(1.06)' : 'none'
              }}
            >
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderRadius: '24px',
                background: activeTab === 'couples' ? '#ff850b' : '#4e0101',
                width: '100%',
                height: '180px',
                transition: 'background 0.25s ease'
              }}></div>
              <div style={{ position: 'absolute', bottom: 0, left: 'calc(50% - 80px)', width: '161px', height: '240px' }}>
                <Image src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Images-4.png" alt="Couples" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderRadius: '24px',
                background: activeTab === 'couples'
                  ? 'linear-gradient(180deg, rgba(78,1,1,0) 55%, rgba(255,133,11,0.55) 100%)'
                  : 'linear-gradient(180deg, rgba(78,1,1,0) 60%, #4e0101)',
                width: '100%',
                height: '180px'
              }}></div>
              <div style={{
                position: 'absolute',
                top: '203px',
                left: 'calc(50% - 49px)',
                fontWeight: 600,
                color: '#fff',
                fontSize: '24px',
                textShadow: activeTab === 'couples' ? '0 1px 10px rgba(255,133,11,0.45)' : 'none'
              }}>Couples</div>
            </div>

            {/* Guests Tab */}
            <div
              onClick={() => setActiveTab('guests')}
              style={{
                height: '240px',
                width: '220px',
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: '0.3s',
                transform: activeTab === 'guests' ? 'translateY(-6px) scale(1.06)' : 'none'
              }}
            >
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderRadius: '24px',
                background: activeTab === 'guests' ? '#ff850b' : '#4e0101',
                width: '100%',
                height: '180px',
                transition: 'background 0.25s ease'
              }}></div>
              <div style={{ position: 'absolute', bottom: 0, left: 'calc(50% - 100.5px)', width: '202px', height: '240px' }}>
                <Image src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Images-5.png" alt="Guests" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderRadius: '24px',
                background: activeTab === 'guests'
                  ? 'linear-gradient(180deg, rgba(78,1,1,0) 55%, rgba(255,133,11,0.55) 100%)'
                  : 'linear-gradient(180deg, rgba(78,1,1,0) 60%, #4e0101)',
                width: '100%',
                height: '180px'
              }}></div>
              <div style={{
                position: 'absolute',
                top: '203px',
                left: 'calc(50% - 43px)',
                fontWeight: 600,
                color: '#fff',
                fontSize: '24px',
                textShadow: activeTab === 'guests' ? '0 1px 10px rgba(255,133,11,0.45)' : 'none'
              }}>Guests</div>
            </div>
          </div>

          {/* Tab Content Card */}
          <div style={{
            background: '#4e0101',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '467px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Orange Stripe */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '102px',
              background: '#ff850b',
              width: '180px',
              height: '100%'
            }}></div>
            {/* Main Image */}
            <Image
              src={tabsData[activeTab].image}
              alt={activeTab}
              width={410}
              height={459}
              style={{
                position: 'absolute',
                bottom: 0,
                left: '102px',
                objectFit: 'cover'
              }}
            />
            {/* Benefits */}
            <div style={{
              position: 'absolute',
              top: '126px',
              left: '510px',
              width: '580px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {tabsData[activeTab].benefits.map((benefit, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Image
                    src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/ion_diamond.svg"
                    alt="Diamond"
                    width={24}
                    height={24}
                  />
                  <div style={{
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    color: '#fff',
                    fontSize: '16px'
                  }}>{benefit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Over 75,000+ People Section */}
      <section style={{ background: '#fff', padding: '60px 20px' }}>
        <TransformationShowcase 
          page="wedding"
          title="People Enjoy Weight Loss"
          subtitle="Real Stories, Real Results - Join Our Community"
          maxItems={6}
        />
      </section>

      {/* Five Step Cycle Program Section */}
      <section style={{ background: '#000', padding: '50px 0 0', margin: '50px 0 0' }}>
        <div style={{ padding: '0 1rem' }}>
          <div style={{
            maxWidth: '1820px',
            margin: '0 auto',
            borderRadius: '50px',
            overflow: 'hidden',
            position: 'relative',
            background: '#4E0101',
            backgroundImage: 'url(https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/1f715e423077509b682c964bc8c674abca623e88-2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            padding: '70px 10px 80px'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(78, 1, 1, 0.95)'
            }}></div>
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <h2 style={{
                fontSize: '48px',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: '10px',
                fontFamily: 'Epilogue, sans-serif'
              }}>
                Our <span style={{ color: '#ff850b' }}>Five Step</span> Cycle Program
              </h2>
              <Image
                src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/cycle-illustration-1.svg"
                alt="Five Step Cycle"
                width={800}
                height={500}
                style={{ margin: '0 auto', maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why People Trust DTPS Section */}
      <section style={{ background: '#fff', padding: '50px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '48px',
            fontWeight: 700,
            color: '#000000',
            lineHeight: 1.3,
            marginBottom: '40px',
            fontFamily: 'Epilogue, sans-serif'
          }}>
            Why people trust <span style={{ color: '#ff850b' }}>DTPS</span>?
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '65%',
            margin: '0 auto'
          }}>
            <div style={{
              background: '#4E0101',
              borderRadius: '24px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              <Image
                src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/icon-our-journey-1.svg"
                alt="Icon"
                width={70}
                height={70}
              />
              <p style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 400, lineHeight: 1.6, margin: 0, fontFamily: 'DM Sans, sans-serif' }}>
                Personalised plan built around<br />your taste, work hours, travel, and culture
              </p>
            </div>
            <div style={{
              background: '#4E0101',
              borderRadius: '24px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              <Image
                src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/icon-our-journey-1.svg"
                alt="Icon"
                width={70}
                height={70}
              />
              <p style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 400, lineHeight: 1.6, margin: 0, fontFamily: 'DM Sans, sans-serif' }}>
                Medical aware for PCOS, thyroid,<br />and diabetes with reports considered
              </p>
            </div>
            <div style={{
              background: '#4E0101',
              borderRadius: '24px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              <Image
                src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/icon-our-journey-1.svg"
                alt="Icon"
                width={70}
                height={70}
              />
              <p style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 400, lineHeight: 1.6, margin: 0, fontFamily: 'DM Sans, sans-serif' }}>
                No supplements.<br />No heavy workouts. No starvation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: '#fff', padding: '50px 0' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', gap: '0' }}>
            <div style={{ flex: '25%', padding: '5px' }}>
              <div style={{
                background: '#FF850B',
                borderRadius: '16px',
                padding: '40px 20px',
                textAlign: 'center'
              }}>
                <div style={{ color: '#FFFFFF', fontSize: '48px', fontWeight: 700 }}>4.8</div>
                <div style={{ color: '#FFFFFF', fontSize: '16px' }}>Google Rating</div>
              </div>
            </div>
            <div style={{ flex: '25%', padding: '5px' }}>
              <div style={{
                background: '#FF850B',
                borderRadius: '16px',
                padding: '40px 20px',
                textAlign: 'center'
              }}>
                <div style={{ color: '#FFFFFF', fontSize: '48px', fontWeight: 700 }}>98%</div>
                <div style={{ color: '#FFFFFF', fontSize: '16px' }}>Success Rate</div>
              </div>
            </div>
            <div style={{ flex: '25%', padding: '5px' }}>
              <div style={{
                background: '#FF850B',
                borderRadius: '16px',
                padding: '40px 20px',
                textAlign: 'center'
              }}>
                <div style={{ color: '#FFFFFF', fontSize: '48px', fontWeight: 700 }}>75K+</div>
                <div style={{ color: '#FFFFFF', fontSize: '16px' }}>Clients</div>
              </div>
            </div>
            <div style={{ flex: '25%', padding: '5px' }}>
              <div style={{
                background: '#FF850B',
                borderRadius: '16px',
                padding: '15px 20px 16px',
                textAlign: 'center'
              }}>
                <div style={{ color: '#FFFFFF', fontSize: '14px' }}>Personalised</div>
                <div style={{ color: '#FFFFFF', fontSize: '30px', fontWeight: 700, margin: '10px 0' }}>GHAR</div>
                <div style={{ color: '#FFFFFF', fontSize: '14px' }}>ka Khana Diet Plan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Do Not Push Section */}
      <section style={{ background: '#000', padding: '50px 0 80px', margin: '50px 0 0' }}>
        <div style={{ padding: '0 1rem' }}>
          <div style={{
            maxWidth: '1820px',
            margin: '0 auto',
            borderRadius: '50px',
            overflow: 'hidden',
            position: 'relative',
            background: '#4E0101',
            backgroundImage: 'url(https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/1f715e423077509b682c964bc8c674abca623e88-2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            padding: '25px 10px 0'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(78, 1, 1, 0.95)'
            }}></div>
            <div style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '30px',
              padding: '10px',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Image */}
              <div style={{ width: 'calc(40% - 20px)' }}>
                <Image
                  src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/Bride-Cross.png"
                  alt="Bride"
                  width={500}
                  height={550}
                  style={{ width: '60%', height: 'auto', margin: '0 auto', display: 'block' }}
                />
              </div>
              {/* Content */}
              <div style={{ width: 'calc(50% - 20px)' }}>
                <h2 style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  marginBottom: '30px',
                  fontFamily: 'Epilogue, sans-serif',
                  padding: '30px 0'
                }}>
                  We Do Not <span style={{ color: '#ff850b' }}>Push</span>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{
                    background: '#FF850B',
                    borderRadius: '16px',
                    padding: '8px 10px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                  }}>
                    <div style={{
                      background: '#fff',
                      borderRadius: '12px',
                      padding: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Image
                        src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/no_meals.svg"
                        alt="No meals"
                        width={45}
                        height={45}
                      />
                    </div>
                    <p style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 600, lineHeight: 1.6, margin: 0, fontFamily: 'Epilogue, sans-serif' }}>
                      Crash diets. Starvation.
                    </p>
                  </div>
                  <div style={{
                    background: '#FF850B',
                    borderRadius: '16px',
                    padding: '8px 10px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                  }}>
                    <div style={{
                      background: '#fff',
                      borderRadius: '12px',
                      padding: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Image
                        src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/pill-1.svg"
                        alt="Pills"
                        width={45}
                        height={45}
                      />
                    </div>
                    <p style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 600, lineHeight: 1.6, margin: 0, fontFamily: 'Epilogue, sans-serif' }}>
                      Glutathione. Fat-burner pills. Detox teas.
                    </p>
                  </div>
                  <div style={{
                    background: '#FF850B',
                    borderRadius: '16px',
                    padding: '8px 10px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px'
                  }}>
                    <div style={{
                      background: '#fff',
                      borderRadius: '12px',
                      padding: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Image
                        src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/cardio_load.svg"
                        alt="Cardio"
                        width={45}
                        height={45}
                      />
                    </div>
                    <p style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 600, lineHeight: 1.6, margin: 0, fontFamily: 'Epilogue, sans-serif' }}>
                      Heavy gym plans if you do not want them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ background: '#fff', padding: '60px 20px' }}>
        <div style={{ 
          maxWidth: '100%', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <span style={{
            color: '#ff850b',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: 1.4,
            fontFamily: 'Epilogue, sans-serif'
          }}>Our Pricing</span>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#000000',
            lineHeight: 1.2,
            margin: '10px auto 20px',
            fontFamily: 'Epilogue, sans-serif',
            maxWidth: '56%'
          }}>
            Take the First Step to a <span style={{ color: '#ff850b' }}>Healthier Future</span>
          </h2>
          <p style={{
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: 1.8,
            color: '#828283',
            maxWidth: '65%',
            margin: '0 auto 40px',
            fontFamily: 'Epilogue, sans-serif'
          }}>
            Join our Plan today and embark on a journey to better health with our wedding plan!
          </p>

          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: '0 20px'
          }}>
            <div style={{
              maxWidth: '1400px',
              width: '100%'
            }}>
              <DynamicPlansDisplay 
                category="new-wedding-plan"
                showHeader={false}
                columns="4"
                onSelectPlan={(plan) => {
                  const product = {
                    id: `wedding-${plan.planName.toLowerCase().replace(/\s+/g, '-')}`,
                    name: `Wedding Prep Plan - ${plan.planName}`,
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

      {/* Award-Winning Recognition Section */}
      <section style={{ background: '#fff', padding: '100px 10px 70px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#000000',
            lineHeight: 1.2,
            margin: '0 auto 20px',
            fontFamily: 'Epilogue, sans-serif',
            maxWidth: '77%'
          }}>
            <span style={{ color: '#ff850b' }}>Award-Winning</span> Health & Wellness
          </h2>
          <p style={{
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: 1.8,
            color: '#828283',
            maxWidth: '65%',
            margin: '0 auto 40px',
            fontFamily: 'Epilogue, sans-serif'
          }}>
            Proud to be recognized for excellence in health, innovation, and results—our weight loss plan has earned top industry awards for effectiveness and success.
          </p>

          {/* Award Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px'
          }}>
            {awards.map((award, index) => (
              <div key={index} style={{
                background: '#4C0202',
                borderRadius: '12px',
                boxShadow: '0 4px 4px rgba(0,0,0,0.5)',
                padding: '18px',
                textAlign: 'left'
              }}>
                <Image
                  src={award.image}
                  alt={award.title}
                  width={400}
                  height={250}
                  style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '15px' }}
                />
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  fontFamily: 'Epilogue, sans-serif',
                  marginBottom: '10px'
                }}>{award.title}</h3>
                <button style={{
                  background: '#4C0202',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '8px 0',
                  fontSize: '15px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: 'Epilogue, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert's Guidance Section */}
      <section style={{ background: '#000', padding: '50px 0 0', margin: '50px 0 0' }}>
        <div style={{ padding: '0 1rem' }}>
          <div style={{
            maxWidth: '1820px',
            margin: '0 auto',
            borderRadius: '50px',
            overflow: 'hidden',
            position: 'relative',
            background: '#4E0101',
            backgroundImage: 'url(https://staging.dtpoonamsagar.com/wp-content/uploads/2025/11/1f715e423077509b682c964bc8c674abca623e88-2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            padding: '70px 10px 0'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(78, 1, 1, 0.96)'
            }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{
                textAlign: 'center',
                fontSize: '45px',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: '50px',
                fontFamily: 'Epilogue, sans-serif'
              }}>
                You are Under <span style={{ color: '#ff850b' }}>Expert's Guidance</span>
              </h2>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '30px',
                padding: '10px',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Image */}
                <div style={{ width: 'calc(40% - 20px)' }}>
                  <Image
                    src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Untitled-design-32-1.png"
                    alt="Dt. Poonam Sagar"
                    width={500}
                    height={550}
                    style={{ width: '60%', height: 'auto', margin: '0 auto', display: 'block' }}
                  />
                </div>
                {/* Content */}
                <div style={{ width: 'calc(50% - 20px)' }}>
                  <p style={{
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    marginBottom: '20px',
                    fontFamily: 'Epilogue, sans-serif'
                  }}>
                    Dt. Poonam Sagar understands that one-size-fits-all plans simply don't suffice. That's why we specialize in crafting personalized dietary solutions tailored to your unique needs and preferences. Dt. Sagar's philosophy revolves around creating sustainable meal plans centered on delicious, home-cooked dishes.
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: '20px 5px 20px 15px',
                    margin: 0,
                    display: 'grid',
                    gap: '10px'
                  }}>
                    {[
                      { icon: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28.svg', text: 'Holistic Health Approach' },
                      { icon: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28-1.svg', text: 'Nutritional Counsellors' },
                      { icon: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28-2.svg', text: 'Compassionate Care' },
                      { icon: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28-3.svg', text: 'Tailored meal plan' },
                      { icon: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28-4.svg', text: 'Weight Management' },
                      { icon: 'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/10/Frame-28-5.svg', text: 'Better Health' }
                    ].map((item, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFFFFF', fontSize: '16px', fontWeight: 400, lineHeight: 1.5 }}>
                        <Image src={item.icon} alt="" width={28} height={28} />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time Is Ticking CTA Section */}
      <section style={{ background: '#fff', padding: '50px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#000000',
            lineHeight: 1.2,
            margin: '0 auto 20px',
            fontFamily: 'Epilogue, sans-serif',
            maxWidth: '56%'
          }}>
            Time Is <span style={{ color: '#ff850b' }}>Ticking</span><br />
            Say 'Yes' to Your <span style={{ color: '#ff850b' }}>Best Body</span>!
          </h2>
          <p style={{
            fontSize: '23px',
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#828283',
            maxWidth: '65%',
            margin: '0 auto',
            padding: '10px 0 40px',
            fontFamily: 'Epilogue, sans-serif'
          }}>
            Your photos last forever — make sure you love what you see!<br />
            Get the personalized plan brides swear by.
          </p>
          <button style={{
            background: '#FF850B',
            color: '#fff',
            border: 'none',
            borderRadius: '48px',
            padding: '12px 64px',
            fontSize: '20px',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'Epilogue, sans-serif'
          }}>
            Get Your Wedding Plan Now!
          </button>
        </div>
      </section>
    </>
  );
}
