import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.autoLayoutHorizontalWrapper, className].join(" ")}>
      <header className={styles.autoLayoutHorizontal}>
        <div className={styles.imageContentParent}>
          <div className={styles.imageContent}>
            <div className={styles.autoLayoutVertical}>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <div className={styles.groupWrapper}>
                <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
              </div>
            </div>
            <nav className={styles.autoLayoutVertical1}>
              <nav className={styles.autoLayoutVertical2}>
                <nav className={styles.autoLayoutHorizontal1}>
                  <div className={styles.autoLayoutVertical3}>
                    <div className={styles.autoLayoutVertical4}>
                      <a className={styles.industryTypes}>Industry Types</a>
                    </div>
                  </div>
                  <div className={styles.autoLayoutVertical5}>
                    <div className={styles.autoLayoutVertical6}>
                      <a className={styles.features}>Features</a>
                    </div>
                  </div>
                  <div className={styles.autoLayoutVertical7}>
                    <div className={styles.autoLayoutVertical8}>
                      <a className={styles.pricing}>Pricing</a>
                    </div>
                  </div>
                  <div className={styles.autoLayoutVertical9}>
                    <div className={styles.autoLayoutVertical10}>
                      <a className={styles.enterprise}>Enterprise</a>
                    </div>
                  </div>
                  <div className={styles.autoLayoutVertical11}>
                    <div className={styles.autoLayoutVertical12}>
                      <a className={styles.company}>Company</a>
                    </div>
                  </div>
                </nav>
              </nav>
            </nav>
          </div>
          <div className={styles.autoLayoutVerticalWrapper}>
            <div className={styles.autoLayoutVertical13}>
              <img
                className={styles.australiaIcon}
                alt=""
                src="/australia.svg"
              />
            </div>
          </div>
          <div className={styles.spaceWrapper}>
            <a className={styles.space}>+91 78 76 180 180</a>
          </div>
        </div>
        <div className={styles.autoLayoutHorizontalContainer}>
          <div className={styles.autoLayoutHorizontal2}>
            <a className={styles.login}>Login</a>
          </div>
        </div>
        <div className={styles.autoLayoutHorizontalFrame}>
          <div className={styles.autoLayoutHorizontal3}>
            <a className={styles.getFreeDemo}>Get Free Demo</a>
          </div>
        </div>
      </header>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
