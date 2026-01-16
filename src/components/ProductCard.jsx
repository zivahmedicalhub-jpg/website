import { memo } from 'react';
// import { ShoppingCart } from 'lucide-react';
// import { Button } from '@/components/ui/button';

const ProductCard = memo(function ProductCard({ product }) {
    // Dynamically resolve image path for Vite
    const getImageUrl = (imageName) => {
        try {
            return new URL(`../assets/prorducts/${imageName}`, import.meta.url).href;
        } catch {
            return '/placeholder-image.png'; // Fallback
        }
    };

    // Calculate bogus original price for the 30% discount display
    const originalPrice = product.price / 0.7;

    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group relative">
            {/* Discount Badge */}
            <div className="absolute top-4 right-4 z-10 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                30% OFF
            </div>

            <div className="relative pt-[100%] bg-gray-50 overflow-hidden">
                <img
                    src={getImageUrl(product.image)}
                    alt={product.name}
                    loading="lazy"
                    width="400"
                    height="400"
                    className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500 ease-in-out filter drop-shadow-sm"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <span className="text-xs font-semibold tracking-wider text-emerald-600 uppercase bg-emerald-50 px-2.5 py-1 rounded-full">
                        {product.category}
                    </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow">
                    {product.description}
                </p>
                <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-50">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 font-medium mb-1">Price</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-lg font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
                            <span className="text-sm text-gray-400 line-through">₹{originalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ProductCard;
