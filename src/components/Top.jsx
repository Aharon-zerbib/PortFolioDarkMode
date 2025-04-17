import React from "react";
import { useNavigate } from "react-router-dom";

export const Top = () => {
    const navigate = useNavigate();

    const click = () => { 
        navigate("/"); 
    };

    return (
      <div className="text-start w-full max-w-3xl mx-auto mt-0 md:mt-9">

        <h1 className="font-medium cursor-pointer" onClick={click}>
          Aharon Zerbib
        </h1>
        <h2 className="font-medium mt-2 text-gray-500 dark:text-gray-400 mb-9">Développeur Front-End</h2>
      </div> 
    );
};