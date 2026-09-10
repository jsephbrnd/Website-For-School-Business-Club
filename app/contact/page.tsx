import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <main id="main" className="wrap">
      <section style={{ padding: '40px 0' }} aria-label="Contact Us">
        <iframe
          src="https://form.typeform.com/to/hximFRXd"
          title="Common Ground Club contact form"
          width="100%"
          height="720"
          style={{ border: 0, display: 'block', minHeight: '75svh', borderRadius: '16px' }}
        />
        <p className="body-copy" style={{ marginTop: '16px', textAlign: 'center' }}>
          <a href="https://form.typeform.com/to/hximFRXd" target="_blank" rel="noopener noreferrer">
            Open form in a new tab
          </a>
        </p>
      </section>
    </main>
  );
}
