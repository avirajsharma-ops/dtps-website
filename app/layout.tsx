import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Dietitian Poonam Sagar - Transform Your Health',
  description:
    'Achieve your wellness goals with personalized guidance, expert support, and sustainable habits for a healthier, happier you. 25+ years of expertise guiding over 15,000+ clients.',
  keywords: [
    'dietitian',
    'nutrition',
    'weight loss',
    'PCOD',
    'health coach',
    'wellness',
    'Poonam Sagar',
  ],
  authors: [{ name: 'Dietitian Poonam Sagar' }],
  openGraph: {
    title: 'Dietitian Poonam Sagar - Transform Your Health',
    description:
      'Achieve your wellness goals with personalized guidance, expert support, and sustainable habits.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
