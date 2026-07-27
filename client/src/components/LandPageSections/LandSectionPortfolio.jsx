import { Link } from "react-router-dom";
import landPortFront from "../../assets/LandPortFront.png";

export default function LandSectionPortfolio() {
  return (
    <section className="portfolioSection">
      <div className="portfolioImagesContainer">
        <img src="https://res.cloudinary.com/dfwb8a17z/image/upload/v1749430549/Group_106_anhmh5.png" alt="Portfolio background layer" className="portImage backLayer" />
        <img src={landPortFront} alt="Portfolio front layer" className="portImage frontLayer" />
      </div>

      <div className="portfolioContent">
        <h1 className="portfolioTitle">MI PORTFOLIO</h1>
        <Link to="/portfolio" className="portfolioButton">ver ahora</Link>
      </div>

      <div className="portfolioWaveDecoration"></div>
    </section>
  );
}