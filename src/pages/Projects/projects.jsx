import ProjectCard from "../../components/ProjectCard";
import "../../components/ProjectCard.css";

import card1f from "../../assets/card1f.png";
import card2f from "../../assets/card2f.png";
import card3f from "../../assets/card3f.png";
import card4f from "../../assets/card4f.png";
import BackBlue from "../../assets/BackBlue.png";
import BackPurple from "../../assets/BackPurple.png";
import gloss from "../../assets/gloss.png";

import PostcardStack from "../../components/PostcardStack";
import "../../components/PostcardStack.css";

const projects = [
  {
    title: "Gloss",
    description: "Built in Google Chrome extension built-in reading companion that helps you read, process, and understand online news ",
    bullets: [
      "Scrapes article text and uses Google Gemini API to translate into custom reading level",
      "Interactive UI with sound and visual effects to engage users",
      "Designed in Figma and built with Node, JavaScript, TypeScript, Python, HTML, and CSS"
    ],
    front: card1f,
    back: BackBlue,
    // backImg: gloss,
    alt: "Paris project",
  },
  {
    title: "Kyoto journal",
    description: "Long-form travel editorial with photo essays and maps.",
    front: card2f,
    back: BackPurple,
    // backImg: "../../assets/editorial.png",
    alt: "Kyoto project",
  },
  {
    title: "NYC city guide",
    description: "Offline-first iOS travel guide for New York.",
    front: card3f,
    back: BackBlue,
    // backImg: "../../assets/app.png",
    alt: "NYC project",
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