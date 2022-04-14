
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './project/aboutPage/AboutPage';
import BlogPage from './project/blogPage/BlogPage';
import HeaderNav from './project/header/HeaderNav.jsx';
import CabinetPage from './project/cabinetPage/CabinetPage';
import ProjectsPage from './project/projectsPage/ProjectsPage';




const App = () => {
  return (
    <div className="appContent">
      <HeaderNav />
      <div className ="appContent__change">
        <Routes>

          <Route path='/profile' 
            element = {
              <BlogPage/>
            } 
          /> 

          <Route path='/about' 
            element = {
              <AboutPage/>
            } 
          /> 

          <Route path='/dialogs' 
            element = {
              <ProjectsPage/>
            } 
          /> 

          <Route path='/dialogs' 
            element = {
              <CabinetPage/>
            } 
          /> 

        </Routes>
      </div>


    </div>
  )
}

export default App;
