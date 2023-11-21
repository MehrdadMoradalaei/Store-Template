import './App.css';
import Nav from './Nav';
import Billboard from './Billboard';
import About from './About';
import Contact from './Contact';
import {Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
        <div>
          <Nav>Men's Clothing Store Website</Nav>
          <Billboard />
          <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
export default App;
