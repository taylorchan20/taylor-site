import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';
import loading1Img from '../assets/Loading1.png';
import loading2Img from '../assets/Loading2.png';
import loading3Img from '../assets/Loading3.png';

const images = [loading1Img, loading2Img, loading3Img];

function LoadingScreen({ onFinish }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => {
                if (prev === images.length - 1) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setLeaving(true); // triggers slide up animation
                        setTimeout(onFinish, 600); // wait for animation to finish
                    }, 500);
                    return prev;
                }
                return prev + 1;
            });
        }, 800);
        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <div className={`loading-screen ${leaving ? 'slide-up' : ''}`}>
            <img src={images[currentImage]} alt="loading" className="loading-image" />
        </div>
    );
}

export default LoadingScreen;