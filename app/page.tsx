import ThemeToggle from "./ThemeToggle";

const collaborationPlaceholders = [
  { id: "01", label: "Collaboration placeholder 01" },
  { id: "02", label: "Collaboration placeholder 02" },
  { id: "03", label: "Collaboration placeholder 03" },
  { id: "04", label: "Collaboration placeholder 04" },
  { id: "05", label: "Collaboration placeholder 05" },
  { id: "06", label: "Collaboration placeholder 06" },
];

function EmailIcon() {
  return (
    <span className="email-icon" aria-hidden="true">
      <svg viewBox="0 0 20 16" focusable="false">
        <rect x="1" y="1" width="18" height="14" rx="1.5" />
        <path d="m2 2 8 6 8-6" />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header>
        <a className="mark" href="#top" aria-label="MertzHands home">
          <span>M</span> MertzHands
        </a>
        <nav aria-label="Main navigation">
          <a href="#practice">Practice</a>
          <a href="#tracks">Tracks</a>
          <a href="#pricing">Pricing</a>
          <a href="#process">Process</a>
          <a href="#hello">Hello</a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="note-link" href="mailto:hello@mertzhands.com">Send a note <EmailIcon /></a>
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
              Collaborating with students and working artists
              <br className="hero-line-break" />
              <span className="hero-separator" aria-hidden="true">✦</span>{" "}
              singers, instrumentalists, actors, and producers{" "}
              <span className="hero-separator" aria-hidden="true">✦</span>{" "}
              turning your goals and ideas into work you can be proud to share.
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
            “Your dream sets the direction. <span className="quote-continuation">Together, we build the <em>skills,
            confidence,</em> and <span className="quote-accent">clear next steps</span> to bring it to life.”</span>
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
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Vocal%20instruction" aria-label="Email about Vocal Instruction">
                <span>01</span><h3>Vocal Instruction</h3><p>Personalized coaching to build a healthy, expressive voice and the confidence to use it fully.</p><EmailIcon />
              </a>
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Audition%20preparation" aria-label="Email about Audition Preparation">
                <span>02</span><h3>Audition Preparation</h3><p>Focused coaching to choose strong material, refine every detail, and enter the room prepared, confident, and fully yourself.</p><EmailIcon />
              </a>
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Music%20theory" aria-label="Email about Music Theory">
                <span>03</span><h3>Music Theory</h3><p>Clear, approachable instruction that connects the ideas on the page to the music you hear and make.</p><EmailIcon />
              </a>
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Piano%20instruction" aria-label="Email about Piano Instruction">
                <span>04</span><h3>Piano Instruction</h3><p>Patient, practical lessons shaped around your level, musical interests, and personal goals.</p><EmailIcon />
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
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Live%20performance" aria-label="Email about Live Solo Performance">
                <span>01</span><h3>Live Solo Performance</h3><p>Thoughtful preparation and practical coaching to help you perform with confidence, presence, and musical freedom.</p><EmailIcon />
              </a>
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Live%20ensemble%20performance" aria-label="Email about Live Ensemble Performance">
                <span>02</span><h3>Live Ensemble Performance</h3><p>Collaborative coaching and musical leadership that help groups listen deeply, rehearse with clarity, and perform as one.</p><EmailIcon />
              </a>
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Live%20accompaniment" aria-label="Email about Live Accompaniment">
                <span>03</span><h3>Live Accompaniment</h3><p>Responsive, dependable piano support for lessons, rehearsals, auditions, and performances.</p><EmailIcon />
              </a>
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Music%20direction" aria-label="Email about Music Direction">
                <span>04</span><h3>Music Direction</h3><p>Support for rehearsals and performances that brings people together around a shared musical vision.</p><EmailIcon />
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
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Audio%20production" aria-label="Email about Audio Production">
                <span>01</span><h3>Audio Production</h3><p>Creative, attentive production that shapes your sound and carries each musical idea clearly from session to finished recording.</p><EmailIcon />
              </a>
              <a className="category-offering" href="mailto:hello@mertzhands.com?subject=Manuscript%20creation" aria-label="Email about Manuscript Creation">
                <span>02</span><h3>Manuscript Creation</h3><p>Careful preparation, notation, editing, and refinement that turns musical ideas into clear, usable scores.</p><EmailIcon />
              </a>
            </div>
          </details>

        </div>
      </section>

      <section className="tracks" id="tracks">
        <div className="tracks-head">
          <p className="section-no">03 / Audition Tracks</p>
          <h2>Walk into the room<br />with the right cut, in the right key.</h2>
        </div>
        <p className="tracks-intro">
          Audition tracks built for your voice. Lessons that get you ready.
          Your 16 bars, cut clean, in the key you actually sing — built like a
          music director wants to hear it: honest tempo, an ending that lands,
          no surprises on audition day.
        </p>
        <div className="track-grid">
          <article className="track-card">
            <p className="track-number">01</p>
            <h3>The Audition Cut</h3>
            <p className="track-price">$75</p>
            <p>One song, cut to your length — 16 or 32 bars, or about a minute. Your key, clean start, ending that lands. Delivered as MP3 and WAV.</p>
            <a href="mailto:hello@mertzhands.com?subject=Audition%20Cut%20order" aria-label="Email about ordering an Audition Cut">Start an order <EmailIcon /></a>
          </article>
          <article className="track-card">
            <p className="track-number">02</p>
            <h3>The Audition Cut Plus</h3>
            <p className="track-price">$115</p>
            <p>Everything in the Audition Cut, plus a key change and tempo adjustment — for when the published key doesn&rsquo;t sit right in your voice.</p>
            <a href="mailto:hello@mertzhands.com?subject=Audition%20Cut%20Plus%20order" aria-label="Email about ordering an Audition Cut Plus">Start an order <EmailIcon /></a>
          </article>
          <article className="track-card">
            <p className="track-number">03</p>
            <h3>The Custom Build</h3>
            <p className="track-price">$195</p>
            <p>A multi-song medley or a from-scratch arrangement of your song, built around how you sing it. One key change included.</p>
            <a href="mailto:hello@mertzhands.com?subject=Custom%20Build%20order" aria-label="Email about ordering a Custom Build">Start an order <EmailIcon /></a>
          </article>
          <article className="track-card add-on">
            <p className="track-number">+</p>
            <h3>Add a song</h3>
            <p className="track-price">$65</p>
            <p>Add another song to the same order and keep everything in one tidy package.</p>
            <a href="mailto:hello@mertzhands.com?subject=Additional%20song%20order" aria-label="Email about adding a song to an order">Start an order <EmailIcon /></a>
          </article>
        </div>

        <div className="tracks-lessons">
          <h3>Online voice lessons</h3>
          <p>Forty-five or sixty minutes, one on one, wherever you are. Technique, repertoire, and audition strategy with a working accompanist who hears singers every week.</p>
          <ul>
            <li><span>Single lesson, 45 minutes</span><strong>$80</strong></li>
            <li><span>Single lesson, 60 minutes</span><strong>$100</strong></li>
            <li><span>Four-lesson package</span><strong>$280</strong></li>
            <li><span>Prescreen coaching session, 60 minutes</span><strong>$120</strong></li>
          </ul>
          <p className="lesson-note">Prescreen coaching: we run your cuts like the real thing, then review your tracks together.</p>
        </div>

        <div className="tracks-cta">
          <p>Tell me your song and your audition date — we&rsquo;ll take it from there.</p>
          <a href="mailto:hello@mertzhands.com?subject=Audition%20track%20inquiry">hello@mertzhands.com ↗</a>
        </div>

        <div className="sample-grid">
          <p className="section-no">Sample tracks</p>
          <div className="sample-cards">
            {[1, 2, 3].map((n) => (
              <div className="sample-card" key={n}>
                <span>0{n}</span>
                <p>Sample track — coming soon</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="testimonial-note">
          <p className="section-no">What singers say</p>
          <p>Coming soon — kind words from the studio.</p>
        </aside>
      </section>

      <section className="pricing" id="pricing">
        <div className="pricing-head">
          <p className="section-no">04 / Pricing &amp; Booking</p>
          <h2>Straightforward pricing,<br />no surprises.</h2>
        </div>
        <p className="pricing-intro">
          College prescreen and audition season runs October through February.
          Book early — rush slots fill first. All prices in USD.
        </p>

        <div className="price-columns">
          <div>
            <h3>Custom audition tracks</h3>
            <ul className="price-list">
              <li><span>The Audition Cut</span><strong>$75</strong></li>
              <li><span>The Audition Cut Plus</span><strong>$115</strong></li>
              <li><span>The Custom Build</span><strong>$195</strong></li>
              <li><span>Add a song to the same order</span><strong>$65</strong></li>
            </ul>
          </div>
          <div>
            <h3>Online voice lessons</h3>
            <ul className="price-list">
              <li><span>Single lesson, 45 minutes</span><strong>$80</strong></li>
              <li><span>Single lesson, 60 minutes</span><strong>$100</strong></li>
              <li><span>Four-lesson package</span><strong>$280</strong></li>
              <li><span>Prescreen coaching, 60 minutes</span><strong>$120</strong></li>
            </ul>
          </div>
        </div>

        <div className="turnaround">
          <h3>Turnaround</h3>
          <table className="turnaround-table">
            <thead>
              <tr><th>Speed</th><th>Delivery</th><th>Added cost</th></tr>
            </thead>
            <tbody>
              <tr><td>Standard</td><td>5 business days</td><td>Included</td></tr>
              <tr><td>Express</td><td>3 business days</td><td>+35%</td></tr>
              <tr><td>Rush</td><td>48 hours</td><td>+60%</td></tr>
            </tbody>
          </table>
          <p>The clock starts when we have your music <em>and</em> your payment. Business days are Monday through Friday.</p>
        </div>

        <div className="booking-steps">
          <h3>How ordering a track works</h3>
          <ol className="steps">
            <li><div><strong>You reach out.</strong><p>Email us — the song and your audition date are enough to start.</p></div></li>
            <li><div><strong>You send your materials.</strong><p>Sheet music, a reference recording link, and your notes: cut points, key, tempo, ending, deadline.</p></div></li>
            <li><div><strong>We confirm and invoice.</strong><p>You get a quote with the tier and turnaround; payment reserves your production slot.</p></div></li>
            <li><div><strong>We build your track.</strong><p>MP3 and WAV by the agreed date — your length, your key, your tempo.</p></div></li>
            <li><div><strong>One revision round, included.</strong><p>Small fixes within 7 days of delivery.</p></div></li>
            <li><div><strong>Audition day.</strong><p>Your track, your key, your tempo. Break a leg.</p></div></li>
          </ol>
          <h3>How booking a lesson works</h3>
          <ol className="steps">
            <li><div><strong>Pick your lesson type.</strong><p>Single lesson, four-lesson package, or prescreen coaching.</p></div></li>
            <li><div><strong>Choose a time.</strong><p>Tell us your time zone when you book — we&rsquo;re on Central time.</p></div></li>
            <li><div><strong>Invoice and payment lock it in.</strong><p>Lessons are paid in full when you book.</p></div></li>
            <li><div><strong>Your meeting link arrives by email.</strong><p>Bring your book and your questions.</p></div></li>
            <li><div><strong>We work.</strong><p>Technique, repertoire, and audition strategy — or a full prescreen run-through.</p></div></li>
            <li><div><strong>Follow-up notes after.</strong><p>What we covered and what to practice next.</p></div></li>
          </ol>
        </div>

        <div className="terms">
          <h3>The fine print, plainly</h3>
          <details>
            <summary>Turnaround</summary>
            <p>Standard is 5 business days, Express 3, Rush 48 hours — counted from when we receive both your materials and your payment. If your deadline can&rsquo;t be met, you&rsquo;ll know before you pay, never after.</p>
          </details>
          <details>
            <summary>Revisions</summary>
            <p>One round of adjustments is included within 7 days of delivery: balance fixes, small tempo tweaks, ending corrections. A new key, a different cut, or a new song counts as a new order.</p>
          </details>
          <details>
            <summary>How to submit your music</summary>
            <p>Send four things: sheet music (PDF or a clear phone photo), a reference recording link, your notes (song, show, cut points, key, tempo, ending), and your deadline. The clearer the package, the faster the turnaround.</p>
          </details>
          <details>
            <summary>Payment</summary>
            <p>We invoice you directly — there&rsquo;s no online checkout. Orders under $150 are paid in full before delivery; orders of $150 or more take a 50% deposit to book your slot, with the balance due on delivery. No refunds on delivered custom work; if we miss your agreed deadline, you get a full refund.</p>
          </details>
          <details>
            <summary>Lesson policy</summary>
            <p>Reschedule or cancel with at least 24 hours&rsquo; notice. Missed appointments without notice are forfeited. Four-lesson packages expire 90 days after purchase.</p>
            <p><a href="/studio-policies">Read the full Studio Policies →</a></p>
          </details>
          <details>
            <summary>A note on rights</summary>
            <p>Tracks are made for audition and rehearsal use. You&rsquo;re responsible for securing performance rights from the appropriate rights holders if you use them on stage.</p>
          </details>
        </div>

        <div className="faq">
          <h3>Questions, answered</h3>
          <details>
            <summary>What exactly do you need from me to start a track?</summary>
            <p>Sheet music, a link to a reference recording, and a few notes: where the cut starts and ends, the key, the tempo, how you want it to end, and your deadline.</p>
          </details>
          <details>
            <summary>How fast can I get my track?</summary>
            <p>Standard turnaround is 5 business days. Need it sooner? Express delivers in 3 business days (+35%) and Rush in 48 hours (+60%).</p>
          </details>
          <details>
            <summary>How does payment work?</summary>
            <p>We send you an invoice directly and you pay us — no checkout, no accounts. Your slot is reserved once payment (or deposit) arrives.</p>
          </details>
          <details>
            <summary>What if I need changes after delivery?</summary>
            <p>One round of small fixes is included within 7 days. A new key, a different cut, or a new song is a new order.</p>
          </details>
          <details>
            <summary>Can I use the track in a performance?</summary>
            <p>Tracks are built for auditions and rehearsal. For stage use, you&rsquo;ll need to secure performance rights from the rights holders.</p>
          </details>
          <details>
            <summary>Where do online lessons happen?</summary>
            <p>Online — your meeting link arrives by email after booking. We&rsquo;re on Central time, so mention your time zone when you book.</p>
          </details>
        </div>
      </section>

      <section className="process" id="process">
        <figure>
          <div className="image-wrap">
            <img src="/phonograph.jpg" alt="A warm red and cream mid-century phonograph" />
          </div>
          <figcaption>A good process feels like breathing.</figcaption>
        </figure>
        <div className="process-copy">
          <p className="section-no">05 / Process</p>
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
        <p className="section-no">06 / Hello</p>
        <p className="hello-note">Your goals are just the beginning.</p>
        <h2>Share your ideas.<br /><em>Together, we’ll bring them to life.</em></h2>
        <a href="mailto:hello@mertzhands.com">hello@mertzhands.com ↗</a>
        <div className="collaboration-ribbon">
          <p>Representative collaborators include</p>
          <div className="collaboration-window">
            <div className="collaboration-track">
              {[0, 1, 2, 3].map((copy) => (
                <div
                  className="collaboration-set"
                  key={copy}
                  role={copy === 0 ? "list" : undefined}
                  aria-hidden={copy > 0 ? "true" : undefined}
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
        <a href="/studio-policies">Studio Policies</a>
        <span>Made thoughtfully in Houston</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
