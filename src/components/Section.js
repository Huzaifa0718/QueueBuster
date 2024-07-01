import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ className = "" }) => {
  return (
    <div className={[styles.section, className].join(" ")}>
      <h1 className={styles.startUsingThe}>
        Start using the POS platform of future
      </h1>
      <div className={styles.buttons}>
        <img
          className={styles.cdcf119cd88212c064e7dBgGridIcon}
          alt=""
          src="/630cdcf119cd88212c064e7d-bggridctav4techkittemplatesvg.svg"
        />
        <div className={styles.property1default}>
          <b className={styles.getFreeDemo}>Get Free Demo</b>
        </div>
        <div className={styles.property1default1}>
          <b className={styles.contactSales}>Contact Sales</b>
        </div>
      </div>
      <img
        className={styles.cdcf119cd88212c064e7dBgGridIcon1}
        alt=""
        src="/630cdcf119cd88212c064e7d-bggridctav4techkittemplatesvg.svg"
      />
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
