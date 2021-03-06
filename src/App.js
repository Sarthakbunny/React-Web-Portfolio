import './App.css';
import { Routes, Route, Navigate } from 'react-router';
import Header from './Components/Header';
import MicroBlogs from './Components/MicroBlogs';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';
import Journey from './Components/Journey';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/blogs" element={<MicroBlogs />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/journey" element={<Journey />} />
        <Route exact path="/" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <hr className="my-4" />
      <Footer />
    </div>
  );
}

export default App;
