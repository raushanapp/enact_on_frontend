import React from "react";
import TopBannerMovies from "../Components/Carosual/TopBannerMovies";
import styles from "../Styles/Home/home.module.css";
import Navbar from "../Components/BottomNavbar/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import LatestMovies from "../Components/Carosual/LatestMovies";

function Home() {
  return (
    <div className={styles.container}>
      <TopBannerMovies />
      <div className={styles.browserContainer}>
        <p className={styles.label}>Browser Trailers and Videos</p>
        <button>
          <IoIosArrowForward style={{ fontSize: "28px" }} />
        </button>
      </div>
      <h1 className={styles.latestMovieLabel}>Latest Movies</h1>
      <LatestMovies />
      <h1 className={styles.popularMovieLabel}>Popular Movies</h1>
      <Navbar />
    </div>
  );
}

export default Home;
