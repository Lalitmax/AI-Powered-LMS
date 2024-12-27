"use client"
import React from 'react';
import Card from '@/components/Card';
import { Header } from '@/components/HeaderPage';
import { useRouter, usePathname } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useDynamicPathname } from '@/hooks';

const Page = () => {
    const router = useRouter();
    const { pathname, updatePathname } = useDynamicPathname();
    const courses = useAppSelector((state) => state.courseData.courses);

    const handleCardClick = (id: number) => {
        console.log(`Card clicked with ID: ${id}`);
        router.push(`/courses/subject/${id}`);
    };

    return (
        <>
            <Header />
            <div className="flex-wrap flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-7 gap-x-6 gap-y-5  px-3">

                {
                    courses.map((e) => {
                        return <Card
                            key={e.id}
                            id={e.id}
                            title={e.name}
                            imageUrl={e.imageUrl}
                            description={e.description}
                            customOnClick={handleCardClick}
                        />
                    })
                }


            </div>
        </>
    );
};

export default Page;
