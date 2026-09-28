import type { Metadata } from "next";
import ThemeToggle from "../ThemeToggle";

export const metadata: Metadata = {
  title: "Studio Policies — Mertz Hands",
  description:
    "Studio policies for voice lessons with Mertz Hands: scheduling, cancellations, payment, and what you can expect from us.",
};

const sections: { heading: string; points: string[] }[] = [
  {
    heading: "Scheduling and attendance",
    points: [
      "To cancel or move a lesson, give at least 24 hours\u2019 notice before the scheduled start time. Any new time is subject to availability.",
      "With less than 24 hours\u2019 notice \u2014 or for a no-show \u2014 the full lesson fee is charged and no makeup is owed. Genuine emergencies are considered individually.",
      "If you arrive late, the lesson still ends at the scheduled time.",
    ],
  },
  {
    heading: "The studio\u2019s promise",
    points: [
      "If the instructor cancels, you may reschedule or receive a credit.",
      "If the instructor misses a scheduled lesson without notice, your next lesson of the same length is free.",
      "Instructor delays will be made up during the lesson or credited fairly.",
    ],
  },
  {
    heading: "Online lesson setup",
    points: [
      "Join on time from a quiet space with reliable internet, your music and tracks, a pencil, water, and a charged device. Frame the camera so posture and breathing are visible.",
      "If technology interrupts the lesson, both sides will try to reconnect. Studio-side failures are rescheduled or credited; unusual student-side problems are considered individually.",
    ],
  },
  {
    heading: "Payment and packages",
    points: [
      "Lessons are paid in full at booking; payment reserves the agreed time. Rates and lesson length appear on the invoice.",
      "Four-lesson packages expire 90 days after purchase. Unused lessons do not roll over beyond that period.",
    ],
  },
  {
    heading: "Preparation and vocal well-being",
    points: [
      "Bring the assigned material and complete the preparation agreed on at the previous lesson.",
      "Tell the instructor about illness, fatigue, hoarseness, or discomfort before singing. A vocally limited lesson may shift to text, musicianship, listening, repertoire, or audition work; singing through pain is never expected.",
      "Persistent or concerning vocal symptoms should be evaluated by a qualified health professional; voice instruction is not medical care.",
    ],
  },
  {
    heading: "Recordings and materials",
    points: [
      "Lesson recordings require mutual agreement and are for the student\u2019s private study unless written permission allows sharing.",
      "Sheet music, tracks, exercises, and other materials remain subject to their creators\u2019 rights and should not be redistributed.",
    ],
  },
  {
    heading: "Communication",
    points: [
      "Send schedule changes through the booking channel or by email. Notice counts when the message is received.",
      "Policy updates will be provided in writing and apply to future bookings.",
    ],
  },
];

export default function StudioPolicies() {
  return (
    <main>
      <header>
        <a className="mark" href="/" aria-label="MertzHands home">
          <span>M</span> MertzHands
        </a>
        <nav aria-label="Main navigation">
          <a href="/#practice">Practice</a>
          <a href="/#tracks">Tracks</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#process">Process</a>
          <a href="/#hello">Hello</a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="note-link" href="mailto:hello@mertzhands.com">Send a note</a>
        </div>
      </header>

      <article className="policies">
        <p className="section-no">Studio Policies</p>
        <h1>The short version of how we work together.</h1>
        <p className="policies-intro">
          Clear, reciprocal expectations help each lesson stay focused,
          dependable, and productive.
        </p>

        <div className="policies-highlights">
          <div>
            <strong>24 hours</strong>
            <span>Notice to cancel or reschedule</span>
          </div>
          <div>
            <strong>Our promise</strong>
            <span>Instructor no-show means your next lesson is free</span>
          </div>
        </div>

        {sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            <ul>
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        ))}

        <p className="policies-ack">
          By booking a lesson, the student — or a parent/guardian for a
          minor — acknowledges these policies.
        </p>
      </article>

      <footer>
        <span>© 2026 Mertz Hands</span>
        <a href="/studio-policies">Studio Policies</a>
        <a href="/">Back home ↑</a>
      </footer>
    </main>
  );
}
