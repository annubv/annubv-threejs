import {
  Noto_Serif_Display,
  Fjalla_One,
  Source_Code_Pro,
} from 'next/font/google';

export const Noto = Noto_Serif_Display({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--noto-serif',
});

export const Fjalla = Fjalla_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--fjalla-one',
});

export const SourceCode = Source_Code_Pro({
  weight: ['200', '300'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--fjalla-one',
});
