import React from "react";
import "./FeaturedMovie.css";

export default ({ item }) => {
  const firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosistion: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info"></div>
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--sessons">
              {" "}
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
            <div className="featured--description">{" "}{item.overview} </div>
            <div className="featured--buttons">
              <a href={`/watch/${item.id}`}className="featured--watchbutton">  Assistir</a>
              <a href={`/list/add/$${item.id}`}className="featured--mylistbutton"> + Minha lista</a>
            </div>
            <div className="featured--genres">
              <strong>Genêros:</strong> {genres.join(", ")}
            </div>
          </div>
        </div>
    </section>
  );
};
