import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import AnimePage from './pages/AnimePage';
import { UserContext } from './contextApi/UserContext';
import { useEffect, useState } from 'react';

function App() {
  const [user, setuser] = useState();
  useEffect(() => {
    if(localStorage.getItem('user')){
      setuser(JSON.parse(localStorage.getItem('user')))
    }
  }, [])
  return (
    <>
    
    <div className='app'>
    <UserContext.Provider value={{user,setuser}}>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/search/:searchTerm' element={<SearchPage/>}/>
       <Route path='/login' element={<LoginPage/>}/>
       <Route path='/search/by_id/:_id' element={<AnimePage/>}/>
     </Routes>
    </BrowserRouter>
    </UserContext.Provider>
   </div>
    </>
  );
}

export default App;
