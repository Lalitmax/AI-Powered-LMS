import React from 'react';

interface CardProps {
    title: string;
    imageUrl: string;
    originalPrice: number;
    discountedPrice: number;
    discountPercentage: number;
}

const Card: React.FC<CardProps> = ({
    title,
    imageUrl,
    originalPrice,
    discountedPrice,
    discountPercentage,
}) => {
    return (
        <div className=" cursor-pointer  max-w-[400px] rounded-lg border bg-neutral-100 dark:bg-[#181a1b] hover:shadow-2xl dark:border-[#353a3c] shadow-md p-5 transition-all duration-300 select-none">
            {/* Image Section */}
            <div className="max-h-52 w-full overflow-hidden rounded-lg mb-4">
                <img
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="object-contain w-full h-full"
                    src={imageUrl}
                />
            </div>

            {/* Content Section */}
            <div>
                {/* Title */}
                <h3 className="dark:text-[#e8e6e3] mb-2 font-rubik text-lg font-bold tracking-tight md:text-2xl">
                    {title}
                </h3>
                <div className="h-[2px] w-3/4 bg-gray-300 opacity-10"></div>

                {/* Price Section */}
                <div className="mt-4 flex items-center gap-3 font-bold">
                    <p className="text-base text-[#6e96cf]">₹{discountedPrice}</p>
                    <p className="text-base text-gray-500 line-through">₹{originalPrice}</p>
                    <p className="rounded-md bg-green-500 text-white px-2 py-1 text-sm">
                        {discountPercentage}% off
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
