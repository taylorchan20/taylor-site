import React from 'react';
import postcardImg from '../assets/Postcard_.jpg';
import nameImg from '../assets/Name.png';
import logoImg from '../assets/Logo.png';
import mirrorballImg from '../assets/Mirrorball.png';
import starsImg from '../assets/Stars.png';
import shellsImg from '../assets/Shells.png';
import hatImg from '../assets/Hat.png';
import diamondImg from '../assets/Diamond.png';
import twinkle1Img from '../assets/Twinkle1.png';
import twinkle2Img from '../assets/Twinkle2.png';
import twinkle3Img from '../assets/Twinkle_3.png';

export default function Postcard() {
  return (
    <div className="postcard">
      <img src={postcardImg} className = "main-img" alt="Postcard" />
      <img src={nameImg} className="name" alt="Name" />
      <img src={logoImg} className="logo" alt="Logo" />
      <img src={mirrorballImg} className="mirrorball" alt="Mirrorball" />
      <img src={starsImg} className="stars" alt="Stars" />
      <img src={shellsImg} className="shells" alt="Shells" />
      <img src={hatImg} className="hat" alt="Hat" />
      <img src={diamondImg} className="diamond" alt="Diamond" />
      <img src={twinkle1Img} className="twinkle1" alt="Twinkle 1" />
      <img src={twinkle2Img} className="twinkle2" alt="Twinkle 2" />
      <img src={twinkle3Img} className="twinkle3" alt="Twinkle 3" />
      <img src={twinkle3Img} className="twinkle4" alt="Twinkle 4" />
    </div>
  );
}
