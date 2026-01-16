import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, User, Building2, Send, ArrowRight, ArrowLeft, CheckCircle2, Loader2, FileText, RefreshCw, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';
import { TermsContent } from './TermsAndConditions';
import { RefundContent } from './RefundPolicy';
import { PrivacyContent } from './PrivacyPolicy';
import { checkRateLimit, recordSubmission, getRateLimitRemaining, sanitizeInput, validateEmail } from '@/utils/security';
import logo from '@/assets/Brand_Zivah_font-removebg-preview-removebg-preview.png';

const steps = [
    { id: 1, title: "Your Details", icon: User },
    { id: 2, title: "Terms", icon: FileText },
    { id: 3, title: "Refund Policy", icon: RefreshCw },
    { id: 4, title: "Privacy Policy", icon: Lock },
];

export default function Register() {
    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: '',
        userType: '',
        email: '',
        phone: '',
        termsAccepted: false,
        refundAccepted: false,
        privacyAccepted: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNext = () => {
        if (currentStep === 1) {
            // Validate Step 1
            if (!formData.name || !formData.userType || !formData.email) {
                toast({ title: "Required Fields Missing", description: "Please fill in all required fields.", variant: "destructive" });
                return;
            }
            if (!validateEmail(formData.email)) {
                toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" });
                return;
            }
        }

        setCurrentStep(prev => Math.min(prev + 1, steps.length));
        window.scrollTo(0, 0);
    };

    const handleBack = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
        window.scrollTo(0, 0);
    };

    const handleAgreement = (field) => {
        setFormData(prev => ({ ...prev, [field]: true }));
        handleNext();
    };

    const handleSubmit = async () => {
        // Final Validation
        if (!formData.termsAccepted || !formData.refundAccepted || !formData.privacyAccepted) {
            toast({ title: "Agreement Required", description: "You must accept all policies to register.", variant: "destructive" });
            return;
        }

        // Security Checks
        const rateLimitKey = 'register-form';
        if (checkRateLimit(rateLimitKey, 60)) {
            const remaining = getRateLimitRemaining(rateLimitKey, 60);
            toast({ title: "Please Wait", description: `Try again in ${remaining}s.`, variant: "destructive" });
            return;
        }

        setLoading(true);

        // Prepare Data
        const formDataToSend = new FormData();
        formDataToSend.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY); // Or your API key
        formDataToSend.append("name", sanitizeInput(formData.name, 100));
        formDataToSend.append("email", sanitizeInput(formData.email, 100));
        formDataToSend.append("phone", sanitizeInput(formData.phone || '', 20));
        formDataToSend.append("organization_type", formData.userType);
        formDataToSend.append("subject", "New Registration Request");
        formDataToSend.append("agreed_terms", "Yes");
        formDataToSend.append("agreed_refund", "Yes");
        formDataToSend.append("agreed_privacy", "Yes");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });
            const data = await response.json();

            if (data.success) {
                recordSubmission(rateLimitKey);
                setSuccess(true);
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error(error);
            toast({ title: "Error", description: "Submission failed. Please try again.", variant: "destructive" });
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-lg w-full">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Request Sent!</h2>
                    <p className="text-gray-600 mb-8">
                        Thank you for registering. Our team will verify your details and get back to you shortly with your account credentials.
                    </p>
                    <Link to="/">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-12">
                            Return to Home
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link to="/">
                            <img src={logo} alt="Zivah" className="h-8 w-auto" />
                        </Link>
                        <span className="text-sm font-medium text-gray-500 hidden sm:inline-block border-l border-gray-300 pl-4 ml-2">
                            Partner Registration
                        </span>
                    </div>
                    <Link to="/">
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                            Cancel
                        </Button>
                    </Link>
                </div>
            </div>

            <main className="flex-grow container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
                {/* Stepper */}
                <div className="mb-12">
                    <div className="flex items-center justify-between relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-emerald-500 -z-10 transition-all duration-500" style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}></div>

                        {steps.map((step) => {
                            const isActive = currentStep >= step.id;
                            const isCurrent = currentStep === step.id;
                            return (
                                <div key={step.id} className="flex flex-col items-center gap-2 bg-gray-50 px-2">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isActive ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-gray-300 text-gray-400'}`}>
                                        <step.icon className="h-5 w-5" />
                                    </div>
                                    <span className={`text-xs font-medium ${isCurrent ? 'text-emerald-700' : 'text-gray-500'} hidden sm:block`}>
                                        {step.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Content Area */}
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden"
                >
                    {currentStep === 1 && (
                        <div className="p-8 lg:p-12">
                            <h1 className="text-2xl font-bold text-gray-900 mb-6">Organization Details</h1>
                            <div className="grid gap-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                                        <Input name="name" value={formData.name} onChange={handleChange} placeholder="Contact Person Name" className="h-12 rounded-xl" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Organization Type</label>
                                        <select name="userType" value={formData.userType} onChange={handleChange} className="h-12 w-full rounded-xl border border-gray-200 px-3 text-sm bg-background">
                                            <option value="">Select Type</option>
                                            <option value="Pharmacy">Pharmacy</option>
                                            <option value="Hospital">Hospital</option>
                                            <option value="Clinic">Clinic</option>
                                            <option value="Distributor">Distributor</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                                        <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="official@email.com" className="h-12 rounded-xl" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                        <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91" className="h-12 rounded-xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <Button onClick={handleNext} className="h-12 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">
                                    Next Step <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="p-8 lg:p-12 h-[600px] flex flex-col">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Review Terms & Conditions</h1>
                            <p className="text-gray-500 mb-6">Please read and accept our terms to proceed.</p>

                            <div className="flex-grow overflow-y-auto border border-gray-100 rounded-xl p-6 bg-gray-50 mb-6">
                                <TermsContent />
                            </div>

                            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                                <Button variant="ghost" onClick={handleBack}>Back</Button>
                                <Button onClick={() => handleAgreement('termsAccepted')} className="h-12 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">
                                    I Agree & Continue <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="p-8 lg:p-12 h-[600px] flex flex-col">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Refund Policy</h1>
                            <p className="text-gray-500 mb-6">Understand our return and refund guidelines.</p>

                            <div className="flex-grow overflow-y-auto border border-gray-100 rounded-xl p-6 bg-gray-50 mb-6">
                                <RefundContent />
                            </div>

                            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                                <Button variant="ghost" onClick={handleBack}>Back</Button>
                                <Button onClick={() => handleAgreement('refundAccepted')} className="h-12 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">
                                    I Agree & Continue <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="p-8 lg:p-12 h-[600px] flex flex-col">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
                            <p className="text-gray-500 mb-6">Review how we handle your data.</p>

                            <div className="flex-grow overflow-y-auto border border-gray-100 rounded-xl p-6 bg-gray-50 mb-6">
                                <PrivacyContent />
                            </div>

                            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                                <Button variant="ghost" onClick={handleBack}>Back</Button>
                                <Button onClick={handleSubmit} disabled={loading} className="h-12 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">
                                    {loading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                                        </>
                                    ) : (
                                        <>
                                            I Agree & Submit <CheckCircle2 className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    )}
                </motion.div>
            </main>
        </div>
    );
}
