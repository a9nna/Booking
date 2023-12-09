import "tailwindcss/tailwind.css";
import Trips from "@/app/components/Trips";
import React from "react";

const Home = (): React.ReactElement => {
  return (
    <main className="min-h-screen min-w-screen p-10">
      <Trips />
    </main>
  );
};

export default Home;
