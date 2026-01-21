import Link from 'next/link';
import Image from 'next/image';

const serviceLinks = [
  { label: 'Home', href: '/' },
  { label: 'Weight Loss', href: '/weight-loss' },
  { label: 'PCOD', href: '/pcod' },
  { label: 'All Plans', href: '#', hasDropdown: true },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Good Read', href: '/blog' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Term & Conditions', href: '/terms' },
  { label: 'Help', href: '/help' },
];

const socialLinks = [
  { label: 'Facebook', icon: 'f', href: 'https://www.facebook.com/p/Dt-Poonam-Sagar-100087289226000/' },
  { label: 'Instagram', icon: '📷', href: 'https://www.instagram.com/dt.poonamsagar/' },
  { label: 'YouTube', icon: '▶', href: 'https://www.youtube.com/channel/UC_6LfLF7RtbHVZfOogc9zag' },
  { label: 'LinkedIn', icon: 'in', href: 'https://in.linkedin.com/company/dietitian-poonam-sagar' },
];

const mobileScreens = [
  'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/mobile-screen-1.webp',
  'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/mobile-screen-2.webp',
  'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/mobile-screen-3.webp',
  'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/mobile-screen-4.webp',
  'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/mobile-screen-5.webp',
  'https://staging.dtpoonamsagar.com/wp-content/uploads/2025/03/mobile-screen-6.webp',
];

export default function Footer() {
  return (
    <footer className="bg-[#0b4c4c]">
      {/* Mobile Screens Section */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
        <div className="flex items-end justify-center gap-3 sm:gap-4 lg:gap-6 py-10 lg:py-16 overflow-x-auto">
          {mobileScreens.map((screen, index) => (
            <div 
              key={index} 
              className="relative flex-shrink-0 group"
              style={{ 
                width: 'clamp(100px, 15vw, 180px)',
              }}
            >
              {/* Phone Frame */}
              <div className="relative bg-[#1a1a1a] rounded-[20px] sm:rounded-[28px] p-1.5 sm:p-2 shadow-2xl">
                {/* Screen */}
                <div className="relative rounded-[16px] sm:rounded-[22px] overflow-hidden bg-black">
                  <Image
                    src={screen}
                    alt={`Mobile screen ${index + 1}`}
                    width={180}
                    height={360}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Bottom Navigation Bar */}
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                    </svg>
                  </div>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </div>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12 pb-8 lg:pb-12">
        <div
          className="rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] bg-[#014E4E] px-6 sm:px-10 lg:px-16 py-12 lg:py-16 text-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          style={{
            backgroundImage:
              'url(https://staging.dtpoonamsagar.com/healix/wp-content/uploads/2025/03/hero-bg-gradiant-shape.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-20 xl:gap-32">
            {/* Left Column - Logo & Info */}
            <div className="flex-1 max-w-[500px]">
              <Image
                src="/assets/img/logo.png"
                alt="Dietitian Poonam Sagar"
                width={220}
                height={80}
                className="h-[60px] sm:h-[70px] w-auto"
              />
              <p className="mt-6 lg:mt-8 text-[15px] sm:text-base leading-relaxed text-white/80">
                India&apos;s only diet where &apos;Ghar Ka Khana&apos; becomes your superpower for getting fit and losing weight!
              </p>
              <div className="mt-6 lg:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="tel:+919893027688"
                  className="rounded-xl border border-white/30 px-4 sm:px-5 py-2.5 text-sm font-medium text-white transition hover:border-[#F9D67B] hover:text-[#F9D67B]"
                >
                  +91 9893027688
                </a>
                <a
                  href="mailto:support@dtpoonamsagar.com"
                  className="rounded-xl border border-white/30 px-4 sm:px-5 py-2.5 text-sm font-medium text-white transition hover:border-[#F9D67B] hover:text-[#F9D67B]"
                >
                  support@dtpoonamsagar.com
                </a>
              </div>
              <div className="mt-8 lg:mt-10 flex items-center gap-4 sm:gap-5">
                <span className="text-base sm:text-lg font-semibold">Follow on:</span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-sm font-medium text-white transition hover:border-[#F9D67B] hover:bg-[#F9D67B]/10 hover:text-[#F9D67B]"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Services */}
            <div className="min-w-[200px]">
              <h3 className="text-xl font-semibold mb-6 lg:mb-8">Services</h3>
              <ul className="space-y-3 sm:space-y-4 text-[15px] font-medium text-white/80">
                {serviceLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <Link 
                      href={link.href} 
                      className="inline-flex items-center gap-1.5 transition hover:text-[#F9D67B]"
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 lg:mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/20 pt-6 lg:pt-8 text-sm text-white/70 lg:flex-row">
            <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {legalLinks.map((link, index) => (
                <span key={link.href} className="flex items-center gap-2 sm:gap-3">
                  <Link href={link.href} className="transition hover:text-[#F9D67B]">
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && <span className="text-white/40">–</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
