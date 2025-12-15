import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import MedicalHub from './components/MedicalHub';
import MissionVision from './components/MissionVision';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <Hero />
      <About />
      <Features />
      <MedicalHub />
      <MissionVision />
      <Footer />
    </div>
  );
}

export default App;
