import { useEffect, useRef, useState } from "react";
import MailIcon from "../Icons/MailIcon";
import ContactBar from "../ContactBar";
import DualStars from "../Icons/DualStars";
import Girl_BlackW from "../../assets/Girl_BlackW.png";
import IridiscentBG from "../../assets/IridicentBG.png";

export default function LandSectionContact() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);
  const mailAddress = import.meta.env.VITE_MAIL_ADRESS;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`contactSection ${revealed ? 'revealed' : ''}`}
      style={{ backgroundImage: `url(${IridiscentBG})` }}
      id="contactLanding"
    >
      {/* LEFT SIDE - TITLE & STARS */}
      <div className="contactLeft">
        <h1 className="contactTitle">
          MANTENGAMOS<br />CONTACTO
        </h1>
        <div className="dualStarsWrapper">
          <DualStars />
        </div>
      </div>

      {/* CENTER - HERO IMAGE */}
      <div className="contactCenter">
        <img src={Girl_BlackW} alt="Mujer Blanco y negro" className="girlImage" />
      </div>

      {/* RIGHT SIDE - CONTACT INFO */}
      <div className="contactRight">
        <div className="contactDetails">
          {/* <div className="contactMailHeader">
            <MailIcon />
            <span>Mail</span>
          </div>
          <a href={`mailto:${mailAddress}`} className="contactMailValue">
            {mailAddress}
          </a> */}
        </div>

        <div className="contactBarWrapper">
          <ContactBar />
        </div>
      </div>
    </section>
  );
}