import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Ginte App',
  description: 'Ginte App for e-commerce',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn(poppins.className, poppins.variable, 'bg-neutral-50 overflow-x-hidden')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
