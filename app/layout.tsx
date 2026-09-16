import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
