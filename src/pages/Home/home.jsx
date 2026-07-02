import { useEffect, useRef, useState } from 'react';
// import Description from '../../components/Description';
// import ProjectCard from '../../components/ProjectCard';
import { postcardAssets } from '../../components/Postcard';
import Postcard from '../../components/Postcard';
import './home.css';
import LoadingScreen from '../../components/LoadingScreen';

function Home() {
  const postcardRef = useRef(null);
  const [loading, setLoading] = useState(true);

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
      {loading && (
        <LoadingScreen
          onFinish={() => setLoading(false)}
          assetsToLoad={postcardAssets}
        />
      )}

      <div className="name-intro"></div>

      <div className="postcard-wrapper" ref={postcardRef}>
        <Postcard />
      </div>
    </div>
  );
}

export default Home;