import PropTypes from "prop-types";
import styles from "./HeroContent.module.css";

const HeroContent = ({ className = "" }) => {
  return (
    <section className={[styles.heroContent, className].join(" ")}>
      <div className={styles.trustContent}>
        <div className={styles.covidWarning}>
          <h1 className={styles.trustedBy65000}>
            Trusted By 65,000+ Merchants
          </h1>
          <div className={styles.trustIcon}>
            <img
              className={styles.topCitiesForVeganTraveller}
              alt=""
              src="/top-cities-for-vegan-travellers.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.worldsTopDestinationsDurin}>
        <div className={styles.autoLayoutHorizontal}>
          <div className={styles.autoLayoutHorizontal1}>
            <div className={styles.japan}>
              <img
                className={styles.propertiesIcon}
                alt=""
                src="/frame-1@2x.png"
              />
            </div>
            <div className={styles.recceGrahamResort}>
              <img
                className={styles.propertiesIcon1}
                alt=""
                src="/frame-2@2x.png"
              />
            </div>
            <div className={styles.newZealand}>
              <img
                className={styles.propertiesIcon2}
                alt=""
                src="/frame-3@2x.png"
              />
            </div>
            <div className={styles.firesideDinners}>
              <img
                className={styles.propertiesIcon3}
                alt=""
                src="/frame-4@2x.png"
              />
            </div>
            <div className={styles.greece}>
              <img
                className={styles.propertiesIcon4}
                alt=""
                src="/frame-5@2x.png"
              />
            </div>
            <div className={styles.oculousInnStay}>
              <img
                className={styles.propertiesIcon5}
                alt=""
                src="/frame-6@2x.png"
              />
            </div>
            <div className={styles.planAndBookOurPerfectTrip}>
              <img className={styles.frameIcon} alt="" src="/frame-7@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
};

export default HeroContent;
