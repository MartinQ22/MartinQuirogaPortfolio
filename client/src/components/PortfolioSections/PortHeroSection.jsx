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

        {/* --- PROJECTS SECTION --- */}
        <div className="portProjectsSection">
          <div className="portProjectsContainer">
            
            {/* CARD 1 - VARIANT A */}
            <div className="projectCard variantA">
              <div className="projectPreviewContainer">
                
                <img 
                  src="https://res.cloudinary.com/dfwb8a17z/image/upload/v1785132578/SCript_2_wdpnc5.png" 
                  alt="SCRIPTSTORE preview" 
                  className="projectPreviewImg" 
                />
              </div>
              <div className="projectInfoContainer">
                <h2 className="projectTitle">SCRIPTSTORE</h2>
                <p className="projectDescription">
                  es una plataforma e-commerce dinámica y responsiva orientada a ofrecer una experiencia de compra fluida e intuitiva. El proyecto integra un catálogo de productos en tiempo real, sincronización con base de datos y un sistema de gestión de compras interactivo.
                </p>
                <a 
                  href="https://script-three-indol.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="projectBtn"
                >
                  IR AL SITIO
                </a>
              </div>
            </div>

            {/* CARD 2 - VARIANT B */}
            <div className="projectCard variantB">
              <div className="projectInfoContainer">
                <h2 className="projectTitle">WINSTON!</h2>
                <p className="projectDescription">
                  este es unsitio de eCommerce desarrollado con React y Vite, que permite a los usuarios navegar entre productos, agregarlos al carrito, crear órdenes de pedido y simular compras.
                </p>
                
                <a 
                  href="https://winsto-vite-store.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="projectBtn"
                >
                  IR AL SITIO
                </a>
              </div>
              <div className="projectPreviewContainer">
                
                <img 
                  src="https://res.cloudinary.com/dfwb8a17z/image/upload/v1785130166/WINSTON_PAGE_THUMBNAIL_zhh14l.png" 
                  alt="Winston store preview" 
                  className="projectPreviewImg" 
                />
              </div>
            </div>

            {/* CARD 3 - VARIANT A  */}
            <div className="projectCard variantA">
              <div className="projectPreviewContainer">
                <img 
                  src="https://res.cloudinary.com/dfwb8a17z/image/upload/v1785132584/Bar_Thumbnail_czzg21.png" 
                  alt="El Bar del Fondo preview" 
                  className="projectPreviewImg" 
                />
              </div>
              <div className="projectInfoContainer">
                <h2 className="projectTitle">EL BAR DEL FONDO</h2>
                <p className="projectDescription">
                 es una aplicación web robusta construida con Node.js y Express, diseñada para gestionar productos, incluyendo un catálogo de productos, carrito de compras y un sistema de autenticación completo.
                </p>
                
                <a 
                  href="https://el-bar-del-fondo-production.up.railway.app/login" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="projectBtn"
                >
                  IR AL SITIO
                </a>
              </div>
            </div>

            {/* CARD 4 - VARIANT B  */}
            <div className="projectCard variantB">
              <div className="projectInfoContainer">
                <h2 className="projectTitle">MI HOTEL WEB</h2>
                <p className="projectDescription">
                  es una aplicación web interactiva orientada al sector hotelero y de hospedajes. Permite a los usuarios explorar habitaciones, verificar disponibilidad, consultar tarifas y realizar reservas de forma rápida e intuitiva, ofreciendo a la vez una gestión eficiente de los datos alojados.
                </p>
                
                <a 
                  href="https://mi-hotel-web.vercel.app/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="projectBtn"
                >
                  IR AL SITIO
                </a>
              </div>
              <div className="projectPreviewContainer">
                
                <img 
                  src="https://res.cloudinary.com/dfwb8a17z/image/upload/v1785132582/Mi_hotel_Thumbnail_bktuc4.png" 
                  alt="MI HOTEL WEB preview" 
                  className="projectPreviewImg" 
                />
              </div>
            </div>

          </div>
        </div>
      </div>  
    );
}