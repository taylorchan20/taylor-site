import React, { useRef, useEffect } from 'react';
import AboutPostcard, { aboutPostcardAssets } from '../../components/About-Postcard';
import AboutFavourites, { aboutFavouritesAssets } from '../../components/About-Favourites';
import AboutPics, { aboutPicsAssets } from '../../components/About-Pics';
import '../../components/About-Postcard.css';
import '../../components/About-Favourites.css';
import '../../components/About-Pics.css';

export const aboutAssets = [
    ...aboutPostcardAssets,
    ...aboutFavouritesAssets,
    ...aboutPicsAssets
];

function About() {
    const aboutPostcardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && aboutPostcardRef.current) {
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
            <AboutFavourites />
            <AboutPics />
        </div>
    );
}

export default About;