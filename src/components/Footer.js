import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.columns}>
          <div className={styles.industryTypesParent}>
            <b className={styles.industryTypes}>Industry Types</b>
            <div className={styles.itemLinkHomeV1Parent}>
              <div className={styles.itemLink}>Retail</div>
              <div className={styles.itemLink1}>Restaurants</div>
              <div className={styles.itemLink2}>Grocery</div>
              <div className={styles.itemLink3}>Electronics</div>
              <div className={styles.itemLink4}>{`Spa & Salon`}</div>
            </div>
          </div>
          <div className={styles.featuresParent}>
            <b className={styles.features}>Features</b>
            <div className={styles.itemLinkHomeV1Group}>
              <div className={styles.itemLink5}>{`Billing & Invoicing`}</div>
              <div className={styles.itemLink6}>Inventory</div>
              <div className={styles.itemLink7}>eStore</div>
              <div className={styles.itemLink8}>Khata(Digital Ledger)</div>
              <div className={styles.itemLink9}>{`CRM & Loyalty`}</div>
              <div className={styles.item}>
                <div className={styles.link}>
                  <div className={styles.divh2dE6bb78cc}>
                    <div className={styles.digitalPayments}>
                      Digital Payments
                    </div>
                  </div>
                  <div className={styles.divcmsFooterBadge}>
                    <b className={styles.cms}>CMS</b>
                  </div>
                </div>
              </div>
              <div className={styles.itemLink10}>Cloud Dashboard</div>
            </div>
          </div>
          <div className={styles.solutionsParent}>
            <b className={styles.solutions}>Solutions</b>
            <div className={styles.itemLinkHomeV1Container}>
              <div className={styles.itemLink11}>Enterprise</div>
              <div className={styles.itemLink12}>All-in-One Pos</div>
              <div className={styles.itemLink13}>D2C POS Solutions</div>
            </div>
          </div>
          <div className={styles.headings}>
            <b className={styles.resources}>Resources</b>
            <div className={styles.links}>
              <div className={styles.itemLink14}>Blog</div>
              <div className={styles.itemLink15}>Media</div>
              <div className={styles.itemLink16}>User Manual</div>
              <a className={styles.itemLink17}>Privacy Policy</a>
              <a className={styles.itemLink18}>{`Terms & Conditions`}</a>
            </div>
          </div>
          <div className={styles.headings1}>
            <b className={styles.company}>Company</b>
            <div className={styles.frameDiv}>
              <a className={styles.itemLink19}>About Us</a>
              <a className={styles.itemLink20}>Pricing</a>
              <a className={styles.itemLink21}>Careers</a>
              <a className={styles.itemLink22}>Partners</a>
              <div className={styles.itemLink23}>Contact Us</div>
            </div>
          </div>
        </div>
        <div className={styles.contactUsParent}>
          <b className={styles.contactUs}>Contact us</b>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.vectorWrapper}>
                <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
              </div>
              <div className={styles.emailParent}>
                <div className={styles.email}>Email</div>
                <div className={styles.contactqueuebusterco}>
                  contact@queuebuster.co
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              <div className={styles.contactParent}>
                <div className={styles.contact}>Contact</div>
                <div className={styles.sales917876180180Parent}>
                  <div className={styles.sales917876}>
                    Sales: +91 78 76 180 180
                  </div>
                  <div className={styles.support917861}>
                    Support: +91 78 61 044 000
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.vectorFrame}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              <div className={styles.addressParent}>
                <div className={styles.address}>Address</div>
                <div className={styles.unitNo401Container}>
                  <p className={styles.unitNo401}>
                    Unit No. 401, 4th Floor, Pegasus One Tower,
                  </p>
                  <p className={styles.plotNoA10}>
                    Plot No. A-10, Sector - 68, Noida,
                  </p>
                  <p className={styles.uttarPradesh201307}>
                    Uttar Pradesh-201307
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.frameParent3}>
          <div className={styles.daysFreeTrialParent}>
            <h3 className={styles.daysFreeTrial}>14 Days free trial</h3>
            <div className={styles.fillInYour}>
              Fill in your details and our team will get you started.
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent4}>
              <div className={styles.googlePlay1Wrapper}>
                <img
                  className={styles.googlePlay1Icon}
                  loading="lazy"
                  alt=""
                  src="/googleplay-1.svg"
                />
              </div>
              <img
                className={styles.iso27002Icon}
                loading="lazy"
                alt=""
                src="/iso-27002.svg"
              />
              <img
                className={styles.image42Icon}
                loading="lazy"
                alt=""
                src="/image-42@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.divfooterBottom}>
          <div className={styles.linkWrapper}>
            <div className={styles.link1}>
              <img className={styles.groupIcon} alt="" src="/group-2.svg" />
              <img className={styles.groupIcon1} alt="" src="/group-3.svg" />
            </div>
          </div>
          <div className={styles.copyrightQueuebuster2024Wrapper}>
            <div className={styles.copyrightQueuebuster}>
              Copyright © QueueBuster 2024
            </div>
          </div>
          <div className={styles.divfooterBottomInner}>
            <div className={styles.linkParent}>
              <div className={styles.link2}>
                <img className={styles.icon} alt="" src="/icon.svg" />
              </div>
              <div className={styles.link3}>
                <img className={styles.icon1} alt="" src="/icon-1.svg" />
              </div>
              <div className={styles.link4}>
                <img className={styles.icon2} alt="" src="/icon-2.svg" />
              </div>
              <div className={styles.link5}>
                <img className={styles.icon3} alt="" src="/icon-3.svg" />
              </div>
              <div className={styles.link6}>
                <img className={styles.icon4} alt="" src="/icon-4.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
