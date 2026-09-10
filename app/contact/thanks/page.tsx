import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Thank you', robots: { index: false } };
export default function ThanksPage() {
  return <main id="main" className="wrap"><section className="page-heading"><p className="eyebrow">THANK YOU</p><h1>Message submitted.</h1><p className="body-copy">Thanks for reaching out to Common Ground Club.</p><a href="/">Back to home</a></section></main>;
}
