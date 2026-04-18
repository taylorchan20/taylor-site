import { useState } from "react";
import ProjectCard from "./ProjectCard";

const STACK_OFFSETS = [
  { top: 10,  left: 14,  rotate:  0 },
  { top: 18,  left: 6,   rotate: -3 },
  { top: 24,  left: -2,  rotate: -6 },
  { top: 28,  left: -8,  rotate: -9 },
  { top: 30,  left: -13, rotate: -11 },
  { top: 31,  left: -17, rotate: -13 },
];

export default function PostcardStack({ cards }) {
  const N = cards.length;
  const [topIndex, setTopIndex] = useState(N - 1);

  const bringToFront = (i) => setTopIndex(i);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>

      {/* Stack area — position:relative must stay for absolute children */}
      <div className="card-stack" style={{ height: "450px" }}>
        {cards.map((card, i) => {
          const dist = (topIndex - i + N) % N;
          const offset = STACK_OFFSETS[Math.min(dist, STACK_OFFSETS.length - 1)];
          const zIndex = i === topIndex ? N : N - dist;
          const isTop = i === topIndex;

          return (
            <div
              key={card.title ?? i}
              className="card-stack-slot"
              style={{
                top: offset.top,
                left: "50%",
                zIndex,
                transform: `translateX(-50%) translateX(${offset.left}px) rotate(${offset.rotate}deg)`,
              }}
            >
              <ProjectCard
                {...card}
                isTop={isTop}
                onBringToFront={() => bringToFront(i)}
              />
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "clamp(5px, 15vw, 15vw)" }}>
        {cards.map((card, i) => (
          <button
            key={card.title ?? i}
            className={`stack-dot${i === topIndex ? " active" : ""}`}
            onClick={() => setTopIndex(i)}
            aria-label={`Show ${card.title ?? `card ${i + 1}`}`}
          />
        ))}
      </div>

      <p className="stack-hint">
        click top card to flip &middot; click underneath to bring forward
      </p>
    </div>
  );
}
