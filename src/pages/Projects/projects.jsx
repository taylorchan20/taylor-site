import ProjectCard from "../../components/ProjectCard";
import "../../components/ProjectCard.css";
import PostcardStack from "../../components/PostcardStack";
import "../../components/PostcardStack.css";

import card1f from "../../assets/card1f.png";
import card2f from "../../assets/card2f.png";
import card3f from "../../assets/card3f.png";
import BackBlue from "../../assets/BackBlue.png";
import BackPurple from "../../assets/BackPurple.png";
import BackLP from "../../assets/BackLP.png";
import gloss from "../../assets/gloss.png";
import taank from "../../assets/taank.mp4";
import portfolio from "../../assets/portfolio.mp4";
import card1fmobile from "../../assets/card1fmobile.png";
import card2fmobile from "../../assets/card2fmobile.png";
import card3fmobile from "../../assets/card3fmobile.png";
import BackBlueMobile from "../../assets/BackBlueMobile.png";
import BackPMobile from "../../assets/BackPMobile.png";
import BackLPMobile from "../../assets/BackLPMobile.png";

console.log('taank:', taank);
console.log('portfolio:', portfolio);

const projects = [
  {
    title: <a href="https://devpost.com/software/gloss" target="_blank" rel="noreferrer"><i>Gloss</i></a>,
    // description: "",
    bullets: [
      "Built in Google Chrome reading extension that helps users read, process, and understand online news ",
      "Scrapes article text and uses Google Gemini API to translate into custom reading level",
      "Designed in Figma and built with Node, JavaScript, TypeScript, Python, HTML, and CSS"
    ],
    front: card1f,
    back: BackBlue,
    frontMobile: card1fmobile,
    backMobile: BackBlueMobile,
    backImg: gloss,
    alt: "Gloss project",
  },
  {
    title: <a href="https://github.com/taylorchan20/taylor-site"><i>Portfolio</i></a>,
    // description: "Long-form travel editorial with photo essays and maps.",
    bullets: [
      "A look inside my mind and work, and the website you're on right now",
      "Built with JavaScript, React, HTML, and CSS",
      "All graphics hand drawn in Procreate"
    ],
    front: card2f,
    back: BackPurple,
    frontMobile: card2fmobile,
    backMobile: BackPMobile,
    backVideo1: portfolio,
    alt: "Portfolio project",
  },
  {
    title: <i>The T.A.A.N.K.</i>,
    // description:,
    bullets: [
      "Custom puzzle product developed from scratch in SolidWorks, then 3D printed and pitched",
      "Designed with a planetary gear mechanism, where 3 Canadian geese rotate around a central fir tree axis",
      "Organized the team and designed the unique headpiece for each goose"
    ],
    front: card3f,
    back: BackLP,
    frontMobile: card3fmobile,
    backMobile: BackLPMobile,
    backVideo: taank,
    alt: "puzzle project",
  },
];

export default function Projects() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>Projects</h2>
      <PostcardStack cards={projects} />
    </div>
  );
}