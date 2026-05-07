import React, { useState } from 'react';
import { useSiteData } from '../hooks/useSiteData';
import BottomCTA from './BottomCTA';
import './ProductDetail.css';

function ProductDetail() {
  const { siteData } = useSiteData();
  const { productDetail } = siteData;
  const [mainImg, setMainImg] = useState(productDetail.images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-detail-page">
      <div className="container product-main-wrapper">
        <div className="product-top-section">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="main-image-container">
              <img src={mainImg} alt={productDetail.title} className="main-product-img" />
              <div className="zoom-icon">🔍</div>
            </div>
            <div className="thumbnail-grid">
              {productDetail.images.map((thumb, i) => (
                <div 
                  key={i} 
                  className={`thumb-item ${mainImg === thumb ? 'active' : ''}`}
                  onClick={() => setMainImg(thumb)}
                >
                  <img src={thumb} alt={`Thumbnail ${i+1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info-section">
            <h1 className="product-detail-title">{productDetail.title}</h1>
            
            <table className="specs-table">
              <tbody>
                {productDetail.specs.map((spec, i) => (
                  <tr key={i}>
                    <td className="spec-label">{spec.label}</td>
                    <td className="spec-value">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="add-to-quote-action">
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                className="qty-input"
              />
              <button className="add-btn">ADD TO QUOTE</button>
            </div>
          </div>
        </div>

        <div className="detail-divider">
          <div className="divider-line"></div>
          <div className="divider-icon">⚙️</div>
          <div className="divider-line"></div>
        </div>

        {/* More Details Section */}
        <div className="more-details-section">
          <h2 className="detail-section-title">{productDetail.techSection.title}</h2>
          <div className="technical-content">
            <div className="tech-drawing">
              <img src={productDetail.techSection.drawingImg} alt="Technical Drawing" />
            </div>
            <div className="dimensions-table-wrapper">
              <table className="dimensions-table">
                <thead>
                  <tr>
                    <th>A</th>
                    <th>L</th>
                    <th>S</th>
                  </tr>
                </thead>
                <tbody>
                  {productDetail.techSection.dimensions.map((row, i) => (
                    <tr key={i}>
                      <td>{row.a}</td>
                      <td>{row.l}</td>
                      <td>{row.s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="related-products-section">
          <h2 className="detail-section-title">Related Products</h2>
          <div className="related-grid">
            {productDetail.relatedProducts.map((prod, i) => (
              <div className="related-card" key={i}>
                <div className="related-img-wrapper">
                  <img src={prod.img} alt={prod.title} />
                </div>
                <h3>{prod.title}</h3>
                <button className="related-add-btn">Add to Quote</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomCTA />
    </div>
  );
}

export default ProductDetail;
