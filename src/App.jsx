import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import ProductsPage from '../pages/Products';
import CartPage from '../pages/Cart';
import ErrorPage from '../pages/Error';
import LoginPage from '../pages/Login';
import Sidebar from '../components/Sidebar';
import SingleProductPage from '../pages/SingleProduct';
import { useState } from 'react';

function App() {
    const [showNav, setShowNav] = useState(true);

    return (
        <Router>
            {showNav && <Navbar />}
            <Sidebar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="products/:id" element={<SingleProductPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route
                    path="login"
                    element={<LoginPage setShowNav={setShowNav} />}
                />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            {showNav && <Footer />}
        </Router>
    );
}

export default App;
