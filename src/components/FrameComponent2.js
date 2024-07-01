import AutoLayoutVertical from "./AutoLayoutVertical";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.chartContentWrapper, className].join(" ")}>
      <div className={styles.chartContent}>
        <div className={styles.legend}>
          <div className={styles.legendChild} />
          <b className={styles.legendLabel}>Online</b>
        </div>
        <div className={styles.chartContainer}>
          <div className={styles.bg} />
          <div className={styles.orderInfo}>
            <b className={styles.orders}>Orders</b>
            <div className={styles.usersInfo}>
              <div className={styles.totalNumberOf}>Total number of users:</div>
              <b className={styles.userCount}>538</b>
            </div>
          </div>
          <div className={styles.chartHorizontalStackedBar}>
            <div className={styles.bar2} />
            <div className={styles.bar1} />
            <div className={styles.bar3} />
            <div className={styles.bar4} />
          </div>
          <div className={styles.legendContainer}>
            <div className={styles.legendItems}>
              <div className={styles.legendIndexWrapper}>
                <b className={styles.legendIndex}>280</b>
              </div>
              <b className={styles.emptyLegend}>160</b>
              <b className={styles.emptyLegend1}>98</b>
            </div>
            <div className={styles.legend1}>
              <div className={styles.emptyLegendContentWrapper}>
                <div className={styles.emptyLegendContent} />
              </div>
              <b className={styles.legendLabel1}>Marketplace</b>
            </div>
          </div>
        </div>
        <div className={styles.legend2}>
          <div className={styles.legendItem} />
          <b className={styles.legendLabel2}>Physical Store</b>
        </div>
        <div className={styles.cardsChartsBarCompariso}>
          <div className={styles.comparisonContainer}>
            <div className={styles.autoLayoutVertical}>
              <div className={styles.parent}>
                <b className={styles.b}>{`3000 `}</b>
                <div className={styles.dividerDashedWrapper}>
                  <div className={styles.dividerDashed}>
                    <div className={styles.baseline} />
                  </div>
                </div>
              </div>
              <div className={styles.group}>
                <b className={styles.b1}>{`2000 `}</b>
                <div className={styles.dividerDashedContainer}>
                  <div className={styles.dividerDashed1}>
                    <div className={styles.baseline1} />
                  </div>
                </div>
              </div>
              <div className={styles.container}>
                <b className={styles.b2}>1000</b>
                <div className={styles.dividerDashedFrame}>
                  <div className={styles.dividerDashed2}>
                    <div className={styles.baseline2} />
                  </div>
                </div>
              </div>
              <div className={styles.lineDiv}>
                <b className={styles.b3}>0</b>
                <div className={styles.frameDiv}>
                  <div className={styles.dividerDashed3}>
                    <div className={styles.baseline3} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.chartGroupedBarWrapper}>
              <div className={styles.chartGroupedBar}>
                <div className={styles.barGroup1}>
                  <div className={styles.bar11} />
                  <div className={styles.bar21} />
                  <div className={styles.bar31} />
                </div>
                <div className={styles.barGroup2}>
                  <div className={styles.bar12} />
                  <div className={styles.bar22} />
                  <div className={styles.bar32} />
                </div>
                <div className={styles.barGroup3}>
                  <div className={styles.bar13} />
                  <div className={styles.bar23} />
                  <div className={styles.bar33} />
                </div>
                <div className={styles.barGroup4}>
                  <div className={styles.bar14} />
                  <div className={styles.bar24} />
                  <div className={styles.bar34} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.augParent}>
            <b className={styles.aug}>AUG</b>
            <div className={styles.julyContainer}>
              <b className={styles.jul}>JUL</b>
              <div className={styles.legendsWrapper}>
                <div className={styles.legends}>
                  <div className={styles.legend3}>
                    <div className={styles.legendContentWrapper}>
                      <div className={styles.legendContent} />
                    </div>
                    <b className={styles.legendLabel3}>Online Orders</b>
                  </div>
                  <div className={styles.legend4}>
                    <div className={styles.legendInner}>
                      <div className={styles.frameChild} />
                    </div>
                    <b className={styles.legendLabel4}>In STORE ORDers</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.collaborationContentParent}>
          <div className={styles.collaborationContent}>
            <h1 className={styles.bringEveryoneOnContainer}>
              <span className={styles.bringEveryoneOnContainer1}>
                <p className={styles.bringEveryone}>Bring everyone</p>
                <p className={styles.onBoardAdvance}>
                  on board. Advance collaboration.
                </p>
              </span>
            </h1>
            <div className={styles.frameParent}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/rectangle-15191.svg"
                />
                <div className={styles.orderTypes}>
                  <div className={styles.orderTypesDescription}>
                    <h3 className={styles.yourCustomersCanContainer}>
                      <span>{`Your customers can `}</span>
                      <b>scan the QR code</b>
                      <span>{`of your nearest QB `}</span>
                    </h3>
                    <h3 className={styles.estore}>{`eStore `}</h3>
                  </div>
                </div>
              </div>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/rectangle-15191.svg"
                />
                <div className={styles.frameWrapper}>
                  <div className={styles.allowYourCustomersToChooseParent}>
                    <h3 className={styles.allowYourCustomersContainer}>
                      <span>{`Allow your customers to choose from `}</span>
                      <b>{`multiple payments & `}</b>
                    </h3>
                    <h3 className={styles.deliveryOptionsTo}>
                      delivery options to place your order.
                    </h3>
                  </div>
                </div>
              </div>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.rectangleIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-15191.svg"
                />
                <div className={styles.frameContainer}>
                  <div className={styles.customersCanPickupAtTheStParent}>
                    <h3 className={styles.customersCanPickupContainer}>
                      <span>{`Customers can `}</span>
                      <b>pickup at the store</b>
                      <span>{` or get products `}</span>
                      <b>{`delivered `}</b>
                    </h3>
                    <h3 className={styles.anywhere}>anywhere.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sales}>
            <div className={styles.cardsstatssharedGroup}>
              <AutoLayoutVertical
                totalOrders="Total Orders"
                placeholder="6,453"
              />
              <AutoLayoutVertical
                totalOrders="Online Sales"
                placeholder="3,728"
                propMarginLeft="-0.5px"
              />
              <AutoLayoutVertical
                totalOrders="Offline Sales"
                placeholder="1,442"
                propMarginLeft="-0.5px"
              />
            </div>
          </div>
        </div>
        <h2 className={styles.talkToUs}>{`Talk to us now ->`}</h2>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
