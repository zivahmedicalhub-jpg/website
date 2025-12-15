import { Card, CardContent } from '@/components/ui/card';
import { Shield, Heart, Users, Award } from 'lucide-react';

export default function About() {
    const stats = [
        {
            icon: Shield,
            value: '100%',
            label: 'Verified Products',
            color: 'text-emerald-600',
            bgColor: 'bg-emerald-50',
        },
        {
            icon: Users,
            value: '50K+',
            label: 'Happy Customers',
            color: 'text-teal-600',
            bgColor: 'bg-teal-50',
        },
        {
            icon: Award,
            value: '500+',
            label: 'Trusted Brands',
            color: 'text-cyan-600',
            bgColor: 'bg-cyan-50',
        },
        {
            icon: Heart,
            value: '24/7',
            label: 'Customer Care',
            color: 'text-emerald-600',
            bgColor: 'bg-emerald-50',
        },
    ];

    return (
        <section id="about" className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl lg:max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        About Zivah
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Zivah is your trusted partner in healthcare, committed to providing access to quality medical products and ethical pharmaceutical solutions. We believe everyone deserves the best in healthcare.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <Card
                            key={index}
                            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group"
                        >
                            <CardContent className="p-8 text-center space-y-4">
                                <div
                                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.bgColor} ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <stat.icon className="h-8 w-8" />
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-gray-900 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-medium text-gray-600">
                                        {stat.label}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-20 relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                        src="https://images.pexels.com/photos/8852961/pexels-photo-8852961.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Healthcare Professional"
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent flex items-end">
                        <div className="p-8 lg:p-12 text-white">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                                Professional Healthcare Excellence
                            </h3>
                            <p className="text-lg text-gray-200 max-w-2xl">
                                Working with certified healthcare professionals to ensure quality and safety in every product we offer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
