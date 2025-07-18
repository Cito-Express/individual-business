import { Routes, Route } from "react-router-dom"
import { Home, Type } from "./pages"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
      delay: 50,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/app" element={<Type/>}/>
    </Routes>
    </>
  )
}
