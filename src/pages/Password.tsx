import { FunctionComponent } from "react";
import styles from "./Password.module.css";

const Password: FunctionComponent = () => {
  return (
    <div className={styles.password}>
      <img className={styles.backgroundIcon} alt="" src="/background22.svg" />
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
      <div className={styles.password1}>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.passwordProtected}>
              <p className={styles.aboutUs}>Password Protected</p>
              <p className={styles.aboutUs}>&nbsp;</p>
            </div>
            <div className={styles.thisPageIs}>
              This page is password protected. If you are the website admin, or
              have access to this page, please type your password below.
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.name}>
              <div className={styles.enterYourPassword}>
                Enter Your Password
              </div>
              <div className={styles.line1} />
            </div>
            <div className={styles.button}>
              <div className={styles.sendNow}>
                <div className={styles.submitNow}>Submit Now</div>
                <img className={styles.vectorIcon} alt="" src="/vector18.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <img className={styles.imagesIcon} alt="" src="/images12@2x.png" />
        <div className={styles.intro}>
          <div className={styles.title1}>
            <div className={styles.restrictedPage}>Restricted Page</div>
            <div className={styles.homeRestricted}>Home / Restricted Page</div>
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

export default Password;
