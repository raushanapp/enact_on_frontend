import React from "react";
import styles from "../Styles/Movies/searchmovies.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMoviesData } from "../Store/ProductReducer/action";
import { useMemo } from "react";
import MoviesCard from "../Components/Movie/MoviesCard";
function SearchMovies() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const [inputValue, setInputValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            const result = search(inputValue);
            setSearchResult(result)
      }
    };
    const search = (query) => {
        let newResult = data?.length > 0 && data.filter((d) => d.country === query)
        return newResult;
    }
    const optimise=useMemo(()=> searchResult,[searchResult])
    useEffect(() => {
        if(data?.length===0) dispatch(getMoviesData())
    }, [data])
    // console.log("....",optimise)
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search by country name here... "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <div className={styles.gridContainer}>
        {optimise?.length > 0 &&
          optimise.map(({ title, imdb_title_id }) => (
            <MoviesCard title={title} id={imdb_title_id} />
          ))}
      </div>
    </div>
  );
}

export default SearchMovies;
