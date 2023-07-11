import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Cursor from './components/Cursor';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/Home' element={<Home />} /> */}
          {/* <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects />} /> */}
        {/* </Routes>
      </BrowserRouter> */}
      <Home />
      <Education />
      <Projects />
      <Experience />
      <Footer />
      <Cursor />
    </div>
  );
}


export default App;
