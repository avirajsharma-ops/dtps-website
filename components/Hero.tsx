import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero">
        <Navbar />
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-label">
              <span className="star">✦</span> Holistic Care
            </div>
            <h1 className="hero-title">
              Transform your health<br />
              embrace life today!
            </h1>
            <p className="hero-desc">
              Achieve your wellness goals with personalized guidance, expert support, and sustainable habits for a healthier, happier you.
            </p>
            <div className="hero-actions">
              <Link href="#programs" className="btn btn-primary">Know More</Link>
              <div className="hero-phone">
                <div className="phone-icon">📞</div>
                <div className="phone-info">
                  <span className="phone-label">Call Us 24/7</span>
                  <span className="phone-number">9893027688</span>
                </div>
              </div>
            </div>
            <div className="hero-reviews">
              <div className="review-avatars">
                <Image 
                  src="https://randomuser.me/api/portraits/women/1.jpg" 
                  alt="Client" 
                  width={36} 
                  height={36}
                />
                <Image 
                  src="https://randomuser.me/api/portraits/women/2.jpg" 
                  alt="Client" 
                  width={36} 
                  height={36}
                />
                <Image 
                  src="https://randomuser.me/api/portraits/men/1.jpg" 
                  alt="Client" 
                  width={36} 
                  height={36}
                />
                <span className="review-count">15K</span>
              </div>
              <div className="review-rating">
                <span className="rating-score">5.0</span>
                <span className="rating-star">⭐</span>
                <span className="rating-text">(15.5k review)</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <Image 
                src="/assets/img/Image-attachment-full-1.png" 
                alt="Dietitian Poonam Sagar" 
                width={500}
                height={580}
                className="hero-main-img"
                priority
              />
              {/* Badge positioned at bottom right of image */}
              <div className="hero-badge-bottom">
                <span className="badge-number">25</span>
                <span className="badge-text">Years of<br />experience</span>
              </div>
            </div>
            <div className="hero-name-bg">
              <Image 
                src="/assets/img/D-I-E-T-I-C-I-AN.png" 
                alt="Dietician Poonam Sagar" 
                width={400}
                height={500}
                className="hero-name-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
