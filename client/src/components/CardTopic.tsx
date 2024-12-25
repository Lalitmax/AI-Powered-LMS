"use client";

import { Card, Progress } from "flowbite-react";




interface CardProps {
    title: string;
    imageUrl: string;
}

const CardTopic: React.FC<CardProps> = ({ title, imageUrl }) => {
    return (
        <div className=" cursor-pointer  max-w-[400px] rounded-lg border bg-neutral-100 dark:bg-[#181a1b] hover:shadow-2xl dark:border-[#353a3c] shadow-md p-1 transition-all duration-300 select-none">
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


            <div>
                {/* Title */}
                <h3 className="dark:text-[#e8e6e3] mb-2 font-rubik text-lg font-bold tracking-tight md:text-2xl">
                    {title}
                </h3>
                <div className="h-[2px] w-3/4 bg-gray-300 opacity-10"></div>
                <Progress progress={312} />


            </div>
        </div>
    );
}

export default CardTopic;
