import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

// Reusable Content Component
export function PrivacyContent() {
    return (
        <article className="prose prose-gray max-w-none space-y-8">
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    This Privacy Policy describes how the Platform and its affiliates collect, use, share, protect or otherwise process your personal data through the website https://zivahmedicalhub.com/.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                    You may browse certain sections without registering. Services are offered only within India and data is stored and processed in India.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    By using the Platform, you agree to be governed by Indian data protection laws.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Collection</h2>
                <p className="text-gray-600 leading-relaxed">
                    We collect personal data such as name, date of birth, address, phone number, email ID, identity proof, and payment details. Sensitive data like biometric information is collected only with consent.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Usage</h2>
                <p className="text-gray-600 leading-relaxed">
                    Personal data is used to provide services, process orders, enhance user experience, resolve disputes, prevent fraud, enforce terms, conduct research, and send offers and updates.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Sharing</h2>
                <p className="text-gray-600 leading-relaxed">
                    We may share personal data with group entities, affiliates, sellers, business partners, logistics partners, payment providers, and law enforcement agencies as required by law.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Security Precautions</h2>
                <p className="text-gray-600 leading-relaxed">
                    We adopt reasonable security practices to protect personal data. However, internet transmission is not completely secure.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Data Deletion and Retention</h2>
                <p className="text-gray-600 leading-relaxed">
                    Users may delete their account via Platform settings. Data is retained only as long as necessary or required by law.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                    You may access, rectify, and update your personal data through the Platform.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Consent</h2>
                <p className="text-gray-600 leading-relaxed">
                    By using the Platform, you consent to data processing and communication via SMS, calls, email, or messaging apps.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Changes to Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                    The Privacy Policy may be updated periodically. Users are advised to review it regularly.
                </p>
            </section>

            <section className="pt-8 border-t border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Grievance Officer</h2>
                <p className="text-gray-600 leading-relaxed">
                    Details to be provided by the Platform including name, designation, address, and contact information.
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
