'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import DynamicMarquee from './DynamicMarquee';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <DynamicMarquee />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}
