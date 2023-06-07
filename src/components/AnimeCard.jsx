import React from "react";
import { useNavigate } from "react-router-dom";

const AnimeCard = ({
  anime: { _id, title, synopsis, link, genres, image },
}) => {
  const navigate=useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
  
        navigate(`/search/by_id/${_id}`);
    };
  return (
    <div className="anime-card" key={_id}>
      <img src={image} alt="anime-img" />
       <div className="genres">
         {
          genres.map((genre)=>(
            <span>{genre}</span>
          ))
         }
       </div>
       <h4>{title}</h4>
       <p className="anime-card-synopsis">{synopsis.slice(0,100)}....</p>
       <button onClick={handleSubmit}>read more</button>
    </div>
  );
};

export default AnimeCard;
