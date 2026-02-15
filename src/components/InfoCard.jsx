export default function InfoCard({ title, sub, meta }) {
  return (
    <div className="info-card">
      <div className="info-title">{title}</div> 
      <div className="info-sub">{sub}</div>
      {meta ? <div className="info-meta">{meta}</div> : null}
    </div>
  );
}
