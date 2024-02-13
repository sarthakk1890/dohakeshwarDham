import './App.scss'
import Events from './components/Events';
import Gallery from './components/Gallery';
import History from './components/History';
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Services from './components/Services';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Donation from './components/Donation';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/donation" element={<Donation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App