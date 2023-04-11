import { FunctionComponent } from "react";
import styles from "./About.module.css";

const About: FunctionComponent = () => {
  return (
    <div className={styles.about}>
      <img className={styles.backgroundIcon} alt="" src="/background5.svg" />
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
              <span className={styles.julieemailcomTxt}>
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
          <div className={styles.copyrightChild} />
        </div>
      </div>
      <div className={styles.aboutUs1}>
        <div className={styles.mailBox}>
          <div className={styles.heading}>
            <div className={styles.creativeProjectLetsContainer}>
              <span className={styles.julieemailcomTxt}>
                <p className={styles.aboutUs}>Creative project? Let's have</p>
                <p className={styles.aboutUs}>a productive talk.</p>
              </span>
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.nameEmail}>
              <div className={styles.name}>
                <div className={styles.email}>Name</div>
                <div className={styles.nameChild} />
              </div>
              <div className={styles.name}>
                <div className={styles.email}>Email</div>
                <div className={styles.nameChild} />
              </div>
            </div>
            <div className={styles.subject}>
              <div className={styles.helloIamIntrested}>
                Hello Iam Intrested in..
              </div>
              <div className={styles.subjectChild} />
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.sendNow}>
              <div className={styles.sendNow1}>Send Now</div>
              <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
            </div>
          </div>
        </div>
        <div className={styles.team}>
          <img
            className={styles.backgroundIcon1}
            alt=""
            src="/background6.svg"
          />
          <div className={styles.content}>
            <div className={styles.heading1}>
              <div className={styles.whatThePeopleContainer}>
                <p className={styles.aboutUs}>What the People Thinks</p>
                <p className={styles.aboutUs}> About Us</p>
              </div>
            </div>
            <div className={styles.images}>
              <img className={styles.icon} alt="" src="/111@2x.png" />
              <img className={styles.icon} alt="" src="/21@2x.png" />
              <div className={styles.div4}>
                <img className={styles.imageIcon} alt="" src="/image12.svg" />
                <div className={styles.details}>
                  <div className={styles.quotes}>
                    <div className={styles.julieemailcom}>
                      <span className={styles.julieemailcomTxt}>
                        <p className={styles.aboutUs}>+1 (378) 400-1234</p>
                        <p className={styles.aboutUs}>julie@email.com</p>
                      </span>
                    </div>
                  </div>
                  <div className={styles.icons1}>
                    <div className={styles.div5}></div>
                    <div className={styles.div6}></div>
                    <div className={styles.div7}></div>
                    <div className={styles.div8}></div>
                  </div>
                  <div className={styles.name2}>
                    <div className={styles.nattashaJulieDesignContainer}>
                      <span className={styles.julieemailcomTxt}>
                        <p className={styles.aboutUs}>Nattasha Julie</p>
                        <p className={styles.designAustralia}>
                          Design, Australia
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <img className={styles.icon} alt="" src="/41@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.result}>
          <img className={styles.imageIcon1} alt="" src="/image13@2x.png" />
          <div className={styles.content1}>
            <div className={styles.subContent1}>
              <div className={styles.theEndResult}>The End Result</div>
              <div className={styles.itIsAContainer}>
                <span className={styles.julieemailcomTxt}>
                  <p
                    className={styles.aboutUs}
                  >{`It is a long established fact that a reader will be distracted by the of readable content of a page `}</p>
                  <p
                    className={styles.aboutUs}
                  >{`when lookings at its layouts the points of using `}</p>
                  <p className={styles.aboutUs}>
                    that it has a more-or-less normal.
                  </p>
                </span>
              </div>
            </div>
            <div className={styles.button1}>
              <div className={styles.ourPortfolio}>
                <div className={styles.sendNow1}>Our Portfolio</div>
                <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.whatWeDo}>
          <div className={styles.content2}>
            <div className={styles.subContent2}>
              <div className={styles.whatWeDo1}>What We Do</div>
              <div className={styles.itIsAContainer2}>
                <span className={styles.julieemailcomTxt}>
                  <p
                    className={styles.aboutUs}
                  >{`It is a long established fact that a reader will be distracted by the of readable content of a page `}</p>
                  <p
                    className={styles.aboutUs}
                  >{`when lookings at its layouts the points of using `}</p>
                  <p className={styles.aboutUs}>
                    that it has a more-or-less normal.
                  </p>
                </span>
              </div>
            </div>
            <div className={styles.button2}>
              <div className={styles.ourConcept}>
                <div className={styles.sendNow1}>Our Concept</div>
                <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
              </div>
            </div>
          </div>
          <img className={styles.imageIcon1} alt="" src="/image14@2x.png" />
        </div>
        <div className={styles.quotes1}>
          <div className={styles.content3}>
            <i className={styles.i}>“</i>
            <div className={styles.comment}>
              <i className={styles.iLikeAn}>
                I like an interior that defies labeling. I don't really want
                someone to walk into a room and know that I did it
              </i>
              <div className={styles.bunnyWilliams}>-BUNNY WILLIAMS</div>
            </div>
          </div>
          <img className={styles.patternIcon} alt="" src="/pattern.svg" />
        </div>
      </div>
      <div className={styles.banner}>
        <img className={styles.imagesIcon} alt="" src="/images11@2x.png" />
        <div className={styles.aboutUs3}>
          <div className={styles.intro}>
            <div className={styles.pages1}>About Us</div>
            <div className={styles.homeAbout}>Home / About Us</div>
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

export default About;
