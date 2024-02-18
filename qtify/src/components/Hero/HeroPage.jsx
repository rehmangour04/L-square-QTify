/** @format */
import "./heropage.css";
import HeroImage from "../../assets/hero.png";
const HeroPage = () => {
  return (
    <>
      <div className="container-image">
        <div className="hero-img">
          <img src={HeroImage} alt="hero" />
        </div>
      </div>
    </>
  );
};

export default HeroPage;
