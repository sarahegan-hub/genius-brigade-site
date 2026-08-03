import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Genius Brigade",
  description:
    "Glamabyte Privacy Policy version 3.0, applying to Glamabyte and Genius Brigade activities.",
};

const commitments = [
  "We collect as little information as possible, especially about children.",
  "We do not sell it. We do not use it for advertising.",
  "We do not put it into generative AI tools or use it to train, prompt, test or evaluate AI systems.",
  "Access is restricted to authorised people through password-protected accounts.",
];

function PolicyFooter() {
  return (
    <footer className="policy-footer">
      <div className="shell footer-legal">
        <div>
          <p>Glamabyte Pty Ltd</p>
          <p>ABN 96 691 867 464 · Melbourne, Australia</p>
          <p><a href="mailto:hello@glamabyte.com.au">hello@glamabyte.com.au</a></p>
        </div>
        <p className="acknowledgement">
          Glamabyte acknowledges the Traditional Custodians of the lands on
          which we live and work, and pays respect to Elders past, present and
          emerging. We acknowledge that sovereignty was never ceded.
        </p>
      </div>
      <div className="shell footer-base">
        <p>© 2026 Glamabyte Pty Ltd. All rights reserved.</p>
        <p>Genius Brigade is created by Glamabyte. <Link href="/privacy-policy">Privacy policy</Link></p>
      </div>
    </footer>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="policy-page">
      <header className="policy-header shell">
        <Link className="brand" href="/" aria-label="Back to Genius Brigade">
          <Image src="/assets/gb-logo.jpg" alt="Genius Brigade" width={475} height={247} priority unoptimized />
        </Link>
        <Link className="back-link" href="/">← Back to Genius Brigade</Link>
      </header>

      <article className="policy-document shell">
        <div className="policy-hero">
          <p className="eyebrow"><span /> Privacy and trust</p>
          <h1>Privacy Policy</h1>
          <p className="policy-version">Version 3.0 · Effective 3 August 2026</p>
          <p className="policy-applies">Applies to Glamabyte and Genius Brigade™ activities delivered by Glamabyte.</p>
        </div>

        <aside className="policy-commitment" aria-label="Our key commitment">
          <h2>Our key commitment</h2>
          <ul>{commitments.map((item) => <li key={item}>{item}</li>)}</ul>
        </aside>

        <section>
          <h2>1. About this policy</h2>
          <p>This policy explains how Glamabyte Pty Ltd (Glamabyte, we, us or our) collects, holds, uses, discloses and protects personal information. It applies to Glamabyte&apos;s websites, communications, events, workshops, research, resources and services, including Genius Brigade™ activities delivered by Glamabyte.</p>
          <p>We aim to follow the Privacy Act 1988 (Cth) and the Australian Privacy Principles where they apply to us. We also use these principles as our minimum standard when the law does not strictly require them.</p>
          <p>Our work involving children is designed with the Victorian Child Safe Standards and Australia&apos;s developing Children&apos;s Online Privacy Code in mind.</p>
          <p>This public policy works with a collection notice shown at the point where information is collected. The collection notice explains the particular information, purpose and choices for that activity.</p>
        </section>

        <section>
          <h2>2. Our approach to children and families</h2>
          <p>Children deserve stronger privacy protection because they may not understand how information can travel, be combined or be used later. We design for children and communicate with parents and carers.</p>
          <ul>
            <li>We do not ask children to join mailing lists, complete research surveys or create an account without parent or guardian involvement.</li>
            <li>We collect the minimum child information reasonably needed for the activity, safety, accessibility or legal obligations. Wherever possible we restrict this to first name and age.</li>
            <li>We do not build advertising profiles about children or use children&apos;s information for targeted advertising.</li>
            <li>We do not sell, rent or trade information especially that of children.</li>
            <li>We do not publish a child&apos;s name, image, voice, work or story without the consent required for that specific use.</li>
            <li>We do not use children&apos;s personal information, photos, video, audio, creative work or communications in generative AI tools.</li>
          </ul>
          <p>A parent or guardian can ask what we hold about their child and request correction or deletion, subject to legal and safety record-keeping requirements.</p>
        </section>

        <section>
          <h2>3. What personal information we may collect</h2>
          <h3>Adults, parents and carers</h3>
          <ul>
            <li>Name, email address, telephone number and communication preferences.</li>
            <li>Organisation, role or community affiliation where relevant.</li>
            <li>Bookings, purchases, billing records and transaction information handled through our service providers.</li>
            <li>Survey responses, feedback, enquiries, consent choices and communications with us.</li>
            <li>Event or workshop information, including attendance and safety or accessibility information you choose or need to provide.</li>
          </ul>
          <h3>Children</h3>
          <p>Depending on the activity, and only where needed, a parent or guardian may provide limited information such as:</p>
          <ul>
            <li>a child&apos;s first name, preferred name or initial;</li>
            <li>age or age range;</li>
            <li>attendance or participation information;</li>
            <li>accessibility, dietary, medical, emergency or safety information required to support safe participation; and</li>
            <li>a child&apos;s work, image, voice or feedback only where a separate notice and appropriate consent apply.</li>
          </ul>
          <p>We do not need a child&apos;s full date of birth, home address, school, government identifier or detailed profile for ordinary Genius Brigade resources. Please do not send us more information about a child than we request.</p>
          <h3>Website and technical information</h3>
          <ul>
            <li>IP address, device and browser information, pages viewed, referral source and basic usage information.</li>
            <li>Cookies and similar technologies used for site operation, security, preferences and audience measurement.</li>
          </ul>
          <p>Where practical, website analytics are configured to reduce the collection of directly identifying information. Our cookie or collection notice will identify material analytics and marketing technologies in use.</p>
          <h3>Unsolicited information</h3>
          <p>If we receive personal information we did not ask for, we decide whether we could lawfully have collected it. If not, and where lawful and reasonable, we delete or de-identify it. Please do not email us sensitive information about a child unless we have asked for it through an approved process.</p>
        </section>

        <section>
          <h2>4. How we collect information</h2>
          <ul>
            <li>Directly from you through forms, bookings, purchases, surveys, emails, calls and conversations.</li>
            <li>From a parent, guardian, authorised representative, school, community organisation or delivery partner where appropriate and authorised.</li>
            <li>Automatically through our websites and service providers.</li>
            <li>From public sources where lawful and reasonably expected.</li>
          </ul>
          <p>We provide a tailored collection notice when the context requires more detail or a specific choice.</p>
        </section>

        <section>
          <h2>5. Why we use personal information</h2>
          <ul>
            <li>To provide requested resources, services, events and workshops.</li>
            <li>To manage bookings, participation, safety, accessibility, payments and support.</li>
            <li>To communicate with you and respond to enquiries.</li>
            <li>To conduct research and improve our work using aggregated or de-identified findings where possible.</li>
            <li>To send marketing only where permitted, with an unsubscribe option in every marketing email.</li>
            <li>To protect people, systems and rights, investigate concerns and comply with legal obligations.</li>
          </ul>
          <p>We use personal information only for the purpose explained when it was collected, for a related purpose you would reasonably expect, with consent, or where authorised or required by law.</p>
        </section>

        <section>
          <h2>6. How we use AI</h2>
          <aside className="policy-ai-commitment">
            <strong>Our key commitment</strong>
            <p>Glamabyte uses AI to support parts of our work. People remain responsible for decisions. Your personal information and children&apos;s data always stay out of generative AI tools.</p>
          </aside>
          <p>We may use approved AI tools to help develop ideas, analyse non-personal material, draft or edit content, create synthetic examples, support coding and improve internal workflows.</p>
          <p>We do not intentionally enter, upload, connect or otherwise provide the following to generative AI tools:</p>
          <ul>
            <li>personal information about customers, community members, parents, carers or children;</li>
            <li>children&apos;s names, images, voices, video, creative work, participation records or communications;</li>
            <li>sensitive information, payment information, credentials or government identifiers; or</li>
            <li>confidential client or partner material unless a separate written agreement expressly permits a controlled use.</li>
          </ul>
          <p>We do not use personal information or children&apos;s data to train, fine-tune, prompt, test or evaluate AI models. When AI is used, we use original, synthetic, public, aggregated or genuinely de-identified material and apply human review before relying on an output.</p>
          <p>A service provider may use automated security, spam filtering, accessibility or operational features within its service. We assess these arrangements as part of provider selection and configuration. We do not treat a vendor&apos;s background automation as permission to use personal information for unrelated AI development.</p>
        </section>

        <section>
          <h2>7. Disclosure and service providers</h2>
          <p>We disclose only the information reasonably needed for the purpose. We may use providers for website hosting, forms, email delivery, bookings, payments, document storage, communications, analytics, professional advice and event delivery.</p>
          <p>We may also disclose information:</p>
          <ul>
            <li>with your consent or at your direction;</li>
            <li>to protect a child or another person&apos;s safety, including making a report where required or authorised;</li>
            <li>to investigate misconduct, fraud, security incidents or legal claims; or</li>
            <li>where required or authorised by law.</li>
          </ul>
          <p>We do not sell, rent or trade personal information. We do not disclose children&apos;s information to data brokers or advertisers.</p>
        </section>

        <section>
          <h2>8. Overseas processing</h2>
          <p>Some service providers may store or process information outside Australia, including in the United States and other countries where they or their subprocessors operate. Before using a provider, we consider what information it receives, why it needs it, available security and privacy settings, contractual terms and whether a lower-data option is available.</p>
          <p>We take reasonable steps required by Australian privacy law before disclosing personal information overseas. Contact us if you want information about the likely locations relevant to a particular Glamabyte activity or your specific data.</p>
        </section>

        <section>
          <h2>9. Security, access and retention</h2>
          <p>We use administrative, technical and physical safeguards proportionate to the information and risk. Personal information is kept in approved systems and access is restricted to authorised people through individual, password-protected accounts. Access is based on role and need.</p>
          <p>No online system is completely secure. If a suspected privacy or security incident occurs, we contain it, assess the risk, keep appropriate records and notify affected people and regulators where required.</p>
          <p>We keep personal information only for as long as it is needed for the purpose, a safety or accountability reason, or a legal obligation. We then securely delete or de-identify it where lawful and reasonable. Retention periods may differ for financial records, consent records, child-safety records, incident records and ordinary enquiries.</p>
        </section>

        <section>
          <h2>10. Consent, images and children&apos;s creative work</h2>
          <ul>
            <li>Consent must be specific enough for the use. Permission to attend an activity is not automatically permission to publish a child&apos;s image, use their work in marketing or reuse it for another purpose.</li>
            <li>We separate essential participation information from optional marketing consent.</li>
            <li>We do not use pre-ticked consent boxes.</li>
            <li>We explain where an image, recording, quote or creative work may appear before seeking consent.</li>
            <li>A parent or guardian may withdraw optional consent for future use. Withdrawal cannot always remove material already lawfully published or distributed, but we will take reasonable steps where possible.</li>
          </ul>
        </section>

        <section>
          <h2>11. Access, correction, deletion and complaints</h2>
          <p>You can ask us to:</p>
          <ul>
            <li>confirm whether we hold personal information about you or your child;</li>
            <li>provide access to it;</li>
            <li>correct information that is inaccurate, out of date, incomplete, irrelevant or misleading;</li>
            <li>delete information where we are not required or justified to retain it;</li>
            <li>withdraw optional consent or unsubscribe from marketing; or</li>
            <li>explain how a privacy decision was made.</li>
          </ul>
          <p>Email <a href="mailto:hello@glamabyte.com.au">hello@glamabyte.com.au</a>. We may need to verify your identity and your authority to act for a child before providing access or making a change. We respond within a reasonable period and explain any lawful reason we cannot meet a request.</p>
          <p>If you have a concern, contact us first so we can investigate. If you are not satisfied, you may complain to the Office of the Australian Information Commissioner at <a href="https://www.oaic.gov.au">www.oaic.gov.au</a>. Child-safety concerns can also be raised through the reporting pathways identified in our Child Safety and Wellbeing Policy.</p>
        </section>

        <section>
          <h2>12. Cookies, links and third-party services</h2>
          <p>You can control many cookies through your browser and any consent controls we provide. Disabling some cookies may affect site functionality. Links to external services are governed by those services&apos; privacy practices. We encourage parents and carers to review them before a child uses the service.</p>
        </section>

        <section>
          <h2>13. Changes to this policy</h2>
          <p>We review this policy at least annually and when our activities, systems, data practices or legal obligations materially change. The current version and effective date appear at the top. We will provide a prominent website notice, direct communication or renewed consent where a change materially affects how existing personal information is handled.</p>
        </section>

        <section>
          <h2>14. Reference framework</h2>
          <p>This policy was prepared with reference to the following public guidance current at 3 August 2026:</p>
          <ul className="policy-references">
            <li><a href="https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines">Office of the Australian Information Commissioner, Australian Privacy Principles Guidelines, updated 13 May 2026</a></li>
            <li><a href="https://www.oaic.gov.au/privacy/privacy-registers/privacy-codes/childrens-online-privacy-code">Office of the Australian Information Commissioner, Children&apos;s Online Privacy Code information and timetable</a></li>
            <li><a href="https://ccyp.vic.gov.au/child-safe-standards/the-11-child-safe-standards/">Commission for Children and Young People Victoria, Child Safe Standard 2 and Child Safe Standard 9 guidance</a></li>
          </ul>
        </section>

        <section>
          <h2>15. Contact</h2>
          <p><strong>Privacy Contact:</strong> Sarah Egan, Director, Glamabyte Pty Ltd<br />
            <strong>Email:</strong> <a href="mailto:hello@glamabyte.com.au">hello@glamabyte.com.au</a><br />
            <strong>Location:</strong> Melbourne, Victoria, Australia</p>
        </section>

        <section className="policy-governance">
          <h2>Document governance</h2>
          <dl>
            <div><dt>Document</dt><dd>Glamabyte Privacy Policy</dd></div>
            <div><dt>Version</dt><dd>3.0</dd></div>
            <div><dt>Effective date</dt><dd>3 August 2026</dd></div>
            <div><dt>Owner</dt><dd>Sarah Egan, Director, Glamabyte Pty Ltd</dd></div>
            <div><dt>Applies to</dt><dd>Glamabyte and Genius Brigade™ activities delivered by Glamabyte</dd></div>
          </dl>
        </section>
      </article>
      <PolicyFooter />
    </main>
  );
}
