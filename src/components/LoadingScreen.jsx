import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';
import loading1Img from '../assets/Loading1.png';
import loading2Img from '../assets/Loading2.png';
import loading3Img from '../assets/Loading3.png';
import { preloadImages } from '../utils/preloadAssets';

const spinnerImages = [loading1Img, loading2Img, loading3Img];

function LoadingScreen({ onFinish, assetsToLoad }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [assetsReady, setAssetsReady] = useState(false);

    // cycle the decorative loading images (purely visual, keep as is)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % spinnerImages.length);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    // actually wait for real assets
    useEffect(() => {
        let cancelled = false;
        preloadImages(assetsToLoad).then(() => {
            if (!cancelled) setAssetsReady(true);
        });
        return () => { cancelled = true; };
    }, [assetsToLoad]);

    // only leave once assets are ready
    useEffect(() => {
        if (assetsReady) {
            setLeaving(true);
            const timer = setTimeout(onFinish, 600); // let slide-up animation play
            return () => clearTimeout(timer);
        }
    }, [assetsReady, onFinish]);

    return (
        <div className={`loading-screen ${leaving ? 'slide-up' : ''}`}>
            <img src={spinnerImages[currentImage]} alt="loading" className="loading-image" />
        </div>
    );
}

export default LoadingScreen;