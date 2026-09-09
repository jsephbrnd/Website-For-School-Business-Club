'use client';
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
      <a href="/" className="wordmark" aria-label="Common Ground Club home">
        <span className="brand-mark" aria-hidden="true">
          cg.c
        </span>
        <span>
          Common
          <br />
          Ground Club
        </span>
      </a>
      <nav aria-label="Main navigation">
        {navigation.map(([href, label]) => (
          <a
            key={href}
            href={href}
            aria-current={pathname === href ? 'page' : undefined}
            className={href === '/contact' ? 'nav-contact' : ''}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
