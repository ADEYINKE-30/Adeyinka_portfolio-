import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Copy,
  Download,
  ExternalLink,
  Mail,
  Menu,
  MoveUpRight,
  Sparkles,
  X,
} from "lucide-react";
import { Link, NavLink, Route, Routes, useParams } from "react-router";
import { projects, skills, type Project } from "./content";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = `${title} — Adepoju Adeyinka`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [description, title]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" to="/" aria-label="Adepoju Adeyinka home">
          <span className="brand-mark">AA</span>
          <span className="brand-name">Adepoju Adeyinka</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          id="primary-navigation"
          className={`primary-nav ${open ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
            Let&apos;s talk <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <p className="footer-title">Adepoju Adeyinka</p>
          <p className="footer-copy">Software developer, Lagos, Nigeria.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:adeyinkafoladev@gmail.com">Email me</a>
          <span>© {new Date().getFullYear()} Adeyinka</span>
        </div>
      </div>
    </footer>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.accent}`}>
      <div className="project-card-top">
        <span className="project-number">
          {project.slug === "devnotes" ? "01" : "02"}
        </span>
        <span
          className={`status-pill ${project.status === "Live" ? "live" : "progress"}`}
        >
          <span className="status-dot" /> {project.status}
        </span>
      </div>
      <div className="project-visual">
        <img src={project.image} alt={project.imageAlt} />
      </div>
      <div className="project-card-content">
        <p className="project-eyebrow">{project.eyebrow}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <Link className="text-link" to={`/projects/${project.slug}`}>
          View case study <ChevronRight size={16} />
        </Link>
      </div>
    </article>
  );
}

function HomePage() {
  return (
    <>
      <Seo
        title="Software Developer"
        description="Portfolio of Adepoju Adeyinka, a software developer based in Lagos, Nigeria."
      />
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow intro-eyebrow">
              <span className="eyebrow-line" /> Open to frontend internships
            </p>
            <h1>
              A full-stack developer with a <em>teacher&apos;s instinct.</em>
            </h1>
            <p className="hero-lede">
              I&apos;m Adepoju Adeyinka, a Lagos-based full-stack developer and former
              teacher. I build clear, dependable React and Node.js apps.
              <span className="hero-stack">React · TypeScript · Node.js</span>
            </p>
            <div className="button-row">
              <Link className="button button-primary" to="/projects">
                Explore my work <ArrowUpRight size={17} />
              </Link>
              <Link className="button button-secondary" to="/about">
                More about me <ChevronRight size={17} />
              </Link>
            </div>
          </div>
          <div className="hero-art home-hero-art">
            <div className="hero-art-ring ring-two" />
            <div className="portrait-frame">
              <img
                src="/adepoju-adeyinka-profile.png"
                alt="Portrait of Adepoju Adeyinka"
                width="768"
                height="768"
              />
            </div>
          </div>
        </section>
        <section className="intro-strip">
          <div className="shell intro-grid">
            <p className="strip-label">A little context</p>
            <p className="strip-copy">
              I transitioned from teaching into software development because I enjoy
              making complex things feel clear, useful, and human.
            </p>
            <Link className="arrow-link" to="/about">
              My journey <MoveUpRight size={17} />
            </Link>
          </div>
        </section>
        <section className="shell section-block">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects with purpose."
            copy="A couple of things I've been building, learning from, and bringing to life."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="center-link">
            <Link className="text-link" to="/projects">
              See all projects <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
        <section className="shell availability">
          <div>
            <p className="eyebrow">Next chapter</p>
            <h2>Let&apos;s make something meaningful.</h2>
          </div>
          <Link className="button button-primary" to="/contact">
            Start a conversation <ArrowUpRight size={17} />
          </Link>
        </section>
      </main>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Learn about Adepoju Adeyinka's transition from teaching into software development."
      />
      <main className="shell page-main">
        <div className="about-intro-layout">
          <div className="page-intro">
            <p className="eyebrow">About me</p>
            <h1>A developer with a teacher&apos;s instinct for clarity.</h1>
            <p>
              Good software should feel considered. My path into development began in
              teaching, where I learned to listen closely, break down complexity, and meet
              people where they are.
            </p>
          </div>
          <div
            className="hero-art about-intro-art"
            aria-label="Portrait of Adepoju Adeyinka"
          >
            <div className="hero-art-ring ring-one" />
            <div className="hero-art-ring ring-two" />
            <div className="portrait-frame about-portrait">
              <img
                src="/adepoju-adeyinka-profile.png"
                alt="Portrait of Adepoju Adeyinka"
                width="768"
                height="768"
              />
            </div>
            <span className="art-label label-one">classroom teacher</span>
            <span className="art-label label-two">private tutor</span>
            <span className="art-label label-three">full-stack developer</span>
          </div>
        </div>
        <div className="about-layout">
          <div className="about-note">
            <span className="quote-mark">“</span>
            <p>
              I&apos;m early in my professional software journey, but serious about the
              craft and excited to keep growing through meaningful work.
            </p>
            <span className="note-caption">— Adeyinka</span>
          </div>
          <div className="about-body">
            <p>
              In 2026, I completed the Software Development Bootcamp with AI Skills at
              GOMYCODE. Since then, I&apos;ve been building full-stack projects to deepen
              my understanding of the web—from responsive React interfaces to APIs,
              databases, and the details that make a product dependable.
            </p>
            <p>
              I&apos;m currently interested in internship and junior software development
              opportunities where I can contribute, learn from a team, and build things
              that matter.
            </p>
            <div className="button-row about-actions">
              <Link className="text-link" to="/contact">
                Get in touch <ArrowUpRight size={16} />
              </Link>
              <a
                className="text-link"
                href="/Adepoju_Adeyinka_Folashade_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View CV <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
        <section className="education-section" aria-labelledby="education-title">
          <SectionHeading eyebrow="Education" title="The experiences behind the work." />
          <div className="education-list">
            <article className="education-card">
              <p className="education-year">2026</p>
              <div>
                <p className="education-school">GOMYCODE</p>
                <h3>Software Development Bootcamp with AI Skills</h3>
                <p>
                  Hands-on training in building full-stack web applications, from
                  responsive interfaces to the APIs and databases behind them, including
                  AI-assisted development.
                </p>
                <div className="education-tags">
                  {[
                    "HTML/CSS",
                    "JavaScript",
                    "React",
                    "TypeScript",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "REST APIs",
                    "Git/GitHub",
                  ].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
            <article className="education-card">
              <p className="education-year">2018 – 2020</p>
              <div>
                <p className="education-school">
                  Federal College of Education (Special), Oyo, Nigeria
                </p>
                <h3>
                  Diploma of Education: Communication and Behaviour Disorders / English
                </h3>
                <p>
                  Trained to teach children with communication difficulties. It taught me
                  to explain things in more than one way and to stay patient until they
                  land, which I now bring to how I design and build software.
                </p>
                <div className="education-tags">
                  {["Empathy", "Problem solving", "Patience", "Tolerance"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>
        <div className="skills-section">
          <SectionHeading
            eyebrow="My toolkit"
            title="Tools I use to turn ideas into interfaces."
          />
          <div className="skills-grid">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                <Check size={15} />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <Seo title="Projects" description="Selected projects by Adepoju Adeyinka." />
      <main className="shell page-main">
        <div className="page-intro">
          <p className="eyebrow">Selected projects</p>
          <h1>Work in progress, learning in public.</h1>
          <p>
            Each project is an opportunity to practice the full process: shaping an idea,
            building a useful experience, and paying attention to what comes next.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
    </>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFoundPage />;
  return (
    <>
      <Seo title={project.name} description={project.description} />
      <main className="shell page-main case-study">
        <Link className="back-link" to="/projects">
          ← Back to projects
        </Link>
        <div className={`case-hero ${project.accent}`}>
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </div>
          <div className="case-symbol" aria-hidden="true">
            <Sparkles size={42} />
          </div>
        </div>
        <div className="case-grid">
          <div>
            <p className="eyebrow">Overview</p>
            <p className="case-copy">{project.details}</p>
          </div>
          <div>
            <p className="eyebrow">Built with</p>
            <div className="tag-row case-tags">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="case-actions">
          <a
            className="button button-primary"
            href={project.frontendUrl}
            target="_blank"
            rel="noreferrer"
          >
            Visit live frontend <ExternalLink size={16} />
          </a>
          {project.backendUrl && (
            <a
              className="button button-secondary"
              href={project.backendUrl}
              target="_blank"
              rel="noreferrer"
            >
              Explore backend <ExternalLink size={16} />
            </a>
          )}
        </div>
        {project.status === "In progress" && (
          <p className="work-note">
            <span className="status-dot" /> Backend is still in development. The live
            frontend represents the current state of this project.
          </p>
        )}
      </main>
    </>
  );
}

function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("adeyinkafoladev@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact"
        description="Contact Adepoju Adeyinka about software development opportunities."
      />
      <main className="shell page-main contact-page">
        <div className="page-intro">
          <p className="eyebrow">Contact</p>
          <h1>Have an opportunity in mind?</h1>
          <p>I&apos;d love to hear from you.</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <Mail size={24} />
          </div>
          <div className="contact-card-content">
            <p className="eyebrow">Say hello</p>
            <h2>Let&apos;s talk about what&apos;s next.</h2>
            <p>
              No contact form theatre—just a clear line to reach me. I usually reply
              within 1–2 days.
            </p>
            <div className="contact-email-row">
              <a
                className="email-link"
                href="mailto:adeyinkafoladev@gmail.com?subject=Portfolio%20inquiry"
              >
                adeyinkafoladev@gmail.com <ArrowUpRight size={18} />
              </a>
              <button
                className="copy-button"
                type="button"
                onClick={copyEmail}
                aria-label={copied ? "Email copied" : "Copy email address"}
                title={copied ? "Email copied" : "Copy email address"}
              >
                {copied ? <Check size={17} /> : <Copy size={17} />}
              </button>
            </div>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href="/Adepoju_Adeyinka_Folashade_CV.pdf"
                download
              >
                Download CV <Download size={16} />
              </a>
              <a
                className="contact-social-link"
                href="https://www.linkedin.com/in/adepoju-adeyinka-folashade-a7b3a42a9/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ExternalLink size={15} />
              </a>
              <a
                className="contact-social-link"
                href="https://github.com/ADEYINKE-30"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function NotFoundPage() {
  return (
    <main className="shell not-found">
      <p className="eyebrow">404 / Page not found</p>
      <h1>This page wandered off.</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist, or may have moved.</p>
      <Link className="button button-primary" to="/">
        Back home <ArrowUpRight size={17} />
      </Link>
    </main>
  );
}

export function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ProjectsPage />} path="/projects" />
        <Route element={<ProjectPage />} path="/projects/:slug" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </Layout>
  );
}
