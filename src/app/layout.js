import { Inter } from 'next/font/google';
import './globals.css';
import LayoutContent from '../components/LayoutContent';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Digiflex - Technology Solutions & Services',
  description: 'Expert technology solutions and services for businesses. From web development to cloud services, we deliver innovative digital solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutContent>
          {children}
        </LayoutContent>
      </body>
    </html>
  );
}