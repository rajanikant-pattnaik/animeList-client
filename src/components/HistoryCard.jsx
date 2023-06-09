import React from "react";
import { useNavigate } from "react-router-dom";
// import { UserContext } from '../contextApi/UserContext';
import axios from "axios";


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
    const handleDelete=async()=>{
      try {
        await axios.post('/history/delete',{_id})
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div className="anime-card" key={_id}>
      <img src={image} alt="anime-img" />
       <h4>{title}</h4>
       <button onClick={handleSubmit}>read more</button>
       <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default HistoryCard;
