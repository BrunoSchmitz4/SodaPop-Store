import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#AEDFF7' }}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">Soda Pop Store</a>
          <div>
            <a className="btn btn-outline-secondary me-2" href="/">Home</a>
            <a className="btn btn-outline-secondary" href="/products">Produtos</a>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}
