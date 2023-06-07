import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { animeDataSearch } from "../constant/FetchData";
import NavBar from "../components/NavBar";

const AnimePage = () => {
  const [animeData, setAnimeData] = useState('xyz');

  const { _id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await animeDataSearch(`${_id}`);
      console.log(res)
      setAnimeData(res);
    };
    fetchData();
  }, [_id]);
  return (
    <>
      <NavBar/>
      <div>
       {
        animeData!=='xyz'?(
          <div className="animePage-data">
             <h1>{animeData.title}</h1>
             <img src={animeData.image} alt="alter" />
             <p>{animeData.synopsis}</p>
          </div>
        ):(
          <div className="animePage-none">
             <h1>Loading</h1>
          </div>
        )
       }
      </div>
    </>
  );
};

export default AnimePage;
