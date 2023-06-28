import React, { useState } from "react";
import styles from "../../Styles/Carosual/topBanner.module.css";
import carosulaData from "../../Data/topBanner.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "./styles.css";
function TopBannerMovies() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {carosulaData?.length > 0 &&
        carosulaData.map(({ title, trailer, image, image1 }, index) => (
          <SwiperSlide className={styles.carosulaContianer} key={index}>
            <div className={styles.moviesPoster}>
              <img
                src={image}
                alt={title}
                style={{ width: "375px", height: "180px" }}
              />
            </div>
            <div className={styles.secondMoviePoster}>
              <img
                src={image1}
                alt={title}
                style={{
                  width: "160px",
                  height: "120px",
                  marginTop: "-130px",
                  borderRadius:"10px"
                }}
              />
              <div className={styles.movieLabel}>
                <p className={styles.title1}>Title :{`"${title}"`}</p>
                <p className={styles.labelTrailer}>{trailer}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default TopBannerMovies;
