import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Quote from "./components/Quote";
import AdminPanel from "./components/AdminPanel";
import About from "./components/About";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

function MainLayout({ children }) {
  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, width: '100%' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
        <Route path="/product/sintered-filter" element={<MainLayout><ProductDetail /></MainLayout>} />
        <Route path="/about-us" element={<MainLayout><About /></MainLayout>} />
        <Route path="/contact-us" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/request-a-quote" element={<MainLayout><Quote /></MainLayout>} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;