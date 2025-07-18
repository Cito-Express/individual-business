import { Link } from "react-router-dom";
import { useTheme } from "../../hooks";
import { MoonIcon, SunIcon } from "lucide-react";

export default function Header() {
  const { toggleTheme, theme } = useTheme();

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

          <button onClick={toggleTheme}>
            {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
        </nav>
      </header>
    </>
  );
}
