import { useState, useEffect } from "react";

export default function ProjectCard({
  front,
  back,
  title,
  description,
  bullets,
  backImg,
  alt = "",
  isTop,
  onBringToFront,
}) {
  const [flipped, setFlipped] = useState(false);

  // Safety fix: If the card is no longer on top, force it to un-flip
  useEffect(() => {
    if (!isTop) setFlipped(false);
  }, [isTop]);

  const handleClick = () => {
    if (!isTop) {
      onBringToFront();
    } else {
      setFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className={`project-card${flipped ? " flipped" : ""}`}
      onClick={handleClick}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <div className="card-inner">
        {/* FRONT FACE */}
        <div className="card-front">
          <img src={front} alt={alt} />
        </div>

        {/* BACK FACE */}
        <div className="card-back">
          <img src={back} alt={`${alt} back`} className="back-bg-img" />
          
          <div className="card-back-info">
            {/* 1. Icon is absolute - moved by top/left in CSS */}
            {backImg && (
              <img src={backImg} alt="icon" className="back-icon" />
            )}

            {/* 2. Text group - moved by justify-content/align-items in CSS */}
            <div className="text-content">
              <h3>{title}</h3>
              <p>{description}</p>
              {bullets && bullets.length > 0 && (
                <ul>
                  {bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}