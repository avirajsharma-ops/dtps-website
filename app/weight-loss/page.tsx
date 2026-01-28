'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import FiveCycleProgram from '@/components/FiveCycleProgram';
import YouTubeShortsSlider from '@/components/YouTubeShortsSlider';
import PageWrapper from '@/components/PageWrapper';
import TransformationGallery from '@/components/TransformationGallery';
import DynamicPlansDisplay from '@/components/DynamicPlansDisplay';
import DynamicHeroBanner from '@/components/DynamicHeroBanner';
import DynamicPopup from '@/components/DynamicPopup';
import { getPricingByCategory } from '@/lib/api';
import DynamicPageHero from '@/components/DynamicPageHero';
import { getOptimizedUrl } from '@/lib/imagekit';
import type { Pricing } from '@/lib/api';

const successStories = [
  { name: 'Garima', loss: 'Lost 8 kgs weight', days: 'In 30 Days', image: '/img/Garima-Mam.jpeg' },
  { name: 'Anshu', loss: 'Lost 5 kgs weight', days: 'In 27 Days', image: '/img/Anshu-Jain.jpeg' },
  { name: 'Shivani', loss: 'Lost 8 kgs weight', days: 'In 90 Days', image: '/img/Shivani.jpeg' },
];

const expectFeatures = [
  { icon: '💊', title: 'No Supplements', desc: 'Achieve your health goals naturally' },
  { icon: '🏠', title: 'Home Based Diet', desc: 'Convenient and effective plans for your home.' },
  { icon: '🏋️', title: 'No Gymnasium', desc: 'Get fit without stepping into a gym.' },
  { icon: '🍽️', title: 'No Starvation', desc: 'Enjoy balanced meals without feeling deprived.' },
];

const whatYouGet = [
  'Ghar ka Khana Focus',
  'Weekly Follow-ups',
  'Personal Diet Assistant',
  'Multiple Food Options',
  'Lifestyle based curated Diet Plans',
  'Sustainable Weight Management',
  'Guaranteed Results',
];

const expertTags = [
  { icon: '🎯', title: 'Holistic Health Approach' },
  { icon: '🥗', title: 'Nutritional Counsellors' },
  { icon: '❤️', title: 'Compassionate Care' },
  { icon: '📋', title: 'Tailored meal plan' },
  { icon: '⚖️', title: 'Weight Management' },
  { icon: '💪', title: 'Better Health' },
];

const awards = [
  { 
    title: 'News 18 Narayani Namah Award', 
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/img/what-we-do-image-1.jpg',
  },
  { 
    title: 'Dainik Bhaskar Women Entrepreneur Award', 
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/img/what-we-do-image-2.jpg',
  },
  { 
    title: 'Iconic Business Women (Health & Nutrition) Award 2024', 
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/img/why-choose-image.png',
  },
];

const stats = [
  { value: '98%', label: 'Success Rate' },
  { value: '4.9', label: 'Average Rating' },
  { value: '75K+', label: 'Success Stories' },
  { value: '5+', label: 'Business Achievers & News 18 Award' },
];

const fallbackPricingPlans = [
  { 
    label: '10 DAYS TRIAL', 
    badge: 'Trial',
    badgeColor: 'gray',
    price: '₹299', 
    original: '₹999', 
    features: ['Chat support', 'Dietitian Consultation (02)', 'Customized Meal Plan', 'Progress Tracking', 'Diet Recipe eBook (10+)']
  },
  { 
    label: '01 MONTH', 
    badge: 'Saving',
    badgeColor: 'orange',
    price: '₹2,499', 
    original: '₹3,000', 
    features: ['8 hours of chat support', 'Dietitian Consultation (06)', 'Customized Meal Plan', 'Progress Tracking', 'Diet Recipe eBook (50+)']
  },
  { 
    label: '03 MONTHS', 
    badge: 'Value',
    badgeColor: 'gray',
    price: '₹5,999', 
    original: '₹8,000', 
    features: ['8 hours of chat support', 'Dietitian Consultation (12)', 'Customized Meal Plan', 'Progress Tracking', 'Diet Recipe eBook (100+)']
  },
  { 
    label: '06 MONTHS', 
    badge: 'Results',
    badgeColor: 'orange',
    price: '₹11,999', 
    original: '₹16,000', 
    features: ['8 hours of chat support', 'Dietitian Consultation (24)', 'Customized Meal Plan', 'Progress Tracking', 'Diet Recipe eBook (100+)']
  },
];

const fallbackTestimonials = [
  {
    name: 'Bessie Cooper',
    role: 'Co-Founder',
    content: "I've struggled with chronic pain for years, but health coaching gave me the tools and support.",
    image: '/img/what-we-do-image-1.jpg',
  },
  {
    name: 'Floyd Miles',
    role: 'Chairman',
    content: "I've struggled with chronic pain for years, but health coaching gave me the tools and support.",
    image: '/img/what-we-do-image-2.jpg',
  },
  {
    name: 'Kathryn Murphy',
    role: '',
    content: "I've struggled with chronic pain for years, but health coaching gave me the tools and support.",
    image: '/img/why-choose-image.png',
  },
  {
    name: 'Jerome Bell',
    role: '',
    content: "I've struggled with chronic pain for years, but health coaching gave me the tools and support.",
    image: '/img/Div-elementor-element.png',
  },
];

type Testimonial = {
  _id?: string;
  name: string;
  role?: string;
  content: string;
  image: string;
};

export default function WeightLossPage() {
  const [pricingPlans, setPricingPlans] = useState<any[]>([]);
  const [loadingPricing, setLoadingPricing] = useState(true);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);

  const testimonialImages = testimonials.length > 0 ? testimonials : fallbackTestimonials;
  const heroImage1 = testimonialImages[0]?.image || '/img/what-we-do-image-1.jpg';
  const heroImage2 = testimonialImages[1]?.image || '/img/what-we-do-image-2.jpg';
  const heroImage3 = testimonialImages[2]?.image || '/img/why-choose-image.png';
  const badgeImage1 = testimonialImages[0]?.image || '/img/what-we-do-image-1.jpg';
  const badgeImage2 = testimonialImages[1]?.image || '/img/what-we-do-image-2.jpg';

  // Fetch pricing from database on component mount
  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const dbPricing = await getPricingByCategory('weight-loss');
        
        if (dbPricing && dbPricing.length > 0) {
          // Transform database pricing to match display format
          const formattedPricing = dbPricing.map((plan: Pricing) => ({
            label: plan.planName,
            badge: plan.badge,
            badgeColor: plan.badgeColor?.toLowerCase() || 'gray',
            price: `₹${plan.price.toLocaleString()}`,
            original: `₹${plan.originalPrice.toLocaleString()}`,
            features: plan.features.map(f => f.text),
            planId: plan._id
          }));
          setPricingPlans(formattedPricing);
        }
      } catch (error) {
        console.error('Error fetching pricing:', error);
        setPricingPlans([]);
      } finally {
        setLoadingPricing(false);
      }
    };

    fetchPricing();
  }, []);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials?page=weight-loss&active=true');
        if (!res.ok) throw new Error('Failed to fetch testimonials');
        const data = await res.json();
        const normalized = (data.testimonials || []).map((item: any) => ({
          _id: item._id,
          name: item.name || 'Client',
          role: item.role || '',
          content: item.content || '',
          image: getOptimizedUrl(item.image || '/img/default-avatar.png', {
            width: 180,
            height: 180,
            quality: 80,
            format: 'auto',
          }),
        }));
        if (normalized.length > 0) {
          setTestimonials(normalized);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setTestimonials(fallbackTestimonials);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <>
      <DynamicPopup page="weight-loss" />
      
      <PageWrapper>
      
        {/* Dynamic Hero Section */}
        <DynamicPageHero 
          page="weight-loss"
          fallback={{
            title: 'Guaranteed Weight Loss',
            subtitle: 'Upto 5 Kg in a Month',
            description: "It's a journey to self-discovery and a healthier, happier you. We believe weight loss is more than just a number on the scale. It's a transformative journey of self-discovery, leading to a more vibrant and fulfilling life.",
            buttonText: 'Buy Plan',
            buttonLink: '/appointment',
          }}
        />
      </PageWrapper>

      {/* Transformations Gallery Section */}
      <TransformationGallery 
        page="weight-loss"
        title="Over 75,000+ People Enjoy Weight Loss"
        subtitle="Real Stories, Real Results - Join Our Community"
        maxItems={6}
      />

      {/* Five Cycle Program */}
      <div className="container">
        <FiveCycleProgram />
      </div>

      {/* What to Expect */}
      <section className="wl-section">
        <div className="container">
          <div className="wl-expect-grid">
            <div className="wl-expect-images">
              <div className="wl-expect-img-1">
                <Image 
                  src="/img/what-we-do-image-1.jpg" 
                  alt="Healthy food" 
                  width={300} 
                  height={350} 
                  style={{ objectFit: 'cover', borderRadius: '16px' }} 
                />
              </div>
              <div className="wl-expect-img-2">
                <Image 
                  src="/img/what-we-do-image-2.jpg" 
                  alt="Cooking" 
                  width={350} 
                  height={300} 
                  style={{ objectFit: 'cover', borderRadius: '16px' }} 
                />
              </div>
              <div className="wl-expect-decoration">
                <span>✕ ✕ ✕</span>
                <span>✕ ✕ ✕</span>
                <span>✕ ✕ ✕</span>
              </div>
            </div>
            <div className="wl-expect-content">
              <div className="wl-expect-circle"></div>
              <h2 className="wl-section-title">What to expect from our<br />Program?</h2>
              <div className="wl-expect-list">
                {expectFeatures.map((item, index) => (
                  <div key={index} className="wl-expect-item">
                    <span className="wl-expect-icon">{item.icon}</span>
                    <div className="wl-expect-text">
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="wl-guarantee">
        <div className="container">
          <div className="wl-guarantee-card">
            <div className="wl-guarantee-image">
              <Image 
                src="/img/Group-319-2-1.webp" 
                alt="100% Money Back Guarantee" 
                width={250} 
                height={250} 
                style={{ objectFit: 'contain' }} 
              />
            </div>
            <div className="wl-guarantee-content">
              <h3 className="wl-guarantee-title">100%</h3>
              <h4>Money Back Guarantee</h4>
              <p className="wl-guarantee-subtitle">If... you don&apos;t like this</p>
              <p>
                Are we crazy people to make such an offer? No, we are very
                confident of our program, which
                has delivered a 98% success rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Do You Get */}
      <section className="wl-whatyouget">
        <div className="container">
          <div className="wl-get-grid">
            <div className="wl-get-content">
              <h2 className="wl-section-title wl-teal">What do you get?</h2>
              <div className="wl-get-list">
                {whatYouGet.map((item, index) => (
                  <div key={index} className="wl-get-item">
                    <span className="wl-get-check">✓</span>
                    <span className="wl-get-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="wl-get-image">
              <Image 
                src="/img/why-choose-image.png" 
                alt="Fitness woman" 
                width={450} 
                height={550} 
                style={{ objectFit: 'contain' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expert Guidance */}
      <section className="wl-expert">
        <div className="container">
          <h2 className="wl-section-title wl-light wl-center">You are under Expert&apos;s Guidance</h2>
          <p className="wl-expert-subtitle">Meet our Award Winning Dietitian</p>
          <div className="wl-expert-grid">
            <div className="wl-expert-image">
              <Image 
                src="/img/D-I-E-T-I-C-I-AN.png" 
                alt="Dietitian Poonam Sagar" 
                width={450} 
                height={550} 
                style={{ objectFit: 'contain' }} 
              />
            </div>
            <div className="wl-expert-content">
              <p className="wl-expert-desc">
                Dt. Poonam Sagar understands that one-size-fits-all plans simply don&apos;t suffice. That&apos;s
                why we specialize in crafting personalized dietary solutions tailored to your unique needs
                and preferences. Dt. Sagar&apos;s philosophy revolves around creating sustainable meal plans
                centered on delicious, home-cooked dishes.
              </p>
              <div className="wl-expert-tags">
                {expertTags.map((tag, index) => (
                  <div key={index} className="wl-expert-tag">
                    <span className="wl-expert-tag-icon">{tag.icon}</span>
                    <span>{tag.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="wl-section">
        <div className="container">
          <div className="wl-section-label wl-center">
            <span className="wl-star">✦</span> Our Recognition
          </div>
          <h2 className="wl-section-title wl-teal wl-center">Award-Winning Health & Wellness</h2>
          <p className="wl-section-desc wl-center">
            Proud to be recognized for excellence in health, innovation, and results–our weight loss plan has earned
            top industry awards for effectiveness and success.
          </p>
          <div className="wl-awards-grid">
            {awards.map((award, index) => (
              <div key={index} className="wl-award-card">
                <div className="wl-award-image">
                  <Image 
                    src={award.image} 
                    alt={award.title} 
                    width={400} 
                    height={250} 
                    style={{ objectFit: 'cover', borderRadius: '12px', width: '100%', height: '220px' }} 
                  />
                </div>
                <h4 className="wl-award-title">{award.title}</h4>
                <p className="wl-award-desc">{award.desc}</p>
              </div>
            ))}
          </div>
          <div className="wl-media-logos">
            <div className="wl-media-card">
              <span className="wl-media-live">live</span><span className="wl-media-mint">mint</span>
            </div>
            <div className="wl-media-card">
              <span className="wl-media-the">The</span><span className="wl-media-print">Print</span>
            </div>
            <div className="wl-media-card">
              <span className="wl-media-daily">⁘ dailyhunt</span>
            </div>
          </div>
        </div>
      </section>

      {/* From Bad Diets to Forever Fit */}
      <section className="wl-section">
        <div className="container">
          <h2 className="wl-section-title wl-center">From Bad Diets to Forever Fit</h2>
          <p className="wl-section-desc wl-center wl-teal-text">Our Clients Share their Success Stories</p>
          <YouTubeShortsSlider />
          <div className="wl-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="wl-stat-card">
                <div className="wl-stat-value">{stat.value}</div>
                <div className="wl-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="wl-section">
        <div className="container">
          <div className="wl-section-label wl-center">
            <span className="wl-star wl-teal-text">✦</span> <span className="wl-teal-text">Our Recognition</span>
          </div>
          <h2 className="wl-section-title wl-center">Our Pricing</h2>
          <p className="wl-section-desc wl-center">
            Join our Plan today and embark on a journey to better health with our weight loss plan!
          </p>
          <div className="wl-pricing-grid">
            {pricingPlans.map((plan: any, index: number) => (
              <div key={index} className="wl-pricing-card">
                <div className="wl-pricing-header">
                  <span className="wl-pricing-label">{plan.label}</span>
                  <span className={`wl-pricing-badge wl-badge-${plan.badgeColor}`}>{plan.badge}</span>
                </div>
                <div className="wl-pricing-plan">Plan</div>
                <div className="wl-pricing-price-wrapper">
                  <div className="wl-pricing-price">
                    {plan.price} <span className="wl-pricing-original">{plan.original}</span>
                  </div>
                 
                </div>
                <div className="wl-pricing-whatget">What you&apos;ll get:</div>
                <ul className="wl-pricing-features">
                  {plan.features.map((feature: any, idx: number) => (
                    <li key={idx}>
                      <div className="wl-feature-icon-circle">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8" cy="8" r="8" fill="var(--accent)" />
                          <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => {
                    const price = plan.price.replace('₹', '').replace(',', '');
                    const product = {
                      id: `weight-loss-${plan.label.toLowerCase().replace(/\s+/g, '-')}`,
                      name: `Weight Loss Plan - ${plan.label}`,
                      price: parseInt(price),
                      quantity: 1
                    };
                    sessionStorage.setItem('checkoutProducts', JSON.stringify([product]));
                    window.location.href = '/checkout';
                  }}
                  variant="primary" 
                  className="wl-pricing-btn"
                >
                  BUY NOW
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="wl-testimonials-section">
        <div className="container">
          <div className="wl-testimonials-grid">
            <div className="wl-testimonials-content">
              <div className="wl-section-label">
                <span className="wl-star">✦</span> Our Testimonials
              </div>
              <h2 className="wl-section-title">Success stories from our<br />clients</h2>
              <div className="wl-testimonials-cards">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={`wl-testimonial-card ${index === 0 ? 'wl-featured' : ''}`}>
                    <div className="wl-testimonial-stars">★★★★★</div>
                    <p className="wl-testimonial-text">&ldquo;{testimonial.content}&rdquo;</p>
                    <div className="wl-testimonial-author">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        width={45} 
                        height={45} 
                        style={{ borderRadius: '50%', objectFit: 'cover' }} 
                      />
                      <div>
                        <strong>{testimonial.name}</strong>
                        {testimonial.role && <span>{testimonial.role}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="wl-testimonials-images">
              <div className="wl-testimonial-img-1">
                <Image 
                  src={heroImage1}
                  alt="Success story" 
                  width={250} 
                  height={300} 
                  style={{ objectFit: 'cover', borderRadius: '16px' }} 
                />
              </div>
              <div className="wl-testimonial-img-2">
                <Image 
                  src={heroImage2}
                  alt="Success story" 
                  width={200} 
                  height={250} 
                  style={{ objectFit: 'cover', borderRadius: '16px' }} 
                />
              </div>
              <div className="wl-testimonial-img-3">
                <Image 
                  src={heroImage3}
                  alt="Success story" 
                  width={280} 
                  height={220} 
                  style={{ objectFit: 'cover', borderRadius: '16px' }} 
                />
              </div>
              <div className="wl-testimonial-badge">
                <div className="wl-badge-avatars">
                  <Image src={badgeImage1} alt="" width={30} height={30} style={{ borderRadius: '50%' }} />
                  <Image src={badgeImage2} alt="" width={30} height={30} style={{ borderRadius: '50%' }} />
                </div>
                <span className="wl-badge-count">13K</span>
                <div className="wl-badge-rating">0.4 ★ ( 6 k riview )</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="wl-newsletter">
        <div className="container">
          <div className="wl-newsletter-grid">
            <div className="wl-newsletter-content">
              <h2 className="wl-newsletter-title">Stay<br />Nourished!</h2>
              <h3 className="wl-newsletter-subtitle">Subscribe to Our<br />Healthy Food Newsletter!</h3>
              <p className="wl-newsletter-desc">
                Embark on a journey of wholesome delights, packed with nutritious recipes
                and expert tips!
              </p>
            </div>
            <div className="wl-recipe-book">
              <div className="wl-book-card">
                <h4>Healthy Recipe Book</h4>
                <p>
                  Join our community of health-conscious individuals and receive
                  exclusive updates on the latest trends in organic, sustainable
                  foods.
                </p>
                <input type="tel" placeholder="Phone Number" className="wl-phone-input" />
                <Button variant="primary" className="wl-send-btn">Send</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
