import Link from "next/link";

const email = "mailto:hello@michelleleblanc.net";

const services = [
  {
    number: "01",
    title: "Get found in search.",
    label: "Search engine optimization",
    description:
      "Understand what’s keeping your business from showing up and where to focus. Get clear guidance on technical SEO, content, and the searches that matter to your customers.",
    topics: "Technical SEO · Content strategy · Local visibility",
  },
  {
    number: "02",
    title: "Show up in new ways.",
    label: "AI search visibility & GEO",
    description:
      "As people turn to AI for answers and recommendations, your business needs to be easy to understand. Build a practical approach to your content, credibility, and AI visibility.",
    topics: "AI discovery · Content clarity · Visibility measurement",
  },
  {
    number: "03",
    title: "Make every visit count.",
    label: "Website experience consulting",
    description:
      "Help visitors understand what you offer and take the next step. Identify improvements to your messaging, navigation, performance, and customer journey.",
    topics: "Website reviews · User experience · Conversion",
  },
];

const steps = [
  {
    title: "Start with your business.",
    description:
      "We talk through your goals, customers, and current website to understand what’s working and where you need support.",
  },
  {
    title: "Find the right priorities.",
    description:
      "I assess the opportunities and help you decide what deserves attention first, based on your goals and resources.",
  },
  {
    title: "Put a plan into practice.",
    description:
      "You get clear recommendations and guidance to help you or your team move forward and measure progress.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <Link className="wordmark" href="/" aria-label="Michelle LeBlanc home">
            Michelle LeBlanc
          </Link>

          <nav aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a className="nav-contact" href="#contact">
              Let’s talk <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Independent consulting for businesses</p>
              <h1>
                Get found.
                <br />
                Build trust.
                <br />
                <span>Grow from there.</span>
              </h1>
              <p className="hero-description">
                SEO, AI search visibility, and better website experiences.
                I help you connect the dots and decide what to do next.
              </p>
              <a className="button button-light" href={email}>
                Let’s talk about your business
                <span aria-hidden="true">↗</span>
              </a>
              <p className="hero-note">
                Clear priorities. Practical advice. A partner in your corner.
              </p>
            </div>

            <div className="growth-panel">
              <div className="panel-top">
                <span>A connected approach</span>
              </div>

              <div className="panel-bottom">
                <p>From being discovered<br />to being chosen.</p>
                <span>Search. Experience. Growth.</span>
              </div>
            </div>
          </div>

          <div className="container hero-footer">
            <span>Search engine optimization</span>
            <span>AI search & GEO</span>
            <span>Website experiences</span>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">How I can help</p>
                <h2>A stronger presence.<br />A clearer path forward.</h2>
              </div>
              <p className="section-intro">
                You don’t need to tackle everything at once. We’ll focus on
                the changes that make sense for your business.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <p className="service-label">{service.label}</p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <p className="service-topics">{service.topics}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">Meet your consultant</p>
              <h2>Big-picture thinking.<br />Personal attention.</h2>
              <a className="text-link" href={email}>
                Get to know me <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="about-copy">
              <p className="about-lead">
                Hi, I’m Michelle. I bring together experience in design,
                engineering, and search to help businesses build a stronger
                presence online.
              </p>
              <p>
                My career has taken me from designing and building websites
                to leading teams across growth engineering, SEO, AI search,
                and web analytics.
              </p>
              <p>
                I bring that perspective to businesses, helping you
                understand your options, ask the right questions, and give
                your team clear direction.
              </p>
              <div className="signature">
                Michelle LeBlanc
                <span>Your partner in search and website strategy</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="approach">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Working together</p>
                <h2>Let’s make the next step clear.</h2>
              </div>
            </div>

            <div className="steps-grid">
              {steps.map((step, index) => (
                <article className="step" key={step.title}>
                  <span className="step-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow">Start a conversation</p>
            <h2>What’s next for<br />your business?</h2>
            <p>
              Tell me what you’re working toward and where you’re getting
              stuck. We can figure out the next step together.
            </p>
            <a className="button button-light" href={email}>
              Get in touch <span aria-hidden="true">↗</span>
            </a>
            <a className="contact-email" href={email}>
              hello@michelleleblanc.net
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Link className="wordmark" href="/">
            Michelle LeBlanc
          </Link>
          <p>SEO. AI search. Better website experiences.</p>
          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
