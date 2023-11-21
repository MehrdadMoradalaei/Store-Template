import './App.css';
import Nav from './components/Nav';
import Billboard from './components/Billboard';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
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
          <Products/>
        </div>
      </BrowserRouter>
    );
  }
export default App;
