import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesData } from "../../Store/ProductReducer/action";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
function LatestMovies() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [latestMovies, setLatestMovies] = useState([]);

  console.log(latestMovies, "filter");
  useEffect(() => {
    if (data?.length === 0) {
      dispatch(getMoviesData());
    }
    let newFilter = data?.length > 0 && data.filter((d) => d.year > 1916);
    setLatestMovies(newFilter);
  }, [data]);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        375: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      {latestMovies?.length > 0 &&
        latestMovies.map(({ imdb_title_id, original_title }) => (
          <SwiperSlide
            style={{ display: "flex", flexDirection: "column" }}
            key={imdb_title_id}
          >
            <img
              style={{ width: "90%", height: "200px", margin: "auto" }}
              src="https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/master/pass/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg"
              alt="moviesImage"
            />
            <h5 style={{ fontFamily: "Popin,sans-serif",fontSize:"16px", }}>{original_title}</h5>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default LatestMovies;
