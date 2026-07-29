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
        <h1 className="sr-only">Mertz Hands — How may we help you?</h1>
        <div className="hero-poster">
          <img src="/hero-piano-v7.png" alt="Mertz Hands — How may we help you? Beside an exposed-action upright piano, a wooden metronome, and pencils." />
        </div>
        <div className="hero-intro">
          <p className="overline">Music instruction · Creative direction · Chicago</p>
          <div className="hero-bottom">
            <p>
              Helping singers, musicians, students, and creative people turn
              their goals and ideas into work they are proud to share.
            </p>
            <a href="#practice" aria-label="Explore the practice">↓</a>
          </div>
        </div>
      </section>

      <section className="material-bar" aria-label="Working qualities">
        <span>Listening</span><span>Clarity</span><span>Craft</span><span>Warmth</span><span>Growth</span>
      </section>

      <section className="welcome">
        <p className="section-no">01 / Welcome</p>
        <div className="welcome-grid">
          <blockquote>
            “Your dream sets the direction. Together, we build the <em>skills,
            confidence,</em> and clear next steps to bring it to life.”
          </blockquote>
          <aside className="listening-object">
            <img src="/phonograph.jpg" alt="A red and cream mid-century phonograph" />
            <span>Good work begins with attention.</span>
          </aside>
        </div>
        <div className="welcome-note">
          <span className="line" />
          <p>
            Every student and client arrives with a different voice, purpose,
            and possibility. The work begins by listening to yours.
          </p>
        </div>
      </section>

      <section className="practice" id="practice">
        <div className="practice-head">
          <p className="section-no">02 / Practice</p>
          <h2>Ways we can help<br />you move forward</h2>
        </div>
        <p className="catalogue-note">A considered practice for the whole musical person.</p>
        <div className="offerings">
          <a className="vocal" href="mailto:hello@mertzhands.com?subject=Vocal%20instruction">
            <span>01</span><h3>Vocal instruction</h3><p>Personalized coaching to build a healthy, expressive voice and the confidence to use it fully.</p><i>↗</i>
          </a>
          <a className="piano" href="mailto:hello@mertzhands.com?subject=Piano%20instruction">
            <span>02</span><h3>Piano instruction</h3><p>Patient, practical lessons shaped around your level, musical interests, and personal goals.</p><i>↗</i>
          </a>
          <a className="theory" href="mailto:hello@mertzhands.com?subject=Music%20theory">
            <span>03</span><h3>Music theory</h3><p>Clear, approachable instruction that connects the ideas on the page to the music you hear and make.</p><i>↗</i>
          </a>
          <a className="manuscript" href="mailto:hello@mertzhands.com?subject=Manuscript%20creation">
            <span>04</span><h3>Manuscript creation</h3><p>Careful preparation, notation, editing, and refinement that turns musical ideas into clear, usable scores.</p><i>↗</i>
          </a>
          <a className="direction" href="mailto:hello@mertzhands.com?subject=Music%20direction">
            <span>05</span><h3>Music direction</h3><p>Support for rehearsals and performances that brings people together around a shared musical vision.</p><i>↗</i>
          </a>
          <a className="performance" href="mailto:hello@mertzhands.com?subject=Live%20performance">
            <span>06</span><h3>Live performance</h3><p>Thoughtful preparation and practical coaching to help you perform with confidence, presence, and musical freedom.</p><i>↗</i>
          </a>
          <a className="production" href="mailto:hello@mertzhands.com?subject=Audio%20production">
            <span>07</span><h3>Audio production</h3><p>Creative, attentive production that shapes your sound and carries each musical idea clearly from session to finished recording.</p><i>↗</i>
          </a>
          <a className="audition" href="mailto:hello@mertzhands.com?subject=Audition%20preparation">
            <span>08</span><h3>Audition preparation</h3><p>Focused coaching to choose strong material, refine every detail, and enter the room prepared, confident, and fully yourself.</p><i>↗</i>
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
            We begin with what you want to accomplish. Then we shape a path
            around your strengths, your questions, and the way you learn best.
          </p>
          <ol>
            <li><span>01</span><div><strong>Listen</strong><p>Understand your dream, your experience, and what success would feel like to you.</p></div></li>
            <li><span>02</span><div><strong>Plan</strong><p>Turn the goal into clear, encouraging steps with room to learn and discover.</p></div></li>
            <li><span>03</span><div><strong>Grow</strong><p>Practice with purpose, respond to what we learn, and build lasting confidence together.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="hello" id="hello">
        <div className="leaf" aria-hidden="true" />
        <p className="section-no">04 / Hello</p>
        <p className="hello-note">Your goals are the beginning—not the boundary.</p>
        <h2>Bring the idea.<br /><em>We’ll find the way.</em></h2>
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
