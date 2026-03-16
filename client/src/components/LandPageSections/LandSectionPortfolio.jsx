import landPortBack from "../../assets/LandPortBack.png";
import landPortFront from "../../assets/LandPortFront.png";

export default function LandSectionPortfolio() {
  return (
    <section className="portfolioSection">
      <div className="portfolioImagesContainer">
        <img src={landPortBack} alt="Portfolio background layer" className="portImage backLayer" />
        <img src={landPortFront} alt="Portfolio front layer" className="portImage frontLayer" />
      </div>

      <div className="portfolioContent">
        <h1 className="portfolioTitle">MI PORTFOLIO</h1>
        <button className="portfolioButton">ver ahora</button>
      </div>

      <div className="portfolioWaveDecoration"></div>
    </section>
  );
}