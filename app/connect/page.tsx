import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CommunityInterestForm } from "../forms";

export const metadata: Metadata = {
  title: "Partner with Genius Brigade",
  description:
    "Register your interest in Genius Brigade workshops and community activations.",
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M16 10H5M9 5l-5 5 5 5" />
    </svg>
  );
}

export default function ConnectPage() {
  return (
    <main className="connect-page">
      <header className="connect-header shell">
        <Link className="brand" href="/" aria-label="Back to Genius Brigade">
          <Image
            src="/assets/gb-logo.jpg"
            alt="Genius Brigade"
            width={475}
            height={247}
            priority
            unoptimized
          />
        </Link>
        <Link className="back-link" href="/">
          <ArrowIcon /> Back to the Brigade
        </Link>
      </header>

      <section className="connect-hero">
        <div className="connect-glow" />
        <div className="shell connect-layout">
          <div className="connect-copy">
            <p className="eyebrow eyebrow-aqua">
              <span />
              Partner with us
            </p>
            <h1>Bring the Brigade to your community.</h1>
            <p className="lead">
              Help us create useful, values-aligned family experiences where
              your community already gathers.
            </p>
            <p>
              We&apos;re starting in Hobsons Bay and surrounding communities,
              then growing carefully with the people who know their families
              best. Register your interest in workshops, local activations and
              community partnerships.
            </p>
            <ul>
              <li>Family AI and digital literacy workshops</li>
              <li>Libraries, schools, councils and community groups</li>
              <li>Designed for families to experience together</li>
            </ul>
          </div>
          <CommunityInterestForm />
        </div>
      </section>

      <footer className="connect-footer">
        <div className="shell footer-legal">
          <div>
            <p>Glamabyte Pty Ltd</p>
            <p>ABN 96 691 867 464 · Melbourne, Australia</p>
            <p>
              <a href="mailto:hello@glamabyte.com.au">hello@glamabyte.com.au</a>
            </p>
          </div>
          <p className="acknowledgement">
            Glamabyte acknowledges the Traditional Custodians of the lands on
            which we live and work, and pays respect to Elders past, present and
            emerging. We acknowledge that sovereignty was never ceded.
          </p>
        </div>
        <div className="shell footer-base">
          <p>© 2026 Glamabyte Pty Ltd. All rights reserved.</p>
          <p>
            Genius Brigade is created by Glamabyte.{" "}
            <a href="https://glamabyte.com.au/privacy-policy">
              Privacy policy
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
