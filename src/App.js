import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Cursor from './components/Cursor';

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
      <Cursor />
    </div>
  );
}


export default App;
