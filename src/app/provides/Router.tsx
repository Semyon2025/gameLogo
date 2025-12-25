import { Routes, Route } from 'react-router-dom';
import { App as HomePage } from '../home/App';
import { AboutUs } from '../About us/aboutUs/aboutUs';
import { Portfolio } from '@app/portfolio/portfolio';


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/portfolio" element={<Portfolio />} />
    
        </Routes>
  );
}