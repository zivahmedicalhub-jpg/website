import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, User, MessageSquare, Send, Loader2, CheckCircle2, Stethoscope, Heart, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
    checkRateLimit,
    recordSubmission,
    getRateLimitRemaining,
    sanitizeInput,
    validateEmail,
    detectSpam,
    validateName,
    validatePhone
} from '@/utils/security';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [honeypot, setHoneypot] = useState(''); // Bot detection field
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const { toast } = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Security Check 1: Honeypot (Bot Detection)
        if (honeypot) {
            // Bot detected - silently reject without showing error
            console.warn('Bot detected via honeypot');
            return;
        }

        // Security Check 2: Rate Limiting
        const rateLimitKey = 'contact-form';
        if (checkRateLimit(rateLimitKey, 60)) {
            const remaining = getRateLimitRemaining(rateLimitKey, 60);
            toast({
                title: "Please Wait",
                description: `You can submit again in ${remaining} seconds to prevent spam.`,
                variant: "destructive",
            });
            return;
        }

        // Security Check 3: Input Validation
        const sanitizedName = sanitizeInput(formData.name, 100);
        const sanitizedEmail = sanitizeInput(formData.email, 100);
        const sanitizedPhone = sanitizeInput(formData.phone, 20);
        const sanitizedMessage = sanitizeInput(formData.message, 5000);

        if (!validateName(sanitizedName)) {
            toast({
                title: "Invalid Name",
                description: "Please enter a valid name (letters only, 2-100 characters).",
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

        if (sanitizedPhone && !validatePhone(sanitizedPhone)) {
            toast({
                title: "Invalid Phone Number",
                description: "Please enter a valid phone number.",
                variant: "destructive",
            });
            return;
        }

        // Security Check 4: Spam Detection
        if (detectSpam(sanitizedMessage)) {
            toast({
                title: "Message Flagged",
                description: "Your message contains suspicious content. Please revise and try again.",
                variant: "destructive",
            });
            return;
        }

        setLoading(true);

        const formDataToSend = new FormData();

        // Use environment variable for API key
        const apiKey = import.meta.env.VITE_WEB3FORMS_KEY;

        formDataToSend.append("access_key", apiKey);
        formDataToSend.append("name", sanitizedName);
        formDataToSend.append("email", sanitizedEmail);
        formDataToSend.append("phone", sanitizedPhone);
        formDataToSend.append("subject", formData.subject);
        formDataToSend.append("message", sanitizedMessage);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                // Record successful submission for rate limiting
                recordSubmission(rateLimitKey);

                setSuccess(true);
                toast({
                    title: "Message Sent Successfully!",
                    description: "Thank you for contacting us. We'll get back to you soon.",
                    className: "bg-emerald-50 border-emerald-200 text-emerald-800",
                });

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: 'General Inquiry',
                    message: ''
                });

                setTimeout(() => setSuccess(false), 3000);
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            toast({
                title: "Error",
                description: "Something went wrong. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    const features = [
        {
            icon: Stethoscope,
            title: "Expert Care",
            description: "Professional medical guidance"
        },
        {
            icon: Heart,
            title: "Compassionate",
            description: "We care about your wellbeing"
        },
        {
            icon: Shield,
            title: "Trusted",
            description: "Your health is our priority"
        }
    ];

    return (
        <section id="contact" className="relative overflow-hidden py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

            {/* Gradient Orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-emerald-800 bg-emerald-50 border border-emerald-100 mb-4">
                            Get In Touch
                        </span>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Contact{' '}
                            <span className="text-gradient">Our Team</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Features Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:col-span-1 space-y-6"
                        >
                            <div className="glass-card rounded-2xl p-8 space-y-8">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                                            <feature.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Contact Info */}
                                <div className="pt-6 border-t border-gray-100 space-y-4">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Mail className="h-5 w-5 text-emerald-600" />
                                        <a href="mailto:support@zivahmedicalhub.com" className="text-sm hover:text-emerald-600 transition-colors">
                                            support@zivahmedicalhub.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Phone className="h-5 w-5 text-emerald-600" />
                                        <span className="text-sm">Available 24/7</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:col-span-2"
                        >
                            <div className="glass-card rounded-2xl p-8 lg:p-10">
                                <form onSubmit={handleSubmit} className="space-y-6">
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

                                    {/* Name and Email Row */}
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                                <User className="h-4 w-4 text-emerald-600" />
                                                Full Name
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                disabled={loading || success}
                                                className="h-12 bg-white/50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                                <Mail className="h-4 w-4 text-emerald-600" />
                                                Email Address
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                disabled={loading || success}
                                                className="h-12 bg-white/50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone and Subject Row */}
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                                <Phone className="h-4 w-4 text-emerald-600" />
                                                Phone Number (Optional)
                                            </label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+1 (555) 000-0000"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                disabled={loading || success}
                                                className="h-12 bg-white/50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                                <MessageSquare className="h-4 w-4 text-emerald-600" />
                                                Subject
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                disabled={loading || success}
                                                className="h-12 w-full bg-white/50 border border-gray-200 rounded-xl px-3 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Appointment">Appointment</option>
                                                <option value="Support">Support</option>
                                                <option value="Partnership">Partnership</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                            <MessageSquare className="h-4 w-4 text-emerald-600" />
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us how we can help you..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            disabled={loading || success}
                                            className="min-h-[150px] bg-white/50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        disabled={loading || success}
                                        className={cn(
                                            "w-full h-12 rounded-xl text-base font-medium transition-all duration-500",
                                            success
                                                ? "bg-green-500 hover:bg-green-600"
                                                : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
                                        )}
                                    >
                                        <AnimatePresence mode="wait">
                                            {loading ? (
                                                <motion.div
                                                    key="loading"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="flex items-center justify-center"
                                                >
                                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                    Sending Message...
                                                </motion.div>
                                            ) : success ? (
                                                <motion.div
                                                    key="success"
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="flex items-center justify-center"
                                                >
                                                    <CheckCircle2 className="mr-2 h-5 w-5" />
                                                    Message Sent!
                                                </motion.div>
                                            ) : (
                                                <motion.span
                                                    key="default"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="flex items-center justify-center"
                                                >
                                                    Send Message
                                                    <Send className="ml-2 h-5 w-5" />
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </Button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
