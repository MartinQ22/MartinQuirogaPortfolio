import landingPhoto from '../../assets/landing_photo.png';
import StarIcon from '../Icons/StarIcon';

export default function LandSectionMe() {
  return (
    <div className="welcomeSection">
      <div className="welcomeContent">
        <h1 className="welcomeText">
          <div className="welcomeTextContainer">
            <span className="text-black">BIENVENIDO</span>
            <span className="text-black">SOY</span>
            <span className="text-orange">MARTÍN</span>
            <span className="text-orange">QUIROGA</span>
          </div>
        </h1>
      </div>
      
      <div className="welcomeImageContainer">
        <img src={landingPhoto} alt="Martín Quiroga" className="welcomeImage" />
      </div>

      <div className="welcomeBarAndIcon">
        <div className="welcomeBar"></div>
        <div className="starIcon">
          <StarIcon />
        </div>
      </div>
    </div>
  );
}