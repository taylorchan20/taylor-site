import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Projects from './pages/Projects/projects';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { postcardAssets } from './components/Postcard';
import { aboutAssets } from './pages/About/about';
// import { projectsAssets } from './pages/Projects/projects';

const assetsByPath = {
  '/': postcardAssets,
  '/about': aboutAssets,
  // '/projects': projectsAssets,
};

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function AppContent() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [pathname]);

  const currentAssets = assetsByPath[pathname] || [];

  return (
    <div className="App purple">
      {loading && (
        <LoadingScreen
          onFinish={() => setLoading(false)}
          assetsToLoad={currentAssets}
        />
      )}
      {!loading && (
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;