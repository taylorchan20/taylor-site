import { useEffect, useRef } from 'react';
// import Description from '../../components/Description';
// import ProjectCard from '../../components/ProjectCard';
import Postcard from '../../components/Postcard';
import './home.css';

function Home() {
  const postcardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          postcardRef.current.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );

    if (postcardRef.current) observer.observe(postcardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <div className="name-intro">
      </div>

      <div className="postcard-wrapper" ref={postcardRef}>
        <Postcard />
      </div>

    </div>
  );
}

export default Home;