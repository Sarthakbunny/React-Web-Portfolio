import './App.css';
import { Routes, Route, Navigate } from 'react-router';
import Header from './Components/Header';
import MicroBlogs from './Components/MicroBlogs';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/micro-blog" element={<MicroBlogs />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact-me" element={<Contact />} />
        <Route exact path="/" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
