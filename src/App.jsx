import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Button } from '@/components/ui/button'; // Assuming we have this, or just use standard HTML for 404
import { Link } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';

// Lazy load secondary pages
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const ShippingPolicy = lazy(() => import('./pages/ShippingPolicy'));

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <Link to="/" className="text-emerald-600 hover:text-emerald-700 font-medium">
        Return to Home
      </Link>
    </div>
  );
}

function MainLayout() {
  const location = useLocation();
  const isRegisterPage = location.pathname === '/register';

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <ScrollToTop />
      {!isRegisterPage && <Header />}
      <main className="flex-grow">
        <Suspense fallback={<div className="flex justify-center items-center h-screen text-emerald-600">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />

            {/* Legal Pages */}
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />

            {/* Aliases */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/shipping" element={<ShippingPolicy />} />

            {/* 404 Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!isRegisterPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
