export default function NotFound() {
  return (
    <main id="main" className="wrap">
      <section className="page-heading">
        <p className="eyebrow">404 / PAGE NOT FOUND</p>
        <h1>
          Let’s find
          <br />
          <span className="muted-heading">common ground.</span>
        </h1>
        <p className="body-copy">
          This page isn’t here. Head back home to explore the club.
        </p>
        <a className="button" style={{ marginTop: 28 }} href="/">
          Back to home
        </a>
      </section>
    </main>
  );
}
