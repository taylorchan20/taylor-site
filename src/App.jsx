import './App.css';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">
      <div className="app-container">

        {/* title with name */}
        <div className="name-intro">
          <h1>hi, i'm <b>taylor!</b></h1>
        </div>

        {/* basic bio below title */}
        <div className="bio-intro">
          <p>basic intro shit ig</p>
        </div>

        {/* experience when you get it should go here */}

        {/* project section title */}
        <div className="project-title">
          <h2>projects</h2>
        </div>

        {/* projects */}
        <div className="projects-container">
          <ProjectCard
            front={<div>project 1</div>}
            back={<div>project 1 details</div>}
          />
          <ProjectCard
            front={<div>project 2</div>}
            back={<div>project 2 details</div>}
          />
          <ProjectCard
            front={<div>project 3</div>}
            back={<div>project 3 details</div>}
          />
        </div>

        {/* footer contact details */}
        <div className="contact-footer">
          <p>
            you can reach me at {/* fill in your email instead of mine */} <a href="mailto:stelladelorey@gmail.com" >TAYLOR EMAIL</a>,
            or my <a href="https://www.linkedin.com/in/taylor-chan-a34882378/" target="_blank" rel="noreferrer">linkedin</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
