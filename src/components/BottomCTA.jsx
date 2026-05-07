import React from 'react';
import { Link } from 'react-router-dom';

function BottomCTA() {
  return (
    <section className="section-bottom-cta">
      <div className="container text-center">
        <h2>Need Standard Sintered Filters or Custom Solutions?</h2>
        <p>Download our full catalogue or send your filtration requirements for fast engineering support.</p>
        <div className="hero-buttons mt-20">
          <Link to="/request-a-quote" className="btn-white-solid">Request a Quote 📝</Link>
          <a href="https://www.sinteredfilter.net/wp-content/uploads/2023/02/BLUE-Catalogue-2023.pdf" className="btn-transparent" target="_blank" rel="noreferrer">Download Catalogue ⬇</a>
        </div>
      </div>
    </section>
  );
}

export default BottomCTA;
