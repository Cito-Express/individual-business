import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../constants/data";
import { useTheme } from "../../hooks";
import { Menu, MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import Mobilebar from "./Mobilebar";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const { toggleTheme, theme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const isHome = location.pathname === "/";

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 dark:bg-secondary/80 backdrop-blur-sm border-b border-line">
        <nav className="flex items-center justify-between h-[70px] main">
          <Link to="/">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Cito" width={25} height={25} />
              <h3 className="text-2xl font-bold">Cito.</h3>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {isHome && <ul className="md:flex hidden items-center">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className={` py-2 px-4 rounded-lg text-[15px] ${
                      idx === 0
                        ? "text-primary-1 bg-primary-1/10 font-medium"
                        : "text-muted hover:bg-secondary"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>}

            <div className="md:block hidden h-12 w-[1px] bg-line" />

            <div className="flex items-center md:gap-6 gap-4">
              <button onClick={toggleTheme}>
                {theme === "dark" ? (
                  <SunIcon size={20} />
                ) : (
                  <MoonIcon size={20} />
                )}
              </button>

              <Link to="/app">
                <button className="bg-gradient-to-br text-sm md:text-base from-primary-1 to-primary-2 text-white h-10 px-4 rounded-lg">
                  Use Cito
                </button>
              </Link>

              <div className="h-12 w-[1px] bg-line md:hidden block" />

              <div className="md:hidden cursor-pointer">
                <Menu onClick={toggleMobileMenu} />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && <Mobilebar onClose={toggleMobileMenu} />}
      </AnimatePresence>
    </>
  );
}
