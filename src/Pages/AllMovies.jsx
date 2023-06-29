import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Styles/Movies/allMovies.module.css";
import { getMoviesData } from "../Store/ProductReducer/action";
import MoviesCard from "../Components/Movie/MoviesCard";
function AllMovies() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [movies, setMovies] = useState([]);
  // console.log(movies);
  useEffect(() => {
    if (data?.length === 0) dispatch(getMoviesData());
    let newData = data.sort((a, b) => b.avg_vote - a.avg_vote);
    setMovies(newData);
  }, [data]);
  return (
    <div className={styles.container}>
      <h1 className={styles.labelAllMovies}>Movies</h1>
      <div className={styles.gridContainer} >
        {movies?.length > 0 &&
          movies.map(({ title, avg_vote }) => (
            <MoviesCard  id={avg_vote} title={title} />
          ))}
      </div>
    </div>
  );
}

export default AllMovies;
