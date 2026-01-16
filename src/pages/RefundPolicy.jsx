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
                    <strong>Important Note:</strong> Due to the regulated nature of pharmaceutical and medical products, Zivah follows a strict, compliance-driven return and refund policy.
                </p>
            </div>

            {/* Section 1 */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. Eligible Returns</h2>
                <p className="text-gray-600 mb-4">
                    Returns are accepted only under the following circumstances:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>Incorrect product supplied</li>
                    <li>Expired or near-expiry product supplied</li>
                    <li>Product damaged during transit</li>
                    <li>Short quantity supplied</li>
                </ul>
                <p className="text-gray-600 mt-4 text-sm">
                    All return requests must be raised within <strong>48 hours</strong> of delivery, supported by photographs and invoice details.
                </p>
            </section>

            {/* Section 2 */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. Non-Returnable Products</h2>
                <p className="text-gray-600 mb-4">
                    The following products are strictly non-returnable:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>Correctly delivered medicines</li>
                    <li>Temperature-sensitive or cold-chain products</li>
                    <li>Opened, used, or tampered items</li>
                    <li>Products without original packaging or invoice</li>
                </ul>
            </section>

            {/* Section 3 */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">3. Inspection & Approval</h2>
                <p className="text-gray-600 leading-relaxed">
                    All return requests are subject to internal quality and compliance verification. Zivah reserves the right to approve or reject any return request based on regulatory guidelines.
                </p>
            </section>

            {/* Section 4 */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">4. Refund Process</h2>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>Approved refunds will be processed within <strong>7–10 business days</strong>.</li>
                    <li>Refunds will be issued to the original payment mode or customer ledger account.</li>
                    <li>Any logistics or handling charges, if applicable, may be deducted.</li>
                </ul>
            </section>

            {/* Section 5 */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">5. Replacement Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                    Where stock is available and appropriate, Zivah may issue a replacement instead of a refund.
                </p>
            </section>

            {/* Section 6 */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">6. Regulatory Disclaimer</h2>
                <p className="text-gray-600 leading-relaxed">
                    Returns are governed by applicable pharmaceutical laws and regulations. Zivah reserves the right to modify this policy to remain compliant with statutory requirements.
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
