import { Noto_Serif_Display } from 'next/font/google';

export const Noto = Noto_Serif_Display({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--noto-serif',
});
