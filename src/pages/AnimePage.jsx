import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { animeDataSearch } from "../constant/FetchData";
import NavBar from "../components/NavBar";
import { Bars } from "react-loader-spinner";

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
             <div className="alter-titles">
             {
               animeData.alternativeTitles
               .map((title)=>(
                 <span>{title}</span>
               ))
             }
            </div>
             <div className="anime-content">
             <img src={animeData.image} alt="alter" />
             <div className="genres">
              {
                animeData.genres.map((genre)=>(
                  <span>{genre}</span>
                ))
              }
             </div>
             </div>
             
             <p>{animeData.synopsis}</p>
          </div>
        ):(
          <div className="animePage-none">
            <Bars color="gray"/>
          </div>
        )
       }
      </div>
    </>
  );
};

export default AnimePage;
