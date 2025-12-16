import { Suspense, lazy } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load components that are not immediately visible
const About = lazy(() => import('./components/About'));
const Features = lazy(() => import('./components/Features'));
const MedicalHub = lazy(() => import('./components/MedicalHub'));
const MissionVision = lazy(() => import('./components/MissionVision'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <Hero />
      <Suspense fallback={<div className="flex justify-center items-center py-20">Loading sections...</div>}>
        <About />
        <Features />
        <MedicalHub />
        <MissionVision />
        <ContactForm />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
