import React from 'react'
import styles from "../../Styles/Navbar/navbar.module.css";
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import {RiMovieLine} from "react-icons/ri"
function Navbar() {
  const navigate = useNavigate();
  const handleNavigateHome = () => {
    return navigate("/");
  };
  const handleNavigateAllMovies = () => {
    return navigate("/all-movies");
  };
  const handleNavigateSearchMovie = () => {
      return navigate("/search-movies")
  }
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        <AiOutlineHome
          className={styles.homeLogo}
          onClick={handleNavigateHome}
        />
      </button>
      <button className={styles.btn1}>
        <RiMovieLine
          className={styles.moviesLogo}
          onClick={handleNavigateAllMovies}
        />
      </button>
      <button className={styles.btn1}>
        <AiOutlineSearch
          className={styles.searchLogo}
          onClick={handleNavigateSearchMovie}
        />
      </button>
    </div>
  );
}

export default Navbar