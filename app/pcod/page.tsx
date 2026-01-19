'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import PageWrapper from '@/components/PageWrapper';

const whatYouGet = [
  { icon: '📊', title: 'Ongoing Support', desc: 'Regular follow-ups to adapt your diet plan as needed and ensure progress results.' },
  { icon: '❤️', title: 'Specialised Care', desc: 'Your diet is managed by dietitians who are specialised in hormonal disorders.' },
  { icon: '⭐', title: 'Tailored to You', desc: 'Every diet plan is crafted to meet your unique health needs and lifestyle preferences.' },
  { icon: '🧪', title: 'Sustainable Weight Management', desc: 'We focus on long-term lifestyle changes for lasting success.' },
];

const gkkBenefits = [
  { title: 'Inflammation down', desc: 'Less bloating, less pain, better skin' },
  { title: 'Hormones Balanced', desc: 'Regular cycles, better mood' },
  { title: 'Energy Boost', desc: 'Feel more active and vibrant' },
  { title: 'Weight Loss', desc: 'Sustainable and healthy reduction' },
  { title: 'Better Skin', desc: 'Clear, glowing, and healthy' },
];

const pricingPlans = [
  { 
    duration: '01 Month', 
    price: '4,500',
    originalPrice: '6,000',
    tag: 'MOST POPULAR',
    color: 'orange',
    features: [
      'Customized Therapeutic Plan(PCOD/PCOS)',
      '1 Senior Dietitian (Expert in Therapeutic treatment)',
      '1 Health Counsellor',
      '1 Clinical Dietitian',
      '8 Hours of Chat Support',
      'Dietitian Consultation Sessions (06)',
      'Customized Therapeutic Meal Plan',
      'Diet Recipe eBook (50+)',
      'Stay on track: weekly check ins to ensure your progress',
    ],
  },
  { 
    duration: '03 Month', 
    price: '12,000',
    originalPrice: '15,000',
    tag: 'PREMIUM',
    color: 'teal',
    features: [
      'Customized Therapeutic Plan(PCOD/PCOS)',
      '1 Senior Dietitian (Expert in Therapeutic treatment)',
      '1 Health Counsellor',
      '1 Clinical Dietitian',
      '8 Hours of Chat Support',
      'Dietitian Consultation Sessions (12)',
      'Customized Therapeutic Meal Plan',
      'Diet Recipe eBook (100+)',
      'Stay on track: weekly check ins to ensure your progress',
    ],
  },
];

export default function PCODPage() {
  const [activeCard, setActiveCard] = useState(3);

  useEffect(() => {
    const order = [3, 1, 0, 2, 4];
    let i = 0;
    const timer = setInterval(() => {
      setActiveCard(order[i]);
      i = (i + 1) % order.length;
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <PageWrapper>
        {/* Hero Section */}
        <section className="pcod-hero">
          <div className="pcod-deco-soft"></div>
          <div className="pcod-deco-ring"></div>
          <div className="pcod-ring-left"></div>

          <div className="pcod-hero__grid">
            <div className="pcod-hero__left">
              <div className="pcod-hero__badge">✨ For Healthier, Happier you</div>
              
              <div className="pcod-titlewrap">
                <h1 className="pcod-hero__title">PCOD/PCOS</h1>
                <div className="pcod-underline"></div>
              </div>

              <p className="pcod-hero__desc">
                Transform your health with India&apos;s only diet where &apos;Ghar Ka Khana&apos; becomes your superpower for managing PCOD and achieving sustainable weight loss.
              </p>

              <div className="pcod-hero__buttons">
                <a href="/appointment" className="pcod-btn-primary">
                  Get Started Today
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#benefits" className="pcod-btn-orange">Learn More</a>
              </div>
            </div>

            <div className="pcod-hero__right">
              <div className="pcod-hero__imgcard">
                <Image 
                  className="pcod-hero__img"
                  src="/img/pink-shirt.png"
                  alt="PCOD/PCOS"
                  width={500}
                  height={550}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <div className="pcod-success">
                <div className="pcod-success__icon">✓</div>
                <div className="pcod-success__text">
                  <h3>1000+</h3>
                  <p>Success Stories</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>

      {/* Role of Diet Section */}
      <section className="pcod-section" id="benefits">
        <div className="container">
          <h2 className="pcod-section-title">Role of Diet in PCOD/PCOS</h2>
          <p className="pcod-section-subtitle">
            Diet plays a crucial role in managing PCOS, as it can help mitigate some of the symptoms and associated health risks
          </p>
          <div className="pcod-section-script">&quot;Ghar ka Khana&quot;</div>

          <div className="pcod-benefits-grid">
            {/* Card 1 */}
            <div className="pcod-benefit-card">
              <div className="pcod-benefit-card-image">
                <div className="pcod-benefit-no">1</div>
                <Image src="/img/what-we-do-image-1.jpg" alt="Balancing Blood Sugar" width={400} height={200} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="pcod-benefit-card-content">
                <div className="pcod-benefit-line"></div>
                <h3>Balancing Blood Sugar Levels</h3>
                <p>Women with PCOS often experience insulin resistance, where the body&apos;s cells do not respond normally to insulin.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="pcod-benefit-card">
              <div className="pcod-benefit-card-image">
                <div className="pcod-benefit-no">2</div>
                <Image src="/img/what-we-do-image-2.jpg" alt="Managing Weight" width={400} height={200} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="pcod-benefit-card-content">
                <div className="pcod-benefit-line"></div>
                <h3>Managing Weight</h3>
                <p>Losing even a small amount of weight if you are overweight can help manage PCOS symptoms.</p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="pcod-contact-card">
              <div className="pcod-corner-mark"></div>
              <div className="pcod-contact-pill">✨ Get Started</div>
              <h3>Ready to Transform<br/>Your Health?</h3>
              <p>Join thousands of women who have successfully managed their PCOD/PCOS through our personalized nutrition plans.</p>
              <ul className="pcod-contact-points">
                <li><span className="pcod-tick">✓</span> Personalized diet plans</li>
                <li><span className="pcod-tick">✓</span> Expert nutritionist support</li>
                <li><span className="pcod-tick">✓</span> Traditional &quot;Ghar ka Khana&quot;</li>
                <li><span className="pcod-tick">✓</span> Proven results</li>
              </ul>
              <a href="/appointment" className="pcod-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Book Your Consultation
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <div className="pcod-contact-bottom">
                <small>Questions? Contact us</small>
                <div className="pcod-contact-row">📞 +91 XXX XXX XXXX</div>
                <div className="pcod-contact-row">✉️ contact@example.com</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="pcod-benefit-card">
              <div className="pcod-benefit-card-image">
                <div className="pcod-benefit-no">3</div>
                <Image src="/img/what-we-do-image-1.jpg" alt="Reducing Inflammation" width={400} height={200} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="pcod-benefit-card-content">
                <div className="pcod-benefit-line"></div>
                <h3>Reducing Inflammation</h3>
                <p>PCOS is often linked with low-grade inflammation. Consuming a diet high in anti-inflammatory foods can be beneficial.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="pcod-benefit-card">
              <div className="pcod-benefit-card-image">
                <div className="pcod-benefit-no">4</div>
                <Image src="/img/what-we-do-image-2.jpg" alt="Increasing Fertility" width={400} height={200} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="pcod-benefit-card-content">
                <div className="pcod-benefit-line"></div>
                <h3>Increasing Fertility</h3>
                <p>PCOS is one of the leading causes of infertility in women due to hormonal imbalances affecting ovulation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pcod-cta-wrap">
        <div className="pcod-cta">
          <h3 className="pcod-cta-title">Ready to Transform Your Health?</h3>
          <p className="pcod-cta-sub">
            Our personalized PCOD/PCOS diet plans are designed to help you achieve lasting<br/>
            results through the power of &quot;Ghar ka Khana&quot;
          </p>
          <a href="/appointment" className="pcod-cta-btn">
            Start Your Journey Today
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Symptoms Title */}
      <div className="pcod-title-wrap">
        <div className="pcod-label">
          <span className="pcod-line-deco"></span>
          <span className="pcod-label-text">COMMON SYMPTOMS</span>
          <span className="pcod-line-deco"></span>
        </div>
        <h2 className="pcod-title-main">Symptoms &amp; Nutritional Concerns</h2>
        <p className="pcod-title-sub">
          Understanding your symptoms is the first step toward transformation<br/>
          through proper nutrition and lifestyle changes.
        </p>
      </div>

      {/* What You Will Get */}
      <section className="pcod-benefits-sec">
        <div className="pcod-benefits-wrap">
          <div className="pcod-benefits-grid-2">
            <div className="pcod-img-card">
              <div className="pcod-img-frame">
                <Image src="/img/what-we-do-image-1.jpg" alt="Benefits" width={500} height={400} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div className="pcod-float-badge">
                <p className="pcod-badge-num">100%</p>
                <p className="pcod-badge-lbl">Natural</p>
              </div>
            </div>

            <div className="pcod-benefits-head">
              <div className="pcod-mini-label">
                <span className="pcod-mini-line"></span>
                <span className="pcod-mini-text">YOUR BENEFITS</span>
              </div>
              <h2 className="pcod-benefits-title">What You Will Get?</h2>

              <div className="pcod-benefits-list">
                {whatYouGet.map((item, index) => (
                  <div key={index} className="pcod-benefit-item">
                    <div className="pcod-benefit-ic">{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pcod-benefits-cta">
                <a className="pcod-btn-teal" href="/appointment">
                  Explore All Benefits
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ghar Ka Khana Section */}
      <section className="pcod-gkk-section">
        <div className="pcod-gkk-wrap">
          <div className="pcod-gkk-panel">
            <div className="pcod-gkk-title">
              <h2>How <b>GHAR KA KHANA</b> Diet Plan Fixes PCOD &amp; WEIGHT</h2>
            </div>

            <div className="pcod-gkk-diagram">
              <div className="pcod-gkk-center">
                <Image src="/img/what-we-do-image-2.jpg" alt="Healthy plate" width={520} height={360} style={{ objectFit: 'contain' }} />
              </div>

              {gkkBenefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`pcod-gkk-card pcod-gkk-pos-${index} ${activeCard === index ? 'active' : ''}`}
                  onClick={() => setActiveCard(index)}
                >
                  <div className="pcod-gkk-bg"></div>
                  <div className="pcod-gkk-content">
                    <h4>{benefit.title}</h4>
                    <p>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pcod-gkk-mini-row">
              <div className="pcod-gkk-mini">
                <div className="emoji">💯</div>
                <h5>100% Natural</h5>
                <p>No supplements or artificial ingredients</p>
              </div>
              <div className="pcod-gkk-mini">
                <div className="emoji">👩‍⚕️</div>
                <h5>Expert Guided</h5>
                <p>Personalized plans by certified dietitians</p>
              </div>
              <div className="pcod-gkk-mini">
                <div className="emoji">🎯</div>
                <h5>Proven Results</h5>
                <p>Thousands of success stories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pcod-pricing-section">
        <div className="pcod-pricing-wrap">
          <div className="pcod-pricing-kicker">
            <div className="pcod-pricing-dash"></div>
            <span>PRICING</span>
          </div>

          <h2 className="pcod-pricing-title">Take the first step towards a healthier<br/>Future</h2>
          <p className="pcod-pricing-sub">
            Join our Plan today and embark on a journey to better health with our PCOD diet plan!
          </p>

          <div className="pcod-pricing-grid">
            <div className="pcod-pricing-badge">
              <div className="pct">25%</div>
              <div className="off">OFF</div>
            </div>

            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pcod-plan ${plan.color}`}>
                <div className="pcod-plan-pill">{plan.tag}</div>
                <div className="pcod-plan-month">
                  <div className="big">{plan.duration}</div>
                  <div className="small">Plan</div>
                </div>
                <div className="pcod-plan-priceRow">
                  <span className="rupee">₹</span>
                  <span className="price">{plan.price}</span>
                  <span className="strike">₹{plan.originalPrice}</span>
                </div>
                <div className="pcod-plan-note">One-time payment • No hidden fees</div>
                <div className="pcod-plan-divider"></div>
                <ul className="pcod-plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="pcod-plan-cta">Get Started</button>
              </div>
            ))}
          </div>

          <div className="pcod-pricing-bottom">
            <span><i></i> Money Back Guarantee</span>
            <span><i></i> 24/7 Support</span>
            <span><i></i> 100% Natural</span>
          </div>
        </div>
      </section>
    </>
  );
}
