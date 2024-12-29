"use client";

import { Accordion } from "flowbite-react";
import VideoCard from "./VideoCard";

export function AccordianComp() {
    const videoSessions = [
        {
            title: "Bonus Live Session 2 (Time Management)",
            duration: "02:00:46",
            type: "video",
        },
        {
            title: "Live Mentorship Session 1 (part1)",
            duration: "53:41",
            type: "video",
        },
        {
            title: "Live Mentorship Session 1 (part2)",
            duration: "01:23:55",
            type: "video",
        },
        {
            title: "Live Mentorship Session 2 (Projects)",
            duration: "02:09:20",
            type: "video",
        },
    ];

    return (
        <Accordion className="rounded-none">
            
            <Accordion.Panel className="rounded-none">
                <Accordion.Title className="h-14 focus:outline-none focus:ring-0 first:rounded-none">
                    What is Flowbite?
                </Accordion.Title>
                <Accordion.Content className="p-[0px] focus:outline-none ring-0">
                    {videoSessions.map((session, index) => (
                        <VideoCard
                            key={index}
                            title={session.title}
                            duration={session.duration}
                            type={session.type}
                            isSelected={false} // Replace with dynamic selection logic if needed
                            onClick={() => console.log(`Clicked on ${session.title}`)} // Handle click logic
                        />
                    ))}
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel className="rounded-none">
                <Accordion.Title className="h-14 focus:outline-none focus:ring-0">
                    What is Flowbite?
                </Accordion.Title>
                <Accordion.Content className="p-[2px] focus:outline-none ring-0">
                    {videoSessions.map((session, index) => (
                        <VideoCard
                            key={index}
                            title={session.title}
                            duration={session.duration}
                            type={session.type}
                            isSelected={false} // Replace with dynamic selection logic if needed
                            onClick={() => console.log(`Clicked on ${session.title}`)} // Handle click logic
                        />
                    ))}
                </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel className="rounded-none">
                <Accordion.Title className="h-14 focus:outline-none focus:ring-0">
                    What is Flowbite?
                </Accordion.Title>
                <Accordion.Content className="p-[2px] focus:outline-none ring-0">
                    {videoSessions.map((session, index) => (
                        <VideoCard
                            key={index}
                            title={session.title}
                            duration={session.duration}
                            type={session.type}
                            isSelected={false} // Replace with dynamic selection logic if needed
                            onClick={() => console.log(`Clicked on ${session.title}`)} // Handle click logic
                        />
                    ))}
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
}
