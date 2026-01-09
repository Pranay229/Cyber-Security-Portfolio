import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pranay kumar.Mallem | Cybersecurity Portfolio',
  description: 'Professional cybersecurity portfolio of Pranay kumar.Mallem showcasing SOC operations, threat detection, penetration testing, and AI-driven security solutions. Explore projects, skills, and certifications.',
  keywords: ['Cybersecurity', 'SOC Analyst', 'Penetration Testing', 'AI Security', 'Bug Bounty', 'Security Engineer', 'Pranay kumar.Mallem'],
  authors: [{ name: 'Pranay kumar.Mallem' }],
  openGraph: {
    title: 'Pranay kumar.Mallem | Cybersecurity Portfolio',
    description: 'Professional cybersecurity portfolio of Pranay kumar.Mallem showcasing SOC operations, threat detection, and AI-driven security solutions.',
    type: 'website',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranay kumar.Mallem | Cybersecurity Portfolio',
    description: 'Professional cybersecurity portfolio of Pranay kumar.Mallem showcasing SOC operations, threat detection, and AI-driven security solutions.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
