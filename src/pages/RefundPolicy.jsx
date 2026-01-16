import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

// Reusable Content Component
export function RefundContent() {
    return (
        <article className="prose prose-gray max-w-none space-y-8">
            {/* Notice */}
            <div className="p-5 bg-blue-50 border-l-4 border-blue-600 rounded-r-sm">
                <p className="text-sm text-blue-800 leading-relaxed m-0">
                    <strong>Important Note:</strong> Due to strict pharmaceutical regulations, returns are permitted only under limited conditions. All claims must be raised within <strong>48 hours</strong> of delivery.
                </p>
            </div>

            {/* Section 1 */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Conditions for Returns</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 border-b border-gray-200 pb-2">Eligible for Return</h3>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                            <li>Incorrect product supplied</li>
                            <li>Expired or near-expiry product</li>
                            <li>Product damaged in transit</li>
                            <li>Short shipment (Partial delivery)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 border-b border-gray-200 pb-2">Non-Returnable</h3>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                            <li>Correctly supplied medicines</li>
                            <li>Temperature-sensitive drugs (Cold chain)</li>
                            <li>Opened or tampered packaging</li>
                            <li>Products without original invoice</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Refund Processing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Once a return limit is approved, refunds will be processed within <strong>7–10 business days</strong>. The amount will be refunded to the original payment method or credited to your customer ledger for future purchases, based on your preference.
                </p>
            </section>

            {/* Section 3 */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Replacements</h2>
                <p className="text-gray-600 leading-relaxed">
                    If stock is available for the damaged or incorrect item, a replacement will be issued immediately upon verification, instead of a refund.
                </p>
            </section>
        </article>
    );
}

export default function RefundPolicy() {
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
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Refund & Return Policy</h1>
                        <p className="text-gray-500 text-sm">Review our guidelines on returns, refunds, and replacements.</p>
                    </div>

                    <RefundContent />
                </div>
            </main>
        </div>
    );
}
