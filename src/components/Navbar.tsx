import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Serviços", path: "/servicos" },
  { label: "Sobre Nós", path: "/sobre" },
  { label: "Blog", path: "/blog" },
  { label: "Clientes", path: "/clientes" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-extrabold text-lg">NC</span>
          </div>
          <span
            className={`font-bold text-xl tracking-tight transition-colors ${
              isScrolled ? "text-foreground" : "text-dark-foreground"
            }`}
          >
            NCSISTEMAS
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-primary"
                  : isScrolled
                  ? "text-foreground/70 hover:text-primary"
                  : "text-dark-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contacto" className="btn-primary-gradient ml-4 text-sm !py-2 !px-6 rounded-md inline-block">
            Fale Conosco
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-dark-foreground"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-up">
          <div className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 rounded-md text-sm font-medium ${
                  location.pathname === item.path
                    ? "text-primary bg-accent"
                    : "text-foreground/70 hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contacto" className="btn-primary-gradient mt-2 text-center text-sm !py-2 rounded-md">
              Fale Conosco
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
