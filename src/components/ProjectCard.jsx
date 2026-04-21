import { useState, useEffect } from "react";

export default function ProjectCard({
  front,
  back,
  title,
  description,
  bullets,
  backImg,
  backVideo,
  backVideo1,
  alt = "",
  isTop,
  onBringToFront,
}) {
  const [flipped, setFlipped] = useState(false);

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

          {/* Layer 1 — full bleed background image */}
          <img
            src={back}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              zIndex: 0,
            }}
          />

          {/* Layer 2 — decorative icon, independently placed */}
          {backImg && (
            <img
              src={backImg}
              alt="icon"
              style={{
                position: "absolute",
                top: "28%",       // ← adjust freely without touching text
                left: "9%",
                width: "40%",
                height: "auto",
                zIndex: 2,
                borderRadius: "6px",
              }}
            />
          )}

                {/* Layer 2 — video instead of image */}
          {backVideo && (
            <video
            src={backVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: "22%",
              left: "12%",
              width: "35%",
              height: "auto",
              zIndex: 2,
              borderRadius: "6px",
        }}
      />
    )}

          {backVideo1 && (
            <video
            src={backVideo1}
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: "29%",
              left: "10%",
              width: "38%",
              height: "auto",
              zIndex: 2,
              borderRadius: "6px",
        }}
      />
    )}

          {/* Layer 3 — text overlay, independently placed */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              padding: "8%",
              boxSizing: "border-box",
            }}
          >
            <div className="text-content">
              <h2>{title}</h2>
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
