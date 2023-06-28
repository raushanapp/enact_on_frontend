import React from "react";
import TopBannerMovies from "../Components/Carosual/TopBannerMovies";
import styles from "../Styles/Home/home.module.css";
import Navbar from "../Components/BottomNavbar/Navbar";
import { IoIosArrowForward } from "react-icons/io";

function Home() {
  return (
    <div className={styles.container}>
      <TopBannerMovies />
      <div className={styles.browserContainer}>
        <p className={styles.label}>Browser Trailers and Videos</p>
        <button>
          <IoIosArrowForward />
        </button>
      </div>
      <Navbar />
    </div>
  );
}

export default Home;
