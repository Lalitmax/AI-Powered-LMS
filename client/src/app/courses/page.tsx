"use client"
import React from 'react';
import Card from '@/components/Card';
import { Header } from '@/components/HeaderPage';
import { useRouter } from 'next/navigation';
const Page = () => {
    const router = useRouter();
    const handleCardClick = (id: number) => {
        console.log(`Card clicked with ID: ${id}`);
        router.push(`/courses/subject/${id}`);
    };

    return (
        <>
            <Header />
            <div className="flex-wrap flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 gap-x-14 gap-y-4">
                <Card
                    id={1}
                    title="Complete DSA Roadmap"
                    imageUrl="/assetsa/courses/dsaCheck.png"
                    description="Best Course"
                    customOnClick={handleCardClick} // Updated prop name
                />
                <Card
                    id={2}
                    title="Core Subjects"
                    imageUrl="/assetsa/courses/corejubjects.png"
                    description="Best Course"
                    customOnClick={handleCardClick} // Updated prop name
                />
                <Card
                    id={3}
                    title="MERN Stack"
                    imageUrl="/assetsa/courses/mernStack.png"
                    description="Best Course"
                    customOnClick={handleCardClick} // Updated prop name
                />
                <Card
                    id={4}
                    title="Core Java"
                    imageUrl="/assetsa/courses/coreJava.png"
                    description="Best Course"
                    customOnClick={handleCardClick} // Updated prop name
                />
            </div>
        </>
    );
};

export default Page;
