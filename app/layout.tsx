import './globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Serif_JP } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';
import { GoogleAnalytics } from '@/components/Analytics';

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

const siteUrl = 'https://nihongobridge.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nihongo Bridge - Learn Japanese, Study in Japan, Build Your Career',
    template: '%s | Nihongo Bridge',
  },
  description:
    'Master Japanese, prepare for JLPT, explore Japanese culture, and build your future in Japan. Structured multilingual lessons, study abroad guides, and career resources.',
  keywords: [
    'Japanese language learning',
    'JLPT preparation',
    'Study in Japan',
    'Japan career opportunities',
    'Japanese vocabulary',
    'Kanji lessons',
    'Japanese culture',
    'Japanese grammar',
    'Japanese jobs',
    'Nihongo Bridge',
  ],
  authors: [{ name: 'Nihongo Bridge' }],
  creator: 'Nihongo Bridge',
  publisher: 'Nihongo Bridge',
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
    url: siteUrl,
    siteName: 'Nihongo Bridge',
    title: 'Nihongo Bridge - Learn Japanese, Study in Japan, Build Your Career',
    description:
      'Master Japanese, prepare for JLPT, explore Japanese culture, and build your future in Japan.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nihongo Bridge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nihongo Bridge',
    description: 'Learn Japanese • Study in Japan • Build Your Career',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: siteUrl,
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
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
