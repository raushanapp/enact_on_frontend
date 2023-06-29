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
    const [countryName, setCountryName] = useState("");
    const [year, setYear] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            const result = search(inputValue);
            setSearchResult(result)
            setInputValue("");
        }
        
    };
    const handleKeyPressFilter = (event) => {
        if (event.key === "Enter") {
            if (year || countryName) {
                
                const ans = filter(Number(year), countryName);
                console.log(ans)
                setSearchResult(ans)
                setCountryName("");
                setYear("");
            }
        }
        
    }
    const filter = (year, country) => {
        let newResult =
          data?.length > 0 && data.filter((d) => d.country === country || d.year===year);
        return newResult;
    }
    const search = (query) => {
        let newResult = data?.length > 0 && data.filter((d) => d.title === query)
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
        placeholder="Search by movie name here... "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <input
        type="text"
        placeholder="Filter by year... "
        value={year}
        onChange={(e) => setYear(e.target.value)}
        onKeyPress={handleKeyPressFilter}
      />
      <input
        type="text"
        placeholder="filter by country name here... "
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        onKeyPress={handleKeyPressFilter}
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
