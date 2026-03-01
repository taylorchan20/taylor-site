import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';
import loading1Img from '../assets/Loading1.png';
import loading2Img from '../assets/Loading2.png';
import loading3Img from '../assets/Loading3.png';

const images = [loading1Img, loading2Img, loading3Img];

function LoadingScreen({ onFinish }) {
    const [currentImage, setCurrentImage] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => {
                if (prev === images.length - 1) {
                    clearInterval(interval);
                    setTimeout(onFinish, 500); // Wait a bit before finishing
                    return prev; // Stay on the last image
                }
                return prev + 1;
            });

        }, 800); // Change image
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loading-screen">
            <img src={images[currentImage]} alt="loading" className="loading-image" />
        </div>
    );
}

export default LoadingScreen;
        