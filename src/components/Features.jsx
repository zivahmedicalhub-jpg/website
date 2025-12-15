import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Truck, Clock, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
    const features = [
        {
            title: "Quality Assurance",
            description: "All products undergo rigorous quality checks to ensure safety and efficacy.",
            icon: ShieldCheck,
            color: "text-emerald-600",
            bg: "bg-emerald-100",
            delay: 0
        },
        {
            title: "Express Delivery",
            description: "Fast and reliable delivery network ensuring your medicines reach on time.",
            icon: Truck,
            color: "text-blue-600",
            bg: "bg-blue-100",
            delay: 0.1
        },
        {
            title: "24/7 Support",
            description: "Round-the-clock customer support to address all your healthcare queries.",
            icon: Clock,
            color: "text-purple-600",
            bg: "bg-purple-100",
            delay: 0.2
        },
        {
            title: "Trusted Partners",
            description: "Collaborating with certified manufacturers and verified distributors.",
            icon: HeartHandshake,
            color: "text-orange-600",
            bg: "bg-orange-100",
            delay: 0.3
        }
    ];

    return (
        <section id="features" className="py-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-50/50 pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Why Choose <span className="text-gradient">Zivah?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We are committed to delivering excellence in healthcare through our comprehensive services and unwavering dedication to quality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: feature.delay }}
                        >
                            <Card className="glass-card h-full border-0 bg-white/50 hover:bg-white/80 transition-all duration-300 group">
                                <CardHeader>
                                    <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className={`h-7 w-7 ${feature.color}`} />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
