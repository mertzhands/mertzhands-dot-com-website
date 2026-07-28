export default function Home() {
  return (
    <main>
      <header>
        <a className="mark" href="#top" aria-label="Mertz Hands home">
          <span>m</span> mertz hands
        </a>
        <nav aria-label="Main navigation">
          <a href="#practice">Practice</a>
          <a href="#process">Process</a>
          <a href="#hello">Hello</a>
        </nav>
        <a className="note-link" href="mailto:hello@mertzhands.com">Send a note ↗</a>
      </header>

      <section className="hero" id="top">
        <div className="sun" aria-hidden="true" />
        <p className="overline">Independent creative practice · Chicago</p>
        <h1>Thoughtful things,<br /><em>made well.</em></h1>
        <div className="hero-bottom">
          <p>
            Sound, stories, identities, and digital experiences—shaped with
            curiosity, warmth, and a good pair of hands.
          </p>
          <a href="#practice" aria-label="Explore the practice">↓</a>
        </div>
      </section>

      <section className="welcome">
        <p className="section-no">01 / Welcome</p>
        <blockquote>
          “A small studio for making ideas feel <em>clearer, warmer,</em> and
          more like themselves.”
        </blockquote>
        <div className="welcome-note">
          <span className="line" />
          <p>I work closely with people who care deeply about what they’re putting into the world.</p>
        </div>
      </section>

      <section className="practice" id="practice">
        <div className="practice-head">
          <p className="section-no">02 / Practice</p>
          <h2>What we might<br />make together</h2>
        </div>
        <div className="offerings">
          <a href="mailto:hello@mertzhands.com?subject=Sound">
            <span>01</span><h3>Sound & music</h3><p>Original music, production, sonic worlds, and identities you can hear.</p><i>↗</i>
          </a>
          <a href="mailto:hello@mertzhands.com?subject=Story">
            <span>02</span><h3>Story & voice</h3><p>Narratives, writing, and editorial thinking that help the right idea come forward.</p><i>↗</i>
          </a>
          <a href="mailto:hello@mertzhands.com?subject=Identity">
            <span>03</span><h3>Identity & form</h3><p>Names, visual direction, and flexible systems with character and staying power.</p><i>↗</i>
          </a>
          <a href="mailto:hello@mertzhands.com?subject=Digital">
            <span>04</span><h3>Digital places</h3><p>Websites and useful tools that feel considered, intuitive, and genuinely human.</p><i>↗</i>
          </a>
        </div>
      </section>

      <section className="process" id="process">
        <figure>
          <div className="image-wrap">
            <img src="/phonograph.jpg" alt="A warm red and cream mid-century phonograph" />
          </div>
          <figcaption>A good process should feel like listening.</figcaption>
        </figure>
        <div className="process-copy">
          <p className="section-no">03 / Process</p>
          <h2>Quietly curious.<br />Genuinely collaborative.</h2>
          <p className="intro">
            We begin by paying attention. Then we find the essential thing,
            give it a shape, and keep refining until it feels inevitable.
          </p>
          <ol>
            <li><span>01</span><div><strong>Listen</strong><p>Make room for context, instinct, and what has not been said yet.</p></div></li>
            <li><span>02</span><div><strong>Shape</strong><p>Turn loose ideas into a clear direction we can see and respond to.</p></div></li>
            <li><span>03</span><div><strong>Make</strong><p>Build carefully, share early, and leave the work better than we found it.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="hello" id="hello">
        <div className="leaf" aria-hidden="true" />
        <p className="section-no">04 / Hello</p>
        <h2>Let’s make something<br /><em>worth keeping.</em></h2>
        <a href="mailto:hello@mertzhands.com">hello@mertzhands.com ↗</a>
      </section>

      <footer>
        <span>© 2026 Mertz Hands</span>
        <span>Made thoughtfully in Chicago</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
