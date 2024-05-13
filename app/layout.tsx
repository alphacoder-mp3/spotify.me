import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';

import Sidebar from '@/components/Sidebar';
import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';
import { Toaster } from 'sonner';

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
      <body className={inter.className}>
        <Toaster richColors position="top-center" />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
