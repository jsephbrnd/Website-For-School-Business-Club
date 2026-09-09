import Link from 'next/link';
import type { Metadata } from 'next';
import { club } from '@/lib/club';
export const metadata: Metadata = { title: 'Projects' };
export default function ProjectsPage() {
  return (
    <main id="main" className="wrap">
      <section className="page-heading">
        <p className="eyebrow">
          <span className="blue-dot" /> OUR PROJECTS
        </p>
        <h1>
          Beyond the idea.
          <br />
          <span className="muted-heading">Into the room.</span>
        </h1>
        <p className="body-copy">
          Five ways to connect with business, hear new perspectives, and get
          involved with Common Ground.
        </p>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <h2>What brings us together.</h2>
          <span className="eyebrow">05 INITIATIVES</span>
        </div>
        <div className="project-list">
          {club.projects.map((project, index) => (
            <article className="project-row" key={project.name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{project.name}</h3>
                <span className="project-category">{project.category}</span>
              </div>
              <div>
                <p>{project.description}</p>
                <Link
                  className="text-link"
                  href={`/contact?project=${encodeURIComponent(project.name)}`}
                >
                  Ask about this project <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="quiet-panel">
        <p className="eyebrow">STAY IN THE LOOP</p>
        <h2 className="panel-title">
          The next conversation
          <br />
          could be your starting point.
        </h2>
        <p className="body-copy">
          Contact the club for meeting times, guest speaker details, and ways to
          take part.
        </p>
        <Link className="button" href="/contact">
          Get in touch <span aria-hidden="true">↗</span>
        </Link>
      </section>
      <section className="closing">
        <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
        <Link href="/contact">
          Bring us your idea.<span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
