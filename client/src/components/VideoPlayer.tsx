import { Button } from 'flowbite-react'
import React from 'react'

const VideoPlayer = ({ isOpen, toggleSidebar, sidebarWidth, handleClick }) => {
    return (
        <main className="flex w-full bg-[#111827] transition-all duration-500">
            {!isOpen &&
                <div className="h-full w-10 text-center pt-1">
                    <button
                        onClick={toggleSidebar}
                        className="text-2xl border border-gray-500 w-9 m-[2px] rounded-md mt-1 hover:bg-gray-500 text-white"
                    >
                        ☰
                    </button>
                </div>
            }

            <div
                className={`video  transition-all duration-500 w-full rounded-md mt-3 mr-[3px] ${isOpen ? "ml-[6px]" : "ml-[1px]"} flex-col gap-3 flex`}
                style={sidebarWidth !== 1 ? { height: "97%" } : { height: "91%" }}
            >
                <div className="video duration-500 h-full w-full rounded-md mr-3">
                    <iframe
                        className="h-full w-full rounded-md"
                        src="https://www.youtube.com/embed/kHMXP_i6zew?si=wXVtyztCpiwGK3Gv"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-2xl font-medium text-white">Lecture 4: Components of Operating System </h1>
                    <Button color="blue" className="mr-3" onClick={handleClick}>Ask Doubt</Button>
                </div>

                {isOpen &&

                    <div className="flex text-md gap-5 text-white items-center">
                        <div><button className=" p-2 rounded-md w-16 bg-gray-600">Like</button> <span>5</span></div>
                        <div><button className=" bg-gray-600 p-2 rounded-md w-16">Deslike</button> <span>5</span></div>
                        <div className="text-gray-400">Views <span>12</span></div>
                    </div>

                }
            </div>
        </main>
    )
}

export default VideoPlayer