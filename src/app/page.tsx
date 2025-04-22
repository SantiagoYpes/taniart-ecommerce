import { useEffect, useState } from "react";
import Background from "./components/Background";
import { MainSection } from "./components/MainSection";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <>
      <Background>
        <div className="min-h-screen bg-black text-white font-sans">
          <NavBar />
          <MainSection />
        </div>
      </Background>
      <Background>
        <div className="min-h-screen bg-black text-white font-sans">
          <NavBar />
          <MainSection />
        </div>
      </Background>
    </>


  );
}
