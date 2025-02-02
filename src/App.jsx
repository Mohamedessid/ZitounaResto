import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarouselSection from './components/CarouselSection';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Reservation from './components/Reservation';
import RestaurantLocation from './components/RestaurantLocation';
import RestaurantGallery from './components/RestaurantGallery';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar appears on all pages */}

      <Routes>
        <Route path="/" element={
          <>
            <CarouselSection />
            
            <RestaurantLocation /> 
            <RestaurantGallery/>
          </>
        } />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        
      </Routes>
      <Footer/>
    
    </Router>
  );
}

export default App;
