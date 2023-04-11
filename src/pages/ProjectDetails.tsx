import { FunctionComponent } from "react";
import styles from "./ProjectDetails.module.css";

const ProjectDetails: FunctionComponent = () => {
  return (
    <div className={styles.projectDetails}>
      <img className={styles.backgroundIcon} alt="" src="/background11.svg" />
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
      <div className={styles.projectDetails1}>
        <div className={styles.text}>
          <div className={styles.detail}>
            <div className={styles.content}>
              <div className={styles.yourClientNameContainer}>
                <span className={styles.eastBirchwoodAveContainer1}>
                  <p className={styles.yourClientName}>Your client name</p>
                  <p className={styles.yourClientName}>Interiors</p>
                  <p className={styles.yourClientName}>interior, Home</p>
                  <p className={styles.yourClientName}>Date 23,02, 2022</p>
                  <p className={styles.aboutUs}>Link example.com</p>
                </span>
              </div>
              <div className={styles.clientCategoryTagsContainer}>
                <span className={styles.eastBirchwoodAveContainer1}>
                  <p className={styles.yourClientName}>{`Client `}</p>
                  <p className={styles.yourClientName}>{`Category `}</p>
                  <p className={styles.yourClientName}>{`Tags `}</p>
                  <p className={styles.yourClientName}>{`Date `}</p>
                  <p className={styles.aboutUs}>{`Link `}</p>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.content1}>
            <div className={styles.minimalLookBedrooms}>
              Minimal Look Bedrooms
            </div>
            <div className={styles.loremIpsumDolorContainer}>
              <p
                className={styles.aboutUs}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. `}</p>
              <p className={styles.aboutUs}>&nbsp;</p>
              <p className={styles.aboutUs}>
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras
                amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id,
                pellentesque arcu. Donec a pellentesque Cras erat enim, gravida
                non ante vitae,elequis convallis elit, in viverra felis. Donec
                ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id
                purus porttitor.
              </p>
            </div>
          </div>
        </div>
        <img className={styles.imageIcon} alt="" src="/image30@2x.png" />
        <img className={styles.zoomIcon} alt="" src="/zoom-icon.svg" />
      </div>
      <img className={styles.bannerIcon} alt="" src="/banner@2x.png" />
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
          <img className={styles.searchIcon} alt="" src="/search1.svg" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
