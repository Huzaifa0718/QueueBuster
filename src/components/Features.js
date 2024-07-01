import Headings from "./Headings";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./Features.module.css";

const Features = ({ className = "" }) => {
  return (
    <section className={[styles.features, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.howDoesItWorkParent}>
            <h1 className={styles.howDoesIt}>Windows VS Android</h1>
            <div className={styles.image}>
              <img
                className={styles.featuresHlIcon}
                loading="lazy"
                alt=""
                src="/features-hl.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.popularHotels}>
          <div className={styles.content}>
            <div className={styles.featureParent}>
              <b className={styles.feature}>Feature</b>
              <div className={styles.title}>
                <b className={styles.queuebuster}>QueueBuster</b>
              </div>
              <b className={styles.windowsBasedSoftware}>
                Windows-Based Software
              </b>
            </div>
          </div>
          <div className={styles.costComparison}>
            <Headings
              group74933="/group-74933.svg"
              costOfHardware="Cost  of hardware"
              hardwareRequiredToRunQueu="Hardware required to run QueueBuster is highly cost effective. Literally a smartphone is enough to run the entire store with ease."
              hardwareRequiredToRunSuch="Hardware required to run such software is costly. A laptop/desktop is required along with a lot of other peripheral devices."
            />
            <div className={styles.headings}>
              <FrameComponent
                group74933="/group-74933-1.svg"
                costOfSoftware="Cost  of software"
                queueBusterSaaSSoftwareIs="QueueBuster SaaS software is extremely feature rich yet very affordable. You can even start/stop the SaaS subscription anytime you want."
                windowsBasedLegacyERPSoft="Windows-based legacy ERP software are expensive and comes with a lot of overhead expenses and AMCs."
              />
            </div>
            <FrameComponent
              group74933="/fi-8697893.svg"
              costOfSoftware="Retail Shelf Space"
              queueBusterSaaSSoftwareIs={`Android-based devices are highly space efficient. From smartphones, credit card machines & handheld devices to full size terminals, Android devices are truly space efficient.`}
              windowsBasedLegacyERPSoft="Bulky devices take a lot of shelf space. In some cases, more than 20% shelf space is consumed just to put a windows-based machine. Expensive real estate is wasted."
              propWidth="unset"
              propGap="64px"
              propAlignSelf="stretch"
              propBorderRadius="8px"
              propBackgroundColor="#fff3f3"
              propPadding="20px 35px 20px 60px"
              propFlexWrap="unset"
            />
            <FrameComponent
              group74933="/fi-3798317.svg"
              costOfSoftware="Ease of Use"
              queueBusterSaaSSoftwareIs={`Very less training required. Extremely easy-to-use & intuitive software reduces the training time drastically.`}
              windowsBasedLegacyERPSoft="Most windows-based software are complicated and requires a lot of training."
              propWidth="unset"
              propGap="194px"
              propAlignSelf="stretch"
              propBorderRadius="8px"
              propBackgroundColor="#edfef9"
              propPadding="20px 157px 20px 60px"
              propFlexWrap="wrap"
            />
            <Headings
              group74933="/fi-4465713.svg"
              costOfHardware="e-Waste"
              hardwareRequiredToRunQueu="Over 80% reduction in e-Waste because of less electronics being deployed."
              hardwareRequiredToRunSuch="Laptop/Desktop devices along with multiple peripheral accessories generate a lot of e-Waste."
              propBackgroundColor="#fcf5ff"
              propAlignSelf="stretch"
              propWidth="unset"
            />
            <Headings
              group74933="/group-74904.svg"
              costOfHardware="3rd Party Integrations"
              hardwareRequiredToRunQueu="Over 80% reduction in e-Waste because of less electronics being deployed."
              hardwareRequiredToRunSuch="Laptop/Desktop devices along with multiple peripheral accessories generate a lot of e-Waste."
              propBackgroundColor="#edfbfe"
              propAlignSelf="stretch"
              propWidth="unset"
            />
            <Headings
              group74933="/fi-5947083.svg"
              costOfHardware="Omnichannel Software"
              hardwareRequiredToRunQueu="Over 80% reduction in e-Waste because of less electronics being deployed."
              hardwareRequiredToRunSuch="Laptop/Desktop devices along with multiple peripheral accessories generate a lot of e-Waste."
              propBackgroundColor="#fff6e4"
              propAlignSelf="stretch"
              propWidth="unset"
            />
            <Headings
              group74933="/fi-694642.svg"
              costOfHardware="Number of Users"
              hardwareRequiredToRunQueu="Over 80% reduction in e-Waste because of less electronics being deployed."
              hardwareRequiredToRunSuch="Laptop/Desktop devices along with multiple peripheral accessories generate a lot of e-Waste."
              propBackgroundColor="#edfef9"
              propAlignSelf="stretch"
              propWidth="unset"
            />
            <Headings
              group74933="/frame-1171276122.svg"
              costOfHardware="Cloud Storage"
              hardwareRequiredToRunQueu="Laptop/Desktop devices along with multiple peripheral accessories generate a lot of e-Waste."
              hardwareRequiredToRunSuch="Over 80% reduction in e-Waste because of less electronics being deployed."
              propBackgroundColor="#fff3f3"
              propAlignSelf="stretch"
              propWidth="unset"
            />
            <Headings
              group74933="/fi-10809774.svg"
              costOfHardware="Cost of Trials"
              hardwareRequiredToRunQueu="Laptop/Desktop devices along with multiple peripheral accessories generate a lot of e-Waste."
              hardwareRequiredToRunSuch="Over 80% reduction in e-Waste because of less electronics being deployed."
              propBackgroundColor="#fcf5ff"
              propAlignSelf="stretch"
              propWidth="unset"
            />
            <Headings
              group74933="/fi-2652170.svg"
              costOfHardware="24x7 Tech Support"
              hardwareRequiredToRunQueu="Laptop/Desktop devices along with multiple peripheral accessories generate a lot of e-Waste."
              hardwareRequiredToRunSuch="Over 80% reduction in e-Waste because of less electronics being deployed."
              propBackgroundColor="#edfbfe"
              propAlignSelf="unset"
              propWidth="1579px"
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.container1}>
              <div className={styles.content1}>
                <div className={styles.headingAndSupportingText}>
                  <h1 className={styles.heading}>Frequently asked questions</h1>
                  <div className={styles.supportingText}>
                    Everything you need to know about the product and billing.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.faqs}>
              <div className={styles.featuresContent}>
                <div className={styles.faqItem}>
                  <div className={styles.content2}>
                    <div className={styles.textAndSupportingText}>
                      <div className={styles.title1}>
                        Is there a free trial available?
                      </div>
                      <div className={styles.supportingText1}>
                        Yes, you can try us for free for 30 days. If you want,
                        we’ll provide you with a free, personalized 30-minute
                        onboarding call to get you up and running as soon as
                        possible.
                      </div>
                    </div>
                    <div className={styles.iconWrap}>
                      <img
                        className={styles.minusCircleIcon}
                        loading="lazy"
                        alt=""
                        src="/minuscircle.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.items}>
                  <div className={styles.divider} />
                  <div className={styles.content3}>
                    <div className={styles.questions}>
                      Can I change my plan later?
                    </div>
                    <div className={styles.icons}>
                      <img
                        className={styles.plusCircleIcon}
                        alt=""
                        src="/pluscircle.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.items1}>
                  <div className={styles.divider1} />
                  <div className={styles.textParent}>
                    <div className={styles.text}>
                      What is your cancellation policy?
                    </div>
                    <div className={styles.plusCircleWrapper}>
                      <img
                        className={styles.plusCircleIcon1}
                        alt=""
                        src="/pluscircle.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.items2}>
                  <div className={styles.divider2} />
                  <div className={styles.textGroup}>
                    <div className={styles.text1}>
                      Can other info be added to an invoice?
                    </div>
                    <div className={styles.plusCircleContainer}>
                      <img
                        className={styles.plusCircleIcon2}
                        alt=""
                        src="/pluscircle.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.items3}>
                  <div className={styles.divider3} />
                  <div className={styles.travelArticles}>
                    <div className={styles.text2}>
                      Can I change my plan later?
                    </div>
                    <div className={styles.plusCircleFrame}>
                      <img
                        className={styles.plusCircleIcon3}
                        alt=""
                        src="/pluscircle.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.items4}>
                  <div className={styles.divider4} />
                  <div className={styles.textContainer}>
                    <div className={styles.text3}>
                      Can I change my plan later?
                    </div>
                    <div className={styles.frameDiv}>
                      <img
                        className={styles.plusCircleIcon4}
                        alt=""
                        src="/pluscircle.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
