import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Scan from './Components/Scan/Scan';
import Contact from './Components/Contact/Contact';

ReactDOM.render(
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/scan">Scan</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scan" element={<Scan />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
