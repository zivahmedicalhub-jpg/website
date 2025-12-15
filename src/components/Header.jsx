import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logo from '@/assets/Brand_Zivah_font-removebg-preview-removebg-preview.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Header() {
    const navItems = ['About', 'Features', 'Medical Hub', 'Mission', 'Contact'];
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8 py-4",
                isScrolled ? "py-2" : "py-4"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={cn(
                "container mx-auto transition-all duration-300 rounded-full px-6",
                isScrolled ? "glass-panel py-2" : "bg-transparent py-2"
            )}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img
                            src={logo}
                            alt="Zivah"
                            className="h-10 lg:h-12 w-auto"
                        />
                    </div>

                    <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="text-sm lg:text-base font-medium text-gray-700 hover:text-emerald-600 transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300">
                            Get Started
                        </Button>
                    </div>

                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <nav className="flex flex-col space-y-4 mt-8">
                                {navItems.map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                                    >
                                        {item}
                                    </a>
                                ))}
                                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full mt-4">
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
