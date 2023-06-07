import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setsearchTerm('');
    }

  };
  return (
    <>
      <nav className={`navbar`}>
        <div className="navbar-list">
          <ul>
            <li onClick={()=>navigate('/')}>Home</li>
            <li>History</li>
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
          <div onClick={()=>navigate('/login')}>Account</div>
        </div>
          
      </nav>
    </>
  );
};

export default NavBar;
