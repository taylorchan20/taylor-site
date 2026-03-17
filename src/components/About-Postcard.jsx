import aboutImg from '../assets/About.png';
import hiImg from '../assets/Hi.png';
import heartImg from '../assets/Heart.png';
import moonImg from '../assets/Moon.png';
import meImg from '../assets/Me.png';
import twinkleImg from '../assets/Twinkle2.png';
import logoImg from '../assets/Logo.png';
import stars from '../assets/Stars.png';
import arrowImg from '../assets/Arrow.png';
import twinkle5 from '../assets/Twinkle_3.png';

export default function AboutPostcard() {
    return (
        <div className="about-postcard">
            <div className="about-postcard-inner">
                <img src={aboutImg} className="about-main-img" alt="About Postcard" />
                <img src={hiImg} className="hi" alt="Hi" />
                <img src={heartImg} className="heart" alt="Heart" />
                <img src={moonImg} className="moon" alt="Moon" />
                <img src={meImg} className="me" alt="Me" />
                <img src={twinkleImg} className="twinkle" alt="Twinkle" />
                <img src={logoImg} className="logo" alt="Logo" />
                <img src={arrowImg} className="arrow" alt="Arrow" />
                <img src={arrowImg} className="arrow2" alt="Arrow" />
                <img src={stars} className="stars1" alt="Stars1" />
                <img src={twinkle5} className="twinkle5" alt="Twinkle5" />
                <div className="about-text">
                    <p>I'm Taylor! I'm studying <span className="bold">Systems Design Engineering at the University of Waterloo,</span>  and I'm currently working as a 
                        <span className="bold"> Mechanical Engineer at Evertz.</span> </p>
                    <p>I live in a constant state of <span className="bold">wanderlust</span> - not just for places, but for ideas. I'm passionate about exploring the world and understanding how it works, 
                        with the goal of leaving it better than I found it. </p>    
                    <p>I'm a big believer in living life to its fullest! With that, you can catch me enjoying some of my current favourites.</p>
                </div>    
            </div>            
        </div>
    );
}
