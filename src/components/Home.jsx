import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import Hero from './Hero';
import BottomCTA from './BottomCTA';
import './Home.css';

function Home() {
  const { siteData } = useSiteData();
  const { shapes, features, materials, applications, video, faqs, partners } = siteData;

  return (
    <div className="home-page">
      <Hero />

      {/* Shapes Section */}
      <section className="section-shapes py-80 bg-light">
        <div className="container text-center">
          <h2 className="section-title">{shapes.title}</h2>
          <p className="section-subtitle">{shapes.subtitle}</p>
          
          <div className="grid-3">
            {shapes.items.map(item => (
              <div className="card text-center" key={item.title}>
                <div className="card-img-wrapper">
                  <img src={item.img} alt={item.title} className="card-img" />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
                <Link to="/products" className="card-link">View All Products »</Link>
              </div>
            ))}
          </div>

          <div className="cta-banner mt-40">
            <div className="cta-banner-text">
              <span className="icon">🔍</span>
              <strong>Can't Find Your Required Filter?</strong> Send your drawing or filtration requirements for custom support.
            </div>
            <a href="/request-a-quote" className="btn-red">Request Custom Filter Quote</a>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="section-features py-80">
        <div className="container text-center">
          <h2 className="section-title">{features.title}</h2>
          <p className="section-subtitle">{features.subtitle}</p>
          
          <div className="grid-4">
            {features.items.map(item => (
              <div className="feature-card text-center" key={item.title}>
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 className="feature-title">{item.title}</h3>
                <div className="feature-divider"></div>
                <p className="feature-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section-materials py-80 bg-light">
        <div className="container text-center">
          <h2 className="section-title">{materials.title}</h2>
          <p className="section-subtitle">{materials.subtitle}</p>
          
          <div className="materials-grid">
            {materials.images.map((img, idx) => (
              <div className={`mat-box mat-${idx+1}`} key={idx}><img src={img} alt={`Material ${idx+1}`} /></div>
            ))}
            <div className="mat-box mat-text-box">
              <h3>{materials.boxTitle}</h3>
              <p>{materials.boxDesc}</p>
              <Link to="/products" className="btn-white">Material Details</Link>
            </div>
          </div>

          <div className="cta-banner mt-40">
            <div className="cta-banner-text">
              <span className="icon">⚙️</span>
              <strong>Not sure which material fits your application?</strong> Send your working temperature, fluid type, micron rating, and drawing.
            </div>
            <a href="/request-a-quote" className="btn-red">Request Material Selection</a>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-applications py-80">
        <div className="container text-center">
          <h2 className="section-title">{applications.title}</h2>
          <p className="section-subtitle">{applications.subtitle}</p>
          
          <div className="grid-3">
            {applications.items.map(item => (
              <div className="card text-center" key={item.title}>
                <img src={item.img} alt={item.title} className="card-img" />
                <h3 className="card-title mt-20">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="cta-banner mt-40">
            <div className="cta-banner-text">
              <span className="icon">🏭</span>
              <strong>Need Filtration Support for Your Industry?</strong> Send your application details and working conditions for engineering support.
            </div>
            <a href="/request-a-quote" className="btn-red">Request Industry Solution</a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-video py-80 bg-light">
        <div className="container text-center">
          <h2 className="section-title">{video.title}</h2>
          <p className="section-subtitle">{video.subtitle}</p>
          
          <div className="video-placeholder">
             <img src={video.bgImg} alt="Video Placeholder" className="video-img" />
             <div className="play-button">▶</div>
             <div className="video-overlay-text">
               <h3>{video.overlayTitle}</h3>
               <h2>{video.overlaySubtitle}</h2>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-faq py-80">
        <div className="container text-center">
          <h2 className="section-title">{faqs.title}</h2>
          <p className="section-subtitle">{faqs.subtitle}</p>
          
          <div className="grid-2 text-left">
            {faqs.items.map((faq, i) => (
              <div className="faq-card" key={i}>
                <h3 className="faq-q">{faq.q}</h3>
                <p className="faq-a">{faq.a}</p>
                <Link to="/products" className="faq-link">Read More »</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-partners py-80 bg-light">
        <div className="container text-center">
          <h2 className="section-title">{partners.title}</h2>
          <p className="section-subtitle">{partners.subtitle}</p>
          
          <div className="testimonials-grid mt-40">
            {partners.testimonials.map((test, idx) => (
              <div className="testimonial-card text-left" key={idx}>
                <p className="test-text">{test.text}</p>
                <div className="stars">★★★★★</div>
                <div className="test-author">
                  <img src={test.img} alt="Author" />
                  <div>
                    <strong>{test.author}</strong>
                    <span>{test.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="logos-grid mt-40">
            {partners.logos.map((logo, i) => (
              <div className="logo-box" key={i}>
                <img src={logo} alt={`Partner ${i}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />

    </div>
  );
}

export default Home;
