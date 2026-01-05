import { Routes, Route } from "react-router-dom";
import { App as HomePage } from "../home/App";
import { AboutUs } from "../About us/aboutUs/aboutUs";
import { Portfolio } from "@app/portfolio/portfolio";
import { News } from "@app/News/News/News";
import Header from "@app/header/header";
import Foot from "@app/footer/footer";


export function Router() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/news" element={<News />} />
      </Routes>
    
      <Foot />
      </>
  );
}
