import { FunctionComponent } from "react";
import styles from "./ContactUs.module.css";

const ContactUs: FunctionComponent = () => {
  return (
    <div className={styles.contactUs}>
      <img className={styles.backgroundIcon} alt="" src="/background17.svg" />
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
      <img className={styles.mapIcon} alt="" src="/map@2x.png" />
      <div className={styles.contactForm}>
        <div className={styles.weLoveMeetingContainer}>
          <p className={styles.aboutUs}>
            We love meeting new people and helping them.
          </p>
          <p className={styles.aboutUs}>&nbsp;</p>
        </div>
        <div className={styles.contactForm1}>
          <div className={styles.details}>
            <div className={styles.content}>
              <div className={styles.subContent1}>
                <div className={styles.mail}>
                  <div className={styles.infoyourdomaincom}>
                    info@yourdomain.com
                  </div>
                  <img className={styles.icon} alt="" src="/icon7.svg" />
                </div>
                <div className={styles.phone}>
                  <div className={styles.infoyourdomaincom}>
                    +1 (378) 400-1234
                  </div>
                  <img className={styles.icon} alt="" src="/icon8.svg" />
                </div>
                <div className={styles.address}>
                  <div className={styles.infoyourdomaincom}>
                    www.yourdomain.com
                  </div>
                  <img className={styles.icon} alt="" src="/icon9.svg" />
                </div>
              </div>
              <div className={styles.socialIcon}>
                <div className={styles.div5}></div>
                <div className={styles.div6}></div>
                <div className={styles.div7}></div>
                <div className={styles.div8}></div>
              </div>
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.content1}>
              <div className={styles.div9}>
                <div className={styles.name}>
                  <div className={styles.email}>Name</div>
                  <div className={styles.line1} />
                </div>
                <div className={styles.name}>
                  <div className={styles.email}>Email</div>
                  <div className={styles.line1} />
                </div>
              </div>
              <div className={styles.div9}>
                <div className={styles.name}>
                  <div className={styles.email}>Subject</div>
                  <div className={styles.line1} />
                </div>
                <div className={styles.name}>
                  <div className={styles.email}>Phone</div>
                  <div className={styles.line1} />
                </div>
              </div>
              <div className={styles.message}>
                <div className={styles.helloIamIntrested}>
                  Hello Iam Intrested in..
                </div>
                <div className={styles.line5} />
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.sendNow}>
                <div className={styles.sendNow1}>Send Now</div>
                <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <img className={styles.imagesIcon} alt="" src="/images7@2x.png" />
        <div className={styles.intro}>
          <div className={styles.title}>
            <div className={styles.pages1}>Contact Us</div>
            <div className={styles.homeContact}>Home / Contact</div>
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

export default ContactUs;
