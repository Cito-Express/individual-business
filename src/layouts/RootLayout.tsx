import { Gift, X } from "lucide-react";
import { Footer, Header } from "../components/main";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const [showNotification, setShowNotification] = useState(true);
  return (
    <>
    <div className="flex flex-col">

      <Header />
     {showNotification && <Notificaiton onClose={() => setShowNotification(false)}/>}
      <main>{children}</main>
      <Footer />
    </div>
    </>
  );
}


const Notificaiton = ({onClose}: {onClose: () => void}) => {
    return (
        <div data-aos="fade-down" className="h-[70px] relative bg-gradient-to-r from-transparent via-primary-1/10 to-transparent center">
            <div className="flex items-center gap-2 px-4 main">
                <Gift size={20} className="text-primary-1"/>
                <p className="text-sm font-medium text-primary-1">Get <strong>10%</strong> off your first order. <Link to="/app" className="underline font-bold">Order Now</Link></p>
                <button className="absolute right-4 top-2 text-primary-1" onClick={onClose}>
                    <X size={20}/>
                </button>
            </div>
        </div>
    )
}
