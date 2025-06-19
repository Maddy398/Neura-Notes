import React, { useState } from 'react';
    import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
    import './App.css';
    import Header from './components/Header/Header';
    import Home from './pages/Home';
    import Notes from './pages/Notes';
    import Blog from './pages/Blog';
    import Contact from './pages/Contact';
    import Footer from './components/Footer/Footer';

    function App() {
      return (
        <Router>
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
      );
    }

    export default App;
