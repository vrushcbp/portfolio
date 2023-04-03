import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Experience from './PortfolioContainer/Experience/Experience';
import Home from "./PortfolioContainer/Home/Home";
import ProjectItems from './PortfolioContainer/Projects/ProjectItems';
import ProjectDisplay from './PortfolioContainer/Projects/ProjectDisplay';
import Navbar from './PortfolioContainer/Navbar/Navbar';
import Footer from './PortfolioContainer/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projectItems' element={<ProjectItems />} />
          <Route path={'/project/:id'} element={<ProjectDisplay />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
