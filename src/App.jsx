import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import SectionTitle from './components/SectionTitle';
import { siteData } from './content';

function App() {
  const handleDownload = (href, label) => {
    const link = document.createElement('a');
    link.href = href;
    link.download = label === 'Download Resume' ? 'Shylaja_Resume.pdf' : '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                action.label === 'Download Resume' ? (
                  <button
                    key={action.label}
                    className="button button-primary"
                    onClick={() => handleDownload(action.href, action.label)}
                  >
                    {action.label}
                  </button>
                ) : (
                  <a
                    key={action.label}
                    className={action.primary ? 'button button-primary' : 'button button-secondary'}
                    href={action.href}
                    target={action.primary ? '_blank' : undefined}
                    rel={action.primary ? 'noreferrer' : undefined}
                  >
                    {action.label}
                  </a>
                )
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
        </section>

   <section className="section-surface" id="about">
  <SectionTitle label="About Me" />

  <div className="about-content">
    <p className="about-intro">
     
Frontend Engineer passionate about building fast, scalable, and intuitive web
products. Over the last 3 years, I have designed reusable React architectures,
developed enterprise dashboards, integrated complex APIs, and optimized user
experiences for large-scale business applications at Mercedes-Benz R&D India.

I enjoy solving challenging UI problems, improving application performance,
and building products.

    </p>

    <div className="about-points">
      {siteData.about.bullets.map((bullet) => (
        <div className="about-point" key={bullet}>
          {bullet}
        </div>
      ))}
    </div>
  </div>
</section>

        <section className="section-surface" id="experience">
          <SectionTitle label="Experience" description="" />
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
          <SectionTitle label="Skills" description="" />
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
          <SectionTitle label="Projects" description="" />
          <div className="project-grid">
            {siteData.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="section-surface" id="certifications">
          <SectionTitle label="Certifications" description="" />
          <div className="cert-grid">
            {siteData.certifications.map((cert) => (
              <div key={cert.name} className="cert-card">
                <span className="cert-icon">{cert.icon}</span>
                <strong>{cert.name}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section-surface" id="contact">
          <SectionTitle label="Contact" description="" />
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
