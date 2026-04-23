import envelope1Img from '../assets/Envelope1.png';
import envelope2Img from '../assets/Envelope2.png';
import letterImg from '../assets/Letter.png';
import { useRef, useEffect } from 'react';

export default function AboutFavourites() {
    const letterRef = useRef(null);
    const listRef = useRef(null);
    const textRef = useRef(null);
    const sectionRef = useRef(null);

useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (letterRef.current) letterRef.current.classList.add('visible');
                    if (listRef.current) listRef.current.classList.add('visible');
                    if (textRef.current) textRef.current.classList.add('visible');
                }
            });
        },
        { threshold: 0.6 }
    );

    const timer = setTimeout(() => {
        if (sectionRef.current) observer.observe(sectionRef.current);
    }, 500);

    return () => {
        clearTimeout(timer);
        observer.disconnect();
    };
}, []);
    
    return (
        <div className="about-favourites" ref={sectionRef}>
            <div className="envelope-group">
                <img src={envelope1Img} alt="envelope1" className="envelope1" />
                <img src={letterImg} alt="letter" className="letter" ref={letterRef} />
                <img src={envelope2Img} alt="envelope2" className="envelope2" />
                <p className="favourites-list" ref={listRef}>
                    <span className="bold">Books:</span> Carrie Soto is Back, Atmosphere <br />
                    <span className="bold">Albums:</span> GUTS, folklore <br />
                    <span className="bold">Place:</span> Kauai, Hawaii <br />
                    <span className="bold">Food:</span> Dim sum and mango <br />
                    <span className="bold">Current Obsession:</span> Bead embroidery
                </p>
            </div>
            <div className="favourites-text" ref={textRef}>
                <h2 className="favourites-title">These are a few of <br /><span className="italic1">my favourite things...</span></h2>
                <p className="favourites-subtitle">Outside of school and work, I love being active and exploring. I absolutely love swimming, hiking, and baking.
                    I love trying something new, but i also have a few favourites I keep coming back to.
                </p>
            </div>
        </div>
    );
}