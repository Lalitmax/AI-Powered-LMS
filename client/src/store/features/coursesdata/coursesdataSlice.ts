import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface VideoContent {
    id: number
    title: string
    url: string
    description: string
}

export interface Subject {
    id: number
    name: string
    imageUrl: string
    description: string
    videoContent: VideoContent[]
}

export interface SubjectName {
    id: number
    name: string

    subjects: Subject[]
}

export interface Course {
    id: number
    name: string
    description: string
    imageUrl: string
}

// Define the initial state
interface CourseState {
    courses: Course[]
    subjectNames: SubjectName[]
}

const initialState: CourseState = {
    courses: [
        { id: 1, name: "DSA", description: "Best free course and organized", imageUrl: "/assets/courses/dsaCheck.png" },
        { id: 2, name: "Core Subjects", description: "Best free course and organized", imageUrl: "/assets/courses/corejubjects.png" },
        { id: 3, name: "Mern Stack", description: "Best free course and organized", imageUrl: "/assets/courses/mernStack.png" },
        { id: 4, name: "Core Java", description: "Best free course and organized", imageUrl: "/assets/courses/coreJava.png" },
    ],
    subjectNames: [
        {
            name: "DSA",
            id: 1,
            subjects: [
                {
                    name: "DSA With Java",
                    id: 1,
                    imageUrl: "/assets/subjects/dsaWithJava.png",
                    description: "DSA with Java - Learn Data Structures and Algorithms with Java",
                    videoContent: [
                        { id: 1, title: "Intro", url: "https://youtu.be/yRpLlJmRo2w?si=IG6zLJyUeo6gxdz6", description: "Introduction to Java Language | Lecture 1 | Complete Placement Course" },
                        { id: 2, title: "Array", url: "https://youtu.be/LusTv0RlnSU?si=VrcZe0aIBJV7jYzJ", description: "Variables in Java | Input Output | Complete Placement Course | Lecture 2" }
                    ],
                },
                {
                    name: "DSA With Cpp",
                    id: 2,
                    imageUrl: "/assets/subjects/dsaWithCpp.png",
                    description: "DSA with C++ - Learn Data Structures and Algorithms with C++",
                    videoContent: [
                        { id: 1, title: "Recursion", url: "https://youtu.be/yVdKa8dnKiE?si=Z3Ock6Wfj8Rj1dLm", description: "Re 1. Introduction to Recursion | Recursion Tree | Stack Space | Strivers A2Z DSA Course" },
                        { id: 2, title: "Recursion", url: "https://youtu.be/un6PLygfXrA?si=R9EGWis0xG_bEiti", description: "Re 2. Problems on Recursion | Strivers A2Z DSA Course" }
                    ],
                }
            ]
        },
        {
            name: "Core Subjects",
            id: 2,
            subjects: [
                {
                    name: "Operating System",
                    id: 1,
                    imageUrl: "/assets/subjects/operatingSystem.png",
                    description: "Operating System - Learn about OS concepts",
                    videoContent: [
                        { id: 1, title: "OS", url: "https://youtu.be/_TpOHMCODXo?si=Is5eeMv5DJLHHKVu", description: "Introduction to Operating Systems Placements Course 2022" },
                        { id: 2, title: "OS", url: "https://youtu.be/a1l4MceYHaQ?si=Dk4oUcK-vANi13Yw", description: "Lecture 1: What is an Operating System ?" },
                        { id: 3, title: "OS", url: "https://youtu.be/LBqNWOqSzBA?si=Gta-AYavIhzV5s7_", description: "Lecture 2: Types of Operating Systems" },
                        { id: 4, title: "OS", url: "https://youtu.be/iAnEvdCya6M?si=D4oPzL9k-oW44RgI", description: "Lecture 3: Multi-Tasking vs Multi-Threading" },
                        { id: 5, title: "OS", url: "https://youtu.be/kHMXP_i6zew?si=Z9GZK5AhGmvUFmHA", description: "Lecture 4: Components of Operating System" },
                        { id: 6, title: "OS", url: "https://youtu.be/lo8Z61qCDqQ?si=Qm9vGRziWRmypOkp", description: "Lecture 5: System Calls in Operating System [Theory + Example + Hands-on Terminal]" },
                        { id: 7, title: "OS", url: "https://youtu.be/nAr2sLiLDWw?si=JHSmMI4zO5urOOCv", description: "Lecture 6: How Operating System Boots up?" },
                        { id: 8, title: "OS", url: "https://youtu.be/cE6WoaUnpAM?si=cjRK0FgdR6Uvx1Zo", description: "Lecture 7: Difference between 32-bit & 64-bit Operating System" }
                    ]
                },
                {
                    name: "DBMS",
                    id: 2,
                    imageUrl: "/assets/subjects/dbms.png",
                    description: "Database Management Systems - Learn DBMS concepts",
                    videoContent: [
                        { id: 1, title: "DBMS", url: "https://youtu.be/TYo_CUnIWP8?si=W7wNwtEysQSpP92h", description: "Introduction to DBMS Placements Course 2022" },
                        { id: 2, title: "DBMS", url: "https://youtu.be/TYo_CUnIWP8?si=W7wNwtEysQSpP92h", description: "Lecture 1: What the heck is Database Management System (DBMS)?" },
                        { id: 3, title: "DBMS", url: "https://youtu.be/mYI2nopkQJE?si=3fP3Q0ezykHEnjo9", description: "Lecture 2: DBMS Architecture || Role of DBA" },
                        { id: 4, title: "DBMS", url: "https://youtu.be/kMHJhhIx5k4?si=sDxFY0DU4NGVMWZi", description: "Lecture 3: ER Model Explained || ER Diagram Notations || DBMS for Placements" },
                        { id: 5, title: "DBMS", url: "https://youtu.be/8_dMPX6_qiY?si=crmrudW_QUo2bN9j", description: "Lecture 4: Extended ER Features || Abstraction in ER Model" },
                        { id: 6, title: "DBMS", url: "https://youtu.be/w-VfTUvxETQ?si=GT3nWHHtpfUbiRFl", description: "Lecture 5: How to think and formulate an ER Diagram || Banking System ER Model" }
                    ]
                },
                {
                    name: "Computer Networks",
                    id: 3,
                    imageUrl: "/assets/subjects/computerNetworks.png",
                    description: "Computer Networks - Learn about Networking concepts",
                    videoContent: [
                        { id: 1, title: "CN", url: "https://youtu.be/JFF2vJaN0Cw?si=vx6mY9lrALufvlRL", description: "lecture-1" },
                        { id: 2, title: "CN", url: "https://youtu.be/4D55Cmj2t-A?si=vNqUndj15AxezkLk", description: "lecture-2" },
                        { id: 3, title: "CN", url: "https://youtu.be/GfaHdjApnhU?si=idtsd3xuNdPfRdrc", description: "lecture-3" },
                        { id: 4, title: "CN", url: "https://youtu.be/lg-f92uY1Lc?si=RXermi5RLmrp3IGk", description: "lecture-4" },
                        { id: 5, title: "CN", url: "https://youtu.be/uDulBxDb7GM?si=EQ3VjcUcNqIgPkvn", description: "lecture-5" }
                    ]
                }
            ]
        },
        {
            name: "MERN STACK",
            id: 3,
            subjects: [
                {
                    name: "MERN STACK",
                    id: 1,
                    imageUrl: "/assets/subjects/mernStack.png",
                    description: "Learn the MERN Stack for full-stack web development",
                    videoContent: [
                        { id: 1, title: "Introduction to MERN Stack", url: "https://youtu.be/d7W4pL0l5H0?si=eW_XOsA1zjPz7r7R", description: "Learn the basics of MERN stack in this introduction video" },
                        { id: 2, title: "Setting up MongoDB", url: "https://youtu.be/3iDL9C4d0Yw?si=NhK-xdL6X1w8dUQk", description: "Learn how to set up MongoDB for your MERN stack application" }
                    ]
                }
            ]
        }
    ]
}

// Create the slice
export const courseSlice = createSlice({
    name: 'courseData',
    initialState,
    reducers: {
        addCourse: (state, action: PayloadAction<Course>) => {
            state.courses.push(action.payload)
        },
        addSubject: (state, action: PayloadAction<{ courseId: number; subject: Subject }>) => {
            const course = state.subjectNames.find(c => c.id === action.payload.courseId)
            if (course) {
                course.subjects.push(action.payload.subject)
            }
        },
        updateCourseDescription: (state, action: PayloadAction<{ courseId: number; description: string }>) => {
            const course = state.courses.find(c => c.id === action.payload.courseId)
            if (course) {
                course.description = action.payload.description
            }
        },
    },
})

// Export actions and reducer
export const { addCourse, addSubject, updateCourseDescription } = courseSlice.actions
export default courseSlice.reducer
