import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import './globals.css';

export const metadata: Metadata = {
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
          <p>Different perspectives. Shared ambition.</p>
        </footer>
      </body>
    </html>
  );
}
