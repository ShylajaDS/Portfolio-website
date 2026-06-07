function SectionTitle({ label, description }) {
  return (
    <div className="section-title">
      <span className="section-label">{label}</span>
      <p>{description}</p>
    </div>
  );
}

export default SectionTitle;
