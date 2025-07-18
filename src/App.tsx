import { Routes, Route } from "react-router-dom"
  import { Splash } from "./pages"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Location, Login, Register, Verify } from "./pages/auth";
import { Toaster } from "sonner";
import { ScrollToTop } from "./components/ui";


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
    <Toaster position="top-center" richColors/>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Splash/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/verify" element={<Verify/>}/>
      <Route path="/location" element={<Location/>}/>
    </Routes>
    </>
  )
}
