import './App.css';
import Nav from './Nav';
import Billboard from './Billboard';
import About from './About';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Nav>Men's Clothng Store Website</Nav>
      <Billboard/>
      {/* <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/About" element={<About />}/>
        <Route path="Contact" element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;
