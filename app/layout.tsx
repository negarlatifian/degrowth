import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const suissIntl = localFont({
  src: [
    {
      path: '../public/fonts/SuisseIntl-Bold.otf',
      style: 'bold',
    },
    {
      path: '../public/fonts/SuisseIntl-Regular.otf',
      style: 'normal',
    },
    {
      path: '../public/fonts/SuisseIntl-RegularItalic.otf',
      style: 'italic',
    },
  ],
  variable: '--font-suissIntl',
});
const monumentGrotesk = localFont({
  src: [
    {
      path: '../public/fonts/MonumentGrotesk-Regular.otf',
      style: 'bold',
    },
  ],
  variable: '--font-monumentGrotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Degrowth Toolbox For Artistic Practices',
  description:
    'The Degrowth Toolbox for Artistic Practices was initiated in 2021 by Alexandra Papademetriou',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${suissIntl.variable} ${monumentGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
