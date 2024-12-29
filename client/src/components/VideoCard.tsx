import { useState } from "react";
import Image from "next/image";
import { MdVideocam } from "react-icons/md";

// VideoCard Component
const VideoCard = ({ title }: { title: string }) => {
    return <a className="   border-gray-600 cursor-pointer videoCard hover:bg-[#2563eb] transition-all duration-75 h-14 w-full  px-3 flex items-center gap-3">
        <MdVideocam />

        <p>{title}</p>
      
    </a>
};
export default VideoCard;
