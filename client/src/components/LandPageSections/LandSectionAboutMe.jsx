import { Link } from "react-router-dom";
import aboutMeImage from "../../assets/AboutMeImage.png";
import DesignIcon from "../Icons/DesignIcon";
import CodeIcon from "../Icons/CodeIcon";
import HelloIcon from "../Icons/HelloIcon";


export default function LandSectionAboutMe() {
  return (
    <div className="aboutMeSection" >
      {/* LEFT SIDE - IMAGE */}
      <div className="aboutMeLeft">
        <img src={aboutMeImage} alt="About Me Graphic" className="aboutMeGraphic" />
      </div>

      {/* RIGHT SIDE - BLACK */}
      <div className="aboutMeRight">
        <div className="aboutMeIcons">
          <div className="decorativeIcon">
            <DesignIcon />
          </div>
          <div className="decorativeIcon">
            <CodeIcon />
          </div>
          <div className="decorativeIcon">
            <HelloIcon />
          </div>
        </div>

        <div className="aboutMeTextContent">
          <h1 className="aboutMeTitle">SOBRE MÍ</h1>
          <p className="aboutMeDescription">
            Soy un <span className="italic">profesional del diseño</span> con experiencia en UX/UI y <span className="italic">desarrollador web</span> con enfoque front-end y conocimientos en back-end.
          </p>
          <Link className="aboutMeLink" to={"/about"}>
            leer mas <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}