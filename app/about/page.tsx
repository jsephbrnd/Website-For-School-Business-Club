import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'About Us' };
export default function AboutPage() {
  return (
    <main id="main" className="wrap">
      <section className="page-heading">
        <p className="eyebrow">
          <span className="blue-dot" /> ABOUT US
        </p>
        <h1>
          A shared space.
          <br />
          <span className="muted-heading">An open mind.</span>
        </h1>
        <p className="body-copy">
          Common Ground is a student business club built around curiosity,
          conversation, and the willingness to try.
        </p>
      </section>
      <section className="content-section two-col">
        <p className="eyebrow">WHY WE’RE HERE</p>
        <div>
          <h2>
            Business starts
            <br />
            with people.
          </h2>
          <p className="body-copy">
            Behind every business is a question, an idea, and someone willing to
            take the first step. We’re here to explore that process together.
          </p>
          <p className="body-copy">
            Through guest speakers, club conversations, and shared projects, we
            make room to learn from different experiences and discover what
            interests us. Whether you’re drawn to entrepreneurship or simply
            want to understand how business works, there’s a place for your
            perspective.
          </p>
          <a className="text-link" href="/projects">
            Explore our projects
          </a>
        </div>
      </section>
      <section className="content-section values-section">
        <p className="eyebrow">WHAT WE BRING TO THE TABLE</p>
        <div className="values">
          <article className="value">
            <span>01 / CURIOSITY</span>
            <h3>Ask another question.</h3>
            <p>
              Stay open to unfamiliar ideas. The best conversations begin when
              we have something to learn.
            </p>
          </article>
          <article className="value">
            <span>02 / INITIATIVE</span>
            <h3>Take the first step.</h3>
            <p>
              Bring an idea, start a discussion, or help move a project forward.
              Learning happens through participation.
            </p>
          </article>
          <article className="value">
            <span>03 / CONNECTION</span>
            <h3>Build together.</h3>
            <p>
              Share what you know and listen to what others see. Different
              perspectives make the work better.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
