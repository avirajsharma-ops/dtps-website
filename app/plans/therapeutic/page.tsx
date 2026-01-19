"use client";
import Image from 'next/image';
import { useState } from 'react';

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

const pricingPlans = [
  {
    duration: 'One Month Plan',
    price: '₹4,500',
    originalPrice: '₹6,000',
    features: [
      'Personal Diet Consultations',
      'Weekly Check-ins',
      '24/7 WhatsApp Support',
      'Customized Meal Plans',
      'Progress Tracking'
    ],
    popular: false
  },
  {
    duration: 'Three Months Plan',
    price: '₹13,000',
    originalPrice: '₹15,000',
    features: [
      'Personal Diet Consultations',
      'Weekly Check-ins',
      '24/7 WhatsApp Support',
      'Customized Meal Plans',
      'Progress Tracking',
      'Recipe E-Book'
    ],
    popular: false
  },
  {
    duration: 'Six Months Plan',
    price: '₹24,000',
    originalPrice: '₹30,000',
    features: [
      'Personal Diet Consultations',
      'Weekly Check-ins',
      '24/7 WhatsApp Support',
      'Customized Meal Plans',
      'Progress Tracking',
      'Recipe E-Book',
      'Lifestyle Coaching'
    ],
    popular: true
  },
  {
    duration: 'One Year Plan',
    price: '₹48,000',
    originalPrice: '₹64,000',
    features: [
      'Personal Diet Consultations',
      'Weekly Check-ins',
      '24/7 WhatsApp Support',
      'Customized Meal Plans',
      'Progress Tracking',
      'Recipe E-Book',
      'Lifestyle Coaching',
      'Priority Support'
    ],
    popular: false
  }
];

const youtubeVideos = [
  'QnvX0T0dH3g',
  '3_pnN3p23t4',
  'ipMaYZpyJAg',
  '6uk0l9SU0Sw',
  'CUUjzE5NnTA',
  'QRIWXRkjEXE'
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
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0d4043 0%, #0a2f31 100%)',
        padding: '80px 20px 60px',
        position: 'relative',
        overflow: 'hidden'
      }}>
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
          <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.1)',
              padding: '8px 16px',
              borderRadius: '50px',
              marginBottom: '20px'
            }}>
              <span style={{ color: '#FFD700' }}>✨</span>
              <span style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>For Healthier, Happier you</span>
            </div>
            
            <h1 style={{
              fontSize: '56px',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginBottom: '24px',
              fontFamily: 'Epilogue, sans-serif'
            }}>
              Therapeutic Diet<br />
              Plans: Mend-<br />
              Your-Menu
            </h1>
            
            <p style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '16px',
              lineHeight: 1.7,
              marginBottom: '32px',
              maxWidth: '500px'
            }}>
              Meet the visionary force behind central India's leading company, Our expert 
              therapeutic Dietitian Poonam Sagar - a dynamic and inspirational leader, a powerful 
              women entrepreneur, and the guiding light of our dedicated team of dietitians.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button style={{
                background: '#FF850B',
                color: '#fff',
                border: 'none',
                borderRadius: '50px',
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Get Started Today →
              </button>
              <button style={{
                background: 'transparent',
                color: '#fff',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: '50px',
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div style={{ flex: '0 1 400px' }}>
            <Image
              src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/d21d7b0157faacaede7445061a44a9041ebc0603.png"
              alt="Healthy Food Heart"
              width={400}
              height={400}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Transform Your Health Section */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            color: '#0d4043',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '8px',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            Transform Your Health
          </p>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 700,
            color: '#000000',
            lineHeight: 1.2,
            marginBottom: '20px',
            fontFamily: 'Epilogue, sans-serif'
          }}>
            Transform Your Health with Expert <span style={{ color: '#FF850B' }}>Nutrition Plan</span>
          </h2>
          <p style={{
            color: '#666',
            fontSize: '16px',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto 50px'
          }}>
            Embark on a transformative journey of wellness and success, led by our true industry trailblazer.
          </p>

          {/* Images Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            marginBottom: '60px'
          }}>
            <Image
              src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/Untitled-design-42.png"
              alt="Nutrition Plan 1"
              width={350}
              height={400}
              style={{ borderRadius: '20px', objectFit: 'cover' }}
            />
            <Image
              src="https://staging.dtpoonamsagar.com/wp-content/uploads/2025/12/Untitled-design-40.png"
              alt="Nutrition Plan 2"
              width={350}
              height={400}
              style={{ borderRadius: '20px', objectFit: 'cover' }}
            />
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: 700, color: '#0d4043' }}>98%</div>
              <div style={{ color: '#666', fontSize: '16px' }}>Success Rate</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: 700, color: '#0d4043' }}>4.9</div>
              <div style={{ color: '#666', fontSize: '16px' }}>Average Rating</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: 700, color: '#0d4043' }}>100K+</div>
              <div style={{ color: '#666', fontSize: '16px' }}>Success Stories</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: 700, color: '#0d4043' }}>#1</div>
              <div style={{ color: '#666', fontSize: '16px' }}>Achievements & Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Do You Get Section */}
      <section style={{ background: '#f8f9fa', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 700,
            color: '#000000',
            lineHeight: 1.2,
            marginBottom: '50px',
            fontFamily: 'Epilogue, sans-serif',
            textAlign: 'center'
          }}>
            What do you <span style={{ color: '#FF850B' }}>get</span>?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px'
          }}>
            {whatYouGet.map((item, index) => (
              <div key={index} style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '24px 20px',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: '0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px',
                  background: '#0d4043',
                  borderRadius: '12px',
                  marginBottom: '16px'
                }}>
                  <span style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>{item.number}</span>
                </div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#333',
                  margin: 0,
                  lineHeight: 1.4
                }}>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0d4043 0%, #0a2f31 100%)',
        padding: '80px 20px'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '10px',
            fontFamily: 'Epilogue, sans-serif'
          }}>
            Flab or Fab? Find Out Fast!
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '18px',
            marginBottom: '40px'
          }}>
            Enter your stats and get your body fat score in under 30 seconds.
          </p>

          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '24px',
            padding: '40px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              color: '#fff',
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: '30px'
            }}>Body Fat & BMI</h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <input
                type="number"
                placeholder="Age (years)"
                value={bmiData.age}
                onChange={(e) => setBmiData({...bmiData, age: e.target.value})}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  color: '#fff',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
              <select
                value={bmiData.gender}
                onChange={(e) => setBmiData({...bmiData, gender: e.target.value})}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  color: '#fff',
                  fontSize: '16px',
                  outline: 'none'
                }}
              >
                <option value="male" style={{ color: '#000' }}>Male</option>
                <option value="female" style={{ color: '#000' }}>Female</option>
              </select>
              <input
                type="number"
                placeholder="Height (ft)"
                value={bmiData.heightFt}
                onChange={(e) => setBmiData({...bmiData, heightFt: e.target.value})}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  color: '#fff',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
              <input
                type="number"
                placeholder="Height (in)"
                value={bmiData.heightIn}
                onChange={(e) => setBmiData({...bmiData, heightIn: e.target.value})}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  color: '#fff',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
              <input
                type="number"
                placeholder="Weight (kg)"
                value={bmiData.weight}
                onChange={(e) => setBmiData({...bmiData, weight: e.target.value})}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  color: '#fff',
                  fontSize: '16px',
                  outline: 'none',
                  gridColumn: 'span 2'
                }}
              />
            </div>

            <button
              onClick={calculateBMI}
              style={{
                background: '#FF850B',
                color: '#fff',
                border: 'none',
                borderRadius: '50px',
                padding: '16px 48px',
                fontSize: '18px',
                fontWeight: 600,
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Calculate
            </button>

            {bmiResult && (
              <div style={{
                marginTop: '30px',
                padding: '20px',
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '16px'
              }}>
                <div style={{ color: '#fff', fontSize: '24px', fontWeight: 700 }}>
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
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            color: '#0d4043',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '8px',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            Exclusive Offers
          </p>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 700,
            color: '#000000',
            lineHeight: 1.2,
            marginBottom: '20px',
            fontFamily: 'Epilogue, sans-serif'
          }}>
            Choose Your <span style={{ color: '#FF850B' }}>Perfect Plan</span>
          </h2>
          <p style={{
            color: '#666',
            fontSize: '16px',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto 50px'
          }}>
            Flexible pricing options designed to fit your wellness journey.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
            {pricingPlans.map((plan, index) => (
              <div key={index} style={{
                background: plan.popular ? '#0d4043' : '#fff',
                borderRadius: '24px',
                padding: '32px 24px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                position: 'relative',
                border: plan.popular ? 'none' : '2px solid #eee',
                transform: plan.popular ? 'scale(1.05)' : 'none'
              }}>
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#FF850B',
                    color: '#fff',
                    padding: '6px 20px',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}>Most Popular</div>
                )}
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: plan.popular ? '#fff' : '#333',
                  marginBottom: '16px'
                }}>{plan.duration}</h3>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  color: plan.popular ? '#FF850B' : '#0d4043',
                  marginBottom: '8px'
                }}>{plan.price}</div>
                <del style={{
                  color: plan.popular ? 'rgba(255,255,255,0.5)' : '#999',
                  fontSize: '16px'
                }}>{plan.originalPrice}</del>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '24px 0',
                  textAlign: 'left'
                }}>
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: plan.popular ? 'rgba(255,255,255,0.9)' : '#666',
                      fontSize: '14px',
                      marginBottom: '12px'
                    }}>
                      <span style={{ color: '#FF850B' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button style={{
                  background: plan.popular ? '#FF850B' : '#0d4043',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '14px 24px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section style={{ background: '#f8f9fa', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            color: '#0d4043',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '8px',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            Real Stories, Real Results
          </p>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 700,
            color: '#000000',
            lineHeight: 1.2,
            marginBottom: '50px',
            fontFamily: 'Epilogue, sans-serif'
          }}>
            Our Success <span style={{ color: '#FF850B' }}>Stories</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px'
          }}>
            {successStories.map((story, index) => (
              <div key={index} style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '350px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
              }}>
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(13,64,67,0.95) 0%, transparent 100%)',
                  padding: '80px 20px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end'
                }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ color: '#fff', fontSize: '20px', fontWeight: 700 }}>{story.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>Lost {story.loss}</div>
                  </div>
                  <div style={{
                    background: '#FF850B',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '50px',
                    fontSize: '13px',
                    fontWeight: 700
                  }}>
                    In {story.days}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Success Stories Section */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            color: '#0d4043',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '8px',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            Watch Our Success Stories
          </p>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 700,
            color: '#000000',
            lineHeight: 1.2,
            marginBottom: '20px',
            fontFamily: 'Epilogue, sans-serif'
          }}>
            Video <span style={{ color: '#FF850B' }}>Testimonials</span>
          </h2>
          <p style={{
            color: '#666',
            fontSize: '16px',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto 50px'
          }}>
            Hear directly from our clients about their transformative journey.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            {youtubeVideos.map((videoId, index) => (
              <a
                key={index}
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  aspectRatio: '16/9',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                }}
              >
                <Image
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt={`Success Story ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60px',
                  height: '60px',
                  background: 'rgba(255,133,11,0.9)',
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
                    borderLeft: '16px solid #fff',
                    marginLeft: '4px'
                  }}></div>
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
          <button style={{
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
