import React from "react";
import { useNavigate } from "react-router-dom";
// import { UserContext } from '../contextApi/UserContext';
// import axios from "axios";


const HistoryCard = ({
  anime: { _id, title,image,animeId },
}) => {
  const navigate=useNavigate();
  
  
    const handleSubmit = async(e) => {
    //   try{console.log(history)
    //   await axios.post('/history/new',history);
    //   console.log("history is added")
    // }
    //   catch(error){
    //     console.log(error);
    //   }

       direct();
    };
    const direct=()=>{
      navigate(`/search/by_id/${animeId}`);
    }
  return (
    <div className="anime-card" key={_id}>
      <img src={image} alt="anime-img" />
       <h4>{title}</h4>
       <button onClick={handleSubmit}>read more</button>
    </div>
  );
};

export default HistoryCard;
