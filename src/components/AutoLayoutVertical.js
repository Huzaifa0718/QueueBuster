import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./AutoLayoutVertical.module.css";

const AutoLayoutVertical = ({
  className = "",
  totalOrders,
  placeholder,
  propMarginLeft,
}) => {
  const autoLayoutVerticalStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div
      className={[styles.autoLayoutVertical, className].join(" ")}
      style={autoLayoutVerticalStyle}
    >
      <div className={styles.totalOrders}>{totalOrders}</div>
      <div className={styles.value}>
        <b className={styles.placeholder}>{placeholder}</b>
        <div className={styles.pillsSmall}>
          <img className={styles.arrowUpIcon} alt="" src="/arrowup.svg" />
          <div className={styles.div}>10%</div>
        </div>
      </div>
    </div>
  );
};

AutoLayoutVertical.propTypes = {
  className: PropTypes.string,
  totalOrders: PropTypes.string,
  placeholder: PropTypes.string,

  /** Style props */
  propMarginLeft: PropTypes.any,
};

export default AutoLayoutVertical;
