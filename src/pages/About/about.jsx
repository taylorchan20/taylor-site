import React, { useRef, useEffect } from 'react';
import AboutPostcard from '../../components/About-Postcard';
import './about.css';

function About() {
    const aboutPostcardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    aboutPostcardRef.current.classList.add('visible');
                }
            },
            { threshold: 0.2 }
        );

        if (aboutPostcardRef.current) observer.observe(aboutPostcardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-page">
            <div className="about-postcard-wrapper" ref={aboutPostcardRef}>
                <AboutPostcard />
            </div>
        </div>
    );
}

export default About;