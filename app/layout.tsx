import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://commongroundclub.org'),
  openGraph: {
    type: 'website',
    siteName: 'Common Ground Club',
    title: 'Common Ground Club',
    description: 'Different perspectives. Shared ambition. A student business club for curious minds.',
    images: [{ url: '/share-logo.png', width: 1024, height: 1024, alt: 'Common Ground Club logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Common Ground Club',
    description: 'Different perspectives. Shared ambition. A student business club for curious minds.',
    images: ['/share-logo.png'],
  },
  title: {
    default: 'Common Ground Club — A student business club',
    template: '%s — Common Ground Club',
  },
  description:
    'A student business club for curious minds. Explore ideas, learn by doing, and build something together.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        {children}
        <footer className="footer wrap">
          <a className="wordmark" href="/" aria-label="Common Ground Club home">
            <span className="brand-mark" aria-hidden="true">
              cg.c
            </span>
            <span>
              Common Ground Club
              <span className="brand-sub">A student business club</span>
            </span>
          </a>
          <div className="footer-notices">
            <p>© {new Date().getFullYear()} Common Ground Club. All rights reserved.</p>
            <p>Not affiliated with Jesuit High School Sacramento.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
