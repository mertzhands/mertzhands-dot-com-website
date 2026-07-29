import ThemeToggle from "./ThemeToggle";

const collaborationPlaceholders = [
  { id: "01", label: "Collaboration placeholder 01" },
  { id: "02", label: "Collaboration placeholder 02" },
  { id: "03", label: "Collaboration placeholder 03" },
  { id: "04", label: "Collaboration placeholder 04" },
  { id: "05", label: "Collaboration placeholder 05" },
  { id: "06", label: "Collaboration placeholder 06" },
];

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
        <div className="header-actions">
          <ThemeToggle />
          <a className="note-link" href="mailto:hello@mertzhands.com">Send a note ↗</a>
        </div>
      </header>

      <section className="hero" id="top">
        <h1 className="sr-only">Mertz Hands — How may we help you?</h1>
        <div className="hero-poster">
          <img src="/hero-piano-metronome-still.png" alt="Mertz Hands — How may we help you? Beside an exposed-action upright piano, a wooden metronome, and pencils." />
          <svg
            className="metronome-motion"
            viewBox="0 0 1536 1024"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="pendulum-metal"
                gradientUnits="userSpaceOnUse"
                x1="742"
                y1="0"
                x2="752"
                y2="0"
                colorInterpolation="sRGB"
              >
                <stop offset="0" stopColor="#544b3e" />
                <stop offset=".42" stopColor="#e2d5bd" />
                <stop offset=".72" stopColor="#8e8371" />
                <stop offset="1" stopColor="#3b352c" />
              </linearGradient>
              <clipPath id="pendulum-behind-lip" clipPathUnits="userSpaceOnUse">
                <rect x="700" y="540" width="94" height="104" />
              </clipPath>
            </defs>
            <g clipPath="url(#pendulum-behind-lip)">
              <g className="metronome-arm">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="-18 747 662; 18 747 662; -18 747 662"
                  keyTimes="0; .5; 1"
                  dur="2s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines=".45 .04 .55 .96; .45 .04 .55 .96"
                />
                <line x1="747" y1="662" x2="747" y2="568" stroke="#332e27" strokeWidth="3.2" strokeLinecap="round" opacity=".42" />
                <line x1="747" y1="662" x2="747" y2="568" stroke="url(#pendulum-metal)" strokeWidth="1.8" strokeLinecap="round" />
                <g className="metronome-weight">
                  <path d="M742.5 594.5 L751.5 594.5 L750 607.5 L744 607.5 Z" fill="#6f675a" stroke="#3f3931" strokeWidth="1" />
                  <path d="M744 595.3 L749.8 595.3 L749 606.7 L744.8 606.7 Z" fill="#b9ad99" />
                  <path d="M745.1 595.7 L747.1 595.7 L746.7 606.3 L745.3 606.3 Z" fill="#eee3d1" opacity=".92" />
                  <path d="M747.1 595.7 L749.3 595.7 L748.6 606.3 L746.7 606.3 Z" fill="#8c8273" opacity=".9" />
                  <line x1="745.65" y1="596.2" x2="745.8" y2="605.7" stroke="#fff8e9" strokeWidth=".55" strokeLinecap="round" opacity=".82" />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="hero-intro">
          <p className="overline">Music instruction · Creative direction · Houston</p>
          <div className="hero-bottom">
            <p>
              Collaborating with students and working artists—from singers and
              instrumentalists to actors and producers—turning your goals and
              ideas into work you can be proud to share.
            </p>
            <a className="practice-jump" href="#practice" aria-label="Explore the practice">
              <span aria-hidden="true">+</span>
            </a>
          </div>
        </div>
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
        <div className="category-grid">
          <details className="category-card education">
            <summary>
              <span className="category-number">01 / 04 offerings</span>
              <span className="category-title">Education</span>
              <span className="category-description">Skills, understanding, and confidence built around the way you learn.</span>
              <span className="category-toggle" aria-hidden="true">+</span>
            </summary>
            <div className="category-contents">
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Vocal%20instruction">
                <span>01</span><h3>Vocal Instruction</h3><p>Personalized coaching to build a healthy, expressive voice and the confidence to use it fully.</p><i>↗</i>
              </a>
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Audition%20preparation">
                <span>02</span><h3>Audition Preparation</h3><p>Focused coaching to choose strong material, refine every detail, and enter the room prepared, confident, and fully yourself.</p><i>↗</i>
              </a>
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Music%20theory">
                <span>03</span><h3>Music Theory</h3><p>Clear, approachable instruction that connects the ideas on the page to the music you hear and make.</p><i>↗</i>
              </a>
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Piano%20instruction">
                <span>04</span><h3>Piano Instruction</h3><p>Patient, practical lessons shaped around your level, musical interests, and personal goals.</p><i>↗</i>
              </a>
            </div>
          </details>

          <details className="category-card performance">
            <summary>
              <span className="category-number">02 / 04 offerings</span>
              <span className="category-title">Performance</span>
              <span className="category-description">Preparation that helps the work feel present, expressive, and fully alive.</span>
              <span className="category-toggle" aria-hidden="true">+</span>
            </summary>
            <div className="category-contents">
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Live%20performance">
                <span>01</span><h3>Live Solo Performance</h3><p>Thoughtful preparation and practical coaching to help you perform with confidence, presence, and musical freedom.</p><i>↗</i>
              </a>
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Live%20ensemble%20performance">
                <span>02</span><h3>Live Ensemble Performance</h3><p>Collaborative coaching and musical leadership that help groups listen deeply, rehearse with clarity, and perform as one.</p><i>↗</i>
              </a>
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Live%20accompaniment">
                <span>03</span><h3>Live Accompaniment</h3><p>Responsive, dependable piano support for lessons, rehearsals, auditions, and performances.</p><i>↗</i>
              </a>
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Music%20direction">
                <span>04</span><h3>Music Direction</h3><p>Support for rehearsals and performances that brings people together around a shared musical vision.</p><i>↗</i>
              </a>
            </div>
          </details>

          <details className="category-card creative-direction">
            <summary>
              <span className="category-number">03 / 02 offerings</span>
              <span className="category-title">Materials Preparation</span>
              <span className="category-description">Thoughtful structure and support to carry a musical idea into the world.</span>
              <span className="category-toggle" aria-hidden="true">+</span>
            </summary>
            <div className="category-contents">
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Manuscript%20creation">
                <span>01</span><h3>Manuscript Creation</h3><p>Careful preparation, notation, editing, and refinement that turns musical ideas into clear, usable scores.</p><i>↗</i>
              </a>
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Audio%20production">
                <span>02</span><h3>Audio Production</h3><p>Creative, attentive production that shapes your sound and carries each musical idea clearly from session to finished recording.</p><i>↗</i>
              </a>
            </div>
          </details>

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
        <h2>Bring the idea.<br /><em>Together, we’ll bring it to life.</em></h2>
        <a href="mailto:hello@mertzhands.com">hello@mertzhands.com ↗</a>
        <div className="collaboration-ribbon">
          <p>Prior collaborators include</p>
          <div className="collaboration-window">
            <div className="collaboration-track">
              {[0, 1].map((copy) => (
                <div
                  className="collaboration-set"
                  key={copy}
                  role={copy === 0 ? "list" : undefined}
                  aria-hidden={copy === 1 ? "true" : undefined}
                >
                  {collaborationPlaceholders.map((collaboration) => (
                    <div
                      className="collaboration-mark"
                      role={copy === 0 ? "listitem" : undefined}
                      aria-label={copy === 0 ? collaboration.label : undefined}
                      key={`${copy}-${collaboration.id}`}
                    >
                      <span aria-hidden="true">{collaboration.id}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Mertz Hands</span>
        <span>Made thoughtfully in Houston</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
