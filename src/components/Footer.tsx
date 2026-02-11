import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Blogstreamer. All rights reserved.</p>
        <p>
          <a href="/privacy" className="underline hover:text-white">Privacy Policy</a> |{' '}
          <a href="/terms" className="underline hover:text-white">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Navbar;
