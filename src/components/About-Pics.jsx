import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import pic6 from '../assets/pic6.png';
import pic7 from '../assets/pic7.png';
import pic8 from '../assets/pic8.png';
import pic9 from '../assets/pic9.png';
import pic10 from '../assets/pic10.png';
import line from '../assets/Line.png';
import stamp from '../assets/Stamp.png';

export default function AboutPics() {
    return (
        <div className="about-pics">

            <img src={line} alt="line" className="line" />

            {/* title + stamp row */}
            <div style={{
                display: "flex",
                alignItems: "flex-start",
                width: "100%",
                marginTop: "3%",
            }}>
                <div style={{ flex: 1, marginLeft: "10%" }}>
                    <h2 className="pics-title" style={{ whiteSpace: "nowrap" }}>Collected <span className="italic1">along the way</span></h2>
                    <p className="pics-subtitle" style={{ whiteSpace: "nowrap" }}>(or, snapshots of my life that I'm most grateful for)</p>
                </div>
                <div style={{ flexShrink: 0, marginRight: "5%", marginTop: "1%", marginLeft: "25%" }}>
                    <img src={stamp} alt="stamp" className="stamp" />
                </div>
            </div>

            <div className="pics">
                <div className="pics-row">
                    <img src={pic3}  alt="pic3"  className="about-pic1" />
                    <img src={pic7}  alt="pic7"  className="about-pic2" />
                    <img src={pic8}  alt="pic8"  className="about-pic3" />
                    <img src={pic2}  alt="pic2"  className="about-pic4" />
                    <img src={pic10} alt="pic10" className="about-pic5" />
                </div>
                <div className="pics-row">
                    <img src={pic6}  alt="pic6"  className="about-pic6" />
                    <img src={pic1}  alt="pic1"  className="about-pic7" />
                    <img src={pic9}  alt="pic9"  className="about-pic8" />
                    <img src={pic4}  alt="pic4"  className="about-pic9" />
                    <img src={pic5}  alt="pic5"  className="about-pic10" />
                </div>
            </div>

            <div className="line1">
                <img src={line} alt="line" className="line2" />
            </div>

        </div>
    );
}
