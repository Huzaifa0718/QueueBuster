import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Headings.module.css";

const Headings = ({
  className = "",
  group74933,
  costOfHardware,
  hardwareRequiredToRunQueu,
  hardwareRequiredToRunSuch,
  propBackgroundColor,
  propAlignSelf,
  propWidth,
}) => {
  const headingsStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propBackgroundColor, propAlignSelf, propWidth]);

  return (
    <div
      className={[styles.headings, className].join(" ")}
      style={headingsStyle}
    >
      <div className={styles.columns}>
        <img
          className={styles.columnsChild}
          loading="lazy"
          alt=""
          src={group74933}
        />
        <b className={styles.costOfHardware}>{costOfHardware}</b>
      </div>
      <div className={styles.drawbacks}>
        <div className={styles.details}>
          <div className={styles.hardwareRequiredTo}>
            {hardwareRequiredToRunQueu}
          </div>
        </div>
      </div>
      <div className={styles.legacyDrawbacks}>
        <div className={styles.details1}>
          <div className={styles.hardwareRequiredTo1}>
            {hardwareRequiredToRunSuch}
          </div>
        </div>
      </div>
    </div>
  );
};

Headings.propTypes = {
  className: PropTypes.string,
  group74933: PropTypes.string,
  costOfHardware: PropTypes.string,
  hardwareRequiredToRunQueu: PropTypes.string,
  hardwareRequiredToRunSuch: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Headings;
