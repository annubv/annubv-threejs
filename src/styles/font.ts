import {
  Noto_Serif_Display,
  Source_Code_Pro,
  Barlow_Condensed,
} from 'next/font/google';

export const Noto = Noto_Serif_Display({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--noto-serif',
});

export const Barlow = Barlow_Condensed({
  weight: ['100', '200', '300', '400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--barlow',
});

export const SourceCode = Source_Code_Pro({
  weight: ['200', '300'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--fjalla-one',
});
