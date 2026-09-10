import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Contact Us' };
export default function ContactPage() {
  return (
    <main id="main" className="wrap">
      <section className="page-heading">
        <p className="eyebrow"><span className="blue-dot" /> CONTACT US</p>
        <h1>Let’s start<br /><span className="muted-heading">a conversation.</span></h1>
        <p className="body-copy">Join the club, share an idea, or just say hello.</p>
      </section>
      <section className="content-section">
        <form className="club-contact-form" action="https://formsubmit.co/barnardj28@student.jhs.net" method="POST">
          <input type="hidden" name="_subject" value="Common Ground Club — new message" />
          <input type="hidden" name="_next" value="https://commongroundclub.vercel.app/contact/thanks" />
          <input type="hidden" name="_template" value="table" />
          <div className="contact-fields">
            <label>Name<input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
          </div>
          <label>I want to…<select name="topic" required defaultValue=""><option value="" disabled>Select a topic</option><option>Join the club</option><option>Speak or collaborate</option><option>Ask a question</option><option>Share an idea</option></select></label>
          <label>Message<textarea name="message" required minLength={10} maxLength={5000} rows={6} placeholder="What’s on your mind?" /></label>
          <button type="submit">Send message</button>
          <p className="email-note">Delivered to the club through FormSubmit. You may be asked to verify you’re human.</p>
        </form>
      </section>
    </main>
  );
}
