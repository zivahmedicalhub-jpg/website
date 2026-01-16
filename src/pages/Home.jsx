import { Suspense, lazy, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';

// Lazy load components that are not immediately visible
const About = lazy(() => import('../components/About'));
const Features = lazy(() => import('../components/Features'));
const MedicalHub = lazy(() => import('../components/MedicalHub'));
const MissionVision = lazy(() => import('../components/MissionVision'));
const ContactForm = lazy(() => import('../components/ContactForm'));

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                // Small delay to ensure layout is ready
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <main>
            <Hero />
            <Suspense fallback={<div className="flex justify-center items-center py-20">Loading sections...</div>}>
                <About />
                <Features />
                <MedicalHub />
                <MissionVision />
                <ContactForm />
            </Suspense>
        </main>
    );
}
