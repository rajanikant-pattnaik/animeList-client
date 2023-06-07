import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import AnimePage from './pages/AnimePage';

function App() {
  return (
    <>
    
    <div className='app'>
    
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/search/:searchTerm' element={<SearchPage/>}/>
       <Route path='/login' element={<LoginPage/>}/>
       <Route path='/search/by_id/:_id' element={<AnimePage/>}/>
     </Routes>
    </BrowserRouter>
    
   </div>
    </>
  );
}

export default App;
