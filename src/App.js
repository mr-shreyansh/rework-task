import { Route, Router, Routes } from "react-router";
import About from "./pages/About";
import NavBar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Services from "./pages/Services";
import Numbers from "./pages/Numbers";
import Testimonials from "./pages/Testimonials";
import InfoCard from "./components/Info_card";
import tablet from "./assets/images/tablet.jpg";
import Reads from "./pages/Reads";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div>
      <NavBar/>
           <Carousel/>
           <Services/>
           <Numbers/>
           <Brands/>
           <Testimonials/>
           <About/>
           <Reads/>
           <Footer/>
    </div>
  )
}