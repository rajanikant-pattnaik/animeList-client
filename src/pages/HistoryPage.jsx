import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contextApi/UserContext'
import axios from 'axios';
import NavBar from '../components/NavBar';
import HistoryCard from '../components/HistoryCard';

const HistoryPage = () => {
    const {user}=useContext(UserContext);
    const [data, setdata] = useState([])
    // console.log(user);
    const userid=user===undefined?'':user._id;
    useEffect(() => {
      const fetchHistory=async()=>{
        try {
            const res=await axios.post('/history/get',{userid});
            setdata(res.data.allHistory);
        } catch (error) {
            console.log(error);
        }
        
      }
      fetchHistory();
    }, [userid]) 
  return (
   <>
   <NavBar/>
   {user!==undefined?(<div className="row">
   {data?.length > 0 ? (
    <div className="container-flex">
    {data.map((anime) => (
      <HistoryCard anime={anime}/>
   ))}
 </div>
  ) : (
    <div className="empty">
      <h2>No anime found</h2>
    </div>
  )}
   </div>):(
    <div className="user">
     <h1>User is not there login first</h1>
    </div>
   )}
   </>
  )
}

export default HistoryPage
