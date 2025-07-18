import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }, [navigate]);

  
  return (
    <div className="h-[100dvh] center">
      <div className="center gap-4">
        <img src="/logo.svg" alt="logo" className="w-10 h-10 animate-spin" />
        <h1 className="text-3xl font-extrabold font-space">Cito Express</h1>
      </div>
    </div>
  );
}
