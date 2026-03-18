import envelope1Img from '../assets/Envelope1.png';
import envelope2Img from '../assets/Envelope2.png';
import letterImg from '../assets/Letter.png';
import { useRef, useEffect } from 'react';

export default function AboutFavourites() {
    const letterRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        letterRef.current.classList.add('visible');
                        textRef.current.classList.add('visible');
                    }
                });
            },
            { threshold: 0.5 }
        );

        const parent = letterRef.current?.parentElement?.parentElement;
        if (parent) observer.observe(parent);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-favourites">
            <div className="envelope-group">
                <img src={envelope1Img} alt="envelope1" className="envelope1" />
                <img src={letterImg} alt="letter" className="letter" ref={letterRef} />
                <img src={envelope2Img} alt="envelope2" className="envelope2" />
                <p className="favourites-list">
                    <span className="bold">Books:</span> Carrie Soto is Back, Atmosphere <br />
                    <span className="bold">Albums:</span> GUTS, The Secret of Us <br />
                    <span className="bold">Places:</span> Kauai, Milos <br />
                    <span className="bold">Food:</span> Dim sum and mango <br />
                    <span className="bold">Current Obsession:</span> Bead embroidery
                </p>
            </div>
            <div className="favourites-text" ref={textRef}>
                <h2 className="favourites-title">These are a few of <br /><span className="italic1">my favourite things...</span></h2>
                <p className="favourites-subtitle">Outside of school or work, I'm always looking to try something new!
                    I also have a few favourites that I just keep coming back to.
                </p>
            </div>
        </div>
    );
}