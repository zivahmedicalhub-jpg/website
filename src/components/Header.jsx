import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/Brand_Zivah_font-removebg-preview-removebg-preview.png';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        setIsOpen(false);

        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: sectionId } });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const navItems = ['Home', 'About', 'Products', 'Why Us', 'Contact'];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm h-16' : 'bg-transparent h-20'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center justify-between h-full">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                            <img
                                src={logo}
                                alt="Zivah"
                                className="h-10 w-auto relative transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                onClick={(e) => scrollToSection(e, item.toLowerCase().replace(' ', '-'))}
                                className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors relative group"
                            >
                                {item}
                                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <Button
                            onClick={() => navigate('/register')}
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300"
                        >
                            Get Started
                        </Button>
                    </div>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <nav className="flex flex-col space-y-4 mt-8">
                                {navItems.map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        onClick={(e) => scrollToSection(e, item.toLowerCase().replace(' ', '-'))}
                                        className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer"
                                    >
                                        {item}
                                    </a>
                                ))}
                                <Button
                                    onClick={() => {
                                        navigate('/register');
                                        setIsOpen(false);
                                    }}
                                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full mt-4"
                                >
                                    Get Started
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}
