import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

// Reusable Content Component
export function ShippingContent() {
    return (
        <article className="prose prose-gray max-w-none space-y-8">
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Shipping Policy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    This policy outlines our shipping procedures and timelines for orders placed through the Platform.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <ul className="space-y-3 list-disc pl-5 text-sm text-gray-600">
                        <li>Orders are shipped through registered domestic courier companies or speed post.</li>
                        <li>Orders are shipped within 7 days from order or payment date.</li>
                        <li>Delivery timelines are subject to courier company norms.</li>
                        <li>The Platform Owner is not liable for courier delays.</li>
                        <li>Delivery is made to the address provided at the time of purchase.</li>
                        <li>Service delivery confirmation is sent via registered email.</li>
                        <li>Shipping costs, if applicable, are non-refundable.</li>
                    </ul>
                </div>
            </section>
        </article>
    );
}

export default function ShippingPolicy() {
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
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Shipping & Delivery Policy</h1>
                        <p className="text-gray-500 text-sm">Last updated: January 2026</p>
                    </div>

                    <ShippingContent />
                </div>
            </main>
        </div>
    );
}
