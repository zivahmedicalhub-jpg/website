import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Loader2, ArrowRight } from 'lucide-react';
import logo from '@/assets/Brand_Zivah_font-removebg-preview-removebg-preview.png';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function Footer() {
    const companyLinks = ['About Us', 'Careers', 'Press', 'Blog'];
    const supportLinks = ['Help Center', 'Contact Us', 'FAQs', 'Shipping Info'];
    const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'];

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);

        // TODO: Replace with your actual EmailJS keys
        const serviceId = 'service_9ly15oq';
        const templateId = 'YOUR_TEMPLATE_ID';
        const publicKey = 'YOUR_PUBLIC_KEY';

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    to_email: 'zivahmedicalhub@gmail.com',
                    from_email: email,
                    message: `New newsletter subscription from: ${email}`,
                },
                publicKey
            );

            toast({
                title: "Success!",
                description: "Thank you for subscribing to our newsletter!",
                className: "bg-emerald-50 border-emerald-200 text-emerald-800",
            });
            setEmail('');
        } catch (error) {
            console.error('Email error:', error);
            toast({
                title: "Error",
                description: "Something went wrong. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer id="contact" className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={logo}
                                alt="Zivah"
                                className="h-12 w-auto mb-6"
                            />
                            <p className="text-gray-500 leading-relaxed mb-6 max-w-sm">
                                Your trusted partner in healthcare, committed to providing quality medical solutions for a healthier tomorrow.
                            </p>
                            <a
                                href="mailto:support@zivahmedicalhub.com"
                                className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors mb-6 group"
                            >
                                <Mail className="h-5 w-5 text-emerald-600" />
                                <span className="text-sm font-medium">support@zivahmedicalhub.com</span>
                            </a>
                            <div className="flex gap-4">
                                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300">
                                        <Icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-2 lg:col-start-6">
                        <h3 className="font-bold text-gray-900 mb-6">Company</h3>
                        <ul className="space-y-4">
                            {companyLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors text-sm font-medium">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-gray-900 mb-6">Support</h3>
                        <ul className="space-y-4">
                            {supportLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors text-sm font-medium">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="font-bold text-gray-900 mb-6">Stay Updated</h3>
                        <p className="text-sm text-gray-500 mb-4">
                            Subscribe to our newsletter for health tips and updates.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-50 border-gray-100 focus:bg-white transition-colors h-11 rounded-xl"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={loading}
                            />
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gray-900 hover:bg-emerald-600 text-white rounded-xl h-11 transition-colors"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Subscribe
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>

                <Separator className="mb-8 bg-gray-100" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400 text-center md:text-left">
                        © 2025 Zivah Healthcare. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {legalLinks.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-sm text-gray-400 hover:text-emerald-600 transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
