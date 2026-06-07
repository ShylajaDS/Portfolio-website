import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import SectionTitle from './components/SectionTitle';
import { siteData } from './content';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <span className="eyebrow">{siteData.hero.subtitle}</span>
            <h1>{siteData.name}</h1>
            <p>{siteData.hero.description}</p>
            <div className="hero-actions">
              {siteData.hero.actions.map((action) => (
                <a
                  key={action.label}
                  className={action.primary ? 'button button-primary' : 'button button-secondary'}
                  href={action.href}
                  target={action.primary ? '_blank' : undefined}
                  rel={action.primary ? 'noreferrer' : undefined}
                >
                  {action.label}
                </a>
              ))}
            </div>
            <div className="hero-highlights">
              {siteData.hero.highlights.map((highlight) => (
                <span key={highlight} className="highlight-pill">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-panel__card">
              <p className="panel-label">Featured work</p>
              <h2>NetflixGPT</h2>
              <p>AI-driven movie recommendations with a premium frontend experience.</p>
              <div className="panel-meta">React • TypeScript • Redux Toolkit</div>
            </div>
          </div>
        </section>

        <section className="section-surface" id="about">
          <SectionTitle label="About Me" description="My approach to building elegant frontend products." />
          <div className="about-grid">
            <div>
              <p>{siteData.about.summary}</p>
              <ul>
                {siteData.about.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="stats-grid">
              {siteData.about.stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-surface" id="experience">
          <SectionTitle label="Experience" description="Where I currently contribute and what I ship." />
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <p className="panel-label">Current role</p>
                <h3>{siteData.experience[0].company}</h3>
                <span>{siteData.experience[0].role}</span>
              </div>
              <span className="experience-duration">{siteData.experience[0].duration}</span>
            </div>
            <p>{siteData.experience[0].description}</p>
            <ul className="experience-list">
              {siteData.experience[0].highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="skill-tags">
              {siteData.experience[0].stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-surface" id="skills">
          <SectionTitle label="Skills" description="The technologies I use to build modern frontend products." />
          <div className="skills-grid">
            {siteData.skills.map((group) => (
              <div className="skill-group" key={group.category}>
                <h4>{group.category}</h4>
                <div className="skill-chips">
                  {group.items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-surface" id="projects">
          <SectionTitle label="Featured Projects" description="Projects that demonstrate product thinking, React expertise, and polished UX." />
          <div className="project-grid">
            {siteData.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="section-surface" id="certifications">
          <SectionTitle label="Certifications" description="Verified expertise in modern frontend stacks." />
          <div className="cert-grid">
            {siteData.certifications.map((cert) => (
              <div key={cert} className="cert-card">
                <strong>{cert}</strong>
                <span>Completed certification</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-surface" id="contact">
          <SectionTitle label="Contact" description="Get in touch for collaboration, interview opportunities, and frontend roles." />
          <div className="contact-panel">
            <div>
              <h3>Let’s build something that matters.</h3>
              <p>Open to remote and hybrid roles with an emphasis on enterprise UI and product-quality experiences.</p>
              <div className="contact-links">
                <a href={`mailto:${siteData.contact.email}`} className="button button-primary">
                  Email me
                </a>
                <a href={siteData.contact.linkedIn} target="_blank" rel="noreferrer" className="button button-secondary">
                  LinkedIn
                </a>
                <a href={siteData.contact.github} target="_blank" rel="noreferrer" className="button button-secondary">
                  GitHub
                </a>
              </div>
            </div>
            <div className="contact-card">
              <strong>Reach out</strong>
              <p>{siteData.contact.email}</p>
              <p>{siteData.contact.linkedIn.replace('https://', '')}</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="page-footer">
        <span>{siteData.name}</span>
        <small>© 2026. Built with React and focused on premium frontend design.</small>
      </footer>
    </div>
  );
}

export default App;
