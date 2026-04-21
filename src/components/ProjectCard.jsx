import { useState, useEffect } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

export default function ProjectCard({
  front,
  back,
  title,
  description,
  bullets,
  backImg,
  backVideo,
  backVideo1,
  frontMobile,
  backMobile,
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

  /* mobile handling */
  const isMobile = useIsMobile();

  const activeFront = isMobile && frontMobile ? frontMobile : front;
  const activeBack  = isMobile && backMobile  ? backMobile  : back;

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
          <img src={activeFront} alt={alt} />
        </div>

        {/* BACK FACE */}
        <div className="card-back">

          {/* Layer 1 — full bleed background image */}
          <img
            src={activeBack}
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
            <img src={backImg}
            alt="icon"
            style={{
            position: "absolute",
            top: isMobile ? "12%" : "28%",
            left: isMobile ? "50%" : "9%",
            transform: isMobile ? "translateX(-50%)" : "none",
            width: isMobile ? "65%" : "40%",
            height: "auto",
            zIndex: 2,
            borderRadius: "6px",
          }} />
      )}

                {/* project 3 video */}
          {backVideo && (
            <video
            src={backVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: isMobile ? "10%" : "22%",
              left: isMobile ? "50%" : "10%",
              transform: isMobile ? "translateX(-50%)" : "none",
              width: isMobile ? "42%" : "32%",
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
              top: isMobile ? "12%" : "28%",
              left: isMobile ? "50%" : "9%",
              transform: isMobile ? "translateX(-50%)" : "none",
              width: isMobile ? "65%" : "40%",
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
              justifyContent: isMobile ? "flex-end" : "center",
              alignItems: isMobile ? "center" : "flex-end",
              padding: isMobile ? "8% 8% 20% 8%" : "8%",
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
