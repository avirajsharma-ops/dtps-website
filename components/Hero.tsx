import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
// DynamicMarquee removed from Hero to avoid marquee on home page

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
        <div className="hero-container flex flex-col md:grid md:grid-cols-2">
          {/* Mobile: Image First, Desktop: Content First */}
          <div className="hero-image order-1 md:order-2 relative flex justify-center items-end pt-4 md:pt-0">
            {/* Background text - centered on mobile */}
            <div className="hero-name-bg absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[-80px] top-[45%] md:top-1/2 -translate-y-1/2 z-[1]">
              <Image 
                src="/assets/img/D-I-E-T-I-C-I-AN.png" 
                alt="Dietician Poonam Sagar" 
                width={400}
                height={500}
                className="hero-name-img h-[320px] md:h-[500px] w-auto opacity-100"
              />
            </div>
            
            <div className="hero-image-wrapper relative z-[3]">
              <Image 
                src="/assets/img/Image-attachment-full-1.png" 
                alt="Dietitian Poonam Sagar" 
                width={500}
                height={580}
                className="hero-main-img max-h-[340px] md:max-h-[580px] w-auto relative z-[2]"
                priority
              />
              {/* Badge positioned at bottom right of image */}
              <div className="hero-badge-bottom absolute right-[-10px] md:right-[-20px] bottom-[60px] md:bottom-[60px] bg-[#ff9100] py-2.5 px-3.5 md:py-4 md:px-[22px] rounded-[12px] md:rounded-[14px] flex items-center gap-2 md:gap-3 z-[4] shadow-[0_10px_30px_rgba(245,124,0,0.3)] animate-[floatBadgeBottom_3s_ease-in-out_infinite]">
                <span className="badge-number text-[1.5rem] md:text-[2.5rem] font-extrabold text-white leading-none">25</span>
                <span className="badge-text text-[0.65rem] md:text-[0.85rem] text-white leading-[1.3] font-medium">Years of<br />experience</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="hero-content order-2 md:order-1 relative z-[2] px-5 md:pl-5 text-center md:text-left mt-2 md:mt-0 pb-8 md:pb-0">
            <div className="hero-label inline-flex items-center gap-2 text-[#ff9100] font-medium text-base mb-4">
              <span className="star text-[#ff9100]">✦</span> Holistic Care
            </div>
            <h1 className="hero-title text-[1.8rem] md:text-[3.2rem] font-bold text-white leading-[1.2] mb-4 md:mb-5">
              Transform your health<br />
              embrace life today!
            </h1>
            <p className="hero-desc text-white/75 text-[0.9rem] md:text-base leading-[1.8] mb-6 md:mb-8 max-w-[480px] mx-auto md:mx-0">
              Achieve your wellness goals with personalized guidance, expert support, and sustainable habits for a healthier, happier you.
            </p>
            <div className="hero-actions flex flex-col md:flex-row items-center gap-4 md:gap-5 mb-6 md:mb-10">
              <Link href="#programs" className="btn btn-primary">Know More</Link>
              <div className="hero-phone flex items-center gap-3">
                <div className="phone-icon w-11 h-11 md:w-12 md:h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-lg md:text-xl">📞</div>
                <div className="phone-info flex flex-col">
                  <span className="phone-label text-white/60 text-[0.75rem] md:text-[0.8rem]">Call Us 24/7</span>
                  <span className="phone-number text-white font-bold text-[0.95rem] md:text-[1.05rem]">9893027688</span>
                </div>
              </div>
            </div>
            <div className="hero-reviews flex items-center gap-3 justify-center md:justify-start">
              <div className="review-avatars flex items-center">
                <Image 
                  src="https://randomuser.me/api/portraits/women/1.jpg" 
                  alt="Client" 
                  width={36} 
                  height={36}
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#0d4043] -ml-0 first:ml-0 object-cover"
                />
                <Image 
                  src="https://randomuser.me/api/portraits/women/2.jpg" 
                  alt="Client" 
                  width={36} 
                  height={36}
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#0d4043] -ml-2.5 object-cover"
                />
                <Image 
                  src="https://randomuser.me/api/portraits/men/1.jpg" 
                  alt="Client" 
                  width={36} 
                  height={36}
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#0d4043] -ml-2.5 object-cover"
                />
                <span className="review-count w-8 h-8 md:w-9 md:h-9 bg-[#0d9488] rounded-full flex items-center justify-center text-white text-[0.65rem] md:text-[0.7rem] font-bold -ml-2.5">15K</span>
              </div>
              <div className="review-rating flex items-center gap-1 text-white">
                <span className="rating-score font-bold text-[0.9rem] md:text-base">5.0</span>
                <span className="rating-star">⭐</span>
                <span className="rating-text text-white/60 text-[0.75rem] md:text-[0.85rem]">(15.5k review)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
