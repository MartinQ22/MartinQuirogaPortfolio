import DesignIcon from "../Icons/DesignIcon";
import CodeIcon from "../Icons/CodeIcon";
import HelloIcon from "../Icons/HelloIcon";

// PNG Icons
import BootstrapIcon from "../../assets/PngIcons/BootstrapIcon.png";
import FigmaIcon from "../../assets/PngIcons/FigmaIcon.png";
import JavaScriptIcon from "../../assets/PngIcons/JavaScripIcon.png"; // Note the typo in filenames from source
import MongoDBIcon from "../../assets/PngIcons/MongooseIcon.png";
import PostmanIcon from "../../assets/PngIcons/PostmanIcon.png";
import ReactIcon from "../../assets/PngIcons/ReactIcon.png";

export default function AboutIntroSection() {
  return (
    <section className="aboutIntroSection">
      {/* SIDE VERTICAL ICONS */}
      <div className="aboutIntroSideIcons">
        <div className="sideIcon"><DesignIcon /></div>
        <div className="sideIcon"><CodeIcon /></div>
        <div className="sideIcon"><HelloIcon /></div>
      </div>

      <div className="aboutIntroContent">
        <div className="aboutIntroHeader">
          <h1 className="aboutIntroTitle">Sobre Mí</h1>
          <p className="aboutIntroIntroText">
            Soy un <span className="italic-white">profesional del diseño</span> con experiencia en UX/UI y <span className="italic-white">desarrollador web</span> con enfoque front-end y conocimientos en back-end.
          </p>
        </div>

        <div className="aboutIntroColumns">
          {/* LEFT COLUMN: DIGITAL DESIGN */}
          <div className="aboutIntroCol">
            <h2 className="aboutIntroColTitle">Diseño Digital</h2>
            
            <div className="aboutIntroSubSection">
              <h3 className="aboutIntroSubTitle">Diseño UX/UI</h3>
              <ul className="aboutIntroList">
                <li>Desarrollo de proyectos aplicados a través de análisis de datos profundos, utilizando benchmarking para identificar oportunidades de mercado, creación y optimización de userflow para mostrar el flujo del usuario en la APP para luego en etapas finales realizar entrevistas y testeo con posibles usuarios/testers.</li>
              </ul>
            </div>

            <div className="aboutIntroSubSection">
              <h3 className="aboutIntroSubTitle">Diseño Social Media</h3>
              <ul className="aboutIntroList">
                <li>Creación de piezas gráficas y narrativas visuales optimizadas para algoritmos de Instagram y TikTok, campañas publicitarias representando a la marca (ads).</li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: WEB DEVELOPMENT */}
          <div className="aboutIntroCol">
            <h2 className="aboutIntroColTitle">Desarrollo Web - <br /> FullStack</h2>
            <p className="aboutIntroColText">
              Desarrollo de aplicaciones y páginas web con estilos ya sea con varias páginas o Single Page Applications con un diseño responsive y componentes reutilizables, en Back Development se crear servidores y REST APIs, modelado de datos, autenticación de usuario y lógica de E-commerce.
            </p>

            <div className="aboutIntroToolsSection">
              <h3 className="aboutIntroToolsTitle">Herramientas</h3>
              <p className="aboutIntroToolsText">
                Node.js, Express, JavaScript, React, MongoDB, Git, Figma, Firebase, Postman, Bootstrap, Capcut, entre otras.
              </p>
              
              <div className="aboutIntroToolsIcons">
                <img src={JavaScriptIcon} alt="JavaScript" className="toolIcon" />
                <img src={ReactIcon} alt="React" className="toolIcon" />
                <img src={BootstrapIcon} alt="Bootstrap" className="toolIcon" />
                <img src={MongoDBIcon} alt="MongoDB" className="toolIcon" />
                <img src={PostmanIcon} alt="Postman" className="toolIcon" />
                <img src={FigmaIcon} alt="Figma" className="toolIcon" />
              </div>
            </div>
          </div>
        </div>

        {/* CASCADING ENGLISH CERTIFICATE BLOCK */}
        <div className="aboutIntroCertificate">
          <p className="aboutIntroCertificateText">
            Certificado de inglés avanzado con titulo internacional TOEIC, Test of English for International Communication, examen internacional mide el dominio del idioma ingles de personas cuyo primer idioma no es inglés.
          </p>
        </div>
      </div>
    </section>
  );
}