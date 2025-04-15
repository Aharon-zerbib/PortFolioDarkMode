import React from "react";
import { Top } from "../components/Top";
import Connect from "../components/Connect";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center p-10 font-sans">
      <Top />
      <div className="text-start w-full max-w-3xl mx-auto">
        <h1 className="font-medium">404 - Page Not Found</h1>
      </div>
      <Connect />
    </div>
  );
};

export default NotFound;