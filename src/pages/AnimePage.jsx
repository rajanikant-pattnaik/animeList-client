import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { animeDataSearch } from "../constant/FetchData";
import NavBar from "../components/NavBar";
import { Bars } from "react-loader-spinner";

const AnimePage = () => {
  const [animeData, setAnimeData] = useState("xyz");

  const { _id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await animeDataSearch(`${_id}`);
      setAnimeData(res);
    };
    fetchData();
  }, [_id]);
  return (
    <>
      <NavBar />
      <div>
        {animeData !== "xyz" ? (
          <div className="animePage-data">
            <div className="animePage-top">
              <img src={animeData.image} alt="" />
              <div className="animePage-top-right">
                <h1>{animeData.title}</h1>
                <div className="alterTitle">
                  Alternative Titles-{`     `}
                  {animeData.alternativeTitles.map((title) => (
                    <span>{title}</span>
                  ))}
                </div>
                <div className="genres">
                  {animeData.genres.map((genre) => (
                    <span>{genre}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="animePage-synopsis">
              <h1>Synopsis</h1>
              <p>{animeData.synopsis}</p>
            </div>
          </div>
        ) : (
          <div className="animePage-none">
            <Bars color="gray" />
          </div>
        )}
      </div>
    </>
  );
};

export default AnimePage;
