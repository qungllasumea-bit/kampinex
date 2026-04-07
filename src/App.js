import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './organisms/Header';
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Projects from './pages/Projects';
import ContactUs from './pages/ContactUs'; 
import LogoSite from './assets/img/logoKampinex.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header 
          homeUrl="/" 
          aboutUrl="/about" 
          departmentsUrl="/departments" 
          projectsUrl="/projects" 
          contactUrl="/contact" 
          logoSrc={LogoSite} 
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
