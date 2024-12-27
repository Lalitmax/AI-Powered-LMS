"use client"
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store/hooks';
import { useAppDispatch } from '@/store/hooks';
import CardTopic from '@/components/CardTopic';
import { Header } from '@/components/HeaderPage';
// import {  } from '@/store/features/coursesdata/coursesdataSlice';

const page = () => {
    const courseData = useAppSelector((state: RootState) => state.courseData.courses)
    const dispatch = useAppDispatch();
    const params = useParams();
    const id = params?.id || 0;

    const subjectNames = useAppSelector((state: RootState) => state.courseData.subjectNames);
    const subjects = subjectNames.find((e) => e.id == id)?.subjects || [];

    console.log(subjects)



    return (
        <>
            <Header></Header>
            <div className="flex-wrap flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-7 gap-x-6 gap-y-5  px-3">

                {subjects.map((e) => {
                    return <CardTopic key={e.id} imageUrl={e.imageUrl} title={e.name} />
                })}


            </div >
        </>);
};

export default page;
