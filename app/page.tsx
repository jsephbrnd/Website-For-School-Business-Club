import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <main id="main">
      <section className="hero wrap">
        <div className="eyebrow">
          <span className="blue-dot" /> CURIOUS MINDS. REAL POSSIBILITIES.
        </div>
        <h1>
          Good ideas.
          <br />
          <span className="muted-heading">Great company.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            A place for students to explore business,
            <br className="desktop-break" /> challenge ideas, and build what
            comes next.
          </p>
          <Link className="button" href="/about">
            Meet Common Ground <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="hero-photo">
          <Image
            unoptimized
            src="/architecture.webp"
            alt="Sunlight and shadow across a sculptural concrete staircase rising into a blue sky"
            width="1536"
            height="1024"
            fetchPriority="high"
          />
          <div className="photo-caption">
            <span>A DIFFERENT PERSPECTIVE</span>
            <span aria-hidden="true">01 / CG</span>
          </div>
        </div>
      </section>
      <section className="intro wrap section-space">
        <p className="eyebrow">THE IDEA BEHIND THE CLUB</p>
        <div>
          <h2>
            Ambition starts with
            <br />a conversation.
          </h2>
          <p className="body-copy">
            You don’t need a business plan to be here. Just a little curiosity.
            Common Ground brings students together to ask better questions,
            exchange perspectives, and turn ideas into something tangible.
          </p>
          <Link className="text-link" href="/about">
            More about us <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="explore wrap">
        <div className="section-heading">
          <h2>Find your starting point.</h2>
          <span className="eyebrow">LEARN. MAKE. CONNECT.</span>
        </div>
        <div className="explore-grid">
          <Link className="explore-card" href="/projects">
            <span className="card-index">01 / EXPLORE</span>
            <div>
              <h3>Ideas into action.</h3>
              <p>
                Discover what we’re thinking about and where our projects could
                take us.
              </p>
            </div>
            <span className="card-link">
              Our projects <span aria-hidden="true">↗</span>
            </span>
          </Link>
          <Link className="explore-card" href="/team">
            <span className="card-index">02 / CONNECT</span>
            <div>
              <h3>People make it happen.</h3>
              <p>Get to know the students helping shape Common Ground.</p>
            </div>
            <span className="card-link">
              Meet the team <span aria-hidden="true">↗</span>
            </span>
          </Link>
          <Link className="explore-card blue-card" href="/contact">
            <span className="card-index">03 / SAY HELLO</span>
            <div>
              <h3>Bring your perspective.</h3>
              <p>
                Interested in joining, sharing an idea, or collaborating? Start
                here.
              </p>
            </div>
            <span className="card-link">
              Contact us <span aria-hidden="true">↗</span>
            </span>
          </Link>
        </div>
      </section>
      <section className="closing wrap">
        <span className="eyebrow">ROOM FOR YOUR NEXT IDEA</span>
        <Link href="/contact">
          Let’s build something.<span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
