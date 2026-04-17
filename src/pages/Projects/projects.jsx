import ProjectCard from "../../components/ProjectCard";
import "../../components/ProjectCard.css";

import card1f from "../../assets/card1f.png";
import card2f from "../../assets/card2f.png";
import card3f from "../../assets/card3f.png";
import card4f from "../../assets/card4f.png";
import BackBlue from "../../assets/BackBlue.png";
import BackPurple from "../../assets/BackPurple.png";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="card-grid">
        <ProjectCard
        front={card1f} 
        back={BackBlue}
        title="Gloss"
        description="Gloss over your text." />

        <ProjectCard front={card2f} back={BackPurple} />
        <ProjectCard front={card4f} back={BackPurple} />
        <ProjectCard front={card3f} back={BackBlue} />
    
      </div>
    </section>
  );
}