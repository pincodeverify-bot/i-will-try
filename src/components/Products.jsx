import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import BottomCTA from './BottomCTA';
import './Products.css';

function Products() {
  const { siteData } = useSiteData();
  const { products } = siteData;

  return (
    <div className="products-page">
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumbs">
            <span>Home</span> » <span>Product</span> » <span>{products.title}</span>
          </div>
        </div>
      </div>

      <div className="container products-container">
        <div className="products-layout">
          {/* Sidebar */}
          <aside className="products-sidebar">
            <h2 className="sidebar-title">Product Categories</h2>
            <ul className="category-list">
              {products.categories.map((cat, index) => (
                <li key={index} className={cat === products.title ? "active" : ""}>
                  <Link to="#">{cat}</Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <main className="products-main">
            <h1 className="category-heading">{products.title}</h1>
            
            <div className="products-grid">
              {products.items.map(product => (
                <div key={product.id} className="product-card">
                  <Link to="/product/sintered-filter" className="product-link-wrapper">
                    <div className="product-img-wrapper">
                      <img src={product.img} alt={product.title} />
                    </div>
                    <h3 className="product-title">{product.title}</h3>
                  </Link>
                  <button className="add-to-quote-btn">Add to Quote</button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
              <span className="page-num active">1</span>
              <span className="page-num">2</span>
              <span className="page-num">3</span>
              <span className="page-num">4</span>
              <span className="page-num">5</span>
              <span className="page-num">6</span>
              <span className="page-next">→</span>
            </div>
          </main>
        </div>
      </div>

      <BottomCTA />
    </div>
  );
}

export default Products;
