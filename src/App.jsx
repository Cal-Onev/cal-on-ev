import React, { useEffect, useState } from "react";

const asset = (name) => `/assets/${name}`;

const navigation = [
  { label: "Home", id: "home" },
  { label: "Vehicles", id: "vehicles" },
  { label: "Technology", id: "technology" },
  { label: "Manufacturing", id: "manufacturing" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];
const navigation1 = [
  { label: "Home", id: "home" },
  { label: "Vehicles", id: "vehicles" },
  { label: "Technology", id: "technology" },
  { label: "Manufacturing", id: "manufacturing" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const navigation2 = [
  { label: "Home", id: "home" },
  { label: "Vehicles", id: "vehicles" },
  { label: "Technology", id: "technology" },
  { label: "Manufacturing", id: "manufacturing" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const vehicles = [
  {
    category: "URBAN / SCOOTER",
    title: "Electric scooter",
    image: "scooter.png",
    alt: "Red electric scooter in a studio setting",
    description:
      "Expressive red bodywork, a step-through silhouette and a familiar scooter form. Take a closer look at the everyday electric option.",
    inquiry: "Electric scooter",
    mediaClass: "media-scooter",
  },
  {
    category: "UTILITY / BIKE",
    title: "Utility electric bike",
    image: "utility-bike.png",
    alt: "Black electric utility bike with a front basket and rear platform",
    description:
      "A pared-back black frame, front basket and rear platform. Explore a utility-minded approach to the electric two-wheeler.",
    inquiry: "Utility electric bike",
    mediaClass: "media-bike",
  },
];

const technologyThemes = [
  {
    icon: "battery-charging.svg",
    title: "Battery thinking",
    copy: "Explore energy storage, charging needs and care as part of the whole riding experience.",
  },
  {
    icon: "zap.svg",
    title: "Electric powertrains",
    copy: "Consider how electric drive can make everyday movement feel more intuitive.",
  },
  {
    icon: "cpu.svg",
    title: "Smart systems",
    copy: "Prioritise clear information and useful interfaces over unnecessary complexity.",
  },
  {
    icon: "gauge.svg",
    title: "Energy efficiency",
    copy: "Think about the journey from energy input to movement, with less waste as the goal.",
  },
];

const processStages = [
  {
    number: "01",
    title: "Engineering",
    copy: "Begin with the rider. Translate everyday needs into a considered design brief.",
  },
  {
    number: "02",
    title: "Assembly",
    copy: "Envision a deliberate assembly process, with attention to fit, finish and consistency.",
  },
  {
    number: "03",
    title: "Quality assurance",
    copy: "Make review and refinement central to the intended journey from concept to product.",
  },
];

const designPrinciples = [
  {
    label: "FORM",
    icon: "scan-line.svg",
    title: "Familiar. Reconsidered.",
    copy: "The scooter’s step-through form puts an established two-wheeler silhouette into an electric context.",
  },
  {
    label: "UTILITY",
    icon: "package.svg",
    title: "Made for the everyday.",
    copy: "A practical frame and carrying details bring utility into the electric two-wheeler conversation.",
  },
  {
    label: "CLARITY",
    icon: "focus.svg",
    title: "Details before claims.",
    copy: "Explore the design, then ask for confirmed product information. Meaningful choices start with clear details.",
  },
];

function Icon({ name, className = "" }) {
  return <img className={`icon ${className}`} src={asset(name)} alt="" aria-hidden="true" />;
}

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="CAL ON EV home">
      <img className="brand-mark" src={asset("cal-on-logo.png")} alt="CAL ON" />
      <span className="brand-identity">
        <strong>EV</strong>
        <small>ELECTRIC MOBILITY</small>
      </span>
    </a>
  );
}

function SectionMarker({ children }) {
  return (
    <div className="section-marker">
      <span className="signal" />
      <span>{children}</span>
    </div>
  );
}

function ButtonLink({ children, href, secondary = false, onClick, className = "" }) {
  return (
    <a
      className={`button-link${secondary ? " button-secondary" : ""} ${className}`}
      href={href}
      onClick={onClick}
    >
      <span>{children}</span>
      <Icon name={secondary ? "arrow-up-right-light.svg" : "arrow-up-right.svg"} />
    </a>
  );
}

function Header({ activeSection }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              className={activeSection === item.id ? "active" : ""}
              href={`#${item.id}`}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ButtonLink className="header-cta" href="#vehicles">
          Explore Vehicles
        </ButtonLink>
      </div>
      <div className="header-rule" />
    </header>
  );
}

function Hero() {
  return (
    <section className="hero page-pad" id="home">
      <div className="hero-layout">
        <div className="hero-copy">
          <SectionMarker>A NEW CURRENT. A NEW DIRECTION.</SectionMarker>
          <h1 className="hero-title">
            <span>THE FUTURE</span>
            <span>MOVES</span>
            <span className="accent">ELECTRIC.</span>
          </h1>
          <p className="hero-subtitle">
            Engineering intelligent mobility. Building a cleaner tomorrow.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#vehicles">Explore Vehicles</ButtonLink>
            <ButtonLink href="#about" secondary>
              Discover CAL ON EV
            </ButtonLink>
          </div>
        </div>

        <div className="vehicle-reveal">
          <Icon name="electric-halo.svg" className="halo halo-outer" />
          <Icon name="inner-halo.svg" className="halo halo-inner" />
          <div className="reveal-meta">
            <span>CAL-ON / ELECTRIC SCOOTER</span>
            <span className="focus-indicator">● IN FOCUS</span>
          </div>
          <div className="reveal-image">
            <img src={asset("scooter.png")} alt="Red CAL ON electric scooter" />
          </div>
          <div className="reveal-caption">
            <span>A new perspective on the everyday.</span>
            <a href="#vehicles" aria-label="Explore the electric scooter">
              <Icon name="plus.svg" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-baseline">
        <span>ELECTRIC BY INTENT. EVERYDAY BY DESIGN.</span>
        <a href="#about">
          SCROLL TO DISCOVER <Icon name="arrow-down.svg" />
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section section-green page-pad" id="about">
      <SectionMarker>01 / ABOUT CAL ON EV</SectionMarker>
      <div className="two-column intro-row">
        <h2>A different kind of forward.</h2>
        <div className="intro-story">
          <p>
            CAL ON EV brings electric two-wheelers into focus: a scooter for the
            daily journey and a utility-minded bike with a different take on
            getting around.
          </p>
          <p>
            Our direction is simple. Put everyday needs at the centre of the
            conversation, and explore how thoughtful electric mobility can fit
            the way people move.
          </p>
          <a className="text-link" href="#contact">
            Get to know CAL ON EV <Icon name="arrow-up-right-alt.svg" />
          </a>
        </div>
      </div>
      <div className="principle-strip">
        {["Everyday perspective", "Electric direction", "Purposeful design"].map((item) => (
          <div className="principle" key={item}>
            <span className="signal" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function Vehicles({ onSelectVehicle }) {
  const [offset, setOffset] = useState(0);
  const orderedVehicles = vehicles.map((_, index) => vehicles[(index + offset) % vehicles.length]);

  return (
    <section className="section page-pad" id="vehicles">
      <SectionMarker>02 / THE VEHICLES</SectionMarker>
      <div className="section-heading vehicle-heading">
        <div>
          <h2>Find your kind of electric.</h2>
          <p>Two distinct expressions. One electric direction.</p>
        </div>
        <div className="carousel-controls" aria-label="Vehicle collection controls">
          <span className="mono">{offset === 0 ? "01 — 02" : "02 — 01"}</span>
          <button
            className="square-control"
            type="button"
            aria-label="Show previous vehicle first"
            onClick={() => setOffset((value) => (value + vehicles.length - 1) % vehicles.length)}
          >
            <Icon name="arrow-left.svg" />
          </button>
          <button
            className="square-control"
            type="button"
            aria-label="Show next vehicle first"
            onClick={() => setOffset((value) => (value + 1) % vehicles.length)}
          >
            <Icon name="arrow-right.svg" />
          </button>
        </div>
      </div>
      <div className="vehicle-grid">
        {orderedVehicles.map((vehicle) => (
          <article className="vehicle-card" key={vehicle.title}>
            <div className="vehicle-category">
              <span>{vehicle.category}</span>
              <Icon name="arrow-up-right-green.svg" />
            </div>
            <div className={`product-media ${vehicle.mediaClass}`}>
              <img src={asset(vehicle.image)} alt={vehicle.alt} />
            </div>
            <div className="vehicle-info">
              <h3>{vehicle.title}</h3>
              <p>{vehicle.description}</p>
              <a
                className="vehicle-action"
                href="#contact"
                onClick={() => onSelectVehicle(vehicle.inquiry)}
              >
                <span>Explore {vehicle.title.toLowerCase()}</span>
                <Icon name="arrow-right-green.svg" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="fine-print">
        Product imagery is illustrative. Availability, specifications and equipment
        should be confirmed for each vehicle.
      </p>
    </section>
  );
}

function Technology() {
  return (
    <section className="section section-green page-pad" id="technology">
      <SectionMarker>03 / TECHNOLOGY DIRECTION</SectionMarker>
      <div className="section-heading two-column">
        <h2>Intelligence. Not complexity.</h2>
        <p>
          A design-led exploration of the systems behind electric mobility.
          These are areas of focus, not a statement of fitted equipment or
          verified capabilities.
        </p>
      </div>
      <div className="technology-layout">
        <div className="energy-graphic">
          <div className="graphic-meta">
            <span>SYSTEM THINKING / CONCEPT</span>
            <Icon name="move-up-right.svg" />
          </div>
          <div className="energy-core">
            <Icon name="outer-orbit.svg" className="orbit orbit-one" />
            <Icon name="energy-orbit.svg" className="orbit orbit-two" />
            <Icon name="inner-orbit.svg" className="orbit orbit-three" />
            <div className="battery-concept">
              {Array.from({ length: 6 }, (_, index) => (
                <span key={index} style={{ opacity: 0.35 + index * 0.12 }} />
              ))}
            </div>
            <span className="energy-label">ENERGY IN MOTION</span>
          </div>
          <div className="system-nodes">
            <span>ENERGY</span>
            <span>DRIVE</span>
            <span>INTERFACE</span>
          </div>
        </div>
        <div className="technology-themes">
          {technologyThemes.map((theme) => (
            <article className="technology-theme" key={theme.title}>
              <Icon name={theme.icon} />
              <h3>{theme.title}</h3>
              <p>{theme.copy}</p>
            </article>
          ))}
        </div>
      </div>
      <p className="fine-print">
        Conceptual system graphic. Product-specific equipment and technical details
        are to be confirmed.
      </p>
    </section>
  );
}

function Manufacturing() {
  return (
    <section className="section page-pad" id="manufacturing">
      <SectionMarker>04 / MANUFACTURING VISION</SectionMarker>
      <div className="section-heading two-column">
        <h2>Precision is a mindset.</h2>
        <p>
          From first sketch to final review, a considered process should connect
          design intent with everyday use. This is our manufacturing vision,
          not a description of an audited production facility.
        </p>
      </div>
      <figure className="material-study">
        <img src={asset("material-study.png")} alt="Close-up conceptual study of engineered metal components" />
        <figcaption>MATERIAL STUDY / CONCEPTUAL IMAGE</figcaption>
      </figure>
      <div className="process-timeline">
        {processStages.map((stage, index) => (
          <article className="process-stage" key={stage.number} style={{ "--stage-delay": `${index * 0.15}s` }}>
            <div className="timeline-rail">
              <span>{stage.number}</span>
              <i />
              <b />
            </div>
            <h3>{stage.title}</h3>
            <p>{stage.copy}</p>
          </article>
        ))}
      </div>
      <p className="fine-print">
        Illustrative process direction. Atmospheric imagery does not depict an
        actual CAL ON factory.
      </p>
    </section>
  );
}

function Innovation() {
  return (
    <section className="section section-green page-pad" id="innovation">
      <SectionMarker>05 / INNOVATION &amp; DESIGN</SectionMarker>
      <div className="section-heading two-column">
        <h2>Less noise. More intention.</h2>
        <p>
          A premium experience starts with considered choices, not bigger
          promises. Our design conversation begins with what you can see.
        </p>
      </div>
      <div className="design-principles">
        {designPrinciples.map((item) => (
          <article className="design-card" key={item.label}>
            <div className="design-signature">
              <span>{item.label}</span>
              <Icon name="plus-green.svg" />
            </div>
            <div className="design-emblem">
              <Icon name={item.icon} />
            </div>
            <div className="design-copy">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="fine-print">
        No verified technical specifications are presented here. Range, battery
        capacity, performance and equipment should be confirmed for the specific
        vehicle.
      </p>
    </section>
  );
}

function Sustainability() {
  return (
    <section className="section page-pad sustainability" id="sustainability">
      <SectionMarker>06 / A CLEANER DIRECTION</SectionMarker>
      <div className="sustainability-layout">
        <div className="sustainability-copy">
          <h2>The road ahead should leave more behind.</h2>
          <p>
            Less dependence on combustion. More room to rethink everyday
            journeys. Cleaner mobility is the ambition that gives our electric
            direction its purpose.
          </p>
          <div className="whole-life">
            <Icon name="leaf.svg" />
            <p>Think beyond the ride. Energy, materials and end-of-life matter too.</p>
          </div>
          <p className="fine-print">
            A statement of intent, not a quantified environmental claim. No
            lifecycle assessment or impact data is presented.
          </p>
        </div>
        <figure className="road-visual">
          <img src={asset("road-ahead.png")} alt="A green road winding through a forested landscape" />
          <figcaption>THE ROAD AHEAD / ATMOSPHERIC IMAGE</figcaption>
        </figure>
      </div>
      <a className="purpose-banner" href="#contact">
        <span>A better tomorrow is a direction worth taking.</span>
        <Icon name="arrow-up-right-lime.svg" />
      </a>
    </section>
  );
}

function Contact({ selectedVehicle }) {
  const [enquiryType, setEnquiryType] = useState("Customer");
  const [vehicleInterest, setVehicleInterest] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (selectedVehicle) setVehicleInterest(selectedVehicle);
  }, [selectedVehicle]);

  function handleSubmit(event) {
    event.preventDefault();
    setNotice(
      "This front-end demo has no enquiry service connected. Your details have not been sent.",
    );
  }

  return (
    <section className="section section-green page-pad contact-section" id="contact">
      <SectionMarker>07 / START A CONVERSATION</SectionMarker>
      <div className="contact-layout">
        <div className="contact-intro">
          <h2>Your next move starts here.</h2>
          <p>
            Curious about a vehicle? Exploring a dealership or business
            partnership? Tell us what you have in mind.
          </p>
          <div className="enquiry-guidance">
            <div>
              <h3>For riders</h3>
              <p>Ask about availability, confirmed specifications and choosing a vehicle.</p>
            </div>
            <div>
              <h3>For partners</h3>
              <p>Start a conversation about dealership or business opportunities.</p>
            </div>
          </div>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <fieldset className="enquiry-kind">
            <legend>I’m enquiring as a *</legend>
            <div className="choice-row">
              {["Customer", "Dealership", "Business partnership"].map((choice) => (
                <label className={`choice${enquiryType === choice ? " selected" : ""}`} key={choice}>
                  <input
                    type="radio"
                    name="enquiryType"
                    value={choice}
                    checked={enquiryType === choice}
                    onChange={() => setEnquiryType(choice)}
                  />
                  <Icon name={enquiryType === choice ? "radio-selected.svg" : "radio-unselected.svg"} />
                  <span>{choice}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="form-row">
            <label className="field">
              <span>Full name *</span>
              <input name="name" autoComplete="name" placeholder="Your full name" required />
            </label>
            <label className="field">
              <span>Email address *</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email address"
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label className="field">
              <span>Phone number (optional)</span>
              <input name="phone" type="tel" autoComplete="tel" placeholder="Include country code" />
            </label>
            <label className="field">
              <span>Company (optional)</span>
              <input name="company" autoComplete="organization" placeholder="Your organisation" />
            </label>
          </div>
          <label className="field">
            <span>Vehicle interest (optional)</span>
            <span className="select-wrap">
              <select value={vehicleInterest} onChange={(event) => setVehicleInterest(event.target.value)}>
                <option value="">Select a vehicle</option>
                {vehicles.map((vehicle) => (
                  <option key={vehicle.inquiry} value={vehicle.inquiry}>
                    {vehicle.inquiry}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
              <Icon name="chevron-down.svg" />
            </span>
          </label>
          <label className="field">
            <span>Tell us more *</span>
            <textarea name="message" placeholder="How can we help?" rows="4" required />
          </label>
          <label className="consent">
            <input type="checkbox" required />
            <span>I agree to be contacted about this enquiry. *</span>
          </label>
          <div className="form-submit">
            <button className="button-link" type="submit">
              <span>Send enquiry</span>
              <Icon name="arrow-up-right.svg" />
            </button>
            <span className="mono">* REQUIRED FIELDS</span>
          </div>
          {notice && (
            <p className="form-notice" role="status">
              {notice}
            </p>
          )}
        </form>
      </div>
      <Footer />
    </section>
  );
}

function Footer() {
  const footerGroups = [
    [
      { label: "Home", href: "#home" },
      { label: "Vehicles", href: "#vehicles" },
      { label: "Technology", href: "#technology" },
    ],
    [
      { label: "Manufacturing", href: "#manufacturing" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  ];

  return (
    <footer className="site-footer">
      <div className="footer-company">
        <Brand />
        <p>Electric two-wheelers. A new perspective on everyday movement.</p>
      </div>
      <div className="footer-explore">
        <span className="mono footer-label">EXPLORE</span>
        <div className="footer-link-groups">
          {footerGroups.map((group, index) => (
            <div className="footer-link-group" key={index}>
              {group.map((item) => (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-social">
        <span className="mono footer-label">LET’S CONNECT</span>
        <a className="text-link footer-contact-link" href="#contact">
          Contact CAL ON EV <Icon name="arrow-up-right-green.svg" />
        </a>
        <p>For vehicle, dealership and business enquiries, use the contact form.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer">
            <Icon name="instagram.svg" />
          </a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <Icon name="linkedin.svg" />
          </a>
          <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noreferrer">
            <Icon name="youtube.svg" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} CAL ON EV</span>
        <span>ELECTRIC BY INTENT. EVERYDAY BY DESIGN.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Vehicles onSelectVehicle={setSelectedVehicle} />
        <Technology />
        <Manufacturing />
        <Innovation />
        <Sustainability />
        <Contact selectedVehicle={selectedVehicle} />
      </main>
    </>
  );
}
