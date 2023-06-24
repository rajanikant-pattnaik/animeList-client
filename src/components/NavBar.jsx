import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contextApi/UserContext";


const NavBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const {user}=useContext(UserContext);
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setsearchTerm('');
    }

  };
  const removeUser=(e)=>{
    e.preventDefault();
    if(user===undefined)return;
    localStorage.removeItem('user');
    navigate('/login')
  }
  return (
    <>
      <nav className={`navbar`}>
        <div className="navbar-list">
          <ul>
            <li onClick={()=>navigate('/')}>Home</li>
            <li onClick={()=>navigate('/history')}>History</li>
          </ul>
        </div>
        <div className="navbar-search">
          <input
            type="text"
            name="search"
            placeholder="search"
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
          />
          <button className="navbar-search-btn" onClick={handleSubmit}>
            search
          </button>
          <div onClick={removeUser}>{user===undefined?"no user":user.name}</div>
        </div>
          
      </nav>
    </>
  );
};

export default NavBar;
