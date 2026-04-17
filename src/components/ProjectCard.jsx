import { useState } from "react";

export default function ProjectCard({ front, back, title, description, backImg, alt = "" }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`project-card deck-card${flipped ? " flipped" : ""}`}
      onClick={() => setFlipped((prev) => !prev)}
      tabIndex={0}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={front} alt={alt} />
        </div>
        <div className="card-back">
          <img src={back} alt={`${alt} back`} />
          <div className="card-back-info">
            {backImg && <img src={backImg} alt="icon" className="back-icon" />}
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
  </div>
  );
}