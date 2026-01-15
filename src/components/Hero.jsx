import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section id="home" className="relative overflow-hidden min-h-screen flex items-center justify-center bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-emerald-50/50 to-transparent pointer-events-none"></div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
                <div className="max-w-5xl lg:max-w-7xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                    >
                        <span className="glass-card inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-emerald-800 border border-emerald-100">
                            Trusted Healthcare Solutions
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-tight"
                    >
                        Your Health,{' '}
                        <span className="text-gradient">
                            Our Priority
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        Stay updated with the latest in healthcare. Subscribe to our newsletter for insights, updates, and healthy living tips.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex justify-center mt-12"
                    >
                        <Button
                            onClick={() => navigate('/register')}
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full h-12 px-8 min-w-[160px] shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 text-lg"
                        >
                            Get Started
                        </Button>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
}

