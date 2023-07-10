import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Home />} /> */}
          {/* <Route path='/Home' element={<Home />} /> */}
          {/* <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects />} /> */}
        {/* </Routes>
      </BrowserRouter> */}
      <Navbar />
      <Home />
      <Education />
      <Projects />
      <Cursor />
    </div>
  );
}


export default App;
