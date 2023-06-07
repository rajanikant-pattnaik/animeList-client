import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { animeSearch } from "../constant/FetchData";
import NavBar from "../components/NavBar";
import AnimeCard from "../components/AnimeCard";

const SearchPage = () => {
  const [animeData, setAnimeData] = useState([]);

  const { searchTerm } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await animeSearch(`${searchTerm}`);
      if (res.data !== undefined) {
        const finalData = res.data;
        setAnimeData(finalData);
      }
    };
    fetchData();
  }, [searchTerm]);
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
            <h2>No Anime found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;
