import Header from '@/components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sukaryam - Conferences | Events | Travel ',
  description: 'Your Strategic Event Partner',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
   <body className={`${inter.className} `}>
   <Header />
   <div className='max-w-[1440px] mx-auto'>
   {children}
   <WhatsAppButton />
   </div>
   <Footer/>
   </body>
  </html>
  );
}
