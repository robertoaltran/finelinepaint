import { NavLink, Link } from "react-router-dom";
import Container from "../components/Container";
import logo from "../assets/logo.png";

const navLink = "text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition";
const navActive = "text-sm font-semibold text-[#0B2A5B]";

export default function Navbar() {
  const phoneDisplay = "+61 400 000 000";
  const phoneTel = "+61400000000";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <Container className="flex h-20 items-center justify-between">
        {/* LOGO (maior sem aumentar o header) */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Boga Painters logo" className="h-20 w-auto -my-2" />
        </Link>

        {/* MENU */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/about" className={({ isActive }) => (isActive ? navActive : navLink)}>
            About Us
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? navActive : navLink)}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? navActive : navLink)}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? navActive : navLink)}>
            Contact
          </NavLink>
        </nav>

        {/* WHATSAPP ONLY */}
        <a
          href={`https://wa.me/${phoneTel.replace("+", "")}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-[#0B2A5B]"
        >
          WhatsApp: <span className="text-[#2D6FE5]">{phoneDisplay}</span>
        </a>
      </Container>

      {/* LINHA AMARELA DO LOGO */}
      <div className="h-1 w-full bg-[#F4C400]" />
    </header>
  );
}
