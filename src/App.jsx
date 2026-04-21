import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home/home';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import About from './pages/About/about';
import Projects from './pages/Projects/projects';


function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem('hasLoaded');
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App purple">
        {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
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
    </BrowserRouter>
  );
}

export default App;