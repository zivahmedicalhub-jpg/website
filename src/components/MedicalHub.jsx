import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pill, Activity, Stethoscope, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MedicalHub() {
    const categories = [
        {
            value: "medicines",
            label: "Medicines",
            icon: Pill,
            items: [
                { title: "Prescription Drugs", desc: "Wide range of prescribed medications", image: "bg-emerald-100" },
                { title: "OTC Products", desc: "Over-the-counter health essentials", image: "bg-teal-100" },
                { title: "Generic Medicines", desc: "Cost-effective quality alternatives", image: "bg-cyan-100" },
                { title: "Specialty Care", desc: "Medications for chronic conditions", image: "bg-blue-100" }
            ]
        },
        {
            value: "wellness",
            label: "Wellness",
            icon: Activity,
            items: [
                { title: "Vitamins & Supplements", desc: "Boost your daily nutrition", image: "bg-orange-100" },
                { title: "Personal Care", desc: "Hygiene and grooming products", image: "bg-amber-100" },
                { title: "Ayurveda", desc: "Traditional herbal solutions", image: "bg-yellow-100" },
                { title: "Fitness Nutrition", desc: "Proteins and workout supplements", image: "bg-lime-100" }
            ]
        },
        {
            value: "devices",
            label: "Medical Devices",
            icon: Stethoscope,
            items: [
                { title: "Health Monitors", desc: "BP monitors, glucometers & more", image: "bg-indigo-100" },
                { title: "Mobility Aids", desc: "Wheelchairs and walking supports", image: "bg-violet-100" },
                { title: "Respiratory Care", desc: "Nebulizers and oxygen concentrators", image: "bg-purple-100" },
                { title: "First Aid", desc: "Essential emergency kits", image: "bg-fuchsia-100" }
            ]
        }
    ];

    return (
        <section id="medical-hub" className="py-20 lg:py-32 bg-gray-50 relative">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl lg:max-w-4xl mx-auto text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-100">
                        <Sparkles className="h-5 w-5 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Medical Hub</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Zivah Medical Hub
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Explore our comprehensive range of healthcare solutions, carefully curated for your well-being.
                    </p>
                </motion.div>

                <Tabs defaultValue="medicines" className="max-w-5xl lg:max-w-7xl mx-auto">
                    <TabsList className="grid w-full grid-cols-3 h-auto p-1.5 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl mb-12 shadow-sm">
                        {categories.map((category) => (
                            <TabsTrigger
                                key={category.value}
                                value={category.value}
                                className="flex items-center gap-2 rounded-xl py-3 data-[state=active]:bg-emerald-600 data-[state=active]:text-white transition-all duration-300"
                            >
                                <category.icon className="h-4 w-4" />
                                <span className="hidden sm:inline font-medium">{category.label}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {categories.map((category) => (
                        <TabsContent key={category.value} value={category.value}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                                {category.items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Card className="glass-card h-full border-0 bg-white hover:bg-white/90 group cursor-pointer">
                                            <div className={`h-32 ${item.image} w-full rounded-t-xl flex items-center justify-center group-hover:opacity-90 transition-opacity`}>
                                                {/* Placeholder for actual images */}
                                                <category.icon className="h-12 w-12 text-gray-900/10" />
                                            </div>
                                            <CardHeader>
                                                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                                                    {item.title}
                                                </CardTitle>
                                                <CardDescription className="text-gray-500">
                                                    {item.desc}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardFooter>
                                                <Button variant="ghost" className="w-full justify-between group-hover:text-emerald-600 group-hover:bg-emerald-50">
                                                    View Details
                                                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
