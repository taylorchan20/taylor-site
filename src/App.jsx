import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home/home';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import About from './pages/About/about';
// import Projects from './pages/Projects/Projects'; <--- for later!

function App() {
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem('hasLoaded');
  });

  const handleFinish = () => {
    sessionStorage.setItem('hasLoaded', 'true');
    setLoading(false);
  };

  return (
    <BrowserRouter>
      <div className="App purple">
        {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
        {!loading && (
          <div className="app-container">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;