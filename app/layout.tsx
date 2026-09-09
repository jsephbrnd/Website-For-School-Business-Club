import Link from 'next/link';
import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Common Ground — A student business club',
    template: '%s — Common Ground',
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
          <Link className="wordmark" href="/" aria-label="Common Ground home">
            <span className="brand-mark" aria-hidden="true">
              cg.
            </span>
            <span>
              Common Ground
              <span className="brand-sub">A student business club</span>
            </span>
          </Link>
          <p>Different perspectives. Shared ambition.</p>
          <Link className="text-link" href="/contact">
            Let’s connect <span aria-hidden="true">↗</span>
          </Link>
        </footer>
      </body>
    </html>
  );
}
