import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="font-extrabold text-8xl mx-80 text-center mx-">
        The Diet Documentation for the Dieter
      </h1>
      <Link href="/Diet">Click Here</Link>
    </div>
  );
};

export default HomePage;
