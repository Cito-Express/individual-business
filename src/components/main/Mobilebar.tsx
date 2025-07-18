import { navItems } from "@/constants/data";
import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Mobilebar({ onClose }: { onClose: () => void }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <motion.div
    initial={{ opacity: 0, x: "-100%" }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: "-100%" }}
    transition={{ duration: 0.3 }}
     className="fixed top-0 left-0 w-full h-full bg-background/80 dark:bg-foreground/80 backdrop-blur-sm z-50">
      <div className="main flex flex-col h-full">
        <div className="flex items-center justify-between h-[70px]">
          <img src="/logo.svg" alt="Cito Logo" width={25} />
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>
       {isHome && <div className="flex flex-col gap-4">
          {navItems.map((item, idx) => (
            <a href={item.href} key={idx} onClick={onClose} className="text-muted hover:text-primary-1 hover:bg-foreground/50 p-2 rounded-lg">{item.name}</a>
          ))}
        </div>}

        {!isHome && (
          <a href="/" onClick={onClose} className="text-muted hover:text-primary-1 hover:bg-foreground/50 p-2 rounded-lg">Go Home</a>
        )}

        <div className=" mt-auto mb-10">
          <Link to="/signup">
            <button className="bg-gradient-to-br from-primary-1 to-primary-2 text-white h-10 w-full rounded-lg">
              Use Cito
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
