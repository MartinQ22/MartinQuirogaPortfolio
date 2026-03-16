import TuSitioWebSearchB from "../../assets/Elements/TuSitioWebSearchB.png";
import WebMobileFlyer from "../../assets/WebMobileFlyer.png"; // Fixed asset name

export default function PortHeroSection() {
    return (
      <div className="portHeroSection">
        <div className="portHeroTop">
          <div className="portHeroTextContainer">
            <h1 className="portHeroTitle">PORTFOLIO</h1>
            <p className="portHeroSubtitle">
              Aqui podes encontrar mis proyectos de desarrollo web,<br />
              podes encontrar más contenido en mis redes
            </p>
          </div>
          
          <div className="portHeroSearchContainer">
            <img src={TuSitioWebSearchB} alt="Search Bar popup" className="portHeroSearchImg" />
          </div>
        </div>

        <div className="portHeroCenter">
          <img src={WebMobileFlyer} alt="Web Mobile Flyer" className="portHeroFlyerImg floatDownAnimation" />
        </div>
      </div>  
    );
}