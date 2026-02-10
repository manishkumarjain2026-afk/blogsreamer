import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="text-xl font-black tracking-tight text-primary">
          Blog<span className="text-foreground">theSpot</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/categories" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Categories
          </Link>
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggleTheme} className="rounded-full p-2 text-muted-foreground hover:bg-secondary">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-full p-2 text-muted-foreground hover:bg-secondary">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Home</Link>
          <Link to="/categories" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Categories</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
