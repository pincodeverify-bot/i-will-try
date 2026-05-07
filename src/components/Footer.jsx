import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import './Footer.css';

function Footer() {
  const { siteData } = useSiteData();
  const { footer } = siteData;

  const getLinkHref = (label) => {
    switch (label.toLowerCase()) {
      case 'products': return '/products';
      case 'about us': return '/about-us';
      case 'contact us': return '/contact-us';
      case 'applications': return '/';
      default: return '#';
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-grid">
          
          {/* Column 1: Brand & About */}
          <div className="footer-col brand-col">
            <Link className="footer-brand" to="/" aria-label="BLUE Sintered Filter Home">
              <div className="footer-brand-logo">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g transform="rotate(45 50 50)">
                    <rect x="15" y="15" width="70" height="70" stroke="#A83232" strokeWidth="12" fill="none" />
                    <line x1="15" y1="38" x2="85" y2="38" stroke="#A83232" strokeWidth="12" />
                    <line x1="15" y1="62" x2="85" y2="62" stroke="#A83232" strokeWidth="12" />
                  </g>
                </svg>
              </div>
              <div className="footer-brand-text">
                <span className="footer-brand-title">BLUE</span>
                <span className="footer-brand-subtitle">SINTERED FILTER</span>
              </div>
            </Link>
            <p className="footer-desc">{footer.desc1}</p>
            <p className="footer-desc">{footer.desc2}</p>
          </div>

          {/* Column 2: Materials */}
          <div className="footer-col list-col">
            <h4 className="footer-heading">Materials</h4>
            <ul className="footer-list bullet-list">
              {footer.materials.map((mat, i) => (
                <li key={i}><a href="#">{mat}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Shapes */}
          <div className="footer-col list-col">
            <h4 className="footer-heading">Shapes</h4>
            <ul className="footer-list bullet-list">
              {footer.shapes.map((shape, i) => (
                <li key={i}><a href="#">{shape}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="footer-col list-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list no-bullet">
              {footer.links.map((link, i) => (
                <li key={i}>
                  <Link to={getLinkHref(link)}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-contact">
            <a href={`mailto:${footer.email}`}>{footer.email}</a>
          </div>
          <div className="footer-copyright">
            {footer.copyright}
          </div>
          <div className="footer-policy">
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
