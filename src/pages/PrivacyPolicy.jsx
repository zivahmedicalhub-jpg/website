import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

// Reusable Content Component
export function PrivacyContent() {
    return (
        <article className="prose prose-gray max-w-none space-y-8">
            {/* Section 1 */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. Information Collection</h2>
                <p className="text-gray-600 mb-4">
                    We collect and process the following information strictly to comply with pharmaceutical regulations and enable business operations:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>Business name and registered address</li>
                    <li>Drug license numbers and expiry details</li>
                    <li>GST registration details</li>
                    <li>Contact information (Email, Phone)</li>
                    <li>Banking and payment details</li>
                </ul>
            </section>

            {/* Section 2 */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. Usage of Information</h2>
                <p className="text-gray-600 mb-4">
                    Collected data is utilized for the following purposes:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>Verifying regulatory compliance of buyers</li>
                    <li>Processing orders, invoices, and payments</li>
                    <li>Managing logistics, shipping, and delivery</li>
                    <li>Providing customer support and service updates</li>
                    <li>Meeting statutory tax and legal obligations</li>
                </ul>
            </section>

            {/* Section 3 */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">3. Data Sharing & Protection</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    We implement enterprise-grade security measures including encrypted databases and PCI-compliant payment gateways to protect your data.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Zivah Medical Hub does not sell your data. We share data only with essential third-party service providers (Logistics Partners, Payment Gateways) and Regulatory Bodies where required by law.
                </p>
            </section>

            {/* Contact */}
            <section className="pt-8 border-t border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 mb-2">Subject Access Requests</h2>
                <p className="text-gray-600 text-sm">
                    Registered entities may request data updates or account closure, subject to mandatory record-keeping obligations under the Drugs and Cosmetics Act. Please contact <a href="mailto:privacy@zivahmedicalhub.com" className="text-blue-600 hover:underline">privacy@zivahmedicalhub.com</a> for assistance.
                </p>
            </section>
        </article>
    );
}

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Minimal Header */}
            <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                    <span className="text-sm text-gray-400">Zivah Medical Hub</span>
                </div>
            </header>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="max-w-3xl mx-auto">
                    {/* Document Title */}
                    <div className="mb-12 border-b border-gray-200 pb-8">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Privacy Policy</h1>
                        <p className="text-gray-500 text-lg">
                            Commitment to Data Security and Confidentiality
                        </p>
                    </div>

                    <PrivacyContent />
                </div>
            </main>
        </div>
    );
}
