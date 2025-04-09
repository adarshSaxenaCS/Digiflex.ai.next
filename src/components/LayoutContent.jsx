'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import { ReviewsSection } from './Reviews';
import NavigationContent from './Navigation';

export default function LayoutContent({ children }) {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact-us';

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      {!isContactPage && <Contact />}
      <ReviewsSection />
      <NavigationContent />
      <Footer />
    </>
  );
} 