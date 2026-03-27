import { useState, useEffect } from "react";
import { Outlet, useLocation, Link } from "react-router";
import { Instagram, Menu, X } from "lucide-react";

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [{ to: "/portfolio", label: "Portfolio" }];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f6efef" }}>
      <header className="sticky top-0 z-50 px-4 pt-1 sm:px-6 sm:pt-1">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#e7dfdc] bg-[rgba(255,255,255,0.96)] px-10 py-[1.15rem] shadow-[0_8px_28px_rgba(98,74,66,0.08)] backdrop-blur md:w-fit md:min-w-[420px] md:justify-center md:gap-9 md:px-10">
          <Link
            to="/"
            className="shrink-0 text-[#121212]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "22px",
              fontWeight: 500,
              letterSpacing: "0.01em",
            }}
          >
            Azeez
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative text-[#121212] tracking-[0.08em] after:absolute after:left-0 after:right-0 after:-bottom-[6px] after:h-px after:origin-left after:scale-x-0 after:bg-[#121212] after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:after:scale-x-100"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-[14px] md:flex">
            <a
              href="https://www.instagram.com/_7ateesh_?igsh=ZG52MzhkbXEwNTdw&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-[#121212] transition-opacity hover:opacity-75"
            >
              <Instagram size={15} strokeWidth={1.8} />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#2f2420] transition-colors hover:text-black md:hidden"
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-[#ece2df] bg-[rgba(255,255,255,0.97)] px-5 py-5 shadow-[0_10px_30px_rgba(98,74,66,0.08)] md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[#2f2420] transition-opacity hover:opacity-65 tracking-widest text-center py-2"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer
        className="flex items-center justify-between px-5 py-4 border-t border-neutral-100"
        style={{ backgroundColor: "#f5efea" }}
      >
        <span
          className="text-neutral-500 text-xs"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "13px" }}
        >
          Azeez
        </span>
        <span
          className="text-neutral-400 text-xs"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px" }}
        >
          Made by Suofiy
        </span>
      </footer>
    </div>
  );
}
