import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MissionVision() {
    return (
        <section id="mission" className="py-20 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                                Our Mission & <span className="text-gradient">Vision</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Building a healthier future through accessible, ethical, and quality healthcare solutions. We strive to be the bridge between quality healthcare and those who need it most.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <Card className="glass-card border-l-4 border-l-emerald-500">
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-emerald-100 rounded-lg">
                                            <Target className="h-6 w-6 text-emerald-600" />
                                        </div>
                                        <CardTitle className="text-xl">Our Mission</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        To provide accessible, affordable, and high-quality healthcare products to every individual, ensuring their well-being is our top priority.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="glass-card border-l-4 border-l-teal-500">
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-teal-100 rounded-lg">
                                            <Eye className="h-6 w-6 text-teal-600" />
                                        </div>
                                        <CardTitle className="text-xl">Our Vision</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        To be the most trusted and customer-centric healthcare provider, revolutionizing the way people access medical solutions globally.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

                        <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Values</h3>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1" className="border-b-gray-100">
                                    <AccordionTrigger className="hover:text-emerald-600 hover:no-underline">
                                        <span className="flex items-center gap-3 text-left">
                                            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                            Integrity & Ethics
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 pl-8">
                                        We conduct our business with the highest standards of professional behavior and ethics.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2" className="border-b-gray-100">
                                    <AccordionTrigger className="hover:text-emerald-600 hover:no-underline">
                                        <span className="flex items-center gap-3 text-left">
                                            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                            Customer First
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 pl-8">
                                        Our customers are at the heart of everything we do. We listen, understand, and deliver.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3" className="border-b-gray-100">
                                    <AccordionTrigger className="hover:text-emerald-600 hover:no-underline">
                                        <span className="flex items-center gap-3 text-left">
                                            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                            Quality Excellence
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 pl-8">
                                        We never compromise on quality. Every product we deliver meets stringent quality standards.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4" className="border-b-0">
                                    <AccordionTrigger className="hover:text-emerald-600 hover:no-underline">
                                        <span className="flex items-center gap-3 text-left">
                                            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                            Innovation
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 pl-8">
                                        We constantly innovate to bring better healthcare solutions and improve user experience.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
