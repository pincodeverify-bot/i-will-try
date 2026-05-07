import { useState } from "react";
import { useNavItems } from "../hooks/useNavItems";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navItems] = useNavItems();

  return (
    <header className="site-header">
      <div className="mainbar">
        <div className="container mainbar-inner">
          <Link className="brand" to="/" aria-label="BLUE Sintered Filter Home">
            <div className="brand-logo">
              <svg width="46" height="46" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(45 50 50)">
                  <rect x="15" y="15" width="70" height="70" stroke="#A83232" strokeWidth="12" fill="none" />
                  <line x1="15" y1="38" x2="85" y2="38" stroke="#A83232" strokeWidth="12" />
                  <line x1="15" y1="62" x2="85" y2="62" stroke="#A83232" strokeWidth="12" />
                </g>
              </svg>
            </div>
            <div className="brand-text-container">
              <span className="brand-title">BLUE</span>
              <span className="brand-subtitle">SINTERED FILTER</span>
            </div>
          </Link>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="site-nav"
            className={`site-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            <ul className="nav-list">
              {navItems.map((item) => (
                <li className="nav-item" key={item.label}>
                  <Link 
                    className={`nav-link ${item.active ? "active" : ""}`} 
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                    {item.hasDropdown && <span className="caret">▾</span>}
                  </Link>
                  
                  {item.hasDropdown && item.dropdownItems && (
                    <ul className="dropdown-menu">
                      {item.dropdownItems.map((dropItem) => (
                        <li key={dropItem}>
                          <Link to="#" className="dropdown-item">
                            {dropItem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="nav-actions">
              <Link
                className="quote-btn"
                to="/request-a-quote"
              >
                Request A Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
