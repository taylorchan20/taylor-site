import { useState } from "react";
import "./../App.css";

export default function ProjectCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div
      className={`project-card deck-card${flipped ? " flipped" : ""}`}
      onClick={handleClick}
      tabIndex={0}
    >
      <div className="card-inner">
        <div className="card-front">{front}</div>
        <div className="card-back">{back}</div>
      </div>
    </div>
  );
}
