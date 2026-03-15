export default function LandSectionPortfolio() {
  return (
    <section className="portfolioSection">
      <div className="portfolioImagesContainer">
        <img src="/src/assets/LandPortBack.png" alt="Portfolio background layer" className="portImage backLayer" />
        <img src="/src/assets/LandPortFront.png" alt="Portfolio front layer" className="portImage frontLayer" />
      </div>

      <div className="portfolioContent">
        <h1 className="portfolioTitle">MI PORTFOLIO</h1>
        <button className="portfolioButton">ver ahora</button>
      </div>

      <div className="portfolioWaveDecoration"></div>
    </section>
  );
}