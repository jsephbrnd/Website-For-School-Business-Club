'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const navigation = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/projects', 'Projects'],
  ['/team', 'Team'],
  ['/contact', 'Contact Us'],
] as const;

export function Navigation() {
  const pathname = usePathname();
  return (
    <header className="site-header wrap">
      <Link href="/" className="wordmark" aria-label="Common Ground home">
        <span className="brand-mark" aria-hidden="true">
          cg.
        </span>
        <span>
          Common
          <br />
          Ground
        </span>
      </Link>
      <nav aria-label="Main navigation">
        {navigation.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname === href ? 'page' : undefined}
            className={href === '/contact' ? 'nav-contact' : ''}
          >
            {label}
            {href === '/contact' && <span aria-hidden="true">↗</span>}
          </Link>
        ))}
      </nav>
    </header>
  );
}
