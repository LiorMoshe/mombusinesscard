// import Image from "next/image";
// import BusinessCard from "./business-card"
'use client'
import Head from 'next/head'
import styles from '../styles/BusinessCard.module.css'
import Image from 'next/image' // Importing the Image component from Next.js
import Link from 'next/link'


export default function Home() {

  const openWhatsAppChat = () => {
    const phoneNumber = "+972548198124";
    const message = encodeURIComponent("היי, אשמח לתאם איתך שיחה");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };



  return (
    <div className={styles.container}>
      <Head >
        <title >Karen Moshe - Lawyer</title>
        <meta name="description" content="Digital Business Card for Karen Moshe, Lawyer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />


        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.card}>
        <div className={styles.logoContainer}>
          {/* SET THE CSS FOR ME TO BE CENTERED, AT THE CENTER AND HAVE WIDTH TWICE AS HEIGHT SINCE IM WIDE */}
          <Image src="/test_logo.png" alt="Flat Logo" width={240} height={120} />
        </div>
        <div className={styles.profilePic}>
          {/* Replace '/path/to/profile-pic.jpg' with the path to your mom's profile picture */}
          <Image src="/mom_face_business.jpeg" alt="Profile Picture" width={120} height={120} className={styles.profileImage} />
        </div>
        <div className={styles.header}>
          <h1>קארן משה</h1>
          <p>עו״ד ומגשרת
            <br />
            לענייני משפחה וירושה </p>
        </div>

        <div className={styles.iconContainer} >
          <div className={`${styles.iconFlexContainer} ${styles.whatsapp}`}>
            <div className={styles.icon} onClick={openWhatsAppChat}>
              <img src="/whatsapp.svg" alt="whatsapp" width="80" height="80" />
            </div>
            <span className={styles.iconLabel}>וואצאפ</span>
          </div>

          <div className={`${styles.iconFlexContainer} ${styles.email}`}>
            <a href="mailto:law@kmoshe.com?subject=אשמח לעזרה">

              <div className={styles.icon}>
                <img src="/email.svg" alt="email" width="80" height="80" />
              </div>
            </a>
            <span className={styles.iconLabel}>מייל</span>
          </div>

          <div className={`${styles.iconFlexContainer} ${styles.website}`}>
            <a href="https://www.karenmoshelaw.com" target="_blank" rel="noopener noreferrer">
              <div className={styles.icon}>
                <img src="/website.svg" alt="website" width="80" height="80" />
              </div>
            </a>
            <span className={styles.iconLabel}>אתר</span>
          </div>

          <div className={`${styles.iconFlexContainer} ${styles.facebook}`}>
            <a href="https://www.facebook.com/profile.php?id=61556164628730" target="_blank" rel="noopener noreferrer">
              <div className={styles.icon}>
                <img src="/facebook.svg" alt="Facebook" width="80" height="70" />
              </div>
            </a>
            <span className={styles.iconLabel}>פייסבוק</span>
          </div>

          <div className={`${styles.iconFlexContainer} ${styles.phone}`}>
            <a href="tel:+972548198124">
              <div className={styles.icon}>
                <img src="/phone.svg" alt="phone" width="80" height="80" />
              </div>
              <span className={styles.iconLabel}>טלפון</span>
            </a>
          </div>

          <div className={`${styles.iconFlexContainer} ${styles.waze}`}>
            <a href="https://maps.app.goo.gl/LDE6ej3Ye6bp7reT6" target="_blank">
              <div className={styles.icon}>
                <img src="/maps.svg" alt="maps" width="80" height="80" />
              </div>
            </a>
            <span className={styles.iconLabel}>מיקום</span>
          </div>


        </div>
      </div>
    </div>
  );
}
