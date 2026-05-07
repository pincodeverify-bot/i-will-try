import { useState, useEffect } from "react";
import { useNavItems } from "../hooks/useNavItems";
import { useSiteData } from "../hooks/useSiteData";
import { Link } from "react-router-dom";
import "./AdminPanel.css";

function VisualEditor({ siteData, setSiteData }) {
  const [activeSection, setActiveSection] = useState('home');
  const [activeProductTab, setActiveProductTab] = useState('categories');

  const updateField = (section, field, value) => {
    setSiteData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const updateNestedField = (section, nested, field, value) => {
    setSiteData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [nested]: {
          ...prev[section][nested],
          [field]: value
        }
      }
    }));
  };

  const updateArray = (section, arrayField, index, value, subField = null) => {
    setSiteData(prev => {
      const newArray = [...prev[section][arrayField]];
      if (subField) {
        newArray[index] = { ...newArray[index], [subField]: value };
      } else {
        newArray[index] = value;
      }
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [arrayField]: newArray
        }
      };
    });
  };

  const addItemToArray = (section, arrayField, defaultValue) => {
    setSiteData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [arrayField]: [...prev[section][arrayField], defaultValue]
      }
    }));
  };

  const removeItemFromArray = (section, arrayField, index) => {
    setSiteData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [arrayField]: prev[section][arrayField].filter((_, i) => i !== index)
      }
    }));
  };

  const renderHomeEditor = () => (
    <div className="visual-editor-section">
      <h3>Home Page Hero</h3>
      <div className="form-group">
        <label>Hero Title</label>
        <input 
          type="text" 
          value={siteData.hero.title} 
          onChange={(e) => updateField('hero', 'title', e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Hero Subtitle</label>
        <textarea 
          value={siteData.hero.subtitle} 
          onChange={(e) => updateField('hero', 'subtitle', e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Hero Background Image URL</label>
        <input 
          type="text" 
          value={siteData.hero.bgImage} 
          onChange={(e) => updateField('hero', 'bgImage', e.target.value)} 
        />
      </div>

      <h3>Product Shapes Section</h3>
      <div className="form-group">
        <label>Section Title</label>
        <input type="text" value={siteData.shapes.title} onChange={(e) => updateField('shapes', 'title', e.target.value)} />
      </div>
      <div className="form-group">
        <label>Section Subtitle</label>
        <textarea value={siteData.shapes.subtitle} onChange={(e) => updateField('shapes', 'subtitle', e.target.value)} />
      </div>
      {siteData.shapes.items.map((item, i) => (
        <div key={i} className="admin-sub-card">
          <div className="form-group">
            <label>Shape {i + 1} Title</label>
            <input type="text" value={item.title} onChange={(e) => updateArray('shapes', 'items', i, e.target.value, 'title')} />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input type="text" value={item.img} onChange={(e) => updateArray('shapes', 'items', i, e.target.value, 'img')} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea value={item.desc} onChange={(e) => updateArray('shapes', 'items', i, e.target.value, 'desc')} />
          </div>
        </div>
      ))}

      <h3>Materials Section</h3>
      <div className="form-group">
        <label>Section Title</label>
        <input type="text" value={siteData.materials.title} onChange={(e) => updateField('materials', 'title', e.target.value)} />
      </div>
      <div className="form-group">
        <label>Info Box Title</label>
        <input type="text" value={siteData.materials.boxTitle} onChange={(e) => updateField('materials', 'boxTitle', e.target.value)} />
      </div>
      <div className="form-group">
        <label>Info Box Description</label>
        <textarea value={siteData.materials.boxDesc} onChange={(e) => updateField('materials', 'boxDesc', e.target.value)} />
      </div>

      <h3>Industry Solutions</h3>
      <div className="form-group">
        <label>Section Title</label>
        <input type="text" value={siteData.applications.title} onChange={(e) => updateField('applications', 'title', e.target.value)} />
      </div>
      {siteData.applications.items.map((item, i) => (
        <div key={i} className="admin-sub-card">
          <div className="form-group">
            <label>Solution {i + 1} Title</label>
            <input type="text" value={item.title} onChange={(e) => updateArray('applications', 'items', i, e.target.value, 'title')} />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input type="text" value={item.img} onChange={(e) => updateArray('applications', 'items', i, e.target.value, 'img')} />
          </div>
        </div>
      ))}

      <h3>FAQ Section</h3>
      {siteData.faqs.items.map((faq, i) => (
        <div key={i} className="admin-sub-card">
          <div className="form-group">
            <label>Question {i + 1}</label>
            <input type="text" value={faq.q} onChange={(e) => updateArray('faqs', 'items', i, e.target.value, 'q')} />
          </div>
          <div className="form-group">
            <label>Answer</label>
            <textarea value={faq.a} onChange={(e) => updateArray('faqs', 'items', i, e.target.value, 'a')} />
          </div>
        </div>
      ))}
    </div>
  );

  const renderAboutEditor = () => (
    <div className="visual-editor-section">
      <h3>About Page Intro</h3>
      <div className="form-group">
        <label>Main Heading</label>
        <input 
          type="text" 
          value={siteData.about.mainHeading} 
          onChange={(e) => updateField('about', 'mainHeading', e.target.value)} 
        />
      </div>
      {siteData.about.introParagraphs.map((p, i) => (
        <div key={i} className="form-group">
          <label>Paragraph {i + 1}</label>
          <div className="flex-row">
            <textarea 
              value={p} 
              onChange={(e) => updateArray('about', 'introParagraphs', i, e.target.value)} 
            />
            <button className="delete-icon-btn" onClick={() => removeItemFromArray('about', 'introParagraphs', i)}>×</button>
          </div>
        </div>
      ))}
      <button className="add-sub-btn" onClick={() => addItemToArray('about', 'introParagraphs', "New paragraph text")}>+ Add Paragraph</button>

      <h3>Test Section</h3>
      <div className="form-group">
        <label>Test Title</label>
        <input 
          type="text" 
          value={siteData.about.testSection.title} 
          onChange={(e) => updateNestedField('about', 'testSection', 'title', e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Video URL (Embed)</label>
        <input 
          type="text" 
          value={siteData.about.testSection.videoUrl} 
          onChange={(e) => updateNestedField('about', 'testSection', 'videoUrl', e.target.value)} 
        />
      </div>
    </div>
  );

  const renderContactEditor = () => (
    <div className="visual-editor-section">
      <h3>Contact Information</h3>
      <div className="form-group">
        <label>Contact Title</label>
        <input 
          type="text" 
          value={siteData.contact.title} 
          onChange={(e) => updateField('contact', 'title', e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea 
          value={siteData.contact.description} 
          onChange={(e) => updateField('contact', 'description', e.target.value)} 
        />
      </div>
      {siteData.contact.details.map((detail, i) => (
        <div key={i} className="form-group">
          <label>{detail.icon.toUpperCase()} Detail</label>
          <input 
            type="text" 
            value={detail.label} 
            onChange={(e) => updateArray('contact', 'details', i, e.target.value, 'label')} 
          />
        </div>
      ))}
    </div>
  );

  const renderProductsEditor = () => (
    <div className="visual-editor-section">
      <div className="nested-tabs">
        <button className={activeProductTab === 'categories' ? 'active' : ''} onClick={() => setActiveProductTab('categories')}>Categories</button>
        <button className={activeProductTab === 'catalog' ? 'active' : ''} onClick={() => setActiveProductTab('catalog')}>Product List</button>
        <button className={activeProductTab === 'detail' ? 'active' : ''} onClick={() => setActiveProductTab('detail')}>Product Detail Content</button>
      </div>

      <div className="nested-content">
        {activeProductTab === 'categories' && (
          <div className="categories-editor">
            <h3>Manage Categories</h3>
            {siteData.products.categories.map((cat, i) => (
              <div key={i} className="flex-row mb-10">
                <input 
                  type="text" 
                  value={cat} 
                  onChange={(e) => updateArray('products', 'categories', i, e.target.value)} 
                />
                <button className="delete-icon-btn" onClick={() => removeItemFromArray('products', 'categories', i)}>×</button>
              </div>
            ))}
            <button className="add-sub-btn" onClick={() => addItemToArray('products', 'categories', "New Category")}>+ Add Category</button>
          </div>
        )}

        {activeProductTab === 'catalog' && (
          <div className="catalog-editor">
            <h3>Manage Product Catalog</h3>
            <div className="products-admin-grid">
              {siteData.products.items.map((item, i) => (
                <div key={i} className="admin-sub-card">
                  <div className="form-group">
                    <label>Product Name</label>
                    <input 
                      type="text" 
                      value={item.title} 
                      onChange={(e) => updateArray('products', 'items', i, e.target.value, 'title')} 
                    />
                  </div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input 
                      type="text" 
                      value={item.img} 
                      onChange={(e) => updateArray('products', 'items', i, e.target.value, 'img')} 
                    />
                  </div>
                  <button className="delete-btn-sm" onClick={() => removeItemFromArray('products', 'items', i)}>Delete Product</button>
                </div>
              ))}
            </div>
            <button className="add-btn mt-20" onClick={() => addItemToArray('products', 'items', { id: Date.now(), title: "New Product", img: "" })}>+ Add New Product</button>
          </div>
        )}

        {activeProductTab === 'detail' && (
          <div className="detail-content-editor">
            <h3>Single Product Page Details</h3>
            <div className="form-group">
              <label>Default Product Title</label>
              <input 
                type="text" 
                value={siteData.productDetail.title} 
                onChange={(e) => updateField('productDetail', 'title', e.target.value)} 
              />
            </div>
            
            <h4>Technical Specifications Table</h4>
            <div className="specs-editor-grid">
              {siteData.productDetail.specs.map((spec, i) => (
                <div key={i} className="flex-row mb-10">
                  <input 
                    type="text" 
                    placeholder="Label" 
                    value={spec.label} 
                    onChange={(e) => updateArray('productDetail', 'specs', i, e.target.value, 'label')} 
                  />
                  <input 
                    type="text" 
                    placeholder="Value" 
                    value={spec.value} 
                    onChange={(e) => updateArray('productDetail', 'specs', i, e.target.value, 'value')} 
                  />
                  <button className="delete-icon-btn" onClick={() => removeItemFromArray('productDetail', 'specs', i)}>×</button>
                </div>
              ))}
            </div>
            <button className="add-sub-btn" onClick={() => addItemToArray('productDetail', 'specs', { label: "", value: "" })}>+ Add Row to Specs</button>

            <h4 className="mt-30">Dimensions Table</h4>
            {siteData.productDetail.techSection.dimensions.map((row, i) => (
              <div key={i} className="flex-row mb-10">
                <input placeholder="A" value={row.a} onChange={(e) => {
                  const newArray = [...siteData.productDetail.techSection.dimensions];
                  newArray[i] = { ...newArray[i], a: e.target.value };
                  updateNestedField('productDetail', 'techSection', 'dimensions', newArray);
                }} />
                <input placeholder="L" value={row.l} onChange={(e) => {
                  const newArray = [...siteData.productDetail.techSection.dimensions];
                  newArray[i] = { ...newArray[i], l: e.target.value };
                  updateNestedField('productDetail', 'techSection', 'dimensions', newArray);
                }} />
                <input placeholder="S" value={row.s} onChange={(e) => {
                  const newArray = [...siteData.productDetail.techSection.dimensions];
                  newArray[i] = { ...newArray[i], s: e.target.value };
                  updateNestedField('productDetail', 'techSection', 'dimensions', newArray);
                }} />
                <button className="delete-icon-btn" onClick={() => {
                  const newArray = siteData.productDetail.techSection.dimensions.filter((_, idx) => idx !== i);
                  updateNestedField('productDetail', 'techSection', 'dimensions', newArray);
                }}>×</button>
              </div>
            ))}
            <button className="add-sub-btn" onClick={() => {
              const newArray = [...siteData.productDetail.techSection.dimensions, { a: "", l: "", s: "" }];
              updateNestedField('productDetail', 'techSection', 'dimensions', newArray);
            }}>+ Add Dimension Row</button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="visual-editor-container">
      <div className="visual-editor-tabs">
        <button className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}>Home</button>
        <button className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>About</button>
        <button className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>Contact</button>
        <button className={activeSection === 'products' ? 'active' : ''} onClick={() => setActiveSection('products')}>Products</button>
      </div>

      <div className="visual-editor-content">
        {activeSection === 'home' && renderHomeEditor()}
        {activeSection === 'about' && renderAboutEditor()}
        {activeSection === 'contact' && renderContactEditor()}
        {activeSection === 'products' && renderProductsEditor()}
      </div>
      
      <div className="admin-actions mt-30">
        <button className="add-btn" onClick={() => alert('Changes are saved automatically to your local session!')}>
          Confirm Changes
        </button>
      </div>
    </div>
  );
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('nav');
  const [navItems, setNavItems] = useNavItems();
  const { siteData, setSiteData } = useSiteData();

  const handleAddItem = () => {
    const newItem = {
      id: Date.now().toString(),
      label: "New Item",
      href: "#",
      hasDropdown: false,
      dropdownItems: [],
    };
    setNavItems([...navItems, newItem]);
  };

  const handleDeleteItem = (id) => {
    setNavItems(navItems.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (id, field, value) => {
    setNavItems(
      navItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleAddDropdownItem = (id) => {
    setNavItems(
      navItems.map((item) => {
        if (item.id === id) {
          const current = item.dropdownItems || [];
          return { ...item, dropdownItems: [...current, "New Sub-item"] };
        }
        return item;
      })
    );
  };

  const handleUpdateDropdownItem = (itemId, index, value) => {
    setNavItems(
      navItems.map((item) => {
        if (item.id === itemId) {
          const newDropdown = [...(item.dropdownItems || [])];
          newDropdown[index] = value;
          return { ...item, dropdownItems: newDropdown };
        }
        return item;
      })
    );
  };

  const handleDeleteDropdownItem = (itemId, index) => {
    setNavItems(
      navItems.map((item) => {
        if (item.id === itemId) {
          const newDropdown = [...(item.dropdownItems || [])];
          newDropdown.splice(index, 1);
          return { ...item, dropdownItems: newDropdown };
        }
        return item;
      })
    );
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <Link to="/" className="back-btn">Back to Site</Link>
      </div>

      <div className="admin-tabs">
        <button 
          className={activeTab === 'nav' ? 'active' : ''}
          onClick={() => setActiveTab('nav')}
        >
          Navigation
        </button>
        <button 
          className={activeTab === 'content' ? 'active' : ''}
          onClick={() => setActiveTab('content')}
        >
          Global Content
        </button>
      </div>

      <div className="admin-content-area">
        {activeTab === 'nav' && (
          <div className="nav-manager">
            <div className="admin-actions">
              <button className="add-btn" onClick={handleAddItem}>
                + Add Main Navigation Item
              </button>
            </div>

            <div className="nav-items-list">
              {navItems.map((item, index) => (
                <div key={item.id} className="admin-card">
                  <div className="admin-card-header">
                    <h3>Item #{index + 1}: {item.label}</h3>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>Label:</label>
                      <input
                        type="text"
                        value={item.label}
                        onChange={(e) =>
                          handleUpdateItem(item.id, "label", e.target.value)
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label>Link (URL):</label>
                      <input
                        type="text"
                        value={item.href}
                        onChange={(e) =>
                          handleUpdateItem(item.id, "href", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group checkbox-group">
                    <input
                      type="checkbox"
                      id={`dropdown-${item.id}`}
                      checked={item.hasDropdown || false}
                      onChange={(e) =>
                        handleUpdateItem(item.id, "hasDropdown", e.target.checked)
                      }
                    />
                    <label htmlFor={`dropdown-${item.id}`}>Has Dropdown Menu?</label>
                  </div>

                  {item.hasDropdown && (
                    <div className="dropdown-manager">
                      <h4>Dropdown Items</h4>
                      {(item.dropdownItems || []).map((dropItem, dIndex) => (
                        <div key={dIndex} className="dropdown-edit-row">
                          <input
                            type="text"
                            value={dropItem}
                            onChange={(e) =>
                              handleUpdateDropdownItem(item.id, dIndex, e.target.value)
                            }
                          />
                          <button
                            className="delete-icon-btn"
                            onClick={() => handleDeleteDropdownItem(item.id, dIndex)}
                            title="Remove sub-item"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <button 
                        className="add-sub-btn"
                        onClick={() => handleAddDropdownItem(item.id)}
                      >
                        + Add Dropdown Item
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <VisualEditor siteData={siteData} setSiteData={setSiteData} />
        )}
      </div>
    </div>
  );
}