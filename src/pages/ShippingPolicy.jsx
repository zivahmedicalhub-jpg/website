import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

// Reusable Content Component
export function ShippingContent() {
    return (
        <article className="prose prose-gray max-w-none space-y-8">
            {/* Introduction */}
            <section>
                <p className="text-lg leading-relaxed text-gray-700">
                    <strong>Zivah Medical Hub Private Limited</strong> is committed to ensuring the timely and secure delivery of pharmaceutical and medical supplies to our partners. This policy outlines our shipping procedures, costs, and timelines.
                </p>
            </section>

            {/* Section 1: Coverage */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. Shipping Coverage & Eligibility</h2>
                <p className="text-gray-600 mb-4">
                    We currently ship exclusively to verified healthcare establishments within India, including:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>Licensed Retail Pharmacies</li>
                    <li>private & Government Hospitals</li>
                    <li>Specialized Medical Clinics</li>
                    <li>Authorized Medical Distributors</li>
                </ul>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                    <p className="text-xs text-blue-700">
                        <strong>Note:</strong> We do not ship to residential addresses or unverified locations. Documentation (Drug License/GST) is mandatory for all shipping addresses.
                    </p>
                </div>
            </section>

            {/* Section 2: Timelines */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. Dispatch & Delivery Timelines</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <h3 className="font-semibold text-gray-900 mb-1">Standard Dispatch</h3>
                        <p className="text-sm text-gray-600">24–48 hours from order confirmation</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <h3 className="font-semibold text-gray-900 mb-1">Estimated Delivery</h3>
                        <p className="text-sm text-gray-600">2–5 business days (Metro Cities)</p>
                        <p className="text-sm text-gray-600">5–7 business days (Rest of India)</p>
                    </div>
                </div>
                <p className="text-sm text-gray-500 italic">
                    *Timelines may be affected by public holidays, extreme weather, or regulatory restrictions.
                </p>
            </section>

            {/* Section 3: Costs */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">3. Shipping Charges</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 rounded-l-lg">Order Value</th>
                                <th className="px-6 py-3 rounded-r-lg">Shipping Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <td className="px-6 py-4 font-medium">Above ₹5,000</td>
                                <td className="px-6 py-4 text-emerald-600 font-semibold">Free Delivery</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="px-6 py-4 font-medium">Below ₹5,000</td>
                                <td className="px-6 py-4">Standard rates apply (calculated at checkout)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Section 4: Tracking & Inspection */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">4. Tracking & Inspection upon Delivery</h2>
                <ul className="list-disc pl-5 space-y-3 text-sm text-gray-600">
                    <li>
                        <strong>Tracking:</strong> Once dispatched, a tracking number and courier details will be sent to your registered email/phone.
                    </li>
                    <li>
                        <strong>Open Box Inspection:</strong> We recommend inspecting the package for external damage before accepting delivery. If the seal is tampered with, please refuse the delivery and contact us immediately.
                    </li>
                    <li>
                        <strong>Discrepancies:</strong> Any missing items or damages must be reported within 24 hours of delivery via our support portal.
                    </li>
                </ul>
            </section>

            {/* Cold Chain */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">5. Cold Chain Products</h2>
                <p className="text-gray-600 mb-3 text-sm">
                    For temperature-sensitive items (e.g., vaccines, insulin):
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>These are shipped in specialized insulated packaging with coolants.</li>
                    <li>"Same-day" or "Next-day" delivery options may be mandatory to preserve efficacy.</li>
                    <li><strong>No Return Policy:</strong> Cold chain items are non-returnable once delivered, to ensure safety standards.</li>
                </ul>
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
