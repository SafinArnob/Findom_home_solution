import React from 'react';
import styles from '../styles/AboutUs.module.css'; // Import the CSS Module
import Footer from './Footer'; // Import the Footer component
import Navbar from "../components/Navbar";  // Import the Navbar component

const AboutUss = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <Navbar /> {/* Add Navbar at the top */}
      {/* Project Details Section */}
      <section className={styles.projectDetails}>
        <h1 className={styles.sectionTitle}>About Our Project</h1>
        <p className={styles.projectDescription}>
          Welcome to our platform! We are dedicated to providing seamless solutions for house rentals, house shifting, labour services, and maintenance. Our goal is to make your life easier by connecting you with reliable and skilled professionals. Whether you're finding a new home, moving to a new home , need help with household tasks, or require maintenance services, we've got you covered.
        </p>
        <p className={styles.projectDescription}>
          Our platform is designed to simplify the process of finding easiest rentals and hiring trusted service providers. With a focus on quality and customer satisfaction, we ensure that every service offered meets the highest standards.
        </p>
      </section>

      {/* Pictures Section */}
      <section className={styles.picturesSection}>
        <h2 className={styles.sectionTitle}>Our Work in Action</h2>
        <div className={styles.imageGrid}>
          <img
            src="https://houseaffection.com/wp-content/uploads/rent-for-home-750x499.jpg"
            alt="House Shifting"
            className={styles.image}
          />
          <img
            src="https://orisonmovers.com/wp-content/uploads/2023/11/The-Ultimate-House-Shifting-Tips-amp-Checklist.jpg"
            alt="Labour Services"
            className={styles.image}
          />
          <img
            src="https://th.bing.com/th/id/OIP.yJfULUICH_xM-2OrIv4a4AHaE8?rs=1&pid=ImgDetMain"
            alt="Maintenance Work"
            className={styles.image}
          />
        </div>
      </section>

      {/* Team Members Section */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          {/* Team Member 1 */}
          <div className={styles.teamMember}>
            <img
              src="https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/474684883_1278546856735992_4971866821940545714_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG3UhHnz1TLyvVws9Qu0QtTvffAFDZEwxG998AUNkTDEaJ_9JNtyMXVFaez-B73Yv1TvXaWIYRNDi9vhxxrDgXP&_nc_ohc=4rdoQpWE0XAQ7kNvgFkjJfi&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=AISTYS9pVV8LNd0Rg4Iz3Fp&oh=00_AYCo4-UJyAK-D-Adxcj_rE-Vm_xXNSxetF_8Xsyp2JBE0w&oe=67ADC609"
              alt="Team Member 1"
              className={styles.teamMemberImage}
            />
            <h3 className={styles.teamMemberName}>Safin Arnob</h3>
            <p className={styles.teamMemberRole}>Co-Founder & CEO</p>
            <p className={styles.teamMemberBio}>
              Safin is a visionary leader with great knowledge about technoloy. He ia a student,studying cse in AUST. He is passionate about creating innovative solutions to everyday problems.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className={styles.teamMember}>
            <img
              src="https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/472708006_1131962435060388_4527666909134352525_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGa5Ugixui8lzgUGiYlv2EiJmWAjadWoDwmZYCNp1agPPTFdkB1B1adUlg1RPywybV7obfTgJaRPHgMSRTKCpww&_nc_ohc=Qim5gTj1uPoQ7kNvgETxLyu&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=Asqg-OCQxhgC_mH6LUx7vLH&oh=00_AYCbLyxJdpH5dwlyC2cDtuAbXbv-wWROvByhCP-Q9H-_Ww&oe=67ADC6AC"
              alt="Team Member 2"
              className={styles.teamMemberImage}
            />
            <h3 className={styles.teamMemberName}>Adnan Kader Mitul</h3>
            <p className={styles.teamMemberRole}>Co-Founder & CTO</p>
            <p className={styles.teamMemberBio}>
              Adnan is a tech enthusiast who have a strong attraction for softwares. He ia a student,studying cse in AUST. He ensures that our platform runs smoothly and efficiently.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className={styles.teamMember}>
            <img
              src="https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/474619496_1554251415221375_7780026638417121013_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEcSu4cqevqjw7Ueaf0dkWOAzl9UYpf6-sDOX1Ril_r65afRlDvMyGJRFMsFP5yXXXIvoXxH9DJmuJW1mLhcr8t&_nc_ohc=NFYLdx704noQ7kNvgEGUK_p&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=ABN3aeRtrwOJWTCrZJKHdZm&oh=00_AYAKiT3z8m-6YpCEBQYs1unq-gCWwg9snyis_F4TUN__5w&oe=67ADBA27"
              alt="Team Member 3"
              className={styles.teamMemberImage}
            />
            <h3 className={styles.teamMemberName}>Fahim Uddin Bin Ahmed</h3>
            <p className={styles.teamMemberRole}>Head of Operations</p>
            <p className={styles.teamMemberBio}>
              Fahim is an operations expert who ensures that our services are delivered on time and meet the highest quality standards.He is also a student,studying cse in AUST
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUss;
