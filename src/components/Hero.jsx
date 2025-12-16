import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Loader2, CheckCircle2, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
    checkRateLimit,
    recordSubmission,
    getRateLimitRemaining,
    sanitizeInput,
    validateEmail,
    validateName
} from '@/utils/security';

export default function Hero() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [honeypot, setHoneypot] = useState(''); // Bot detection
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Security Check 1: Honeypot (Bot Detection)
        if (honeypot) {
            console.warn('Bot detected via honeypot');
            return;
        }

        // Security Check 2: Rate Limiting
        const rateLimitKey = 'newsletter';
        if (checkRateLimit(rateLimitKey, 60)) {
            const remaining = getRateLimitRemaining(rateLimitKey, 60);
            toast({
                title: "Please Wait",
                description: `You can subscribe again in ${remaining} seconds.`,
                variant: "destructive",
            });
            return;
        }

        // Security Check 3: Input Validation
        const sanitizedName = sanitizeInput(name, 100);
        const sanitizedEmail = sanitizeInput(email, 100);

        if (!validateName(sanitizedName)) {
            toast({
                title: "Invalid Name",
                description: "Please enter a valid name.",
                variant: "destructive",
            });
            return;
        }

        if (!validateEmail(sanitizedEmail)) {
            toast({
                title: "Invalid Email",
                description: "Please enter a valid email address.",
                variant: "destructive",
            });
            return;
        }

        setLoading(true);

        // EmailJS Configuration from environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    to_email: 'zivahmedicalhub@gmail.com',
                    user_name: sanitizedName,
                    user_email: sanitizedEmail,
                    message: `New subscription request from: ${sanitizedName} (${sanitizedEmail})`,
                },
                publicKey
            );

            // Record successful submission for rate limiting
            recordSubmission(rateLimitKey);

            setSuccess(true);
            toast({
                title: "Success!",
                description: "Thank you for subscribing. We'll be in touch!",
                className: "bg-emerald-50 border-emerald-200 text-emerald-800",
            });
            setEmail('');
            setName('');
            setTimeout(() => setSuccess(false), 3000);
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
        <section id="home" className="relative overflow-hidden min-h-screen flex items-center justify-center bg-white pt-20">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-emerald-50/50 to-transparent pointer-events-none"></div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
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
                        className="max-w-xl mx-auto mt-12"
                    >
                        <form onSubmit={handleSubmit} className="relative flex items-center rounded-full border border-white/20 bg-white/80 backdrop-blur-xl shadow-2xl shadow-emerald-500/10 p-2 ring-1 ring-black/5">
                            {/* Honeypot field - hidden from users, visible to bots */}
                            <input
                                type="text"
                                name="website"
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                                style={{
                                    position: 'absolute',
                                    left: '-9999px',
                                    width: '1px',
                                    height: '1px',
                                    opacity: 0,
                                    pointerEvents: 'none'
                                }}
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                            />

                            <User className="ml-4 h-5 w-5 text-gray-400" />
                            <Input
                                type="text"
                                placeholder="Your Name"
                                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base placeholder:text-gray-400 w-1/3"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                disabled={loading || success}
                            />
                            <div className="h-8 w-px bg-gray-200 mx-2"></div>
                            <Mail className="ml-2 h-5 w-5 text-gray-400" />
                            <Input
                                type="email"
                                placeholder="Email Address"
                                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base placeholder:text-gray-400 w-1/3 flex-1"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={loading || success}
                            />
                            <Button
                                type="submit"
                                disabled={loading || success}
                                className={cn(
                                    "rounded-full h-12 px-8 min-w-[160px] transition-all duration-500",
                                    success ? "bg-green-500 hover:bg-green-600" : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
                                )}
                            >
                                <AnimatePresence mode="wait">
                                    {loading ? (
                                        <motion.div
                                            key="loading"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center"
                                        >
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </motion.div>
                                    ) : success ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center"
                                        >
                                            <CheckCircle2 className="mr-2 h-5 w-5" />
                                            Subscribed
                                        </motion.div>
                                    ) : (
                                        <motion.span
                                            key="default"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            Get Updates
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
}
