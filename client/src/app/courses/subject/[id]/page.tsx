"use client"
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store/hooks';
import { useAppDispatch } from '@/store/hooks';
import { increment, decrement } from '@/store/features/coursesdata/coursesdataSlice';

const page = () => {
    const courseData = useAppSelector((state: RootState) => state.courseData.value)
    const dispatch = useAppDispatch();
    const params = useParams();  
    const id = params?.id || 0;  


    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Course Counter
            </h1>
            <div className="flex items-center gap-4">
                <button
                    onClick={handleIncrement}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                    Decrement
                </button>
                <span className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    {courseData}
                </span>
                <button
                    onClick={handleDecrement}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                    Increment
                </button>
            </div>
        </div>
    );
};

export default page;
