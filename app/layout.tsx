import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';

const inter = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotify Player',
  description: 'Music web app, enjoy listening to music, here on spotify',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
