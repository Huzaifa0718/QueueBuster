import FrameComponent1 from "../components/FrameComponent1";
import MainContent from "../components/MainContent";
import HeroContent from "../components/HeroContent";
import FrameComponent2 from "../components/FrameComponent2";
import Capabilities from "../components/Capabilities";
import Features from "../components/Features";
import Section from "../components/Section";
import Footer from "../components/Footer";
import styles from "./AndroidPOS.module.css";

const AndroidPOS = () => {
  return (
    <div className={styles.androidPos}>
      <FrameComponent1 />
      <main className={styles.mainContentParent}>
        <MainContent />
        <HeroContent />
        <FrameComponent2 />
        <Capabilities />
        <Features />
      </main>
      <Section />
      <Footer />
    </div>
  );
};

export default AndroidPOS;
