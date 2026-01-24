import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

// Reusable Content Component
export function RefundContent() {
    return (
        <article className="prose prose-gray max-w-none space-y-8">
            {/* Refund and Cancellation Policy */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Refund and Cancellation Policy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    This policy outlines how cancellations and refunds can be requested for products or services purchased through the Platform.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <ul className="space-y-3 list-disc pl-5 text-sm text-gray-600">
                        <li>Cancellation requests will be considered only if made within 7 days of placing the order.</li>
                        <li>Cancellation may not be entertained if the order has already been processed or shipped.</li>
                        <li>Perishable items such as flowers and eatables are not eligible for cancellation.</li>
                        <li>Refund or replacement is allowed if the product delivered is of poor quality.</li>
                        <li>Damaged or defective items must be reported within 7 days of receipt.</li>
                        <li>Products not matching description must be reported within 7 days.</li>
                        <li>Warranty-related complaints must be addressed directly to manufacturers.</li>
                        <li>Approved refunds will be processed within 7 days.</li>
                    </ul>
                </div>
            </section>

            {/* Return Policy */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Return Policy</h2>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <ul className="space-y-3 list-disc pl-5 text-sm text-gray-600">
                        <li>Refund or exchange is available within 7 days from the date of purchase.</li>
                        <li>Items must be unused, in original condition, and in original packaging.</li>
                        <li>Items purchased during sale may not be eligible for return or exchange.</li>
                        <li>Certain categories of products are exempt from return or refund and will be disclosed at purchase.</li>
                        <li>Returned items are inspected before approval.</li>
                        <li>Once approved, return or exchange will be processed as per policy.</li>
                    </ul>
                </div>
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
