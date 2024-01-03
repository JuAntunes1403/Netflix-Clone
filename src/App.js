import { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import "./App.css";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import Loader from "./components/Loader";

export default () => {
  const [movielist, setMovielist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [featureData, setFeaturedData] = useState(null);

  const loadAll = async () => {
    setIsLoading(true);
    let list = await Tmdb.getHomeList();
    setMovielist(list);

    let originals = list.filter((i) => i.slug === "originals");
    let randomChosen = Math.floor(
      Math.random() * (originals[0].items.results.length - 1)
    );
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
    setFeaturedData(chosenInfo);
    setIsLoading(false);
  };

  useEffect(() => {
    loadAll();
  }, []);

  return isLoading ? (
    <div className="loading">
      <Loader />
    </div>
  ) : (
    <div className="page">
      <Header />
      {featureData && <FeaturedMovie item={featureData} />}

      <section className="lists">
        {movielist?.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        <span>
          Made with
          <span role="img" aria-label="coração">
          {" "}
          ❤️
          </span>{" "}
          by Julia | Image rights for Netflix
        </span>
        <span>Data taken from Themoviedb.org website </span>
      </footer>
    </div>
  );
};
