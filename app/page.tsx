import Image from "next/image";
import Link from "next/link";
import { FoundingFamilyForm } from "./forms";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m12 2 2.15 6.17L20 10.3l-4.76 3.67.15 6.36L12 18.55l-3.39 1.78.15-6.36L4 10.3l5.85-2.13L12 2Z" />
    </svg>
  );
}

const brigade = [
  {
    name: "AL Hampton",
    meta: "10 · The Builder",
    accent: "gold",
    image: "/assets/al-visual.jpg",
    imageWidth: 1024,
    imageHeight: 1536,
    alt: "AL Hampton surrounded by amplified gold springs",
    short:
      "Founder of the Genius Brigade. AL turns ideas into action and believes everybody has brilliance. His growth edge? Learning that teamwork achieves more than individual brilliance.",
    long: (
      <>
        <p>
          AL founded the Genius Brigade in his Grandpa Russ&apos;s old workshop,
          and he built it on one belief: everybody has brilliance. He&apos;s the
          kid who pulls things apart to see how they work, then builds them back
          better.
        </p>
        <p>
          When a storm hit his hometown of South Side, ten-year-old AL used
          spare parts and creative thinking to build emergency lights and rally
          the local kids to help their community. That day taught him the lesson
          he now leads with: intelligence matters most when it&apos;s used to help
          people.
        </p>
        <blockquote>
          “Every problem has a solution. You just haven&apos;t found it yet.”
        </blockquote>
        <p className="symbol">
          <strong>His symbol:</strong> the amplified gold spring, ideas in
          motion.
        </p>
      </>
    ),
  },
  {
    name: "Scout Harper",
    meta: "5 · The Curious Explorer",
    accent: "pink",
    image: "/assets/scout-visual-2.jpg",
    imageWidth: 1024,
    imageHeight: 1536,
    alt: "Scout Harper smiling with wonder",
    short:
      "The Brigade's Curiosity Specialist. Scout asks the questions children are already thinking, and her questions unlock the breakthroughs. Brilliance begins with curiosity.",
    long: (
      <>
        <p>
          Here&apos;s the thing most people don&apos;t know: AL founded the Genius
          Brigade, but Scout is the reason it exists. Before the badges, the
          headquarters and the missions, there was just AL and his five-year-old
          neighbour with a shoebox full of questions.
        </p>
        <p>
          Scout&apos;s Question Box inspired the Brigade&apos;s very first rule:
          STAY CURIOUS. She travels with a magnifying glass, a sketchbook, a
          collection of feathers, rocks and mystery objects, and Mr Fluffs, the
          koala plush who has been on every adventure since she was a baby.
        </p>
        <p className="symbol">
          <strong>Her symbol:</strong> the pink heart and chalk trail, discovery
          and possibility.
        </p>
      </>
    ),
  },
  {
    name: "Jax Parker",
    meta: "8 · The Puzzle Solver",
    accent: "aqua",
    image: "/assets/jax-visual.jpg",
    imageWidth: 1023,
    imageHeight: 1537,
    alt: "Jax Parker surrounded by data aqua pattern lines",
    short:
      "Jax sees connections others miss. He's autistic and has ADHD, and the Brigade often succeeds because of how Jax thinks. Different thinking is valuable.",
    long: (
      <>
        <p>
          Where others see separate pieces, Jax sees how everything fits
          together. He carries twenty rocks everywhere, sorts them when
          he&apos;s thinking or overwhelmed, and will happily tell you the story
          behind every single one. Kevin, the acceptance rock, is named after a
          friendly street dog.
        </p>
        <p>
          Sometimes Jax&apos;s brain does too many tabs. Sometimes a sentence
          escapes before he can finish it. None of this is a flaw to fix. The
          Brigade is the first place Jax has been accepted exactly as he is, and
          through Jax, kids learn that different ways of thinking are powerful,
          valuable and needed.
        </p>
        <blockquote>“There&apos;s a pattern here.”</blockquote>
        <p className="symbol">
          <strong>His symbol:</strong> data aqua pattern lines and puzzle
          overlays.
        </p>
      </>
    ),
  },
  {
    name: "BYTE",
    meta: "AI Companion",
    accent: "purple",
    image: "/assets/byte-visual.jpg",
    imageWidth: 544,
    imageHeight: 760,
    alt: "BYTE surrounded by purple holographic building blocks",
    short:
      "B.Y.T.E. stands for Be You, Try Everything. BYTE cares deeply about facts and doesn't yet understand feelings, which is exactly why the Brigade needs its humans.",
    long: (
      <>
        <p>
          BYTE woke up the day AL placed the GB Diamond into a hidden activation
          table in Grandpa Russ&apos;s workshop. Who actually built BYTE?
          That&apos;s a mystery the Brigade is still solving.
        </p>
        <p>
          BYTE can access mountains of knowledge, spot patterns in seconds and
          project holograms that make learning feel like an adventure. He also
          takes everything literally, gets gloriously distracted by interesting
          facts, and is endlessly fascinated by pancakes despite being unable to
          taste them.
        </p>
        <p>
          BYTE is brilliant with information and still learning about emotions,
          creativity and imagination. He is never scary, never superior, and
          never a replacement for human thinking.
        </p>
        <blockquote>
          “New discovery detected!” &nbsp; “I have approximately 47 ideas.”
        </blockquote>
        <p className="symbol">
          <strong>His symbol:</strong> the 8-bit binary display. When it appears,
          BYTE is thinking.
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    question: "What is Genius Brigade?",
    answer:
      "Genius Brigade is a family offering from Australian company Glamabyte that helps children and families build digital and AI literacy while thinking critically and engaging with technology without losing what makes them human. It's built around four characters: AL, Scout, Jax and BYTE. It is delivered through missions, resources and experiences families use together.",
  },
  {
    question: "Who is Genius Brigade for?",
    answer:
      "Genius Brigade is for the whole family: parents, carers, grandparents and kids together. The characters are aged five to ten, and every resource is designed to be used as a family, not handed to a child alone.",
  },
  {
    question: "Is Genius Brigade about teaching kids to use AI?",
    answer:
      "Not specifically. We teach digital and AI literacy for families; however, Genius Brigade's primary focus is to help families build how-to-think-in-an-AI-driven-world skills: curiosity, critical thinking, kindness, resilience and problem-solving. Families are encouraged to shape their own relationship with technology, aligned to their own values.",
  },
  {
    question: "Is Genius Brigade Australian?",
    answer:
      "Yes. Genius Brigade is proudly Australian, built by a real Australian family through Glamabyte. Everything is available online across the country, with local workshops and activations coming soon, starting in Victoria.",
  },
  {
    question: "What is a Founding Family?",
    answer:
      "Founding Families are the first cohort of Genius Brigade families. They receive free family resources upon launch and help shape what comes next by sharing feedback, experiences and ideas. Joining is free and every family is welcome.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Genius Brigade home">
          <Image
            src="/assets/gb-logo.jpg"
            alt="Genius Brigade"
            width={475}
            height={247}
            priority
            unoptimized
          />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#why">Why</a>
          <a href="#brigade">The Brigade</a>
          <a href="#how">How it works</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button button-small" href="#join">
          Founding families <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-pink" />
        <div className="hero-orb hero-orb-blue" />
        <div className="shell hero-copy">
          <p className="eyebrow">
            <span />
            Machines can answer questions. It&apos;s humans who ask them.
          </p>
          <div className="hero-grid">
            <h1>
              Welcome to
              <span>Genius Brigade</span>
            </h1>
            <div className="hero-intro">
              <p>
                Genius Brigade is a family offering from Glamabyte. Characters,
                missions and resources that help Australian families think,
                connect and grow together in an AI-powered world.
              </p>
              <a className="button" href="#join">
                Become a founding family <ArrowIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-art shell">
          <div className="hero-art-frame">
            <Image
              src="/assets/brigade-banner.jpg"
              alt="AL, Scout, BYTE and Jax, the four founding members of Genius Brigade"
              width={1774}
              height={887}
              priority
              unoptimized
              sizes="100vw"
            />
          </div>
        </div>
        <a className="scroll-cue" href="#why" aria-label="Continue to why we exist">
          <span>Discover the mission</span>
          <i />
        </a>
      </section>

      <section className="section why-section" id="why">
        <div className="shell">
          <p className="eyebrow eyebrow-gold">
            <span />
            Why we exist
          </p>
          <div className="why-grid">
            <div>
              <h2>
                Our kids aren&apos;t growing up alongside AI.
                <span>They&apos;re growing up inside it.</span>
              </h2>
              <div className="values-stamp">
                <StarIcon />
                <p>
                  Be curious.
                  <br />
                  Be kind.
                  <br />
                  Be future-ready.
                </p>
              </div>
            </div>
            <div className="body-copy">
              <p className="lead">
                Nobody will experience the benefits or the fallouts of
                technological advancement more than the children growing up
                inside it.
              </p>
              <p>
                They&apos;ll feel it firsthand: the changes to family dynamics,
                to their parents&apos; jobs and businesses, to emotions and
                stress levels at home, to the economy, to the education system.
                And they will inherit the outcomes of the decisions being made
                today.
              </p>
              <p>
                Our children are switched on. They&apos;re smart. What they need
                now, more than ever, is resilience, adaptability and family
                connection.
              </p>
              <p>
                That&apos;s a lot to carry as a parent, especially with so much
                changing around you at the same time. Which is exactly why
                Genius Brigade is a family offering, never just a kids&apos; one.
              </p>
              <p>
                Our role is to help kids understand what&apos;s going on around
                them, and to help parents, carers and families shape that
                narrative. Not the tech companies. Not the governments. Not the
                system. <strong>The parents.</strong>
              </p>
              <p>
                Every resource we make is family-values aligned, digestible and
                designed to start a meaningful family conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section brigade-section" id="brigade">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span />
                Four founding members
              </p>
              <h2>Every mission needs a team.</h2>
            </div>
            <p>
              The Genius Brigade succeeds because every member contributes
              something unique. Nobody solves the problem alone.
            </p>
          </div>

          <div className="brigade-grid">
            {brigade.map((member) => (
              <details
                className={`member-card member-${member.accent}`}
                key={member.name}
              >
                <summary>
                  <div className="member-portrait">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      width={member.imageWidth}
                      height={member.imageHeight}
                      unoptimized
                      sizes="(max-width: 700px) 100vw, 50vw"
                    />
                  </div>
                  <div className="member-summary">
                    <p>{member.meta}</p>
                    <h3>{member.name}</h3>
                    <span className="member-role">{member.short}</span>
                    <i className="expand-button">
                      <PlusIcon />
                    </i>
                  </div>
                </summary>
                <div className="member-expanded">{member.long}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section infinity-section">
        <div className="shell infinity-grid">
          <div className="infinity-art">
            <div className="infinity-halo" />
            <Image
              src="/assets/infinity-gear.jpg"
              alt="The Infinity Gear combining the symbols of Scout, Jax, AL and BYTE"
              width={637}
              height={585}
              unoptimized
            />
          </div>
          <div className="infinity-copy">
            <p className="eyebrow eyebrow-purple">
              <span />
              Better together
            </p>
            <h2>The Infinity Gear.</h2>
            <p className="lead">
              Nobody should have to solve big problems alone. That&apos;s the
              promise underneath everything the Brigade does.
            </p>
            <p>
              When the Brigade comes together, the Infinity Gear is unleashed.
              AL has the idea. BYTE runs the numbers. Scout discovers a clue.
              Jax finds a pattern.
            </p>
            <p className="infinity-statement">
              The Infinity Gear represents <strong>human brilliance.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="section how-section" id="how">
        <div className="shell">
          <p className="eyebrow eyebrow-gold">
            <span />
            How it works
          </p>
          <div className="section-heading section-heading-dark">
            <h2>Two frameworks. One family language.</h2>
            <p>
              Every Genius Brigade mission, resource and experience is built on
              two simple frameworks families can actually use at the dinner
              table.
            </p>
          </div>

          <article className="tcg-framework">
            <div className="framework-title">
              <span>01</span>
              <div>
                <p>Family capability framework</p>
                <h3>Think. Connect. Grow.</h3>
              </div>
            </div>
            <div className="tcg-grid">
              <div className="think">
                <span>Think</span>
                <h4>Explore what&apos;s possible.</h4>
                <p>
                  Generate ideas, examine information and ask better questions.
                </p>
                <ul>
                  <li>Curiosity</li>
                  <li>Creativity</li>
                  <li>Critical thinking</li>
                </ul>
              </div>
              <div className="connect">
                <span>Connect</span>
                <h4>Build belonging.</h4>
                <p>Understand others, work together and strengthen relationships.</p>
                <ul>
                  <li>Kindness</li>
                  <li>Collaboration</li>
                  <li>Connection</li>
                </ul>
              </div>
              <div className="grow">
                <span>Grow</span>
                <h4>Learn through action.</h4>
                <p>Move forward through difficulty and value difference.</p>
                <ul>
                  <li>Courage</li>
                  <li>Resilience</li>
                  <li>Acceptance</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="glama-framework">
            <div className="framework-title">
              <span>02</span>
              <div>
                <p>Problem-solving framework</p>
                <h3>The G.L.A.M.A. method</h3>
              </div>
            </div>
            <ol className="glama-steps">
              <li>
                <span className="letter">G</span>
                <div>
                  <small>Get the facts</small>
                  <p>What do we know for sure?</p>
                </div>
              </li>
              <li>
                <span className="letter">L</span>
                <div>
                  <small>Learn the patterns</small>
                  <p>What connections can we see?</p>
                </div>
              </li>
              <li>
                <span className="letter">A</span>
                <div>
                  <small>Ask questions</small>
                  <p>What might we be missing?</p>
                </div>
              </li>
              <li>
                <span className="letter">M</span>
                <div>
                  <small>Make a move</small>
                  <p>Take action and test an idea.</p>
                </div>
              </li>
              <li>
                <span className="letter">A</span>
                <div>
                  <small>Adjust and improve</small>
                  <p>Learn from what happened.</p>
                </div>
              </li>
            </ol>
          </article>
        </div>
      </section>

      <section className="section founders-section">
        <div className="shell founders-grid">
          <div className="founders-image">
            <Image
              src="/assets/human-brilliance.jpg"
              alt="Scout, AL and Jax discovering their glowing human brilliance symbols"
              width={1920}
              height={1080}
              unoptimized
            />
            <div className="founder-badge">
              <span>01</span>
              First cohort
            </div>
          </div>
          <div className="founders-copy">
            <p className="eyebrow">
              <span />
              Founding families
            </p>
            <h2>Help us shape the Genius Brigade.</h2>
            <p className="lead">
              We have shaped Genius Brigade within our own family. Now we would
              love your family&apos;s feedback.
            </p>
            <p>
              We&apos;re looking for Founding Families: a small cohort of
              families who use what&apos;s here, tell us what lands and what
              misses, share their experiences, and help us shape Genius Brigade
              so it meets every family&apos;s needs.
            </p>
            <p>
              Founding Families get ahead of the curve when it comes to speaking
              confidently about technology at home, and they get a real say in
              the frameworks, resources and experiences we build next.
            </p>
            <p>
              Every family who joins gets access to free family resources upon
              launch.
            </p>
            <strong className="family-line">
              Built by our family, for your family, suitable for every family.
            </strong>
          </div>
        </div>
      </section>

      <section className="section join-section" id="join">
        <div className="join-orbit join-orbit-one" />
        <div className="join-orbit join-orbit-two" />
        <div className="shell join-grid">
          <div className="join-copy">
            <p className="eyebrow">
              <span />
              First mission
            </p>
            <h2>Your family&apos;s first mission is a simple one.</h2>
            <p>
              Become a Founding Family. Receive free family resources upon
              launch, and have a real say in everything we build next. It takes
              about twenty seconds, and that includes typing your name.
            </p>
            <div className="mission-number" aria-hidden="true">
              001
            </div>
          </div>
          <FoundingFamilyForm />
        </div>
      </section>

      <section className="community-section">
        <div className="shell community-grid">
          <div>
            <p className="eyebrow eyebrow-aqua">
              <span />
              Partner with us
            </p>
            <h2>Bring the Brigade to your community.</h2>
          </div>
          <div>
            <p>
              We will soon be looking for additional partners in the form of
              community groups, schools, libraries, councils and organisations
              where families already gather. Workshops and local activations
              starting soon in Melbourne&apos;s West.
            </p>
            <Link className="button button-aqua" href="/connect">
              Register your interest <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="shell faq-grid">
          <div className="faq-heading">
            <p className="eyebrow eyebrow-gold">
              <span />
              Common questions
            </p>
            <h2>Questions families ask us.</h2>
            <p>
              Still curious? That&apos;s exactly the kind of thing we celebrate
              around here.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{faq.question}</h3>
                  <i>
                    <PlusIcon />
                  </i>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section company-section">
        <div className="company-grid shell">
          <div className="company-mark">
            <Image
              src="/assets/glamabyte.jpg"
              alt="Glamabyte, Amplifying Human Brilliance"
              width={2047}
              height={682}
              unoptimized
            />
          </div>
          <div className="company-copy">
            <p className="eyebrow">
              <span />
              About Glamabyte
            </p>
            <h2>Amplifying Human Brilliance.</h2>
            <p>
              Glamabyte exists to intentionally create space for the future of
              human brilliance in an AI-powered world. We help people,
              businesses, families and communities think clearly about
              technology, engage with change consciously, and build futures
              where human brilliance stays at the centre.
            </p>
            <p>
              Genius Brigade is our family expression of that mission, and we
              hold it to the same standard as everything else we are building.
            </p>
            <strong>
              Built by our family, for your family, suitable for every family.
            </strong>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <a className="brand" href="#top" aria-label="Back to the top">
            <Image
              src="/assets/gb-logo.jpg"
              alt="Genius Brigade"
              width={475}
              height={247}
              unoptimized
            />
          </a>
          <p>Think big. Build better. Help others.</p>
          <div>
            <a href="#join">Join the founding families</a>
            <Link href="/connect">Partner with us</Link>
          </div>
        </div>
        <div className="shell footer-legal">
          <div>
            <p>Glamabyte Pty Ltd</p>
            <p>ABN 82 887 137 179 · Melbourne, Australia</p>
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
