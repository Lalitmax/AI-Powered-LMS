"use client";
import { useEffect, useRef, useState } from "react";
import { AccordianComp } from "@/components/AccordianComp";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

interface props {
    isOpen: boolean
    toggleSidebar: () => void
}

const RightSidebar = ({ isOpen, toggleSidebar }: props) => {
    const sidebarRef = useRef(null);


    return (
        <div
            ref={sidebarRef}
            className={`transition-all duration-500 bg-gray-900 text-gray-300 h-full overflow-hidden ${isOpen ? "w-[29rem]" : "w-0"
                }`}
        >

            <div className="h-full  border border-gray-600  pb-12">
                <div className="chatSection h-full  flex flex-col">
                    <div className="w-full flex   justify-start pt-2 pb-1 bg-gray-700" >
                        <RiCloseLargeFill

                            onClick={toggleSidebar}
                            className=" cursor-pointer hover:bg-gray-500 translate-all duration-75 rounded-md h-10  w-10 px-2  text-2xl text-white"
                        />


                    </div>
                    <div className="chats w-full pt-5 px-2">
                        <p>1234</p>
                    </div>

                </div>
                <div className="searchSection h-10 px-2 rounded-md">
                    <input type="text" className="w-full h-10 rounded-md px-2 text-black" placeholder="Ask Doubt" />
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
