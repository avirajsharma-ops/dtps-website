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
  { label: 'Instagram', icon: '○', href: 'https://www.instagram.com/dt.poonamsagar/' },
  { label: 'YouTube', icon: '▷', href: 'https://www.youtube.com/channel/UC_6LfLF7RtbHVZfOogc9zag' },
  { label: 'LinkedIn', icon: 'in', href: 'https://in.linkedin.com/company/dietitian-poonam-sagar' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#fff', padding: '40px 50px 50px 50px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          style={{
            background: '#014E4E',
            borderRadius: '40px',
            padding: '50px 70px 0 70px',
            color: '#fff',
            backgroundImage: 'url(https://staging.dtpoonamsagar.com/healix/wp-content/uploads/2025/03/hero-bg-gradiant-shape.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Main Content */}
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '60px', flexWrap: 'wrap', paddingBottom: '40px' }}>
            {/* Left Column - Logo & Info */}
            <div style={{ flex: '1', maxWidth: '550px' }}>
              <Image
                src="/assets/img/logo.png"
                alt="Dietitian Poonam Sagar"
                width={220}
                height={80}
                style={{ height: '70px', width: 'auto' }}
              />
              <p style={{ marginTop: '24px', fontSize: '15px', lineHeight: '1.8', color: 'rgba(255,255,255,0.85)' }}>
                India&apos;s only diet where &apos;Ghar Ka Khana&apos; becomes your superpower for getting fit and losing weight!
              </p>
              <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <a
                  href="tel:+919893027688"
                  style={{
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.35)',
                    padding: '14px 24px',
                    fontSize: '14px',
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  +91 9893027688
                </a>
                <a
                  href="mailto:support@dtpoonamsagar.com"
                  style={{
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.35)',
                    padding: '14px 24px',
                    fontSize: '14px',
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  support@dtpoonamsagar.com
                </a>
              </div>
              <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ fontSize: '16px', fontWeight: 600 }}>Follow on:</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.35)',
                        fontSize: '15px',
                        color: '#fff',
                        textDecoration: 'none',
                      }}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Services */}
            <div style={{ minWidth: '180px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>Services</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {serviceLinks.map((link) => (
                  <li key={link.href + link.label} style={{ marginBottom: '16px' }}>
                    <Link 
                      href={link.href} 
                      style={{ 
                        color: 'rgba(255,255,255,0.9)', 
                        textDecoration: 'none',
                        fontSize: '15px',
                        fontWeight: 500,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
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
          <div style={{ 
            padding: '24px 0', 
            borderTop: '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.8)'
          }}>
            <p style={{ margin: 0 }}>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {legalLinks.map((link, index) => (
                <span key={link.href} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Link href={link.href} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && <span style={{ color: 'rgba(255,255,255,0.5)' }}>–</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
