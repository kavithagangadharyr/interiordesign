import { FunctionComponent } from "react";
import styles from "./Component.module.css";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <img className={styles.backgroundIcon} alt="" src="/background19.svg" />
      <div className={styles.banner}>
        <div className={styles.banner1}>
          <div className={styles.contentr}>
            <div className={styles.subContent}>
              <div className={styles.div1}>404</div>
              <div className={styles.weAreSorry}>
                We are sorry, but the page you requested was not found
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.sendNow}>
                <div className={styles.backToHome}>Back To Home</div>
                <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
              </div>
            </div>
          </div>
          <img className={styles.imagesIcon} alt="" src="/images9@2x.png" />
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.interno}>Interno</div>
          <img className={styles.logoIcon} alt="" src="/logo1.svg" />
        </div>
        <div className={styles.menubar}>
          <div className={styles.menu}>
            <div className={styles.homePagesServices}>
              Home Pages Services Project Blog Contact
            </div>
          </div>
          <img className={styles.searchIcon} alt="" src="/search.svg" />
        </div>
      </div>
    </div>
  );
};

export default Component;
