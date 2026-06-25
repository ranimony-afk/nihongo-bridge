import './globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Serif_JP } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://japanbridgetamil.com'),
  title: {
    default: 'Japan Bridge Tamil - Learn Japanese, Study in Japan, Work with Japan',
    template: '%s | Japan Bridge Tamil',
  },
  description:
    'Your bridge to Japan. Learn Japanese language, prepare for JLPT, discover study abroad opportunities, and explore career paths in Japan. Resources in Tamil, English, and Japanese.',
  keywords: [
    'Japanese language learning',
    'JLPT preparation',
    'Study in Japan',
    'Japan career opportunities',
    'Japanese vocabulary',
    'Kanji lessons',
    'Japanese culture',
    'Tamil',
    'India to Japan',
    'Japanese grammar',
  ],
  authors: [{ name: 'Japan Bridge Tamil Team' }],
  creator: 'Japan Bridge Tamil',
  publisher: 'Japan Bridge Tamil',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://japanbridgetamil.com',
    siteName: 'Japan Bridge Tamil',
    title: 'Japan Bridge Tamil - Learn Japanese, Study in Japan, Work with Japan',
    description:
      'Your bridge to Japan. Learn Japanese language, prepare for JLPT, discover study abroad opportunities, and explore career paths in Japan.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Japan Bridge Tamil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Japan Bridge Tamil',
    description: 'Your bridge to Japan. Learn Japanese, Study in Japan, Work with Japan.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://japanbridgetamil.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${notoSerifJP.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#141414" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${inter.className} min-h-screen font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
