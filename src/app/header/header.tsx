import "./styles.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="back">
      <header className="container">
        <span className="logo">logo</span>

        <button className="burger" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>

        <nav className={open ? "open" : ""}>
          <ul>
            <li>
              <NavLink to="/" end onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setOpen(false)}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" onClick={() => setOpen(false)}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" onClick={() => setOpen(false)}>
                News
              </NavLink>
            </li>
            <li className="btn">
              <NavLink to="/contacts" onClick={() => setOpen(false)}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}