import PropTypes from "prop-types";
import styles from "./Capabilities.module.css";

const Capabilities = ({ className = "" }) => {
  return (
    <section className={[styles.capabilities, className].join(" ")}>
      <div className={styles.whatWeDoBestParent}>
        <b className={styles.whatWeDo}>Benefits of Using Android POS system</b>
        <div className={styles.content}>
          <div className={styles.compatability}>
            <div className={styles.versatileCompatibilityQbPosParent}>
              <div className={styles.versatileCompatibilityQbPosContainer}>
                <p className={styles.versatileCompatibility}>
                  <b>Versatile Compatibility</b>
                </p>
                <p className={styles.qbPosWorks}>
                  QB POS works seamlessly with any Android device, providing
                  flexibility for different business setups.
                </p>
              </div>
              <div className={styles.intuitiveInterfaceQueuebuste}>
                <p className={styles.intuitiveInterface}>
                  <b>Intuitive Interface</b>
                </p>
                <p className={styles.queuebusterReducesTraining}>
                  QueueBuster reduces training time for staff and ensures smooth
                  transactions.
                </p>
              </div>
            </div>
            <div className={styles.affordabilityQueuebusterCanParent}>
              <div className={styles.affordabilityQueuebusterCanContainer}>
                <p className={styles.affordability}>
                  <b>Affordability</b>
                </p>
                <p className={styles.queuebusterCanSave}>
                  QueueBuster can save costs as Android devices are generally
                  more budget-friendly than traditional POS terminals.
                </p>
              </div>
              <div className={styles.mobilityWithQueuebusterBusContainer}>
                <p className={styles.mobility}>
                  <b>Mobility</b>
                </p>
                <p className={styles.withQueuebusterBusinesses}>
                  With QueueBuster, businesses can enjoy the mobility of Android
                  devices, enabling staff to process transactions from anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.handParent}>
            <div className={styles.hand} />
            <div className={styles.phone} />
          </div>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-15840.svg"
          />
          <div className={styles.icons} />
          <div className={styles.icons1} />
          <div className={styles.icons2} />
          <div className={styles.icons3} />
        </div>
        <div className={styles.button}>
          <img
            className={styles.buttonChild}
            alt=""
            src="/rectangle-6335-2.svg"
          />
          <b className={styles.getInTouch}>Get In Touch</b>
        </div>
        <img
          className={styles.pd05162UsenRegisterBranMIcon}
          loading="lazy"
          alt=""
          src="/pd05162--usen-register-bran-mount-kitpng@2x.png"
        />
      </div>
    </section>
  );
};

Capabilities.propTypes = {
  className: PropTypes.string,
};

export default Capabilities;
