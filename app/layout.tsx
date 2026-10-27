import type { Metadata } from 'next';
import { Playfair_Display, Inter, Space_Mono } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dagnachew Getahun — Software Engineer | AI/ML & Cybersecurity',
  description:
    'Dagnachew Getahun is a Software Engineering student in Debre Berhan, Ethiopia, focused on applied AI/ML, cloud cybersecurity, and resilient software architectures.',
  metadataBase: new URL('https://dagne.techverse.dev'),
  openGraph: {
    title: 'Dagnachew Getahun — Software Engineer | AI/ML & Cybersecurity',
    description:
      'Editorial portfolio of Dagnachew Getahun. Software engineering, applied AI/ML, threat intelligence, and systems development.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="bg-[#0b0c0e] text-[#f1f2ec] font-sans antialiased selection:bg-[#c6ff3d] selection:text-[#0b0c0e]">
        {children}
      </body>
    </html>
  );
}
