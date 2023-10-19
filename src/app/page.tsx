"use client";
import CustomCard from "@/components/ui/CustomCard";
import CustomSlider from "@/components/ui/CustomSlider";
import Navbar from "@/components/ui/Navbar";
import dynamic from "next/dynamic";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <CustomSlider></CustomSlider>
      <CustomCard />
    </div>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
