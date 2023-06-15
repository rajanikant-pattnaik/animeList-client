import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../contextApi/UserContext';
import axios from "axios";

const AnimeCard = ({
  anime: { _id, title, synopsis, link, genres, image },
}) => {
  const navigate=useNavigate();
  const {user}=useContext(UserContext);
  const history={
    "userid":user._id,
    "animeId":_id,
    "title":title,
    "image":image
  }
   
    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
          console.log(history);
          await axios.post("http://localhost:4000/api/v1/history/new",history);
          console.log("history is added")
      } catch (error) {
        console.log(error);
      }
       direct();
    };
    const direct=()=>{
      navigate(`/search/by_id/${_id}`);
    }
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
