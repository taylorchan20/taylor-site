import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home/home';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
// import Projects from './pages/Projects/Projects'; <--- for later!

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App purple">
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && (
      <div className="app-container">
        <Navbar />
        {/* Main UI */}
        <Home /> 
        <Footer />
      </div>
      )}
    </div>
  );
}

export default App;