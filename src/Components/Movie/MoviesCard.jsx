import React from "react";
import styles from "../../Styles/Movies/card.module.css";
function MoviesCard({ title, id }) {
  return (
    <div
      className={styles.imageCard}
      key={id}
      style={{ width: "170px", height: "240px",}}
    >
      <img
        style={{ width: "170px", height: "200px", margin: "auto"  }}
        src="https://m.media-amazon.com/images/M/MV5BMTI5ODY5NTUzMF5BMl5BanBnXkFtZTcwOTAzNTIzMw@@._V1_.jpg"
        alt="moviesImage"
      />
      <h1
        style={{
          width: "100%",
          fontSize: "12px",
          fontFamily: " Popin,sans-serif",
        }}
      >
        {title}
      </h1>
    </div>
  );
}

export default MoviesCard;
