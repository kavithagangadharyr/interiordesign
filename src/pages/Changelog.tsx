import { FunctionComponent } from "react";
import styles from "./Changelog.module.css";

const Changelog: FunctionComponent = () => {
  return (
    <div className={styles.changelog}>
      <img className={styles.backgroundIcon} alt="" src="/background23.svg" />
      <div className={styles.footer}>
        <div className={styles.interno}>
          <div className={styles.interno1}>
            <div className={styles.subContent}>
              <div className={styles.logo}>
                <div className={styles.interno2}>Interno</div>
                <img className={styles.logoIcon} alt="" src="/logo.svg" />
              </div>
              <div className={styles.itIsA}>
                It is a long established fact that a reader will be distracted
                lookings.
              </div>
            </div>
            <div className={styles.icons}>
              <div className={styles.div}></div>
              <div className={styles.div}></div>
              <div className={styles.div}></div>
              <div className={styles.div3}></div>
            </div>
          </div>
          <div className={styles.pages}>
            <div className={styles.pages1}>Pages</div>
            <div className={styles.aboutUsOurContainer}>
              <p className={styles.aboutUs}>About Us</p>
              <p className={styles.aboutUs}>Our Projects</p>
              <p className={styles.aboutUs}>Our Team</p>
              <p className={styles.aboutUs}>Contact Us</p>
              <p className={styles.aboutUs}>Services</p>
            </div>
          </div>
          <div className={styles.services1}>
            <div className={styles.pages1}>Services</div>
            <div className={styles.aboutUsOurContainer}>
              <p className={styles.aboutUs}>Kitchan</p>
              <p className={styles.aboutUs}>Living Area</p>
              <p className={styles.aboutUs}>Bathroom</p>
              <p className={styles.aboutUs}>Dinning Hall</p>
              <p className={styles.aboutUs}>Bedroom</p>
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles.contact1}>Contact</div>
            <div className={styles.eastBirchwoodAveContainer}>
              <span className={styles.eastBirchwoodAveContainer1}>
                <p className={styles.aboutUs}>
                  <span
                    className={styles.eastBirchwoodAve}
                  >{`55 East Birchwood Ave. Brooklyn, New York 11201 `}</span>
                  <span className={styles.contactinternocom}>
                    contact@interno.com
                  </span>
                </p>
                <p className={styles.p}>(123) 456 - 7890</p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.copyrightInterno}>
            Copyright © Interno | Designed by Victorflow Templates - Powered by
            Webflow
          </div>
          <div className={styles.line} />
        </div>
      </div>
      <div className={styles.password}>
        <div className={styles.content}>
          <div className={styles.v1}>V.1</div>
          <div className={styles.initialInternoWebflow}>
            Initial Interno Webflow Template Release
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <img className={styles.imagesIcon} alt="" src="/images13@2x.png" />
        <div className={styles.intro}>
          <div className={styles.title}>
            <div className={styles.pages1}>Changelog</div>
            <div className={styles.homeChangelog}>Home / Changelog</div>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.interno2}>Interno</div>
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

export default Changelog;
