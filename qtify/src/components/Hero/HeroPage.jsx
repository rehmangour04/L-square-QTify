/** @format */
import style from "./HeroSection.module.css";
import HeroImage from "../../assets/vibrating-headphone 1.png";
const HeroPage = () => {
  return (
    <>
      <section className={style.heroSection}>
        <div className={style.heroImgContainer}>
          <div className={style.heroText}>
            <p>100 Thousand Songs, ad-free</p>
            <p>Over thousands podcast episodes</p>
          </div>
          <img src={HeroImage} alt="headphone" className={style.headphoneImg} />
        </div>
      </section>
    </>
  );
};

export default HeroPage;
