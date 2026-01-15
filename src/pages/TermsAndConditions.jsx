import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

// Reusable Content Component
export function TermsContent() {
    return (
        <article className="prose prose-gray max-w-none space-y-8">
            <section>
                <p className="text-lg leading-relaxed text-gray-700">
                    <strong>Zivah Medical Hub Private Limited</strong> is a company incorporated under the Companies Act, 2013 and operates as a B2B pharmaceutical and medical supplies distribution platform serving licensed pharmacies, hospitals, clinics, and healthcare institutions across India.
                </p>
                <p className="mt-4 text-gray-600">
                    By accessing, registering, or transacting on the Zivah Medical Hub website or application, you agree to be legally bound by these Terms and Conditions.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. Eligibility & Regulatory Compliance</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    Use of this platform is restricted strictly to licensed healthcare entities. By registering, you confirm that you hold a valid drug license and GST registration as required by Indian law.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Authorized Entities</h3>
                    <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4 list-disc pl-5 text-sm text-gray-600">
                        <li>Pharmacies</li>
                        <li>Hospitals</li>
                        <li>Clinics</li>
                        <li>Medical Institutions</li>
                        <li>Authorized Distributors</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. Account Responsibilities</h2>
                <p className="text-gray-600 leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account credentials. Any activity that occurs under your account is your responsibility. You agree to notify us immediately of any unauthorized use of your account.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">3. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                    These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
            </section>
        </article>
    );
}

export default function TermsAndConditions() {
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
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Terms and Conditions</h1>
                        <p className="text-gray-500 text-sm">Last updated: January 2026</p>
                    </div>

                    {/* Content */}
                    <TermsContent />

                    {/* Contact Footer */}
                    <div className="pt-12 border-t border-gray-200 mt-12">
                        <p className="text-gray-600 text-sm">
                            If you have any questions regarding these terms, please contact us at <a href="mailto:legal@zivahmedicalhub.com" className="text-blue-600 hover:underline">legal@zivahmedicalhub.com</a>.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
