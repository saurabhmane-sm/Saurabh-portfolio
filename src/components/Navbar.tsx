import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["What I Do", "#what-i-do"],
  ["Stack", "#stack"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a href="#top" className="brand" aria-label="Saurabh Mane home">
          SM<span>.</span>
        </a>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}

          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let's talk <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  );
}
