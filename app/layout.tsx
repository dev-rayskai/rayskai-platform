import type { Metadata } from 'next';
import { Hanken_Grotesk, Sora } from 'next/font/google';
import './globals.css';

const hanken = Hanken_Grotesk({
  variable: '--font-hanken',
  subsets: ['latin'],
});

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://raysky.ai'),
  icons: { icon: '/raysky-mark.png', apple: '/raysky-mark.png' },
  title: 'RaySky — Dental Revenue Operating System',
  description: 'Closed-loop dental AI that turns patient conversations into booked appointments, accepted treatment, and collected revenue.',
  openGraph: {
    title: 'RaySky — Dental Revenue Operating System',
    description: 'From every patient conversation to booked, completed, and collected revenue.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'RaySky dental revenue operating system' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RaySky — Dental Revenue Operating System',
    description: 'From every patient conversation to booked, completed, and collected revenue.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hanken.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
