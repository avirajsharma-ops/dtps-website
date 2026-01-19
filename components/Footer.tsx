import Link from 'next/link';
import Image from 'next/image';

const serviceLinks = [
  { label: 'Home', href: '/' },
  { label: 'Weight Loss', href: '/weight-loss' },
  { label: 'PCOD', href: '/pcod' },
  { label: 'Wedding Plan', href: '/plans/wedding' },
  { label: 'Therapeutic Plan', href: '/plans/therapeutic' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Help', href: '/help' },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/p/Dt-Poonam-Sagar-100087289226000/' },
  { label: 'Instagram', href: 'https://www.instagram.com/dt.poonamsagar/' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UC_6LfLF7RtbHVZfOogc9zag' },
  { label: 'LinkedIn', href: 'https://in.linkedin.com/company/dietitian-poonam-sagar' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b4c4c]">
      <div className="mx-auto max-w-[1820px] px-4 pb-10">
        <div
          className="rounded-[50px] bg-[#014E4E] px-6 py-14 text-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          style={{
            backgroundImage:
              'url(https://staging.dtpoonamsagar.com/healix/wp-content/uploads/2025/03/hero-bg-gradiant-shape.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-12 lg:flex-row lg:gap-16">
            <div className="flex-1">
              <Image
                src="/assets/img/logo.png"
                alt="Dietitian Poonam Sagar"
                width={220}
                height={80}
                className="h-[70px] w-auto"
              />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
                India&apos;s only diet where &apos;Ghar Ka Khana&apos; becomes your superpower for getting fit and losing weight!
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="tel:+919893027688"
                  className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-[#F9D67B] hover:text-[#F9D67B]"
                >
                  +91 9893027688
                </a>
                <a
                  href="mailto:support@dtpoonamsagar.com"
                  className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-[#F9D67B] hover:text-[#F9D67B]"
                >
                  support@dtpoonamsagar.com
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-lg font-semibold">Follow on:</span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white transition hover:border-[#F9D67B] hover:text-[#F9D67B]"
                    >
                      {link.label.slice(0, 1)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="min-w-[220px]">
              <h3 className="text-xl font-semibold">Services</h3>
              <ul className="mt-5 space-y-3 text-sm font-semibold text-white/80">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-[#F9D67B]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-10 flex w-full max-w-[1300px] flex-col items-center justify-between gap-6 border-t border-white/20 pt-6 text-sm text-white/70 lg:flex-row">
            <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-[#F9D67B]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
