import React from "react";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();

  const clickOpen = () => {
    navigate("/my-experience");
  };

  return (
    <section className="mt-24 w-full max-w-3xl mx-auto  ">
      <h2 className="text-lg font-medium text-black dark:text-white ">
        Expérience{" "}
      </h2>
      <div className="mt-4 space-y-4 cursor-pointer" onClick={clickOpen}>
        <div className="p-4 flex justify-between rounded-2xl transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 border border-gray-300 border-opacity-30">
          <span>
            Etude
            <br /> OpenClassRoom
          </span>
          <span>2024 - 2025</span>
        </div>
      </div>
      <div
        className="mt-4 space-y-4 cursor-pointer"
        onClick={() => navigate("/autodidact")}
      >
        <div className="p-4 flex justify-between rounded-2xl transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 border border-gray-300 border-opacity-30">
          <span>
            Autodidacte
            <br />
          </span>
          <span>2025</span>
        </div>
      </div>
      {/* <div className="mt-4 space-y-4 cursor-pointer" onClick={clickUnreal}>
        <div className="p-4 flex justify-between rounded-2xl transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 border border-gray-300 border-opacity-30">
          <span>
            Hobby
            <br /> Unreal Engine
          </span>
          <span>2024 - 2025</span>
        </div>
      </div>
      */}
      <div
        className="mt-4 space-y-4 cursor-pointer"
        onClick={() => navigate("/client-zen-experience")}
      >
        <div className="p-4 flex justify-between rounded-2xl transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 border border-gray-300 border-opacity-30">
          <span>
            ClientZen
            <br /> Un Crm pour les Microentreprises
          </span>
          <span>2025</span>
        </div>
      </div>
    </section>
  );
};
export default Experience;
