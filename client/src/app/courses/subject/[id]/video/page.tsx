// pages/index.tsx
"use client"
import { Header } from '@/components/HeaderPage'
import RightSidebar from '@/components/RightSidebar';
import Sidebar from '@/components/Sidebar'
import VideoPlayer from '@/components/VideoPlayer';
import React, { useEffect, useRef, useState } from 'react'

const Page = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const [rightBarIsOpen, setRightBarIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null); // Explicitly define the type
    const [isClient, setIsClient] = useState(false);

    const toggleSidebar = () => {

        setIsOpen((prev) => !prev);
        setRightBarIsOpen(false);


    }

    function handleClick() {
        setIsOpen(false);
        setRightBarIsOpen(prev => !prev);
    }

    useEffect(() => {

        const updateSidebarWidth = () => {
            if (sidebarRef.current) {
                setSidebarWidth(sidebarRef.current.offsetWidth);
            }
        };

        updateSidebarWidth();


        window.addEventListener("resize", updateSidebarWidth);

        return () => {
            window.removeEventListener("resize", updateSidebarWidth);
        };
    }, [isOpen]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <>

            <Header />
            <div className="flex pt-14 h-screen w-screen">

                <div className="flex w-full bg-[#111827]">
                    <Sidebar sidebarRef={sidebarRef} toggleSidebar={toggleSidebar} isOpen={isOpen} />

                    {/* Main Content */}
                    <VideoPlayer isOpen={isOpen} toggleSidebar={toggleSidebar} sidebarWidth={sidebarWidth} handleClick={handleClick}></VideoPlayer>

                    <RightSidebar isOpen={rightBarIsOpen} toggleSidebar={handleClick} />
                </div>
            </div>
        </>
    );
};

export default Page;
