import mijetaPhoto from '../../assets/MiJeta.png';

export default function LandSectionMe() {
  return (
    <div className="welcomeSection">
      {/* Background large blue text */}
      <h1 className="welcomeTextTop">BIENVENIDO</h1>
      
      {/* Middle layer thin text */}
      <div className="welcomeTextBottom">
        <span className="text-thin">SOY MARTÍN</span>
        <span className="text-thin">QUIROGA</span>
      </div>

      {/* Foreground portrait image */}
      <div className="welcomeImageContainer">
        <img src={mijetaPhoto} alt="Martín Quiroga" className="welcomeImage" />
      </div>

      {/* Thick bottom border replacing the bar/star */}
      <div className="welcomeBottomBorder"></div>
    </div>
  );
}