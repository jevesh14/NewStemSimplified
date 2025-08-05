import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BreakthroughBriefs from './pages/BreakthroughBriefs';
import ArticlePage from './pages/ArticlePage';
import GamesPage from './pages/GamesPage';
import RequestPage from './pages/RequestPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<BreakthroughBriefs />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/request" element={<RequestPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;