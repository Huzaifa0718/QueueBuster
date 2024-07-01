import PropTypes from "prop-types";
import styles from "./MainContent.module.css";

const MainContent = ({ className = "" }) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <div className={styles.innerContent}>
        <div className={styles.softwareContentWrapper}>
          <div className={styles.softwareContent}>
            <div className={styles.softwareInfo}>
              <h1 className={styles.retailPosBillingContainer}>
                <p className={styles.posBillingSoftware}>
                  POS Billing Software 
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.p}>{` `}</p>
              </h1>
              <h1 className={styles.forAnyCloudContainer}>
                <span>{`With the `}</span>
                <span className={styles.powerOfAndroid}>Power of Android</span>
              </h1>
            </div>
            <div className={styles.transformYourAndroidContainer}>
              <p
                className={styles.transformYourAndroid}
              >{`Transform your Android mobile/tablet into a powerful POS billing machine with QueueBuster. Enjoy efficient billing, inventory management, and payment processing, all in one user-friendly app. `}</p>
            </div>
            <div className={styles.mainContentParent}>
              <div className={styles.mainContent1}>
                <img
                  className={styles.mainContentChild}
                  alt=""
                  src="/rectangle-6335.svg"
                />
                <b className={styles.tryItFree}>Try It Free</b>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.tryButtonContentWrapper}>
                  <div className={styles.tryButtonContent}>
                    <img
                      className={styles.tryButtonContentChild}
                      alt=""
                      src="/rectangle-6335-1.svg"
                    />
                    <b className={styles.tryItFree1}>Contact Sales</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.innerContentInner}>
          <div className={styles.assad1Parent}>
            <img className={styles.assad1Icon} alt="" src="/assad-1@2x.png" />
            <img className={styles.dfsdf1Icon} alt="" src="/dfsdf-1@2x.png" />
            <img
              className={styles.dfds1Icon}
              loading="lazy"
              alt=""
              src="/dfds-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
