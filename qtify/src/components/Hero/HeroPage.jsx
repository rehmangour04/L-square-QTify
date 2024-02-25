/** @format */
import style from "./HeroSection.module.css";
import HeroImage from "../../assets/vibrating-headphone 1.png";
const HeroPage = () => {
  return (
    <>
      <section className={style.wrapper}>
        <div className={style.heroImgContainer}>
          <div className={style.banner}>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
          </div>
          <div>
            <img src={HeroImage} alt="headphone" height="212px" width="212px" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPage;
