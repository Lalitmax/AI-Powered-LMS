import Image from "next/image";
import { Header } from "../components/Header";
import { FooterPage } from "../components/FooterPage";
import { Button } from "flowbite-react";
import MainPage from "@/components/MainPage";
// import '@/css/style.css'

export default function Home() {
  return (
    <>
      <Header></Header>
      <MainPage></MainPage>
      <FooterPage></FooterPage>
    </>
  );
}
