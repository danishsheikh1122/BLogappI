import NavBarCmp from "@/components/navbarcmp";
import React from "react";
import SearchBarCmp from "./_components/searchbarcmp";

const Home = () => {
  return (
    <div className="w-full h-screen relative">
      <NavBarCmp></NavBarCmp>
      <SearchBarCmp></SearchBarCmp>
    </div>
  );
};

export default Home;
