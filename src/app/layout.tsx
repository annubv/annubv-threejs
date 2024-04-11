import type { Metadata } from 'next';
import { Noto } from '@/styles/font';
import '@/styles/reset.scss';
import '@/styles/app.scss';
import '@/styles/globals.scss';
import '@/styles/font.scss';
import '@/styles/flex.scss';

export const metadata: Metadata = {
  title: 'Anubhav',
  description: 'Anubhav',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Noto.className}`}>{children}</body>
    </html>
  );
}
