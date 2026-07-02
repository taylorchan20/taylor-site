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
    const [cycleComplete, setCycleComplete] = useState(false);

    // cycle the decorative loading images once through, then stop
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => {
                if (prev === spinnerImages.length - 1) {
                    clearInterval(interval);
                    setCycleComplete(true);
                    return prev;
                }
                return prev + 1;
            });
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

    // only leave once BOTH the spinner cycle and real assets are done
    useEffect(() => {
        if (assetsReady && cycleComplete) {
            setLeaving(true);
            const timer = setTimeout(onFinish, 600); // let slide-up animation play
            return () => clearTimeout(timer);
        }
    }, [assetsReady, cycleComplete, onFinish]);

    return (
        <div className={`loading-screen ${leaving ? 'slide-up' : ''}`}>
            <img src={spinnerImages[currentImage]} alt="loading" className="loading-image" />
        </div>
    );
}

export default LoadingScreen;