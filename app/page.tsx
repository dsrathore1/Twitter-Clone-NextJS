import React from "react";
import FollowBar from '@/Components/FollowBar'
import Sidebar from '@/Components/Sidebar'
import Header from "@/Components/Header";

export default function Home() {

  return (
    <main className="h-screen flex">
      <Sidebar />
      <div className="border-r-[1px] border-neutral-800 w-full">
        <Header label="Home" showBackArrowBtn={true} />
      </div>
      <FollowBar />
    </main>
  );
}
