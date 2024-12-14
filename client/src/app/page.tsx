import Image from "next/image";
import { Header } from "./components/Header";
import { FooterPage } from "./components/FooterPage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main className="flex-grow bg-gray-50 px-4 py-8 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            AI-Powered Lecture Doubt Assistant
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            The AI-Powered Lecture Doubt Assistant is designed to make learning more interactive
            and immediate. Instead of waiting for teachers to review doubts later, students can
            resolve their queries in real-time while watching recorded lectures.
          </p>
        </div>
      </main>
    
      <FooterPage></FooterPage>
    </div>
  );
}


// addded some code to the page.tsx file