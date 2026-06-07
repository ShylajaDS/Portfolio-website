function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-head">
        <span className="project-badge">{project.badge}</span>
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
      <p className="project-impact">{project.impact}</p>
      <div className="tech-list">
        {project.tech.map((item) => (
          <span key={item} className="tech-chip">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
