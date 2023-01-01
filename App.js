import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Navbar';
import {Routes, Route, Link} from 'react-router-dom';
import About from './Pages/About';
import Donate from './Pages/Donate';
import Home from './Pages/Home';
import HeroSection from './Components/Hero/HeroSection';
import ArchivePage from'./Pages/ArchivePage';
import LearningVideosPage from './Pages/LearningVideosPage';
import ArchiveStudentsPage from './Pages/ArchiveStudentsPage';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar/> 
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/donate' element={<Donate/>} />
          <Route path='/archive' element={<ArchivePage/>} />  
          <Route path='/learning_videos' element={<LearningVideosPage/>} />   
          <Route path='/archivestudent' element={<ArchiveStudentsPage/>} />   
        </Routes>
    </div>
  );
}

export default App;
