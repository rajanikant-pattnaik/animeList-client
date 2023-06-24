import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { animeSearch } from "../constant/FetchData";
import AnimeCard from "../components/AnimeCard";

const HomePage = () => {
  const [animeData, setAnimeData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await animeSearch("");
      if (res.data !== undefined) {
        const finalData = res.data;
        setAnimeData(finalData);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <NavBar />
      <div className="row">
        {animeData?.length > 0 ? (
          <div className="container-flex">
            {animeData.map((anime) => (
              <AnimeCard anime={anime} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No anime found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
