import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  className = "",
  group74933,
  costOfSoftware,
  queueBusterSaaSSoftwareIs,
  windowsBasedLegacyERPSoft,
  propWidth,
  propGap,
  propAlignSelf,
  propBorderRadius,
  propBackgroundColor,
  propPadding,
  propFlexWrap,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
      alignSelf: propAlignSelf,
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
      padding: propPadding,
      flexWrap: propFlexWrap,
    };
  }, [
    propWidth,
    propGap,
    propAlignSelf,
    propBorderRadius,
    propBackgroundColor,
    propPadding,
    propFlexWrap,
  ]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.costItemParent}>
        <div className={styles.costItem}>
          <img className={styles.costItemChild} alt="" src={group74933} />
          <b className={styles.costOfSoftware}>{costOfSoftware}</b>
        </div>
        <div className={styles.benefits}>
          <div className={styles.description}>
            <div className={styles.queuebusterSaasSoftware}>
              {queueBusterSaaSSoftwareIs}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.comparisonDetailsWrapper}>
        <div className={styles.comparisonDetails}>
          <div className={styles.windowsBasedLegacyErp}>
            {windowsBasedLegacyERPSoft}
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  group74933: PropTypes.string,
  costOfSoftware: PropTypes.string,
  queueBusterSaaSSoftwareIs: PropTypes.string,
  windowsBasedLegacyERPSoft: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propGap: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propPadding: PropTypes.any,
  propFlexWrap: PropTypes.any,
};

export default FrameComponent;
