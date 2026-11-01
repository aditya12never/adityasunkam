import { useEffect, useState } from 'react';
import {
  ArrowDownRight, ArrowUpRight, Braces, Database, Github,
  Linkedin, Mail, Menu, X, Layers3, Server, Sparkles
} from 'lucide-react';

const skills = [
  { title: 'Programming', items: ['Java', 'OOP', 'Data Structures', 'Problem Solving'], icon: Braces },
  { title: 'Backend', items: ['Spring Boot', 'JDBC', 'REST APIs', 'Maven'], icon: Server },
  { title: 'Database', items: ['MySQL', 'SQL', 'CRUD Operations', 'Relational Design'], icon: Database },
  { title: 'Frontend & Tools', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Postman'], icon: Layers3 },
];

const projects = [
  {
    n: '01', type: 'REACT · SPRING BOOT · MYSQL', title: 'E-Commerce Website',
    text: 'A full-stack e-commerce application with product browsing, user authentication, cart management, order processing and an admin dashboard.',
    tags: ['React', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
    link: 'https://github.com/aditya12never/ecommerce-website',
  },
  {
    n: '02', type: 'SPRING BOOT · REST · MYSQL', title: 'Employee Management System',
    text: 'A Spring Boot REST API for employee records with create, read, update and delete operations, name and department search, pagination and sorting backed by MySQL.',
    tags: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'REST API'],
    link: 'https://github.com/aditya12never/employee-management-system',
  },
  {
    n: '03', type: 'JAVA · DATABASE', title: 'Employee Payroll System',
    text: 'A payroll-focused project exploring employee data, salary calculations and structured application logic.',
    tags: ['Java', 'OOP', 'SQL'],
    link: 'https://github.com/aditya12never/Employee-Payroll-System',
  },
];

const linkedin = 'https://www.linkedin.com/in/adityasunkam03';
const github = 'https://github.com/aditya12never';
const gmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=adityasunkam311%40gmail.com&su=Opportunity%20for%20Aditya%20Sunkam';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Overview');
  const nav = [
    { label: 'Overview', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = window.scrollY + 180;
      let nextActive = 'Overview';

      for (const item of nav) {
        const section = document.getElementById(item.id);
        if (section && offset >= section.offsetTop) {
          nextActive = item.label;
        }
      }

      setActive(nextActive);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });

    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  const go = (item: string) => {
    const target = nav.find(navItem => navItem.label === item)?.id ?? item.toLowerCase();
    setActive(item);
    setMenuOpen(false);
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="site-shell">
      <div className="topline">
        <span>ADITYA SUNKAM / PORTFOLIO</span>
        <span>JAVA FULL STACK DEVELOPER <i>●</i> INDIA</span>
      </div>

      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="Aditya Sunkam home">
          <span className="brand-mark">A<span>.</span></span>
          <span className="brand-name">ADITYA SUNKAM <small>PORTFOLIO</small></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(item => (
            <button key={item.label} className={active === item.label ? 'nav-item active' : 'nav-item'} onClick={() => go(item.label)}>
              {item.label}
            </button>
          ))}
        </nav>
        <button className="nav-cta" onClick={() => go('Contact')}>LET'S CONNECT <ArrowUpRight size={15} /></button>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> OPEN TO IT OPPORTUNITIES <span className="eyebrow-line" /></div>
              <p className="hero-kicker">HELLO, I'M ADITYA SUNKAM —</p>
              <h1>JAVA FULL<br /><em>STACK</em><br />DEVELOPER<span className="period">.</span></h1>
              <div className="hero-bottom">
                <p className="hero-intro">I build practical software solutions with Java, Spring Boot, SQL and modern web technologies. Focused on clean code, thoughtful problem-solving and continuous learning.</p>
                <div className="hero-actions">
                  <button className="button-primary" onClick={() => go('Projects')}>EXPLORE MY WORK <ArrowUpRight size={16} /></button>
                  <button className="button-text" onClick={() => go('About')}>MORE ABOUT ME <ArrowDownRight size={16} /></button>
                </div>
              </div>
            </div>
            <div className="hero-aside">
              <div className="portrait-panel">
                <img className="profile-portrait" src="/resources/aditya-profile.png" alt="Aditya Sunkam — Java Full Stack Developer" />
              </div>
            </div>
          </div>
          <div className="hero-meta">
            <span>SCROLL TO EXPLORE <ArrowDownRight size={14} /></span>
            <span>ECE GRADUATE · SOFTWARE DEVELOPMENT</span><span>© 2026</span>
          </div>
        </section>

        <section className="intro-strip">
          <span className="strip-label">MY APPROACH</span>
          <p>Curious by nature. <strong>Developer by practice.</strong><br />Always building, learning and improving.</p>
          <Sparkles size={25} />
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading"><span className="section-index">01 / ABOUT</span><span className="section-rule" /></div>
          <div className="about-layout">
            <h2>ENGINEERING<br />A BETTER <em>WAY.</em></h2>
            <div className="about-copy">
              <p className="lead">I’m an Electronics and Communication Engineering graduate building my career in software development.</p>
              <p>My current focus is Java Full Stack Development — strengthening my foundations in programming, databases and backend development while applying them through hands-on projects.</p>
              <p>I enjoy breaking down problems, understanding how systems work and turning ideas into reliable applications. I’m looking for an opportunity to contribute, learn from experienced teams and grow as a software engineer.</p>
              <div className="about-signoff">ADITYA SUNKAM <span>— DEVELOPER IN PROGRESS</span></div>
            </div>
          </div>
          <div className="about-facts">
            <div><span>01</span><strong>JAVA FIRST</strong><small>Core programming focus</small></div>
            <div><span>02</span><strong>FULL STACK</strong><small>Frontend to backend</small></div>
            <div><span>03</span><strong>HANDS-ON</strong><small>Learning through projects</small></div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading"><span className="section-index">02 / TECHNICAL SKILLS</span><span className="section-rule" /></div>
          <div className="section-title-row">
            <h2>TOOLS OF<br /><em>THE TRADE.</em></h2>
            <p>A growing toolkit grounded in Java development, database fundamentals and modern web technologies.</p>
          </div>
          <div className="skill-grid">
            {skills.map((s, i) => {
              const Icon = s.icon;
              return <article className="skill-card" key={s.title}>
                <div className="skill-card-top"><span>0{i + 1}</span><Icon size={23} /></div>
                <h3>{s.title}</h3>
                <div className="skill-tags">{s.items.map(x => <span key={x}>{x}</span>)}</div>
              </article>;
            })}
          </div>
          <p className="skill-note">Currently deepening my knowledge through consistent practice and project work.</p>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading"><span className="section-index">03 / SELECTED PROJECTS</span><span className="section-rule" /></div>
          <div className="section-title-row">
            <h2>BUILT TO<br /><em>LEARN.</em></h2>
            <p>Practical work that demonstrates my learning across Java applications, backend APIs and web development.</p>
          </div>
          <div className="project-list">
            {projects.map(p => <article className="project-row" key={p.n}>
              <div className="project-number">{p.n}</div>
              <div className="project-main">
                <span className="project-type">{p.type}</span><h3>{p.title}</h3><p>{p.text}</p>
                <div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                <a className="project-repo-link" href={p.link} target="_blank" rel="noreferrer">VIEW SOURCE CODE <ArrowUpRight size={14} /></a>
              </div>
              <div className="project-arrow"><a href={p.link} target="_blank" rel="noreferrer" aria-label={`View ${p.title} source code`}><ArrowUpRight size={22} /></a></div>
            </article>)}
          </div>
          <p className="project-disclaimer">Project descriptions reflect the current learning and implementation scope. Each featured project links to its source repository.</p>
        </section>

        <section className="education-band" id="education">
          <div className="education-inner">
            <div><span className="section-index light">04 / EDUCATION</span><h2>FOUNDATION<br />IN <em>ENGINEERING.</em></h2></div>
            <div className="education-detail">
              <span>B.TECH · ECE</span><h3>B.Tech — Electronics and Communication Engineering</h3>
              <p>Engineering foundation with a current focus on software development and Java Full Stack technologies.</p>
              <div className="edu-status"><span className="status-dot" /> DEGREE COMPLETED · AUGUST 2026</div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading"><span className="section-index">05 / CONTACT</span><span className="section-rule" /></div>
          <div className="contact-content">
            <div>
              <span className="eyebrow">HAVE AN OPPORTUNITY?</span>
              <h2>LET'S BUILD<br /><em>SOMETHING.</em></h2>
              <p>I’m interested in entry-level opportunities in Java development, software engineering and full stack development.</p>
            </div>
            <div className="contact-card">
              <span>START A CONVERSATION</span><h3>Open to the<br />next opportunity.</h3>
              <p>Reach out to discuss roles, projects or a chance to learn and contribute to your team.</p>
              <a className="contact-link" href="mailto:adityasunkam311@gmail.com?subject=Opportunity%20for%20Aditya%20Sunkam">GET IN TOUCH <ArrowUpRight size={17} /></a>
              <div className="contact-socials">
                <a href={gmail} target="_blank" rel="noreferrer"><Mail size={15} /> OPEN GMAIL</a>
                <a href={github} target="_blank" rel="noreferrer"><Github size={15} /> GITHUB PROFILE <ArrowUpRight size={13} /></a>
                <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LINKEDIN PROFILE <ArrowUpRight size={13} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="footer-brand" href="#home">ADITYA SUNKAM<span>.</span></a>
        <span>DESIGNED WITH CLARITY. BUILT WITH CURIOSITY.</span>
        <div className="footer-socials">
          <a href={gmail} target="_blank" rel="noreferrer" aria-label="Open Gmail"><Mail size={15} /></a>
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={15} /></a>
          <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={15} /></a>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>BACK TO TOP ↑</button>
        <small>© 2026 ADITYA SUNKAM · PERSONAL IT PORTFOLIO</small>
      </footer>
    </div>
  );
}

export default App;
