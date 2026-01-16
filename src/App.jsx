import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Register from './pages/Register';

// Lazy load secondary pages
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

// Helper to scroll to top on route change
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
